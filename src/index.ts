import '@logseq/libs';
import { SettingSchemaDesc, LSPluginBaseInfo } from "@logseq/libs/dist/LSPlugin.user";
import CSSmain from './main.css?inline';
import CSSrightSidebar from './rightSidebar.css?inline';
import CSSsideLinkedReferences from './side.css?inline';
import CSSNotSideLinkedReferences from './notSide.css?inline';


/* main */
function main() {

    //https://logseq.github.io/plugins/types/SettingSchemaDesc.html
    const settingsTemplate: SettingSchemaDesc[] = [
        {
            key: "booleanLinkedReferences",
            title: "[Journals] Linked References",
            type: "boolean",
            default: true,
            description: "Side by side",
        },
        {
            key: "booleanRightSidebar",
            title: "Original right sidebar",
            type: "boolean",
            default: true,
            description: "place side by side in the sidebar",
        },
    ];
    logseq.useSettingsSchema(settingsTemplate);

    //linked References
    //journal queries Side & Linked References Side
    const keySideLinkedReferences = "sideLinkedReferences";
    const keyNotSideLinkedReferences = "notSideLinkedReferences";
    if (logseq.settings?.booleanLinkedReferences === true) {
        logseq.provideStyle({ key: keySideLinkedReferences, style: CSSsideLinkedReferences });
    } else {
        logseq.provideStyle({ key: keyNotSideLinkedReferences, style: CSSNotSideLinkedReferences });
    }
    //switch right sidebar
    const keyRightSidebar = "rightSidebar";
    if (logseq.settings?.booleanRightSidebar === true) {
        logseq.provideStyle({ key: keyRightSidebar, style: CSSrightSidebar });
    }

    //Fix bugs
    /* Fix "Extra space when journal queries are not active #6773" */
    /* journal queries No shadow */
    /* background conflict journal queries */


    //CSS minify https://csscompressor.com/
    logseq.provideStyle({ key: "main", style: CSSmain });
    logseq.onSettingsChanged(async (newSet: LSPluginBaseInfo['settings'], oldSet: LSPluginBaseInfo['settings']) => {
        if (oldSet.booleanLinkedReferences !== false && newSet.booleanLinkedReferences === false) {
            await removeProvideStyle(keySideLinkedReferences);
            logseq.provideStyle({ key: keyNotSideLinkedReferences, style: CSSNotSideLinkedReferences });
        } else if (oldSet.booleanLinkedReferences !== true && newSet.booleanLinkedReferences === true) {
            await removeProvideStyle(keyNotSideLinkedReferences);
            logseq.provideStyle({ key: keySideLinkedReferences, style: CSSsideLinkedReferences });
        }
        if (oldSet.booleanRightSidebar !== false && newSet.booleanRightSidebar === false) {
            removeProvideStyle(keyRightSidebar);
        } else if (oldSet.booleanRightSidebar !== true && newSet.booleanRightSidebar === true) {
            logseq.provideStyle({ key: keyRightSidebar, style: CSSrightSidebar });
        }
    });


    logseq.App.onSidebarVisibleChanged(async ({ visible }) => {
        if (visible === true) {
            //CSS main(.ls-right-sidebar-open)
            if (logseq.settings?.booleanRightSidebar === true) {
                await removeProvideStyle(keySideLinkedReferences);
            } else {
                await removeProvideStyle(keyNotSideLinkedReferences);
            }
        } else {
            //CSS main:not(.ls-right-sidebar-open)
            if (logseq.settings?.booleanRightSidebar === true) {
                logseq.provideStyle({ key: keySideLinkedReferences, style: CSSsideLinkedReferences });
            } else {
                logseq.provideStyle({ key: keyNotSideLinkedReferences, style: CSSNotSideLinkedReferences });
            }
        }
    }
    );

};/* end_main */

const removeProvideStyle = (className: string) => {
    const doc = parent.document.head.querySelector(`style[data-injected-style^="${className}"]`);
    if (doc) {
        doc.remove();
    }
};

logseq.ready(main).catch(console.error);