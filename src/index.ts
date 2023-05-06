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

    const classSide = "cl-side";
    const classRightSidebar = "cl-switchRightSidebar";
    //linked References
    //journal queries Side & Linked References Side
    if (logseq.settings?.booleanLinkedReferences === true) {
        parent.document.body.classList.add(classSide);
    }
    //switch right sidebar
    if (logseq.settings?.booleanRightSidebar === true) {
        parent.document.body.classList.add(classRightSidebar);
    }

    //Fix bugs
    /* Fix "Extra space when journal queries are not active #6773" */
    /* journal queries No shadow */
    /* background conflict journal queries */

    //CSS minify https://csscompressor.com/
    logseq.provideStyle({ key: "main", style: CSSmain });
    logseq.provideStyle({ key: "rightSidebar", style: CSSrightSidebar });
    logseq.provideStyle({ key: "sideLinkedReferences", style: CSSsideLinkedReferences });
    logseq.provideStyle({ key: "notSideLinkedReferences", style: CSSNotSideLinkedReferences });

    logseq.onSettingsChanged((newSet: LSPluginBaseInfo['settings'], oldSet: LSPluginBaseInfo['settings']) => {
        if (oldSet.booleanLinkedReferences !== false && newSet.booleanLinkedReferences === false) {
            parent.document.body.classList.remove(classSide);
        } else if (oldSet.booleanLinkedReferences !== true && newSet.booleanLinkedReferences === true) {
            parent.document.body.classList.add(classSide);
        }
        if (oldSet.booleanRightSidebar !== false && newSet.booleanRightSidebar === false) {
            parent.document.body.classList.remove(classRightSidebar);
        } else if (oldSet.booleanRightSidebar !== true && newSet.booleanRightSidebar === true) {
            parent.document.body.classList.add(classRightSidebar);
        }
    });
};/* end_main */


function removeCSSclass(className: string): void {
    if (parent.document.body.classList?.contains(className)) { // classNameが存在するかを確認する
        parent.document.body.classList.remove(className);
    }
}

logseq.ready(main).catch(console.error);
