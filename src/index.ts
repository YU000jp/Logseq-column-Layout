import "@logseq/libs"
import { LSPluginBaseInfo } from "@logseq/libs/dist/LSPlugin.user"
import { setup as l10nSetup, t } from "logseq-l10n" //https://github.com/sethyuan/logseq-l10n
import { removeProvideStyle } from "./lib"
import CSSmain from "./main.css?inline"
import CSS3Side from "./side.css?inline"
import CSSNonSide from "./notSide.css?inline"
import { settingsTemplate } from "./settings"
import ja from "./translations/ja.json"
import CSS3RightSidebar from "./rightSidebar.css?inline"
const keyRightSidebar = "rightSidebar"
const keySide = "side"
const keyNestingSide = "nestingSide"
const keyNonSide = "nonSide"
const keySeparate = "continuous"
const CSSSeparate = `
      body[data-page="home"]:not(.is-pdf-active)>div#root>div>main div#main-content-container div#journals {

      &:first-child {
        min-height: unset;
      }
      
      & div.journal-item {
        min-height: unset;

        &>div.journal>div.flex>div.initial {
          min-height: 90vh;
        }
      }
}
`

/* main */
const main = async () => {

  await l10nSetup({ builtinTranslations: { ja } })

  /* user settings */
  logseq.useSettingsSchema(settingsTemplate())


  // if (logseq.settings!.notice2023111404 !== true) {
  //   //移行メッセージ
  //   logseq.UI.showMsg(t("'Image size limit feature' has been moved to 'Preview Image' plugin.") + "\n\n(Column Layout plugin)", "warning", { timeout: 5000 })
  //   logseq.updateSettings({ notice2023111404: true })
  // }

  if (logseq.settings!.booleanLinkedReferences === true)
    provideStyle(keyNestingSide, CSS3Side)
  else
    logseq.provideStyle({
      key: keyNonSide,
      style: CSSNonSide
    })

  if (logseq.settings!.booleanRightSidebar === true)
    provideStyle(keyRightSidebar,CSS3RightSidebar)

  if (logseq.settings!.booleanSeparate === true)
    provideStyle(keySeparate, CSSSeparate)

  //Fix bugs
  /* Fix "Extra space when journal queries are not active #6773" */
  /* journal queries No shadow */
  /* background conflict journal queries */

  logseq.provideStyle({
    key: "main",
    style: CSSmain
  })

  logseq.onSettingsChanged((newSet: LSPluginBaseInfo["settings"], oldSet: LSPluginBaseInfo["settings"]) => {
    if (oldSet.booleanLinkedReferences === true
      && newSet.booleanLinkedReferences === false)
      try {
        removeProvideStyle(keySide)
        removeProvideStyle(keyNestingSide)
      } finally {
        logseq.provideStyle({
          key: keyNonSide,
          style: CSSNonSide
        })
      }
    else
      if (oldSet.booleanLinkedReferences === false
        && newSet.booleanLinkedReferences === true)
        try {
          removeProvideStyle(keyNonSide)
        } finally {
          provideStyle(keyNestingSide, CSS3Side)
        }
    if (oldSet.booleanRightSidebar === true
      && newSet.booleanRightSidebar === false)
      removeProvideStyle(keyRightSidebar)
    else
      if (oldSet.booleanRightSidebar === false
        && newSet.booleanRightSidebar === true)
        provideStyle(keyRightSidebar, CSS3RightSidebar)
    if(oldSet.booleanSeparate === true
      && newSet.booleanSeparate === false)
      removeProvideStyle(keySeparate)
    else
      if(oldSet.booleanSeparate === false
        && newSet.booleanSeparate === true)
        provideStyle(keySeparate, CSSSeparate)
  })
} /* end_main */

logseq.ready(main).catch(console.error)


const provideStyle = (newKey: string, newStyle: string) => {
  logseq.provideStyle({
    key: newKey,
    style: newStyle
  })
}