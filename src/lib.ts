import { versionOver, versionOver0914 } from "."
import CSS3NestingRightSidebar from "./nestingRightSidebar.css?inline"
import CSS3NestingRightSidebar00914 from "./nestingRightSidebar00914.css?inline"
import CSSrightSidebar from "./rightSidebar.css?inline"

export const removeProvideStyle = (className: string) => {
  const doc = parent.document.head.querySelector(`style[data-injected-style^="${className}"]`) as HTMLStyleElement | null
  if (doc) doc.remove()
}

export const removeCSSclass = (className: string) => {
  if (parent.document.body.classList?.contains(className))
    parent.document.body.classList.remove(className)
}


export async function versionCheck(
  first: number,
  second: number,
  third: number
): Promise<boolean> {
  let version: string = await logseq.App.getInfo("version")
  //0.9.13-nightly.20230811のような文字列であった場合、-nightly以降を削除する
  if (version?.includes("-")) {
    const versionArr = version?.split("-") as string[]
    version = versionArr[0]
  }
  const versionArr = version?.split(".") as string[]
  if (
    Number(versionArr[0]) > first ||
    (Number(versionArr[0]) === first && Number(versionArr[1]) > second) ||
    (Number(versionArr[1]) === second && Number(versionArr[2]) >= third)
  )
    return true //指定した以上のバージョンの場合
  else
    return false //指定より古いバージョンの場合
}


export function provideStyleByVersion(
  versionOver: boolean,
  newKey: string,
  newStyle: string,
  oldKey: string,
  oldStyle: string
) {
  if (versionOver === true)
    logseq.provideStyle({ key: newKey, style: newStyle })
  //指定した以上のバージョンの場合
  else
    logseq.provideStyle({ key: oldKey, style: oldStyle }) //指定より古いバージョンの場合
}


export function provideStyleRightSidebarEachVersion(
  keyNestingRightSidebar: string,
  keyNestingRightSidebar00914: string,
  keyRightSidebar: string
) {
  if (versionOver0914 === true) {
    logseq.provideStyle({
      key: keyNestingRightSidebar00914,
      style: CSS3NestingRightSidebar00914,
    })
  } else
    if (versionOver === true) {
      logseq.provideStyle({
        key: keyNestingRightSidebar,
        style: CSS3NestingRightSidebar,
      })
    } else {
      logseq.provideStyle({
        key: keyRightSidebar,
        style: CSSrightSidebar,
      })
    }
}
