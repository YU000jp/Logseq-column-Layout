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
    ColumnLayoutStyle();
};/* end_main */


async function after() {
    console.info(`#${pluginId}: AFTER`); /* -plugin-id */
    
    //lazy loading
    setTimeout(function () {
        TurnOnFunction();
        if (logseq.settings.switchMarkdownLink === "enable") {
            MarkdownLink();
        }
        settingUI();
    }, 3000);

    console.info(`#${pluginId}: loaded`);
}

logseq.ready(main).then(after).catch(console.error);