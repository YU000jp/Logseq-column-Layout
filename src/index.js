import '@logseq/libs';
import { logseq as PL } from "../package.json";
import { TurnOnFunction } from './function';
import { ColumnLayoutStyle } from './layout';

import { settingUI } from './setting';
const pluginId = PL.id;

/* main */
async function main() {
    console.info(`#${pluginId}: MAIN`); /* -plugin-id */

    settingUI(); /* -setting */
    TurnOnFunction();
    ColumnLayoutStyle();

    console.info(`#${pluginId}: loaded`);
};/* end_main */

logseq.ready(main).catch(console.error);