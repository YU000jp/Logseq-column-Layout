import '@logseq/libs';
import { SettingSchemaDesc } from "@logseq/libs/dist/LSPlugin.user";
import { logseq as PL } from "../package.json";
const pluginId = PL.id;

import { ColumnLayoutStyle } from './layout';

/* main */
function main() {
    console.info(`#${pluginId}: MAIN`); /* -plugin-id */

    //https://logseq.github.io/plugins/types/SettingSchemaDesc.html
    const settingsTemplate: SettingSchemaDesc[] = [
        {
            key: "booleanLinkedReferences",
            title: "[Journals] Linked References",
            type: "boolean",
            default: true,
            description: "Side by side",
        },
        {
            key: "booleanRightSidebar",
            title: "Side by side in right sidebar",
            type: "boolean",
            default: true,
            description: "Pages can be placed side by side in the sidebar",
        },
    ];
    logseq.useSettingsSchema(settingsTemplate);

    //linked References
    //journal queries Side & Linked References Side
    if (logseq.settings?.booleanLinkedReferences === true) {
        parent.document.body.classList.add("cl-side");
    }
    //switch right sidebar
    if (logseq.settings?.booleanRightSidebar === true) {
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
    if (oldSet.booleanLinkedReferences !== false && newSet.booleanLinkedReferences === false) {
        parent.document.body.classList.remove('cl-side');
    } else if (oldSet.booleanLinkedReferences !== true && newSet.booleanLinkedReferences === true) {
        parent.document.body.classList.add('cl-side');
    }
    if (oldSet.booleanRightSidebar !== false && newSet.booleanRightSidebar === false) {
        parent.document.body.classList.remove('cl-switchRightSidebar');
    } else if (oldSet.booleanRightSidebar !== true && newSet.booleanRightSidebar === true) {
        parent.document.body.classList.add('cl-switchRightSidebar');
    }
}

logseq.ready(main).catch(console.error);