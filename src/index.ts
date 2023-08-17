import "@logseq/libs";
import { LSPluginBaseInfo } from "@logseq/libs/dist/LSPlugin.user";
import CSSmain from "./main.css?inline";
import CSSrightSidebar from "./rightSidebar.css?inline";
import CSS3NestingRightSidebar from "./nestingRightSidebar.css?inline";
import CSSside from "./side.css?inline";
import CSS3NestingSide from "./nestingSide.css?inline";
import CSSNonSide from "./notSide.css?inline";
//import { setup as l10nSetup, t } from "logseq-l10n"; //https://github.com/sethyuan/logseq-l10n
//import ja from "./translations/ja.json";
import { calculateRangeBarForSettingOnce, removeProvideStyle } from "./lib";
import { versionCheck } from "./lib";
import { provideStyleByVersion } from "./lib";
import { settingsTemplate } from "./settings";
import { CSSimageSize } from "./settings";
let versionOver: boolean = false;
let versionOver0914: boolean = false;

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
  const keyNestingRightSidebar = "nestingRightSidebar";
  const keySide = "side";
  const keyNestingSide = "nestingSide";
  const keyNonSide = "nonSide";

  (async () => {
    versionOver = await versionCheck(0, 9, 11); //バージョンチェック
    versionOver0914 = await versionCheck(0, 9, 14); //バージョンチェック
    if (logseq.settings?.booleanLinkedReferences === true) {
      provideStyleByVersion(
        versionOver,
        keyNestingSide,
        CSS3NestingSide,
        keySide,
        CSSside
      );
    } else {
      logseq.provideStyle({ key: keyNonSide, style: CSSNonSide });
    }
    if (logseq.settings?.booleanRightSidebar === true)
      if (versionOver0914 === true) {
        //0.9.14以降には対応しない
        logseq.UI.showMsg(
          "Original sidebar does not work with Logseq version 0.9.14 or later. (Column Layout plugin)",
          "warning",
          { timeout: 3000 }
        );
        setTimeout(
          () => logseq.updateSettings({ booleanRightSidebar: false }),
          100
        );
      } else {
        provideStyleByVersion(
          versionOver,
          keyNestingRightSidebar,
          CSS3NestingRightSidebar,
          keyRightSidebar,
          CSSrightSidebar
        );
      }
  })();

  //新しい計算方法で求めて変更する
  if (logseq.settings?.imageSizeHome !== "")
    logseq.updateSettings({
      imageSizeMaxHome: calculateRangeBarForSettingOnce(
        300,
        800,
        logseq.settings?.imageSizeHome
      ),
      imageSizeHome: "",
    });
  if (logseq.settings?.imageSizePage !== "")
    logseq.updateSettings({
      imageSizeMaxPage: calculateRangeBarForSettingOnce(
        300,
        1200,
        logseq.settings?.imageSizePage
      ),
      imageSizePage: "",
    });

  //setting image Size
  const keyImageSize = "imageSize";
  logseq.provideStyle({
    key: keyImageSize,
    style: CSSimageSize(
      logseq.settings?.imageSizeMaxHome,
      logseq.settings?.imageSizeMaxPage
    ),
  });

  //Fix bugs
  /* Fix "Extra space when journal queries are not active #6773" */
  /* journal queries No shadow */
  /* background conflict journal queries */

  logseq.provideStyle({ key: "main", style: CSSmain });

  logseq.onSettingsChanged(
    (
      newSet: LSPluginBaseInfo["settings"],
      oldSet: LSPluginBaseInfo["settings"]
    ) => {
      if (newSet && oldSet && newSet !== oldSet) {
        if (
          oldSet.booleanLinkedReferences === true &&
          newSet.booleanLinkedReferences === false
        ) {
          try {
            removeProvideStyle(keySide);
            removeProvideStyle(keyNestingSide);
          } finally {
            logseq.provideStyle({ key: keyNonSide, style: CSSNonSide });
          }
        } else if (
          oldSet.booleanLinkedReferences === false &&
          newSet.booleanLinkedReferences === true
        ) {
          try {
            removeProvideStyle(keyNonSide);
          } finally {
            provideStyleByVersion(
              versionOver,
              keyNestingSide,
              CSS3NestingSide,
              keySide,
              CSSside
            );
          }
        }
        if (
          oldSet.booleanRightSidebar === true &&
          newSet.booleanRightSidebar === false
        ) {
          removeProvideStyle(keyRightSidebar);
          removeProvideStyle(keyNestingRightSidebar);
        } else if (
          oldSet.booleanRightSidebar === false &&
          newSet.booleanRightSidebar === true
        ) {
          if (versionOver0914 === true) {
            //0.9.14以降には対応しない
            logseq.UI.showMsg(
              "Original sidebar does not work with Logseq version 0.9.14 or later. (Column Layout plugin)",
              "warning",
              { timeout: 3000 }
            );
            setTimeout(
              () => logseq.updateSettings({ booleanRightSidebar: false }),
              100
            );
          } else {
            provideStyleByVersion(
              versionOver,
              keyNestingRightSidebar,
              CSS3NestingRightSidebar,
              keyRightSidebar,
              CSSrightSidebar
            );
          }
        }
        if (
          oldSet.imageSizeMaxHome !== newSet.imageSizeMaxHome ||
          oldSet.imageSizeMaxPage !== newSet.imageSizeMaxPage
        ) {
          try {
            removeProvideStyle(keyImageSize);
          } finally {
            logseq.provideStyle({
              key: keyImageSize,
              style: CSSimageSize(
                newSet.imageSizeMaxHome,
                newSet.imageSizeMaxPage
              ),
            });
          }
        }
      }
    }
  );
} /* end_main */

logseq.ready(main).catch(console.error);
