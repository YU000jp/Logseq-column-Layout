import '@logseq/libs';
import { SettingSchemaDesc } from "@logseq/libs/dist/LSPlugin.user";


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
    if (logseq.settings?.booleanLinkedReferences === true) {
        parent.document.body.classList.add("cl-side");
    }
    //switch right sidebar
    if (logseq.settings?.booleanRightSidebar === true) {
        parent.document.body.classList.add("cl-switchRightSidebar");
    }

    //Fix bugs
    /* Fix "Extra space when journal queries are not active #6773" */
    /* journal queries No shadow */
    /* background conflict journal queries */

    //CSS minify https://csscompressor.com/
    logseq.provideStyle(String.raw`
@media screen and (min-width: 1850px) {
    body[data-page="home"] div#today-queries>div.lazy-visibility{min-height:unset!important}
    body[data-page="home"] div#today-queries>div.lazy-visibility>div.shadow{display:none}
    body[data-page="home"] div#today-queries div.color-level div.blocks-container,body[data-page="home"] div#today-queries div.color-level{background-color:unset}
    body[data-page="home"] main.ls-wide-mode div#main-content-container div.cp__sidebar-main-content{max-width:unset}
    div#time-repeater{min-width:200px}
    div.block-content div.asset-container div.asset-overlay{background-image:none}
    div#main-content-container div.asset-container has(img){overflow-x:scroll}
    body[data-page="home"] div#main-content-container div.asset-container img{max-width:660px}
    body[data-page="page"] div#main-content-container div.asset-container img{max-width:1050px}
    div.nav-content-item-inner{margin-top:2em}
    div#main-content-container blockquote{font-size:.95em}
    div#main-content-container .now,div#main-content-container .doing,div#main-content-container .later,div#main-content-container .todo{background:linear-gradient(transparent 80%,var(--ls-block-highlight-color) 30%);font-weight:700;font-size:1.1em}
    div#root [data-refs-self*="kanban"]>.block-children-container>.block-children{overflow-x:scroll;font-size:.98em;scroll-snap-type:x}
    main.ls-wide-mode div#main-content-container div.relative div.lazy-visibility div.references div.references-blocks div.content>div [data-refs-self*="kanban"]>.block-children-container>.block-children,main.ls-wide-mode div#main-content-container div.relative+div+div div.references div.references-blocks div.content>div [data-refs-self*="kanban"]>.block-children-container>.block-children,main.ls-wide-mode div#main-content-container div.relative+div+div+div div.references div.references-blocks div.content>div [data-refs-self*="kanban"]>.block-children-container>.block-children,div#right-sidebar [data-refs-self*="kanban"]>.block-children-container>.block-children{flex-wrap:wrap}
    body.is-pdf-active div#main-content-container div.relative+div.references.mt-6.flex-1.flex-row,main.ls-right-sidebar-open div#main-content-container div.relative+div.references.mt-6.flex-1.flex-row,body.is-pdf-active div#main-content-container div.page-hierarchy,main.ls-right-sidebar-open div#main-content-container div.page-hierarchy,div#right-sidebar div.relative+div.references.mt-6.flex-1.flex-row,div#right-sidebar div.page-hierarchy{display:none}
    div#main-container div.cp__sidebar-main-content{max-width:unset}
    div.timestamp div#date-time-picker:nth-of-type(2),div.timestamp div#date-time-picker:nth-of-type(3){width:400px;background:var(--color-level-1)}
    div.timestamp div#date-time-picker{top:3.8em;z-index:11}
    div.date-picker{width:280px}
    body.cl-switchRightSidebar div#right-sidebar{border:4px var(--ls-guideline-color);border-radius:.25em;overflow:scroll;background-color:unset}
    body.cl-switchRightSidebar div#right-sidebar div.resizer{background:var(--ls-guideline-color)}
    body.cl-switchRightSidebar div#right-sidebar::-webkit-scrollbar{width:12px;background:var(--ls-guideline-color)}
    body.cl-switchRightSidebar div#right-sidebar div.cp__right-sidebar-scrollable>div+div{background-image:linear-gradient(var(--color-level-1) 25%,transparent 25%);background-size:50px 15px}
    body.cl-switchRightSidebar div#right-sidebar div.cp__right-sidebar-scrollable>div.cp__right-sidebar-topbar{height:unset}
    body.cl-switchRightSidebar div#right-sidebar div.cp__right-sidebar div.sidebar-item{padding-top:unset}
    body.cl-switchRightSidebar div#right-sidebar div.sidebar-item-list{display:flex;flex-direction:column;flex-wrap:wrap;align-content:flex-start;overflow-x:scroll;font-size:.96em;scroll-snap-type:x}
    body.cl-switchRightSidebar div#right-sidebar div.sidebar-item-list::-webkit-scrollbar{height:12px}
    body.cl-switchRightSidebar div#right-sidebar div.sidebar-item.content>div>div:first-of-type{margin-top:0;margin-bottom:.4em;position:sticky!important;top:-1em;backdrop-filter:blur(20px);z-index:1;font-weight:700}
    body.cl-switchRightSidebar div#right-sidebar div.sidebar-item.content{min-width:550px;max-width:900px;resize:both;align-self:flex-start;margin-bottom:.4em;max-height:fit-content;overflow-y:visible;padding-bottom:3em;background:var(--ls-primary-background-color)}
    body.cl-switchRightSidebar div#right-sidebar div.sidebar-item-list{display:flex;padding-bottom:0;margin:unset;height:calc(99vh - 20px)}
    body.is-tabs-loaded.cl-switchRightSidebar div#right-sidebar div.sidebar-item-list{height:calc(99vh - 60px)}
    body.cl-switchRightSidebar div#right-sidebar div.sidebar-item-list div.sidebar-item.flex-col{width:100%!important}
    body.cl-switchRightSidebar div#right-sidebar div.graph{height:800px!important}
    body.cl-switchRightSidebar div#right-sidebar div.graph canvas{height:100%!important;width:100%!important;border:2px double}
    body.cl-switchRightSidebar div#right-sidebar div.sidebar-item{overflow:auto}
    body.cl-switchRightSidebar div#right-sidebar div.sidebar-item::-webkit-scrollbar{width:15px;height:20px}
    body.cl-switchRightSidebar div.cp__right-sidebar{transition:unset}
    body.cl-switchRightSidebar div#right-sidebar .table-auto{table-layout:fixed;width:90%}
    body.cl-switchRightSidebar div#right-sidebar .table-auto td.whitespace-nowrap{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}
    body.cl-switchRightSidebar div#right-sidebar div.sidebar-item.content span.rotating-arrow:first-child{transform:scale(2,2);margin-right:.6em}
    body.cl-switchRightSidebar div.cp__right-sidebar div.sidebar-item a.close{transform:unset;margin-left:1em}
    body.cl-switchRightSidebar div#right-sidebar div.relative+div.references.mt-6.flex-1.flex-row,body.cl-switchRightSidebar div#right-sidebar div.page-hierarchy,body.cl-switchRightSidebar div#right-sidebar div.sidebar-item div.is-journals div.relative+div.flex.flex-col,main.ls-right-sidebar-open div#today-queries{display:none}
    body.cl-switchRightSidebar div#right-sidebar div.hidden{display:block;margin-top:1em;margin-bottom:-2em;padding:0;width:100%;height:1em;background-color:var(--color-level-3);border-radius:1.5em}
    body.cl-switchRightSidebar div#right-sidebar div.hidden div{display:none}
    body.cl-switchRightSidebar div#right-sidebar div.sidebar-item.content div.initial{min-height:400px}
    body.cl-switchRightSidebar div#right-sidebar div.cp__right-sidebar-topbar{flex-direction:row-reverse}
    body.cl-switchRightSidebar div#right-sidebar span.ls-icon-layout-sidebar-right svg{width:24px;height:24px}
    body.cl-switchRightSidebar main.ls-right-sidebar-open div#main-content-container{justify-content:left;padding-left:1em}
    body.cl-switchRightSidebar main.ls-right-sidebar-open div[data-modal-name="page-search"]{transform:unset!important;left:unset}
    body.cl-switchRightSidebar:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div#main-content-container div.flex-1.page.relative{margin-bottom:2em;margin-top:2em;margin-left:1.5em}
    body.cl-switchRightSidebar div#right-sidebar div#date-time-picker{width:300px;background:var(--color-level-1);z-index:var(--ls-z-index-level-4)}
    body.cl-side[data-page="home"]:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div#journals div.flex-1.journal.page{display:flex}
    body.cl-side[data-page="home"]:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div.journal>div.flex.flex-col:first-child{margin-left:1em;flex:1}
    body.cl-side[data-page="home"] div#journals div.references div.pt-6{padding:.1em}
    body.cl-side[data-page="home"]:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div#journals div.references div.hidden{width:670px;display:block}
    body.cl-side[data-page="home"] div#journals div.journal.page div.lazy-visibility div.fade-enter-active{height:100%}
    body.cl-side[data-page="home"] div#journals div.journal>div.lazy-visibility div.references-blocks div.flex.flex-col>div,body.cl-side[data-page="home"] div#journals div.references div.references-blocks div.lazy-visibility div.px-2{padding-left:0;padding-right:0}
    body.cl-side[data-page="home"]:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div#journals div.lazy-visibility:has(*div.references){margin-right:.4em}
    body.cl-side[data-page="home"]:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div#journals div.references{max-height:60vh;overflow-y:scroll;position:sticky;top:.5em;bottom:3em;padding:.4em;margin-right:5px;z-index:0;border-radius:.6em;background:var(--color-level-1);outline:3px solid var(--ls-guideline-color);outline-offset:3px}
    body.cl-side[data-page="home"]:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div#journals div.references:hover{background:unset;backdrop-filter:blur(40px);min-width:670px;max-width:670px;overflow-x:visible;z-index:var(--ls-z-index-level-1)}
    body.cl-side[data-page="home"] main.ls-right-sidebar-open div#journals div.references,body.cl-side[data-page="home"].is-pdf-active div#journals div.references{display:none}
    :root{--ls-main-content-max-width:auto!important;--ls-main-content-max-width-wide:auto!important}
    body.cl-side[data-page="home"]:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div.journal>div.flex.flex-col:first-child{max-width:1170px}
    body.cl-side[data-page="home"]:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div#journals div.block-children-container{display:block}
    body.cl-side[data-page="home"]:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div#today-queries+div.flex.flex-col{position:fixed;bottom:1em;padding:.3em;outline:3px solid var(--ls-guideline-color);outline-offset:3px;border-radius:1.2em;background:unset;backdrop-filter:blur(40px);font-size:small;max-height:30vh;overflow:auto;z-index:1}
    body.cl-side[data-page="home"] main.ls-right-sidebar-open div#today-queries+div.flex.flex-col,body.cl-side[data-page="home"] body.is-pdf-active div#today-queries+div.flex.flex-col{display:none}
    body.cl-side[data-page="home"]:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div#today-queries{width:390px;position:fixed;right:0;top:calc(var(--ls-headbar-height) + var(--ls-headbar-inner-top-padding));bottom:3px;overflow-y:scroll;font-size:smaller;border-left:2px solid var(--ls-guideline-color);padding:.12em}
    body.cl-side[data-page="home"] main.ls-right-sidebar-open div#root div#journals div#today-queries,body.cl-side[data-page="home"].is-pdf-active div#root div#journals div#today-queries{display:none}
    body.cl-side[data-page="home"].is-tabs-loaded div#root div#journals div#today-queries{top:calc(var(--ls-headbar-height) + var(--ls-headbar-inner-top-padding) + 40px)}
    body.cl-side[data-page="home"] div#today-queries .now,body.cl-side[data-page="home"] div#today-queries .later,body.cl-side[data-page="home"] div#today-queries .doing,body.cl-side[data-page="home"] div#today-queries .todo{font-weight:600}
    body.cl-side[data-page="home"] div#today-queries>div.lazy-visibility div.custom-query{margin-top:.1em;margin-bottom:.8em}
    body.cl-side[data-page="home"] div#today-queries>div.lazy-visibility div.custom-query div.custom-query-title{outline:2px solid var(--ls-guideline-color);font-size:medium;background:var(--ls-page-blockquote-bg-color)}
    body.cl-side[data-page="home"] div#today-queries>div.lazy-visibility div.custom-query div.custom-query-title:hover{outline:4px}
    body.cl-side[data-page="home"] div#today-queries.mt-10{margin-top:.1em}
    body.cl-side[data-page="home"] div#today-queries>div.lazy-visibility div.custom-query div.content{padding-top:.15em}
    body.cl-side[data-page="home"] div#today-queries>div.lazy-visibility div.custom-query div.content div.lazy-visibility:not(:last-of-type){border-bottom:3px dotted var(--ls-guideline-color);padding:.6em}
    body.cl-side[data-page="home"] div#today-queries>div.lazy-visibility div.custom-query div.content div.lazy-visibility{border-right:4px solid var(--ls-page-blockquote-bg-color)}
    body.cl-side[data-page="home"] div#today-queries>div.lazy-visibility div.custom-query div.my-2{padding:.2em;margin:.2em}
    body.cl-side[data-page="home"] div#today-queries>div.lazy-visibility div.custom-query div.breadcrumb.block-parents{color:var(--ct-external-link-color);margin-bottom:.6em}
    body.cl-side[data-page="home"] div#today-queries .sm\:px-7{padding-left:unset}
    body.cl-side[data-page="home"] div#today-queries h2,body.cl-side[data-page="home"] div#today-queries h3,body.cl-side[data-page="home"] div#today-queries h4{font-size:16px;padding:4px}
    body.cl-side[data-page="home"]:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div#main-content-container{margin:0;padding-top:unset;padding-left:0}
    }
    @media screen and (min-width: 1850px) and (max-width: 1910px) {
    body.cl-side[data-page="home"]:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div#today-queries,body.cl-side[data-page="home"]:not(.is-pdf-active) main:not(.ls-left-sidebar-open) div#today-queries{width:360px}
    body.cl-side[data-page="home"]:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div.journal>div.flex.flex-col:first-child{min-width:820px}
    body.cl-side[data-page="home"]:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div#today-queries+div.flex.flex-col{width:380px}
    }
    @media screen and (min-width: 1911px) and (max-width: 2019px) {
    body.cl-side[data-page="home"]:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div.journal>div.flex.flex-col:first-child{min-width:920px}
    body.cl-side[data-page="home"]:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div#today-queries+div.flex.flex-col{width:460px}
    }
    @media screen and (min-width: 2020px) {
    body.cl-side[data-page="home"]:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div#journals div.references{min-width:670px}
    body.cl-side[data-page="home"]:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div.journal>div.flex.flex-col:first-child{min-width:1000px}
    body.cl-side[data-page="home"]:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div#today-queries+div.flex.flex-col{width:520px}
    }
    @media screen and (min-width: 1850px) and (max-width: 2259px) {
    body.cl-side[data-page="home"]:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div#journals div.references{min-width:350px;max-width:400px}
    body.cl-side[data-page="home"]:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div#today-queries+div.flex.flex-col{right:400px}
    body.cl-side[data-page="home"]:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div#journals{margin-right:360px}
    }
    @media screen and (min-width: 2260px) {
    body.cl-side[data-page="home"]:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div#journals div.references{min-width:400px;max-width:670px}
    body.cl-side[data-page="home"]:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div#journals div.journal>div.flex.flex-col:first-child{max-width:1250px;margin-left:4em}
    body.cl-side[data-page="home"]:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div#journals div#today-queries+div.flex.flex-col{right:525px}
    body.cl-side[data-page="home"]:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div#journals div#today-queries{width:500px}
    body.cl-side[data-page="home"]:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div#journals{margin-right:500px}
    }
    @media screen and (min-width: 2800px) {
    body.cl-side[data-page="home"]:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div#journals div.references{min-width:670px;max-width:670px}
    body.cl-side[data-page="home"]:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div#journals div.journal>div.flex.flex-col:first-child{min-width:1200px;max-width:1430px}
    body.cl-side[data-page="home"]:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div#journals div#today-queries+div.flex.flex-col{right:640px}
    body.cl-side[data-page="home"]:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div#journals div#today-queries{width:620px}
    body.cl-side[data-page="home"]:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div#journals{margin-right:620px}
    }
    @media screen and (min-width: 1850px) {
    body:not(.cl-side)[data-page="home"]:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div#main-content-container div.relative+div.references.mt-6.flex-1.flex-row,body:not(.cl-side)[data-page="home"]:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div#main-content-container div.page-hierarchy{width:566px}
    body:not(.cl-side)[data-page="home"]:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div#journals div.references{max-width:900px;max-height:800px;overflow-y:auto;outline:3px solid var(--ls-guideline-color);outline-offset:2px;border-radius:.6em;padding-left:3em;margin-left:6em}
    body:not(.cl-side)[data-page="home"]:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div#today-queries+div.flex.flex-col{position:fixed;bottom:1em;padding:.3em;outline:4px solid var(--ls-guideline-color);outline-offset:3px;border-radius:1.2em;background:unset;backdrop-filter:blur(20px);font-size:small;max-height:30vh;overflow:auto;z-index:1}
    body:not(.cl-side)[data-page="home"] main.ls-right-sidebar-open div#today-queries+div.flex.flex-col,body:not(.cl-side)[data-page="home"].is-pdf-active div#today-queries+div.flex.flex-col{display:none}
    body:not(.cl-side)[data-page="home"]:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div#today-queries{width:560px;position:fixed;right:0;top:calc(var(--ls-headbar-height) + var(--ls-headbar-inner-top-padding));bottom:3px;overflow-y:scroll;font-size:smaller;border-left:2px solid var(--ls-guideline-color);padding:.12em}
    body:not(.cl-side)[data-page="home"] main.ls-right-sidebar-open div#root div#journals div#today-queries,body:not(.cl-side)[data-page="home"].is-pdf-active div#root div#journals div#today-queries{display:none}
    body:not(.cl-side)[data-page="home"].is-tabs-loaded div#root div#journals div#today-queries{top:calc(var(--ls-headbar-height) + var(--ls-headbar-inner-top-padding) + 40px)}
    body:not(.cl-side)[data-page="home"] div#today-queries .now,body:not(.cl-side)[data-page="home"] div#today-queries .later,body:not(.cl-side)[data-page="home"] div#today-queries .doing,body:not(.cl-side)[data-page="home"] div#today-queries .todo{font-weight:600}
    body:not(.cl-side)[data-page="home"] div#today-queries>div.lazy-visibility div.custom-query{margin-top:.1em;margin-bottom:.8em}
    body:not(.cl-side)[data-page="home"] div#today-queries>div.lazy-visibility div.custom-query div.custom-query-title{outline:2px solid var(--ls-guideline-color);font-size:medium;background:var(--ls-page-blockquote-bg-color)}
    body:not(.cl-side)[data-page="home"] div#today-queries>div.lazy-visibility div.custom-query div.custom-query-title:hover{outline:4px}
    body:not(.cl-side)[data-page="home"] div#today-queries.mt-10{margin-top:.1em}
    body:not(.cl-side)[data-page="home"] div#today-queries>div.lazy-visibility div.custom-query div.content{padding-top:.15em}
    body:not(.cl-side)[data-page="home"] div#today-queries>div.lazy-visibility div.custom-query div.content div.lazy-visibility:not(:last-of-type){border-bottom:3px dotted var(--ls-guideline-color);padding:.6em}
    body:not(.cl-side)[data-page="home"] div#today-queries>div.lazy-visibility div.custom-query div.content div.lazy-visibility{border-right:4px solid var(--ls-page-blockquote-bg-color)}
    body:not(.cl-side)[data-page="home"] div#today-queries>div.lazy-visibility div.custom-query div.my-2{padding:.2em;margin:.2em}
    body:not(.cl-side)[data-page="home"] div#today-queries>div.lazy-visibility div.custom-query div.breadcrumb.block-parents{color:var(--ct-external-link-color);margin-bottom:.6em}
    body:not(.cl-side)[data-page="home"] div#today-queries .sm\:px-7{padding-left:unset}
    body:not(.cl-side)[data-page="home"] div#today-queries h2,body:not(.cl-side)[data-page="home"] div#today-queries h3,body:not(.cl-side)[data-page="home"] div#today-queries h4{font-size:16px;padding:4px}
    body:not(.cl-side)[data-page="home"] div#main-content-container{margin:0;padding-top:unset}
    body:not(.cl-side)[data-page="home"]:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div#main-container{padding-right:622px}
    body:not(.cl-side)[data-page="home"]:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div#today-queries{width:620px}
    body:not(.cl-side)[data-page="home"]:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div#today-queries+div.flex.flex-col{right:20px}
    }
    @media screen and (min-width: 2260px) {
    body:not(.cl-side)[data-page="home"]:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div#journals div.journal>div.flex.flex-col:first-child{min-width:1200px;max-width:1430px}
    body:not(.cl-side)[data-page="home"]:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div#main-container{padding-right:706px}
    body:not(.cl-side)[data-page="home"]:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div#journals div.journal>div.flex.flex-col:first-child{max-width:1250px}
    body:not(.cl-side)[data-page="home"]:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div#journals div#today-queries{width:704px}
    }
    @media screen and (min-width: 2780px) {
    body:not(.cl-side)[data-page="home"]:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div#journals div#today-queries+div.flex.flex-col{right:720px}
    }
`);

    parent.document.body.classList.add('is-plugin-column-layout-enabled');
    logseq.beforeunload(async () => {
        parent.document.body.classList.remove('is-plugin-column-layout-enabled');
    });
    logseq.onSettingsChanged((newSettings, oldSettings) => {
        onSettingsChangedCallback(newSettings, oldSettings);
    });

};/* end_main */


// Setting changed
const onSettingsChangedCallback = (newSet, oldSet) => {
    if (oldSet.booleanLinkedReferences !== false && newSet.booleanLinkedReferences === false) {
        parent.document.body.classList.remove('cl-side');
    } else if (oldSet.booleanLinkedReferences !== true && newSet.booleanLinkedReferences === true) {
        parent.document.body.classList.add('cl-side');
    }
    if (oldSet.booleanRightSidebar !== false && newSet.booleanRightSidebar === false) {
        parent.document.body.classList.remove('cl-switchRightSidebar');
    } else if (oldSet.booleanRightSidebar !== true && newSet.booleanRightSidebar === true) {
        parent.document.body.classList.add('cl-switchRightSidebar');
    }
}

logseq.ready(main).catch(console.error);