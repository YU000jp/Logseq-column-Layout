import '@logseq/libs';
import { SettingSchemaDesc } from "@logseq/libs/dist/LSPlugin.user";
import { logseq as PL } from "../package.json";
const pluginId = PL.id;

import { ColumnLayoutStyle } from './layout';

/* main */
function main() {
    const UserSettings: any = logseq.settings;
    console.info(`#${pluginId}: MAIN`); /* -plugin-id */

    //https://logseq.github.io/plugins/types/SettingSchemaDesc.html
    const settingsTemplate: SettingSchemaDesc[] = [
        {
            key: "switchLinkedReferences",
            title: "[Journals] Linked References",
            type: "enum",
            enumChoices: ["Side", "Bottom"],
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
    ];
    logseq.useSettingsSchema(settingsTemplate);

    //switch linked References
    //journal queries Side & Linked References Side
    if (UserSettings.switchLinkedReferences === "Side") {
        parent.document.body.classList.add("cl-side");
    }
    //switch right sidebar
    if (UserSettings.switchRightSidebar === "original") {
        parent.document.body.classList.add("cl-switchRightSidebar");
    }
    ColumnLayoutStyle();

    parent.document.body.classList.add('is-plugin-column-layout-enabled');
    logseq.beforeunload(async () => {
        parent.document.body.classList.remove('is-plugin-column-layout-enabled');
    });
    logseq.onSettingsChanged((newSettings, oldSettings) => {
        onSettingsChangedCallback(newSettings, oldSettings);
    });

    console.info(`#${pluginId}: loaded`);
};/* end_main */


// Setting changed
const onSettingsChangedCallback = (newSet, oldSet) => {
    if (oldSet.switchLinkedReferences !== "Bottom" && newSet.switchLinkedReferences === "Bottom") {
        parent.document.body.classList.remove('cl-side');
    } else if (oldSet.switchLinkedReferences !== "Side" && newSet.switchLinkedReferences === "Side") {
        parent.document.body.classList.add('cl-side');
    }
    if (oldSet.switchRightSidebar !== "normal" && newSet.switchRightSidebar === "normal") {
        parent.document.body.classList.remove('cl-switchRightSidebar');
    } else if (oldSet.switchRightSidebar !== "original" && newSet.switchRightSidebar === "original") {
        parent.document.body.classList.add('cl-switchRightSidebar');
    }
}

logseq.ready(main).catch(console.error);