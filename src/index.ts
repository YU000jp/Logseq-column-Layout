import '@logseq/libs';
import { SettingSchemaDesc } from "@logseq/libs/dist/LSPlugin.user";
import { logseq as PL } from "../package.json";
const pluginId = PL.id;

import { ColumnLayoutStyle } from './layout';
import { TurnOnFunction } from './function';
import { MarkdownLink } from './markdown-link';


/* main */
function main() {
    const UserSettings: any = logseq.settings;
    console.info(`#${pluginId}: MAIN`); /* -plugin-id */

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
};/* end_main */


async function after() {
    console.info(`#${pluginId}: AFTER`); /* -plugin-id */
    const UserSettings: any = logseq.settings;
    //lazy loading
    setTimeout(function () {

        TurnOnFunction(UserSettings);

        if (UserSettings.switchMarkdownLink === "enable") {
            MarkdownLink(UserSettings);
        }


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
            {
                key: "heading01",
                title: "Test Option",
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
                description: "Confirm in dialog / Anti-garbled for japanese website",
            },
        ];
        logseq.useSettingsSchema(settingsTemplate);

    }, 2000);

    parent.document.body.classList.add('is-plugin-column-layout-enabled');
    logseq.beforeunload(async () => {
        parent.document.body.classList.remove('is-plugin-column-layout-enabled');
    });
    logseq.onSettingsChanged((newSettings, oldSettings) => {
        onSettingsChangedCallback(newSettings, oldSettings);
    });
    console.info(`#${pluginId}: loaded`);
}

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

logseq.ready(main).then(after).catch(console.error);