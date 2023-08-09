import '@logseq/libs';
import { SettingSchemaDesc, LSPluginBaseInfo } from "@logseq/libs/dist/LSPlugin.user";
import CSSmain from './main.css?inline';
import CSSrightSidebar from './rightSidebar.css?inline';
import CSSsideLinkedReferences from './side.css?inline';
import CSSNotSideLinkedReferences from './notSide.css?inline';
//import { setup as l10nSetup, t } from "logseq-l10n"; //https://github.com/sethyuan/logseq-l10n
//import ja from "./translations/ja.json";
import { calculateRangeBarForSettingUI, calculateRangeBarForSettingUIonce, removeProvideStyle } from './lib';


/* main */
function main() {

    //(async () => {
    // try {
    //     await l10nSetup({ builtinTranslations: { ja } });
    // } finally {
    /* user settings */
    logseq.useSettingsSchema(settingsTemplate);
    //     }
    // })();

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

    //新しい計算方法で求めて変更する
    if (logseq.settings?.imageSizeHome !== "") logseq.updateSettings({
        imageSizeMaxHome: calculateRangeBarForSettingUIonce(300, 800, logseq.settings?.imageSizeHome),
        imageSizeHome: "",
     });
    if (logseq.settings?.imageSizePage !== "") logseq.updateSettings({
        imageSizeMaxPage: calculateRangeBarForSettingUIonce(300, 1200, logseq.settings?.imageSizePage),
        imageSizePage: "",
    });


    //setting image Size
    const keyImageSize = "imageSize";
    logseq.provideStyle({ key: keyImageSize, style: CSSimageSize(logseq.settings?.imageSizeMaxHome, logseq.settings?.imageSizeMaxPage) });

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
            if (oldSet.imageSizeMaxHome !== newSet.imageSizeMaxHome || oldSet.imageSizeMaxPage !== newSet.imageSizeMaxPage) {
                try {
                    removeProvideStyle(keyImageSize);
                } finally {
                    logseq.provideStyle({ key: keyImageSize, style: CSSimageSize(newSet.imageSizeMaxHome, newSet.imageSizeMaxPage) });
                }
            }
        }
    });
};/* end_main */



const CSSimageSize = (home: number, page: number): string => {
    //Home: 300px < number > 800px
    //Page: 300px < number > 1200px
    return `
body[data-page="home"] div.asset-container img {
    max-width: ${calculateRangeBarForSettingUI(300, 800, home)}px
}
body[data-page="page"] div.asset-container img {
    max-width: ${calculateRangeBarForSettingUI(300, 1200, page)}px
}
`;
}

//https://logseq.github.io/plugins/types/SettingSchemaDesc.html
const settingsTemplate: SettingSchemaDesc[] = [
    {
        key: "booleanLinkedReferences",
        title: "Journals, Turn on Linked References side by side",
        type: "boolean",
        default: true,
        description: "default: `true`",
    },
    {
        key: "booleanRightSidebar",
        title: "Enable original right sidebar",
        type: "boolean",
        default: true,
        description: "default: `true`, place blocks or pages side by side in the sidebar",
    },
    {
        key: "imageSizeMaxHome",
        title: "Change large image max-size (for journals)",
        type: "number",
        default: "72",
        description: "`300` < default: `660` < `800` [px]",//比率変更不可
        inputAs: "range",
    },
    {
        key: "imageSizeMaxPage",
        title: "Change large image max-size (for non-journal pages)",
        type: "number",
        default: "83",
        description: "`300` < default: `1050` < `1200` [px]",//比率変更不可
        inputAs: "range",
    },
];

logseq.ready(main).catch(console.error);
