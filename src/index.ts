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

  // versionOver = await versionCheck(0, 9, 11) //バージョンチェック
  // versionOver0914 = await versionCheck(0, 9, 14) //バージョンチェック
  if (logseq.settings?.booleanLinkedReferences === true)
    provideStyle(keyNestingSide, CSS3Side)
  else
    logseq.provideStyle({
      key: keyNonSide,
      style: CSSNonSide
    })

  if (logseq.settings?.booleanRightSidebar === true)
    provideStyleRightSidebar(keyRightSidebar)

  //Fix bugs
  /* Fix "Extra space when journal queries are not active #6773" */
  /* journal queries No shadow */
  /* background conflict journal queries */

  logseq.provideStyle({
    key: "main",
    style: CSSmain
  })

  logseq.onSettingsChanged((newSet: LSPluginBaseInfo["settings"], oldSet: LSPluginBaseInfo["settings"]) => {
    if (newSet
      && oldSet
      && newSet !== oldSet) {
      if (oldSet.booleanLinkedReferences === true
        && newSet.booleanLinkedReferences === false) {
        try {
          removeProvideStyle(keySide)
          removeProvideStyle(keyNestingSide)
        } finally {
          logseq.provideStyle({
            key: keyNonSide,
            style: CSSNonSide
          })
        }
      } else
        if (oldSet.booleanLinkedReferences === false
          && newSet.booleanLinkedReferences === true) {
          try {
            removeProvideStyle(keyNonSide)
          } finally {
            provideStyle(keyNestingSide, CSS3Side)
          }
        }
      if (oldSet.booleanRightSidebar === true
        && newSet.booleanRightSidebar === false) {
        removeProvideStyle(keyRightSidebar)
      } else
        if (oldSet.booleanRightSidebar === false
          && newSet.booleanRightSidebar === true) {
          provideStyleRightSidebar(
            keyRightSidebar,
          )
        }
    }
  }
  )
} /* end_main */

logseq.ready(main).catch(console.error)


// export async function versionCheck(
//   first: number,
//   second: number,
//   third: number
// ): Promise<boolean> {
//   let version: string = await logseq.App.getInfo("version")
//   //0.9.13-nightly.20230811のような文字列であった場合、-nightly以降を削除する
//   if (version?.includes("-")) {
//     const versionArr = version?.split("-") as string[]
//     version = versionArr[0]
//   }
//   const versionArr = version?.split(".") as string[]
//   if (
//     Number(versionArr[0]) > first
//     || (Number(versionArr[0]) === first
//       && Number(versionArr[1]) > second)
//     || (Number(versionArr[1]) === second
//       && Number(versionArr[2]) >= third)
//   )
//     return true //指定した以上のバージョンの場合
//   else
//     return false //指定より古いバージョンの場合
// }


const provideStyle = (newKey: string, newStyle: string) => {
  logseq.provideStyle({
    key: newKey,
    style: newStyle
  })
}


const provideStyleRightSidebar = (keyRightSidebar: string) => {
  logseq.provideStyle({
    key: keyRightSidebar,
    style: CSS3RightSidebar,
  })
}

