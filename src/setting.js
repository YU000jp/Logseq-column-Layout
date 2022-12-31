export const settingUI = () => {

    //https://logseq.github.io/plugins/types/SettingSchemaDesc.html

    const settingsTemplate = [
        {
            key: "heading00",
            title: "*Please reboot Logseq to reflect styles.",
            type: "heading",
            default: "",
            description: "",
        },
        {
            key: "switchLinkedReferences",
            title: "[Journals] Linked References Side by side  *",
            type: "enum",
            enumChoices: ["Side","Bottom"],
            enumPicker: "radio",
            default: "Side",
            description: "",
        },
        {
            key: "switchRightSidebar",
            title: "Side by side in right sidebar  *",
            type: "enum",
            enumChoices: ["original", "normal"],
            enumPicker: "radio",
            default: "original",
            description: "enable: Pages can be placed side by side in the sidebar",
        },
        {
            key: "switchTagsHierarchy",
            title: "Page tags and Hierarchy  *",
            type: "enum",
            enumChoices: ["Side","Bottom", "normal"],
            enumPicker: "radio",
            default: "Side",
            description: "",
        },
        {
            key: "switchPageLinkedReferences",
            title: "Page Linked References height limit  *",
            type: "enum",
            enumChoices: ["Enable","Normal"],
            enumPicker: "radio",
            default: "Enable",
            description: "",
        },
        {
            key: "heading01",
            title: "Option",
            type: "heading",
            default: "",
            description: "",
        },
        {
            key: "switchCompletedDialog",
            title: "Turn on DONE task completed (date) property *",
            type: "enum",
            enumChoices: ["enable", "disable"],
            enumPicker: "radio",
            default: "disable",
            description: "Confirm in dialog",
        },
        {
            key: "switchMarkdownLink",
            title: "Turn on automatic Markdown link *",
            type: "enum",
            enumChoices: ["enable", "disable"],
            enumPicker: "radio",
            default: "disable",
            description: "Confirm in dialog",
        },
        {
            key: "switchContext",
            title: "Turn on context menu items *",
            type: "enum",
            enumChoices: ["enable", "disable"],
            enumPicker: "radio",
            default: "enable",
            description: "`Link as reference`,`LATER as reference`,`Delete this block`",
        },
    ];

    logseq.useSettingsSchema(settingsTemplate);
    
};