import "@logseq/libs"
import { LSPluginBaseInfo } from "@logseq/libs/dist/LSPlugin.user"
import { setup as l10nSetup, t } from "logseq-l10n" //https://github.com/sethyuan/logseq-l10n
import { provideStyleByVersion, provideStyleRightSidebarEachVersion, removeProvideStyle, versionCheck } from "./lib"
import CSSmain from "./main.css?inline"
import CSS3NestingSide from "./nestingSide.css?inline"
import CSSNonSide from "./notSide.css?inline"
import { settingsTemplate } from "./settings"
import CSSside from "./side.css?inline"
import ja from "./translations/ja.json"
export let versionOver: boolean = false
export let versionOver0914: boolean = false
const keyRightSidebar = "rightSidebar"
const keyNestingRightSidebar = "nestingRightSidebar"
const keyNestingRightSidebar00914 = "nestingRightSidebar00914"
const keySide = "side"
const keyNestingSide = "nestingSide"
const keyNonSide = "nonSide"
/* main */
const main = async () => {

  await l10nSetup({ builtinTranslations: { ja } })

  /* user settings */
  logseq.useSettingsSchema(settingsTemplate())


  if (logseq.settings!.notice2023111404 !== true) {
    //移行メッセージ
    logseq.UI.showMsg(t("'Image size limit feature' has been moved to 'Preview Image' plugin.") + "\n\n(Column Layout plugin)", "warning", { timeout: 5000 })
    logseq.updateSettings({ notice2023111404: true })
  }

  versionOver = await versionCheck(0, 9, 11) //バージョンチェック
  versionOver0914 = await versionCheck(0, 9, 14) //バージョンチェック
  if (logseq.settings?.booleanLinkedReferences === true) {
    provideStyleByVersion(
      versionOver,
      keyNestingSide,
      CSS3NestingSide,
      keySide,
      CSSside
    )
  } else {
    logseq.provideStyle({ key: keyNonSide, style: CSSNonSide })
  }
  if (logseq.settings?.booleanRightSidebar === true)
    provideStyleRightSidebarEachVersion(
      keyNestingRightSidebar,
      keyNestingRightSidebar00914,
      keyRightSidebar
    )

  //Fix bugs
  /* Fix "Extra space when journal queries are not active #6773" */
  /* journal queries No shadow */
  /* background conflict journal queries */

  logseq.provideStyle({ key: "main", style: CSSmain })

  logseq.onSettingsChanged((newSet: LSPluginBaseInfo["settings"], oldSet: LSPluginBaseInfo["settings"]) => {
    if (newSet && oldSet && newSet !== oldSet) {
      if (
        oldSet.booleanLinkedReferences === true &&
        newSet.booleanLinkedReferences === false
      ) {
        try {
          removeProvideStyle(keySide)
          removeProvideStyle(keyNestingSide)
        } finally {
          logseq.provideStyle({ key: keyNonSide, style: CSSNonSide })
        }
      } else
        if (
          oldSet.booleanLinkedReferences === false &&
          newSet.booleanLinkedReferences === true
        ) {
          try {
            removeProvideStyle(keyNonSide)
          } finally {
            provideStyleByVersion(
              versionOver,
              keyNestingSide,
              CSS3NestingSide,
              keySide,
              CSSside
            )
          }
        }
      if (
        oldSet.booleanRightSidebar === true &&
        newSet.booleanRightSidebar === false
      ) {
        removeProvideStyle(keyRightSidebar)
        removeProvideStyle(keyNestingRightSidebar)
        removeProvideStyle(keyNestingRightSidebar00914)
      } else
        if (
          oldSet.booleanRightSidebar === false &&
          newSet.booleanRightSidebar === true
        ) {
          provideStyleRightSidebarEachVersion(
            keyNestingRightSidebar,
            keyNestingRightSidebar00914,
            keyRightSidebar
          )
        }
    }
  }
  )
} /* end_main */

logseq.ready(main).catch(console.error)
