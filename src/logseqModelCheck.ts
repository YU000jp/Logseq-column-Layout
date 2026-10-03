import { replaceLogseqMdModel, replaceLogseqVersion } from "."

// Guard so that only the latest detection may update the flag (graph changes are async)
let latestCheckId = 0

// Fetch the app version and store it (informational only; never used for graph-type detection).
const fetchAppVersion = async (): Promise<void> => {
    const logseqInfo = (await logseq.App.getInfo("version")) as unknown
    // The version format is like "0.11.0" or "0.11.0-alpha+nightly.20250427".
    const version = typeof logseqInfo === "string" ? logseqInfo : "0.0.0"
    const match = version.match(/(\d+)\.(\d+)\.(\d+)/)
    replaceLogseqVersion(match ? match[0] : version)
}

// Check if the current graph is a DB graph. Returns null when detection fails
// (a rejected call or a non-boolean value, e.g. on 0.10.x hosts where the API does
// not exist — logseq.App is a dynamic proxy, so a typeof guard is useless).
const checkLogseqDbGraph = async (): Promise<boolean | null> => {
    try {
        const value = await logseq.App.checkCurrentIsDbGraph()
        return typeof value === "boolean" ? value : null
    } catch {
        return null
    }
}

/**
 * Checks whether the current graph is a DB graph or a file-based graph, and handles related state updates.
 * @returns Promise<boolean[]> - [isDbGraph, isFileGraph]
 */
export const logseqModelCheck = async (): Promise<boolean[]> => {
    await fetchAppVersion() // アプリバージョンを保存(情報用。グラフ種別には使わない)
    const checkId = ++latestCheckId
    const detected = await checkLogseqDbGraph() // 現在のグラフがDBグラフか
    // 検出失敗 = API非搭載の旧アプリとみなしファイルグラフ扱い(DBグラフを開けないため)
    const isDbGraph = detected ?? false
    if (checkId === latestCheckId) // より新しい判定が開始されていなければフラグを更新
        replaceLogseqMdModel(!isDbGraph)

    // Callback when the graph changes: re-detect and update the flag
    logseq.App.onCurrentGraphChanged(async () => {
        const id = ++latestCheckId
        const isDb = await checkLogseqDbGraph()
        // 判定不能なら既知のフラグを維持し、より新しい判定が開始されていたら破棄する
        if (id !== latestCheckId || isDb === null) return
        replaceLogseqMdModel(!isDb)
    })
    return [isDbGraph, !isDbGraph]
}
