import '@logseq/libs';
import { SettingSchemaDesc, LSPluginBaseInfo } from "@logseq/libs/dist/LSPlugin.user";
import CSSmain from './main.css?inline';
import CSSrightSidebar from './rightSidebar.css?inline';
import CSSsideLinkedReferences from './side.css?inline';
import CSSNotSideLinkedReferences from './notSide.css?inline';
import { setup as l10nSetup, t } from "logseq-l10n"; //https://github.com/sethyuan/logseq-l10n
import ja from "./translations/ja.json";


/* main */
function main() {

    (async () => {
        try {
            await l10nSetup({ builtinTranslations: { ja } });
        } finally {
            /* user settings */
            logseq.useSettingsSchema(settingsTemplate);
        }
    })();

    const keyRightSidebar = "RightSidebar";
    if (logseq.settings?.booleanRightSidebar === true) {
        logseq.provideStyle({ key: keyRightSidebar, style: CSSrightSidebar });
    }

    const keySideLinkedReferences = "sideLinkedReferences";
    const keyNotSideLinkedReferences = "notSideLinkedReferences";
    if (logseq.settings?.booleanLinkedReferences === true) {
        logseq.provideStyle({ key: keySideLinkedReferences, style: CSSsideLinkedReferences });
    } else {
        logseq.provideStyle({ key: keyNotSideLinkedReferences, style: CSSNotSideLinkedReferences });
    }

    //setting image Size
    const keyImageSizeHome = "imageSizeHome";
    logseq.provideStyle({ key: keyImageSizeHome, style: CSSimageSizeHome(logseq.settings?.imageSizeHome) });
    const keyImageSizePage = "imageSizePage";
    logseq.provideStyle({ key: keyImageSizePage, style: CSSimageSizePage(logseq.settings?.imageSizePage) });

    //Fix bugs
    /* Fix "Extra space when journal queries are not active #6773" */
    /* journal queries No shadow */
    /* background conflict journal queries */

    logseq.provideStyle({ key: "main", style: CSSmain });

    logseq.onSettingsChanged((newSet: LSPluginBaseInfo['settings'], oldSet: LSPluginBaseInfo['settings']) => {
        if (newSet && oldSet && newSet !== oldSet) {
            if (oldSet.booleanLinkedReferences !== false && newSet.booleanLinkedReferences === false) {
                try {
                    removeProvideStyle(keySideLinkedReferences);
                } finally {
                    logseq.provideStyle({ key: keyNotSideLinkedReferences, style: CSSNotSideLinkedReferences });
                }
            } else if (oldSet.booleanLinkedReferences !== true && newSet.booleanLinkedReferences === true) {
                try {
                    removeProvideStyle(keyNotSideLinkedReferences);
                } finally {
                    logseq.provideStyle({ key: keySideLinkedReferences, style: CSSsideLinkedReferences });
                }
            }
            if (oldSet.booleanRightSidebar !== false && newSet.booleanRightSidebar === false) {
                removeProvideStyle(keyRightSidebar);
            } else if (oldSet.booleanRightSidebar !== true && newSet.booleanRightSidebar === true) {
                logseq.provideStyle({ key: keyRightSidebar, style: CSSrightSidebar });
            }
            if (oldSet.imageSizeHome !== newSet.imageSizeHome) {
                try {
                    removeProvideStyle(keyImageSizeHome);
                } finally {
                    logseq.provideStyle({ key: keyImageSizeHome, style: CSSimageSizeHome(newSet.imageSizeHome) });
                }
            }
            if (oldSet.imageSizePage !== newSet.imageSizePage) {
                try {
                    removeProvideStyle(keyImageSizePage);
                } finally {
                    logseq.provideStyle({ key: keyImageSizePage, style: CSSimageSizePage(newSet.imageSizePage) });
                }
            }
        }
    });
};/* end_main */

const CSSimageSizeHome = (setting: number): string => {
    //300px < number > 800px
    if (setting < 300) {
        setting = 300;
    }   //min
    if (setting > 800) {
        setting = 800;
    }   //max
    return `
body[data-page="home"] div.asset-container img {
    max-width: ${setting}px
}
`};
const CSSimageSizePage = (setting: number): string => {
    //300px < number > 1200px
    if (setting < 300) {
        setting = 300;
    }   //min
    if (setting > 1200) {
        setting = 1200;
    }   //max
    return `
body[data-page="page"] div.asset-container img {
    max-width: ${setting}px
}
`;
}

const removeProvideStyle = (className: string) => {
    const doc = parent.document.head.querySelector(`style[data-injected-style^="${className}"]`);
    if (doc) {
        doc.remove();
    }
};

function removeCSSclass(className: string): void {
    if (parent.document.body.classList?.contains(className)) { // classNameが存在するかを確認する
        parent.document.body.classList.remove(className);
    }
}

//https://logseq.github.io/plugins/types/SettingSchemaDesc.html
const settingsTemplate: SettingSchemaDesc[] = [
    {
        key: "booleanLinkedReferences",
        title: "[Journals] Linked References",
        type: "boolean",
        default: true,
        description: "Side by side",
    },
    {
        key: "booleanRightSidebar",
        title: "Original right sidebar",
        type: "boolean",
        default: true,
        description: "place side by side in the sidebar",
    },
    {
        key: "imageSizeHome",
        title: "Change large image max-size (open journals)",
        type: "number",
        default: "660",
        description: "300px < number > 800px   // default: 660",
    },
    {
        key: "imageSizePage",
        title: "Change large image max-size (open pages)",
        type: "number",
        default: "1050",
        description: "300px < number > 1200px    // default: 1050",
    },
];

logseq.ready(main).catch(console.error);
