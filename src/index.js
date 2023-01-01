import '@logseq/libs';
import { logseq as PL } from "../package.json";
const pluginId = PL.id;

import { settingUI } from './setting';
import { ColumnLayoutStyle } from './layout';
import { TurnOnFunction } from './function';
import { MarkdownLink } from './markdown-link';

/* main */
async function main() {
    console.info(`#${pluginId}: MAIN`); /* -plugin-id */
    settingUI();
    ColumnLayoutStyle();
    setTimeout(function () {
        TurnOnFunction();
        if (logseq.settings.switchMarkdownLink === "enable") {
            MarkdownLink();
        }
    }, 1000);
    

    console.info(`#${pluginId}: loaded`);
};/* end_main */

logseq.ready(main).catch(console.error);