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

    const userConfigs = await logseq.App.getUserConfigs();
    const todayDateInUserFormat = await getDateForPage(new Date(), await userConfigs.preferredDateFormat);

    /* ContextMenuItem LATER  */
    logseq.Editor.registerBlockContextMenuItem('repeat-task as LATER', async (e) => {
        const block = await logseq.Editor.getBlock(e.uuid);
        if (block?.marker == "LATER") {
            logseq.UI.showMsg('This block is LATER', 'error');
        } else {
            await logseq.Editor.insertBlock(e.uuid, `LATER 🔁 ((` + e.uuid + `))`).then((block: any) => {
                logseq.App.openInRightSidebar(block.uuid);
                logseq.UI.showMsg("Mouse drag a bullet of the block to move it to the journal.", 'info');
            });
        }
    });

    /* SlashCommand  */
    logseq.Editor.registerSlashCommand('Create Year List Calendar', async (e) => {
        const userConfigs = await logseq.App.getUserConfigs();
        const ThisDate: any = new Date();
        const ThisYear = ThisDate.getFullYear();
        const ThisMonth = ThisDate.getMonth() + 1;
        const displayThisMonth = String(ThisMonth).padStart(2, '0');
        //logseq-dateutilsでは月Dataからは取得できない
        logseq.Editor.insertBlock(e.uuid, `Year List Calendar`).then(async (b) => {
            if (b) {
                //年間タスクリスト作成
                await createCalendar(ThisYear, ThisYear, ThisMonth, b.uuid, userConfigs.preferredDateFormat);//this year
                await createCalendar(ThisYear as number + 1, ThisYear, ThisMonth, b.uuid, userConfigs.preferredDateFormat);//next year
            }
        }).finally(() => {
            logseq.UI.showMsg(`Year Calendar since ${ThisYear}/${displayThisMonth}`, 'info');
        });
    });

};


async function createCalendar(year, ThisYear, ThisMonth, selectBlock, preferredDateFormat) {
    // 1月から12月までの各月の日数を配列に格納
    const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let yearBlock;
    await logseq.Editor.insertBlock(selectBlock, `${year}`, {}).then((y) => {
        if (y) {
            yearBlock = y.uuid;
        }
    });
    let forTryMonth;
    let forNextYear;
    if (year === ThisYear) {
        forTryMonth = 12;
        forNextYear = ThisMonth - 1;
    } else {
        forTryMonth = ThisMonth;
        forNextYear = 0;
    }
    for (let month: number = forNextYear; month < forTryMonth; month++) {
        // 月の日数を取得する
        let daysInMonth = monthDays[month];
        // 2月の場合は閏年かどうかを確認して日数を修正
        if (month === 1 && isLeapYear(year)) {
            daysInMonth = 29;
        }
        // 月のカレンダー
        const displayMonth = String(month + 1).padStart(2, '0');
        //if 日付リンク有効/無効(ユーザー形式の月表示は難しい)      #TODO
        await logseq.Editor.insertBlock(yearBlock, `${year}/${displayMonth}`, { properties: { collapsed: true } }).then(async (m) => {
            if (m) {
                for (let day = 1; day <= daysInMonth; day++) {
                    // 曜日を取得
                    const dayOfWeek = new Date(year, month, day).getDay();
                    // 平日と休日の色分け
                    let insertProperties = {};
                    if (dayOfWeek === 0) {
                        insertProperties["background-color"] = "red";
                    } else if (dayOfWeek === 6) {
                        insertProperties["background-color"] = "blue";
                    } else {

                    }
                    logseq.Editor.insertBlock(m.uuid, await getDateForPage(new Date(`${year}/${displayMonth}/${day}`), preferredDateFormat), { properties: insertProperties });
                }
            }
        });
    }
}

// うるう年かどうかを判定する関数
function isLeapYear(year) {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}