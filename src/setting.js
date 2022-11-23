export const settingUI = () => {
    const settingsTemplate = [
        {
            key: "setting001",
            type: "string",
            default: `true`,
            title: "Customize setting001",
            description:
                'temporary. settings are not reflected yet.',
        }
    ];
    logseq.useSettingsSchema(settingsTemplate);
};
/* inputAs: 'textarea', */