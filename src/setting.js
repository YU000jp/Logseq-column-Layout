export const settingUI = () => {
    /* https://logseq.github.io/plugins/types/SettingSchemaDesc.html */
    const settingsTemplate = [
        {
            key: "heading00",
            title: "*Please reboot Logseq to reflect styles.",
            type: "heading",
            default: "",
            description: "",
        },
        {
            key: "switchContext",
            title: "Add functionality context menu && Turn on DONE task completed (date) property *",
            type: "enum",
            enumChoices: ["enable", "disable"],
            enumPicker: "radio",
            default: "enable",
            description: "`DONE with completed`,`Link as reference`,`LATER as reference`,`Delete this block`",
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
            key: "switchLinkedReferences",
            title: "Linked References Side by side  *",
            type: "enum",
            enumChoices: ["Side","Normal"],
            enumPicker: "radio",
            default: "Side",
            description: "",
        }
    ];
    logseq.useSettingsSchema(settingsTemplate);
};
/* inputAs: 'textarea', */