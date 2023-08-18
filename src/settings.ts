import { SettingSchemaDesc } from "@logseq/libs/dist/LSPlugin.user";
import { calculateRangeBarForSettingUI } from "./lib";

//https://logseq.github.io/plugins/types/SettingSchemaDesc.html
export const settingsTemplate: SettingSchemaDesc[] = [
  {
    key: "booleanLinkedReferences",
    title: "Journals, show Linked References side by side",
    type: "boolean",
    default: true,
    description: "default: `true`",
  },
  {
    key: "booleanRightSidebar",
    title: "Enable original right sidebar",
    type: "boolean",
    default: true,
    description:
      "default: `true`, place block or page-content side by side in the sidebar. ⚠️! The operation method has changed from version Logseq v0.9.14. !",
  },
  {
    key: "imageSizeMaxHome",
    title: "Change large image max-size (for journals)",
    type: "number",
    default: "72",
    description: "`300` < `660` default < `800` [px]",
    inputAs: "range",
  },
  {
    key: "imageSizeMaxPage",
    title: "Change large image max-size (for non-journal pages)",
    type: "number",
    default: "83",
    description: "`300` < `1050` default < `1200` [px]",
    inputAs: "range",
  },
];

export const CSSimageSize = (home: number, page: number): string => {
  //Home: 300px < number > 800px
  //Page: 300px < number > 1200px
  return `
body[data-page="home"] div.asset-container img {
    max-width: ${calculateRangeBarForSettingUI(300, 800, home)}px;
    object-fit: scale-down;
}
body[data-page="page"] div.asset-container img {
    max-width: ${calculateRangeBarForSettingUI(300, 1200, page)}px;
    object-fit: scale-down;
}
`;
  //object-fit https://catnose.me/learning/css/object-fit
  //画像を縮小するが拡大はしない scale-down
};
