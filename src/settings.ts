import { SettingSchemaDesc } from "@logseq/libs/dist/LSPlugin.user"
import { calculateRangeBarForSettingUI } from "./lib"
import { t } from "logseq-l10n"

//https://logseq.github.io/plugins/types/SettingSchemaDesc.html
export const settingsTemplate = (): SettingSchemaDesc[] => [
  {
    key: "booleanLinkedReferences",
    title: t("Place \"Linked References\" next to journals"),
    type: "boolean",
    default: true,
    description: "",
  },
  {
    key: "booleanRightSidebar",
    title: t("Make right sidebar content next to each other"),
    type: "boolean",
    default: false,
    description:
      t("⚠️Starting with Logseq v0.9.14 version, the limit is 2."),
  },
  {
    key: "imageSizeMaxHome",
    title: t("Change large image max-size (for journals)"),
    type: "number",
    default: "72",
    description: "`300` < `660` default < `800` [px]",
    inputAs: "range",
  },
  {
    key: "imageSizeMaxPage",
    title: t("Change large image max-size (for non-journal pages)"),
    type: "number",
    default: "83",
    description: "`300` < `1050` default < `1200` [px]",
    inputAs: "range",
  },
]

export const CSSimageSize = (home: number, page: number): string => {
  //Home: 300px < number > 800px
  //Page: 300px < number > 1200px
  return `
body[data-page="home"]>div#root>div>main div.asset-container img {
    max-width: ${calculateRangeBarForSettingUI(300, 800, home)}px;
    object-fit: scale-down;
}
body[data-page="page"]>div#root>div>main div.asset-container img {
    max-width: ${calculateRangeBarForSettingUI(300, 1200, page)}px;
    object-fit: scale-down;
}
`
  //object-fit https://catnose.me/learning/css/object-fit
  //画像を縮小するが拡大はしない scale-down
}
