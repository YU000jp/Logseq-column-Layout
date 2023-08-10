import '@logseq/libs';
import { LSPluginBaseInfo } from "@logseq/libs/dist/LSPlugin.user";
import CSSmain from './main.css?inline';
import CSSrightSidebar from './rightSidebar.css?inline';
import CSSside from './side.css?inline';
import CSS3NestingSide from './nestingSide.css?inline';
import CSSNonSide from './notSide.css?inline';
//import { setup as l10nSetup, t } from "logseq-l10n"; //https://github.com/sethyuan/logseq-l10n
//import ja from "./translations/ja.json";
import { calculateRangeBarForSettingOnce, removeProvideStyle } from './lib';
import { versionCheck } from './lib';
import { provideStyleSide } from './lib';
import { settingsTemplate } from './settings';
import { CSSimageSize } from './settings';
let versionOver: boolean = false;


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

    const keyRightSidebar = "rightSidebar";
    if (logseq.settings?.booleanRightSidebar === true) {
        logseq.provideStyle({ key: keyRightSidebar, style: CSSrightSidebar });
    }

    const keySide = "side";
    const keyNestingSide = "nestingSide";
    const keyNonSide = "nonSide";
    if (logseq.settings?.booleanLinkedReferences === true) {
        (async () => {
            versionOver = await versionCheck(0, 9, 11); //バージョンチェック
            provideStyleSide(versionOver, keyNestingSide, CSS3NestingSide, keySide, CSSside);
        })();

    } else {
        logseq.provideStyle({ key: keyNonSide, style: CSSNonSide });
    }

    //新しい計算方法で求めて変更する
    if (logseq.settings?.imageSizeHome !== "") logseq.updateSettings({
        imageSizeMaxHome: calculateRangeBarForSettingOnce(300, 800, logseq.settings?.imageSizeHome),
        imageSizeHome: "",
    });
    if (logseq.settings?.imageSizePage !== "") logseq.updateSettings({
        imageSizeMaxPage: calculateRangeBarForSettingOnce(300, 1200, logseq.settings?.imageSizePage),
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
                    removeProvideStyle(keySide);
                } finally {
                    logseq.provideStyle({ key: keyNonSide, style: CSSNonSide });
                }
            } else if (oldSet.booleanLinkedReferences !== true && newSet.booleanLinkedReferences === true) {
                try {
                    removeProvideStyle(keyNonSide);
                } finally {
                    provideStyleSide(versionOver, keyNestingSide, CSS3NestingSide, keySide, CSSside);
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

logseq.ready(main).catch(console.error);
