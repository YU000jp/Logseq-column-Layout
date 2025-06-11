import "@logseq/libs"
import { LSPluginBaseInfo } from "@logseq/libs/dist/LSPlugin.user"
import { removeProvideStyle } from "./lib"
import { settingsTemplate } from "./settings"
import { CSS3RightSidebar, CSS3Side, CSSmain, CSSNonSide, CSSSeparate } from "./css/styles"
import { loadLogseqL10n } from "./translations/l10nSetup"
import { keyNestingSide, keyNonSide, keyRightSidebar, keySeparate, keySide } from "./key"
import { logseqModelCheck } from "./logseqModelCheck"


// 変数 (同じモジュール内で使用するため、exportしない)
let logseqVersion: string = "" //バージョンチェック用
let logseqMdModel: boolean = false //モデルチェック用
// 外部から参照するためにexportする
export const getLogseqVersion = () => logseqVersion //バージョンチェック用
export const replaceLogseqVersion = (version: string) => logseqVersion = version
export const booleanLogseqMdModel = () => logseqMdModel //モデルチェック用
export const replaceLogseqMdModel = (mdModel: boolean) => logseqMdModel = mdModel


/* main */
const main = async () => {

  // Logseqモデルのチェックを実行
  const logseqMdModel = await logseqModelCheck()

  // ユーザー設定言語を取得し、L10Nをセットアップ
  await loadLogseqL10n()

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
    provideStyle(keyRightSidebar, CSS3RightSidebar)

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
    // Handle booleanLinkedReferences changes
    if (oldSet.booleanLinkedReferences !== newSet.booleanLinkedReferences) {
      if (newSet.booleanLinkedReferences) {
        removeProvideStyle(keyNonSide)
        provideStyle(keyNestingSide, CSS3Side)
      } else {
        removeProvideStyle(keySide)
        removeProvideStyle(keyNestingSide)
        logseq.provideStyle({
          key: keyNonSide,
          style: CSSNonSide
        })
      }
    }

    // Handle booleanRightSidebar changes
    if (oldSet.booleanRightSidebar !== newSet.booleanRightSidebar) {
      if (newSet.booleanRightSidebar) {
        provideStyle(keyRightSidebar, CSS3RightSidebar)
      } else {
        removeProvideStyle(keyRightSidebar)
      }
    }

    // Handle booleanSeparate changes
    if (oldSet.booleanSeparate !== newSet.booleanSeparate) {
      if (newSet.booleanSeparate) {
        provideStyle(keySeparate, CSSSeparate)
      } else {
        removeProvideStyle(keySeparate)
      }
    }
  })
} /* end_main */

logseq.ready(main).catch(console.error)


const provideStyle = (newKey: string, newStyle: string) => {
  logseq.provideStyle({
    key: newKey,
    style: newStyle
  })
}