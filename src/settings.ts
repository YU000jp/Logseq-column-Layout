import { SettingSchemaDesc } from "@logseq/libs/dist/LSPlugin.user"
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
    key: "heading",
    title: t("'Image size limit feature' has been moved to 'Preview Image' plugin."),
    type: "heading",
    default: "",
    description: "https://github.com/YU000jp/logseq-plugin-preview-image",
  },
  { // 1ページごと分離する
    key: "booleanSeparate",
    title: t("Separate each journal"),
    type: "boolean",
    default: false,
    description: "",
  },
]

