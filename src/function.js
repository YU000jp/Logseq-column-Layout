import '@logseq/libs';
import { logseq as PL } from "../package.json";
const pluginId = PL.id;

import { getDateForPage } from 'logseq-dateutils';
import swal from 'sweetalert';


export const TurnOnFunction = () => {

    //switch contextmenu
    const switchCompletedDialog = logseq.settings.switchCompletedDialog || "";
    if (switchCompletedDialog === undefined || switchCompletedDialog === "enable") {

        //add completed property to done task
        //https://github.com/DimitryDushkin/logseq-plugin-task-check-date
        const TASK_MARKERS = new Set(["DONE", "NOW", "LATER", "TODO", "DOING"]);//require
        logseq.DB.onChanged(async (e) => {

            const taskBlock = e.blocks.find((block) => TASK_MARKERS.has(block.marker));//find task block
            if (!taskBlock) {
                return;
            }
            const hasCompletedProperty = taskBlock.properties?.completed;
            if (taskBlock.marker === "DONE") {
                if (hasCompletedProperty === undefined) {
                    const userConfigs = await logseq.App.getUserConfigs();
                    const preferredDateFormat = userConfigs.preferredDateFormat;
                    const datePage = getDateForPage(new Date(), preferredDateFormat);
                    setTimeout(function () {
                        //dialog
                        logseq.showMainUI();
                        swal({
                            title: "Turn on completed (date) property?",
                            text: "",
                            icon: "info",
                            buttons: true,
                        })
                            .then((answer) => {
                                if (answer) {//OK
                                    logseq.Editor.upsertBlockProperty(taskBlock.uuid, "completed", datePage);
                                } else {//Cancel
                                    //user cancel in dialog
                                }
                            })
                            .finally(() => {
                                logseq.hideMainUI();
                            });
                        //dialog end
                    }, 50);

                } else {
                    //done && undefined
                }
            } else {
                logseq.Editor.removeBlockProperty(taskBlock.uuid, "completed");
            }

        });
        //end

    }

    //switch contextmenu
    const SwitchContextMenu = logseq.settings.switchContext || "";
    if (SwitchContextMenu === undefined || SwitchContextMenu === "enable") {

        /* ContextMenuItem for DONE
        logseq.Editor.registerBlockContextMenuItem('✔️ DONE (completed property)', async (e) => {
            const uuid = e.uuid;
            const block = await logseq.Editor.getBlock(uuid);
            if (!block?.marker) return logseq.UI.showMsg('This block is not a task', 'error');
            const userConfigs = await logseq.App.getUserConfigs();
            const preferredDateFormat = userConfigs.preferredDateFormat;
            const today = new Date();
            const todayDateInUserFormat = getDateForPage(today, preferredDateFormat);
            console.log(`#${pluginId}: ${todayDateInUserFormat}`);
            const newRawContent = block.content.replace(new RegExp(`^${block.marker}`), `DONE`);
            await logseq.Editor.updateBlock(uuid, newRawContent);
            logseq.Editor.upsertBlockProperty(uuid, `completed`, todayDateInUserFormat);
            //(scheduled deadline remove)
            logseq.UI.showMsg(`${block.marker} → ✔️ DONE (completed property)`, 'success');
            console.log(`#${pluginId}: ✔️ DONE (completed property)`);
        }); */

        /* ContextMenuItem reference */
        logseq.Editor.registerBlockContextMenuItem('🔵🟣Link as reference', async (e) => {
            const uuid = e.uuid;
            const userConfigs = await logseq.App.getUserConfigs();
            const preferredDateFormat = userConfigs.preferredDateFormat;
            const today = new Date();
            const todayDateInUserFormat = getDateForPage(today, preferredDateFormat);
            //dialog
            logseq.showMainUI();
            swal({
                title: "Turn on referenced (date) property?",
                text: "",
                icon: "info",
                buttons: true,
            })
                .then((answer) => {
                    logseq.Editor.insertBlock(uuid, `🔵🟣 ((` + uuid + `))`).then((ee) => {
                        const insertUUID = ee.uuid;
                        if (answer) {
                            logseq.Editor.upsertBlockProperty(insertUUID, "referenced", todayDateInUserFormat);
                        } else {
                            //user cancel in dialog
                        }
                        logseq.App.openInRightSidebar(insertUUID);
                        logseq.UI.showMsg("🔵🟣 Mouse drag the block to move it to the journal.", 'info');
                    });
                })
                .finally(() => {
                    logseq.hideMainUI();
                });
            //dialog end
        });

        /* ContextMenuItem LATER  */
        logseq.Editor.registerBlockContextMenuItem('🔵🟣LATER as reference', async (e) => {
            const uuid = e.uuid;
            const block = await logseq.Editor.getBlock(uuid);
            if (block?.marker == "LATER") return logseq.UI.showMsg('This block is LATER', 'error');
            const userConfigs = await logseq.App.getUserConfigs();
            const preferredDateFormat = userConfigs.preferredDateFormat;
            const today = new Date();
            const todayDateInUserFormat = getDateForPage(today, preferredDateFormat);
            await logseq.Editor.insertBlock(uuid, `LATER 🔵🟣 ((` + uuid + `))`).then((ee) => {
                logseq.App.openInRightSidebar(ee.uuid);
                logseq.UI.showMsg("🔵🟣 Mouse drag the block to move it to the journal.", 'info');
            });
        });

        /* ContextMenuItem Delete */
        logseq.Editor.registerBlockContextMenuItem('❌ Delete this block', async (e) => {
            const uuid = e.uuid;
            setTimeout(function () {
                logseq.showMainUI();
                swal({
                    title: "Are you sure?",
                    text: "delete the block",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                })
                    .then((willDelete) => {
                        if (willDelete) {
                            logseq.Editor.removeBlock(uuid);
                        } else {
                            //user cancel in dialog
                        }
                    })
                    .finally(() => {
                        logseq.hideMainUI();
                    });
            }, 50);
        });

    }

};