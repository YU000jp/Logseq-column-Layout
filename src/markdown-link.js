import swal from 'sweetalert';
import Encoding from 'encoding-japanese';


const DEFAULT_REGEX = {
    wrappedInCommand: /(\{\{(video)\s*(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})\s*\}\})/gi,
    htmlTitleTag: /<title(\s[^>]+)*>([^<]*)<\/title>/,
    line: /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi,
    imageExtension: /\.(gif|jpe?g|tiff?|png|webp|bmp|tga|psd|ai)$/i,
};

const FORMAT_SETTINGS = {
    markdown: {
        formatBeginning: '](',
        applyFormat: (title, url) => `[${title}](${url})`,
    },
    org: {
        formatBeginning: '][',
        applyFormat: (title, url) => `[[${url}][${title}]]`,
    },
};

function decodeHTML(input) {
    if (!input) {
        return '';
    }

    const doc = new DOMParser().parseFromString(input, 'text/html');
    return doc.documentElement.textContent;
}

async function getTitle(url) {
    try {
        const response = await fetch(url);
        const responseText = await response.text();
        //https://github.com/polygonplanet/encoding.js
        //title convert UTF-8
        const matches = await Encoding.convert(responseText.match(DEFAULT_REGEX.htmlTitleTag), 'UTF8', 'AUTO');

        if (matches !== null && matches.length > 1 && matches[2] !== null) {
            return decodeHTML(matches[2].trim());
        }
    } catch (e) {
        console.error(e);
    }

    return '';
}

async function convertUrlToMarkdownLink(url, text, urlStartIndex, offset, applyFormat) {
    let title = await getTitle(url);
    if (title === '') {
        return { text, offset };
    }
    title = title.replace("\n", '');
    title = title.replace("(", '');
    title = title.replace(")", '');
    title = title.replace("[", '');
    title = title.replace("]", '');

    const startSection = text.slice(0, urlStartIndex);
    const wrappedUrl = applyFormat(title, url);
    const endSection = text.slice(urlStartIndex + url.length);

    return {
        text: `${startSection}${wrappedUrl}${endSection}`,
        offset: urlStartIndex + url.length,
    };
}

function isImage(url) {
    const imageRegex = new RegExp(DEFAULT_REGEX.imageExtension);
    return imageRegex.test(url);
}

function isAlreadyFormatted(text, url, urlIndex, formatBeginning) {
    return text.slice(urlIndex - 2, urlIndex) === formatBeginning;
}

function isWrappedInCommand(text, url) {
    const wrappedLinks = text.match(DEFAULT_REGEX.wrappedInCommand);
    if (!wrappedLinks) {
        return false;
    }

    return wrappedLinks.some(command => command.includes(url));
}

async function getFormatSettings() {
    const { preferredFormat } = await logseq.App.getUserConfigs();
    if (!preferredFormat) {
        return null;
    }

    return FORMAT_SETTINGS[preferredFormat];
}

async function parseBlockForLink(uuid) {
    if (!uuid) {
        return;
    }

    const rawBlock = await logseq.Editor.getBlock(uuid);
    if (!rawBlock) {
        return;
    }

    let text = rawBlock.content;
    const urls = text.match(DEFAULT_REGEX.line);
    if (!urls) {
        return;
    }

    const formatSettings = await getFormatSettings();
    if (!formatSettings) {
        return;
    }

    let offset = 0;
    for (const url of urls) {
        const urlIndex = text.indexOf(url, offset);

        if (isAlreadyFormatted(text, url, urlIndex, formatSettings.formatBeginning) || isImage(url) || isWrappedInCommand(text, url)) {
            continue;
        }

        const updatedTitle = await convertUrlToMarkdownLink(url, text, urlIndex, offset, formatSettings.applyFormat);
        text = updatedTitle.text;
        offset = updatedTitle.offset;
    }

    setTimeout(function () {
        //dialog
        logseq.showMainUI();
        swal({
            title: "Are you sure?",
            text: "Convert to markdown link",
            icon: "info",
            buttons: true,
        })
            .then((answer) => {
                if (answer) {//OK
                    logseq.Editor.updateBlock(uuid, text);
                } else {//Cancel
                    //user cancel in dialog
                }
            })
            .finally(() => {
                logseq.hideMainUI();
            });
        //dialog end
    }, 50);

}


export const MarkdownLink = (UserSettings) => {
    const blockSet = new Set();

    logseq.DB.onChanged(async (e) => {
        if (UserSettings.switchMarkdownLink === "enable") {
            if (e.txMeta?.outlinerOp !== 'insertBlocks') {
                blockSet.add(e.blocks[0]?.uuid);
                return;
            }
            await blockSet.forEach((uuid) => parseBlockForLink(uuid));
            blockSet.clear();
        }
    });

    /* Block slash command */
    logseq.Editor.registerSlashCommand('🌐Convert to markdown link (get webpage title)', async (e) => {
        await blockSet.forEach((uuid) => parseBlockForLink(uuid));
        blockSet.clear();
    });

    /* Block ContextMenuItem  */
    logseq.Editor.registerBlockContextMenuItem('🌐Convert to markdown link', async (e) => {
        await blockSet.forEach((uuid) => parseBlockForLink(uuid));
        blockSet.clear();
    });

};