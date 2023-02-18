import '@logseq/libs';

import { getDateForPage } from 'logseq-dateutils';
import swal from 'sweetalert';//https://sweetalert.js.org/guides/


export const TurnOnFunction = async (UserSettings) => {

    //switch contextmenu
    if (UserSettings.switchCompletedDialog === "enable") {

        //add completed property to done task
        //https://github.com/DimitryDushkin/logseq-plugin-task-check-date
        logseq.DB.onChanged(async (e) => {
            if (UserSettings.switchCompletedDialog === "enable") {
                const TASK_MARKERS = new Set(["DONE"]);//require
                const taskBlock = e.blocks.find((block) => TASK_MARKERS.has(block.marker));//find task block
                if (!taskBlock) {
                    //
                } else {
                    if (!taskBlock.properties?.completed && taskBlock.marker === "DONE") {
                        const userConfigs = await logseq.App.getUserConfigs();
                        const datePage = await getDateForPage(new Date(), userConfigs.preferredDateFormat);
                        //dialog
                        logseq.showMainUI();
                        swal({
                            title: "Turn on completed (date) property?",
                            text: "",
                            icon: "info",
                            buttons: {
                                cancel: true,
                                confirm: true,
                            },
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
                    }
                }
            }
        });
        //end

    }

    //contextmenu
    /* ContextMenuItem for DONE
    logseq.Editor.registerBlockContextMenuItem('✔️ DONE (completed property)', async (e) => {
        const uuid = e.uuid;
        const block = await logseq.Editor.getBlock(uuid);
        if (!block?.marker) return logseq.UI.showMsg('This block is not a task', 'error');
        const userConfigs = await logseq.App.getUserConfigs();
        const todayDateInUserFormat = await getDateForPage(new Date(), await userConfigs.preferredDateFormat);
        console.log(`#${pluginId}: ${todayDateInUserFormat}`);
        const newRawContent = block.content.replace(new RegExp(`^${block.marker}`), `DONE`);
        await logseq.Editor.updateBlock(uuid, newRawContent);
        logseq.Editor.upsertBlockProperty(uuid, `completed`, todayDateInUserFormat);
        //(scheduled deadline remove)
        logseq.UI.showMsg(`${block.marker} → ✔️ DONE (completed property)`, 'success');
        console.log(`#${pluginId}: ✔️ DONE (completed property)`);
    }); */

    const userConfigs = await logseq.App.getUserConfigs();
    const todayDateInUserFormat = await getDateForPage(new Date(), await userConfigs.preferredDateFormat);
    /* ContextMenuItem reference */
    logseq.Editor.registerBlockContextMenuItem('🔵🟣Link as reference', async (e) => {
        //dialog
        logseq.showMainUI();
        swal({
            text: "Turn on referenced (date) property?",
            icon: "info",
            buttons: {
                cancel: true,
                confirm: true,
            },
        })
            .then((answer) => {
                logseq.Editor.insertBlock(e.uuid, `🔵🟣 ((` + e.uuid + `))`).then((block: any) => {
                    if (answer) {
                        logseq.Editor.upsertBlockProperty(block.uuid, "referenced", todayDateInUserFormat);
                    } else {
                        //user cancel in dialog
                    }
                    logseq.App.openInRightSidebar(block.uuid);
                    logseq.UI.showMsg("🔵🟣 Mouse drag the block to move it to the journal", 'info');
                });
            })
            .finally(() => {
                logseq.hideMainUI();
            });
        //dialog end
    });

    /* ContextMenuItem LATER  */
    logseq.Editor.registerBlockContextMenuItem('🔵🟣LATER as reference', async (e) => {
        const block = await logseq.Editor.getBlock(e.uuid);
        if (block?.marker == "LATER") {
            logseq.UI.showMsg('This block is LATER', 'error');
        } else {
            await logseq.Editor.insertBlock(e.uuid, `LATER 🔵🟣 ((` + e.uuid + `))`).then((block: any) => {
                logseq.App.openInRightSidebar(block.uuid);
                logseq.UI.showMsg("🔵🟣 Mouse drag the block to move it to the journal.", 'info');
            });
        }
    });

};
