import { AppInfo } from "@logseq/libs/dist/LSPlugin"
import { replaceLogseqMdModel, replaceLogseqVersion} from "."

// Check if the model is Markdown-based. Returns false for DB models.
const checkLogseqVersion = async (): Promise<boolean> => {
    const logseqInfo = (await logseq.App.getInfo("version")) as AppInfo | any
    // The version format is like "0.11.0" or "0.11.0-alpha+nightly.20250427".
    // Extract the first three numeric parts (1-digit, 2-digit, 2-digit) using a regular expression.
    const version = logseqInfo.match(/(\d+)\.(\d+)\.(\d+)/)
    if (version) {
        replaceLogseqVersion(version[0]) // Update the version
        // If the version is 0.10.* or lower, set logseqVersionMd to true.
        if (version[0].match(/0\.([0-9]|10)\.\d+/)) {
            return true
        }
    } else {
        replaceLogseqVersion("0.0.0") // Update the version
    }
    return false
}


/**
 * Checks the Logseq model type (Markdown or DB graph) and handles related state and UI updates.
 * @returns Promise<boolean[]> - [isDbGraph, isMdModel]
 */
export const logseqModelCheck = async (): Promise<boolean> => {
    const logseqMdModel = await checkLogseqVersion() // Check if it's an MD model
    replaceLogseqMdModel(logseqMdModel)
    return logseqMdModel // Return isMdModel
}
