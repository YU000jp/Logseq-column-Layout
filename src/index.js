import '@logseq/libs';
import { logseq as PL } from "../package.json";
const pluginId = PL.id;

import { TurnOnFunction } from './function';
import { MarkdownLink } from './markdown-link';
import { ColumnLayoutStyle } from './layout';
import { settingUI } from './setting';

/* main */
async function main() {
    console.info(`#${pluginId}: MAIN`); /* -plugin-id */
    settingUI();
    TurnOnFunction();
    if (logseq.settings.switchMarkdownLink === "enable") {
        MarkdownLink();
    }
    ColumnLayoutStyle();

    console.info(`#${pluginId}: loaded`);
};/* end_main */

logseq.ready(main).catch(console.error);