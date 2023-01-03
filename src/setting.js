export const settingUI = () => {

    //https://logseq.github.io/plugins/types/SettingSchemaDesc.html

    const settingsTemplate = [
        {
            key: "switchLinkedReferences",
            title: "[Journals] Linked References",
            type: "enum",
            enumChoices: ["Side","Bottom"],
            enumPicker: "radio",
            default: "Side",
            description: "Side by side",
        },
        {
            key: "switchRightSidebar",
            title: "Side by side in right sidebar",
            type: "enum",
            enumChoices: ["original", "normal"],
            enumPicker: "radio",
            default: "original",
            description: "Pages can be placed side by side in the sidebar",
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
            title: "Turn on DONE task completed (date) property",
            type: "enum",
            enumChoices: ["enable", "disable"],
            enumPicker: "radio",
            default: "disable",
            description: "Confirm in dialog",
        },
        {
            key: "switchMarkdownLink",
            title: "Turn on automatic Markdown link",
            type: "enum",
            enumChoices: ["enable", "disable"],
            enumPicker: "radio",
            default: "disable",
            description: "Confirm in dialog",
        },
    ];

    logseq.useSettingsSchema(settingsTemplate);
    
};