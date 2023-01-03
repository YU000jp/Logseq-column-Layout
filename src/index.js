import '@logseq/libs';
import { logseq as PL } from "../package.json";
const pluginId = PL.id;

import { settingUI } from './setting';
import { ColumnLayoutStyle } from './layout';
import { TurnOnFunction } from './function';
import { MarkdownLink } from './markdown-link';


/* main */
async function main() {
    console.info(`#${pluginId}: MAIN`); /* -plugin-id */
    ColumnLayoutStyle();
};/* end_main */


async function after() {
    console.info(`#${pluginId}: AFTER`); /* -plugin-id */

    //lazy loading
    setTimeout(function () {
        TurnOnFunction();
        if (logseq.settings.switchMarkdownLink === "enable") {
            MarkdownLink();
        }
        settingUI();
    }, 3000);

    parent.document.body.classList.add('is-plugin-column-layout-enabled');
    logseq.beforeunload(async () => {
        parent.document.body.classList.remove('is-plugin-column-layout-enabled');
    });
    logseq.onSettingsChanged((settings, oldSettings) => {
        onSettingsChangedCallback(settings, oldSettings);
    });
    console.info(`#${pluginId}: loaded`);
}

// Setting changed
const onSettingsChangedCallback = (newSettings, oldSettings) => {
    if (oldSettings.switchLinkedReferences !== "Bottom" && newSettings.switchLinkedReferences === "Bottom") {
        parent.document.body.classList.remove('cl-side');
    } else if (oldSettings.switchLinkedReferences !== "Side" && newSettings.switchLinkedReferences === "Side") {
        parent.document.body.classList.add('cl-side');
    }
    if (oldSettings.switchRightSidebar !== "normal" && newSettings.switchRightSidebar === "normal") {
        parent.document.body.classList.remove('cl-switchRightSidebar');
    } else if (oldSettings.switchRightSidebar !== "original" && newSettings.switchRightSidebar === "original") {
        parent.document.body.classList.add('cl-switchRightSidebar');
    }
}

logseq.ready(main).then(after).catch(console.error);