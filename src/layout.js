import '@logseq/libs';


export const ColumnLayoutStyle = () => {

const RightSidebar = logseq.settings.switchRightSidebar || "";
const TagsHierarchy = logseq.settings.switchTagsHierarchy || "";
const LinkedReferences = logseq.settings.switchLinkedReferences || "";
const pageLinkedReferences = logseq.settings.switchPageLinkedReferences || "";

//require CSS

logseq.provideStyle(String.raw`
    @media screen and (min-width: 1850px) {
        /*

        Fix bugs
        
        */

        /* Fix "Extra space when journal queries are not active #6773" */
        body[data-page="home"] div#today-queries>div.lazy-visibility {
            min-height: unset !important;
        }
        
        /* journal queries No shadow */
        body[data-page="home"] div#today-queries>div.lazy-visibility>div.shadow {
            display: none;
        }
        
        /* background conflict journal queries */
        body[data-page="home"] div#today-queries div.color-level div.blocks-container,
        body[data-page="home"] div#today-queries div.color-level {
            background-color: unset;
        }
        
        div#time-repeater {
            min-width: 200px;
        }
        
        /*
        
        Tweak
        
        */
        
        /* image toolbar */
        div.block-content div.asset-container div.asset-overlay {
            background-image: none;
        }
        
        /* images sizeDown */
        div#main-content-container div.asset-container img {
            max-width: 600px;
        }
        
        .block-content .asset-container .asset-action-bar {
            background: rgba(6, 6, 6, 0.7);
            color: #fff;
            font-size: small;
        }
        
        /* left-sidebar */
        div.nav-content-item-inner {
            margin-top: 2em;
        }
        
        /* blockquote */
        div#main-content-container blockquote {
            font-size: 0.95em;
        }
        
        /* Task */
        div#main-content-container .now,
        div#main-content-container .doing,
        div#main-content-container .later,
        div#main-content-container .todo {
            background: linear-gradient(transparent 80%,
                    var(--ls-block-highlight-color) 30%);
            font-weight: bold;
            font-size: 1.1em;
        }
        
        /* checkbox */
        div#main-content-container input.form-checkbox {
            transform: scale(1.1);
        }
        
        div#main-content-container input.form-checkbox+div input.form-checkbox {
            transform: scale(0.6);
            pointer-events: none;
        }
        
        /* double checkbox */
        div#main-content-container div:not(.page-blocks-inner) input.form-checkbox+a+div input.form-checkbox {
            transform: scale(0.9);
        }
        
        div#main-content-container input.form-checkbox+div input.form-checkbox+a,
        div#main-content-container div:not(.page-blocks-inner) input.form-checkbox+a+div input.form-checkbox+a {
            text-decoration: line-through;
            font-size: small;
            pointer-events: none;
        }
        
        div#main-content-container input.form-checkbox+div a {
            font-size: medium;
        }
        
        /* #kanban */
        div#root [data-refs-self*="kanban"]>.block-children-container>.block-children {
            overflow-x: scroll;
            padding: 1em;
            margin-top: 1em;
            font-size: smaller;
            scroll-snap-type: x;
        }

        main.ls-wide-mode div#main-content-container div.relative div.lazy-visibility div.references div.references-blocks div.content>div [data-refs-self*="kanban"]>.block-children-container>.block-children,
        main.ls-wide-mode div#main-content-container div.relative+div+div div.references div.references-blocks div.content>div [data-refs-self*="kanban"]>.block-children-container>.block-children,
        main.ls-wide-mode div#main-content-container div.relative+div+div+div div.references div.references-blocks div.content>div [data-refs-self*="kanban"]>.block-children-container>.block-children,
        div#right-sidebar [data-refs-self*="kanban"]>.block-children-container>.block-children {
            flex-wrap: wrap;
        }

        /* page-tags and hierarchy CANCEL PDF view & right sidebar */
        body.is-pdf-active div#main-content-container div.relative+div.references.mt-6.flex-1.flex-row,
        main.ls-right-sidebar-open div#main-content-container div.relative+div.references.mt-6.flex-1.flex-row,
        body.is-pdf-active div#main-content-container div.page-hierarchy,
        main.ls-right-sidebar-open div#main-content-container div.page-hierarchy,
        div#right-sidebar div.relative+div.references.mt-6.flex-1.flex-row,
        div#right-sidebar div.page-hierarchy {
            display: none;
        }

        div#main-container div.cp__sidebar-main-content {
            max-width: unset;
        }
        
        div.timestamp div#date-time-picker:nth-of-type(2),
        div.timestamp div#date-time-picker:nth-of-type(3) {
            width: 400px;
            background: var(--color-level-1);
        }

        /* date-picker issue https://github.com/YU000jp/Logseq-column-Layout/issues/4 */
        div.timestamp div#date-time-picker {
            top: 3.8em;
            z-index: 11;
        }

        div.date-picker {
            width: 280px;
        }
    }
`);



//switch linked References

//journal queries Side & Linked References Side
if (LinkedReferences === undefined || LinkedReferences === "Side") {
    logseq.provideStyle(String.raw`

    @media screen and (min-width: 1850px) {

        /* journals */
        body[data-page="home"]:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div#main-content-container div.flex-1.journal.page {
            display: flex;
            justify-content: flex-start;
        }
    
        body[data-page="home"]:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div.journal>div.flex.flex-col:first-child {
            margin-left: 1em;
            flex: 1;
        }
    
        /*
    
        Journal Linked References
        
        */
    
        body[data-page="home"] div#journals div.references div.pt-6 {
            padding: 0.1em;
        }
    
        body[data-page="home"]:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div#journals div.references div.hidden {
            width: 670px;
            display: block;
        }
    
        body[data-page="home"] div#journals div.journal.page div.lazy-visibility div.fade-enter-active {
            height: 100%;
        }
    
        body[data-page="home"] div#journals div.journal>div.lazy-visibility div.references-blocks div.flex.flex-col>div,
        body[data-page="home"] div#journals div.references div.references-blocks div.lazy-visibility div.px-2 {
            padding-left: 0;
            padding-right: 0;
        }
    
        body[data-page="home"]:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div#journals div.references {
            max-height: 60vh;
            overflow-y: scroll;
            position: sticky;
            top: 0.5em;
            bottom: 3em;
            padding: 0.4em;
            margin-right: 5px;
            z-index: 0;
            border-radius: 0.6em;
            background: var(--color-level-1);
            outline: 3px solid var(--ls-guideline-color);
            outline-offset: 3px;
        }
    
        body[data-page="home"]:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div#journals div.references:hover {
            background: unset;
            backdrop-filter: blur(40px);
            min-width: 670px;
            max-width: 670px;
            overflow-x: visible;
            z-index: var(--ls-z-index-level-1);
        }
    
        /* CANCEL IF right-sidebar */
        /* CANCEL IF PDF-view */
        body[data-page="home"] main.ls-right-sidebar-open div#journals div.references,
        body[data-page="home"].is-pdf-active div#journals div.references {
            display: none;
        }
    
        //switch journal queries
        //Side
        /* content-size */
        :root {
            --ls-main-content-max-width: auto !important;
            --ls-main-content-max-width-wide: auto !important;
        }
    
        body[data-page="home"]:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div.journal>div.flex.flex-col:first-child {
            max-width: 1170px;
        }
    
        /*
    Journal-queries space
    */
    
        body[data-page="home"]:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div#journals div.block-children-container {
            display: block;
        }
    
        /*
    
    SCHEDULED AND DEADLINE
    
    */
    
        body[data-page="home"]:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div#today-queries+div.flex.flex-col {
            position: fixed;
            bottom: 1em;
            padding: 0.3em;
            outline: 3px solid var(--ls-guideline-color);
            outline-offset: 3px;
            border-radius: 1.2em;
            background: unset;
            backdrop-filter: blur(40px);
            font-size: small;
            max-height: 30vh;
            overflow: auto;
            z-index: 1;
        }
    
        /* CANCEL IF right sidebar */
        /* CANCEL IF PDF-view CANCEL */
        body[data-page="home"] main.ls-right-sidebar-open div#today-queries+div.flex.flex-col,
        body[data-page="home"] body.is-pdf-active div#today-queries+div.flex.flex-col {
            display: none;
        }
    
        /*
    
    Journal queries
    
    */
    
        /* IF Not right sidebar */
        body[data-page="home"]:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div#today-queries {
            width: 390px;
            position: fixed;
            right: 0;
            top: calc(var(--ls-headbar-height) + var(--ls-headbar-inner-top-padding));
            bottom: 3px;
            overflow-y: scroll;
            font-size: smaller;
            border-left: 2px solid var(--ls-guideline-color);
            padding: 0.12em;
        }
    
        /* CANCEL IF right-sidebar */
        /* CANCEL IF PDF-view */
        body[data-page="home"] main.ls-right-sidebar-open div#root div#journals div#today-queries,
        body[data-page="home"].is-pdf-active div#root div#journals div#today-queries {
            display: none;
        }
    
        /* IF tabs-plugin */
        body[data-page="home"].is-tabs-loaded div#root div#journals div#today-queries {
            top: calc(var(--ls-headbar-height) + var(--ls-headbar-inner-top-padding) + 40px);
        }
    
        /* Task in query --> bold */
        body[data-page="home"] div#today-queries .now,
        body[data-page="home"] div#today-queries .later,
        body[data-page="home"] div#today-queries .doing,
        body[data-page="home"] div#today-queries .todo {
            font-weight: 600;
        }
    
        body[data-page="home"] div#today-queries>div.lazy-visibility div.custom-query {
            margin-top: 0.1em;
            margin-bottom: 0.8em;
        }
    
        body[data-page="home"] div#today-queries>div.lazy-visibility div.custom-query div.custom-query-title {
            outline: 2px solid var(--ls-guideline-color);
            font-size: medium;
            background: var(--ls-page-blockquote-bg-color);
        }
    
        body[data-page="home"] div#today-queries>div.lazy-visibility div.custom-query div.custom-query-title:hover {
            outline: 4px;
        }
    
        body[data-page="home"] div#today-queries.mt-10 {
            margin-top: 0.1em;
        }
    
        body[data-page="home"] div#today-queries>div.lazy-visibility div.custom-query div.content {
            padding-top: 0.15em;
        }
    
        body[data-page="home"] div#today-queries>div.lazy-visibility div.custom-query div.content div.lazy-visibility:not(:last-of-type) {
            border-bottom: 3px dotted var(--ls-guideline-color);
            padding: 0.6em;
        }
    
        body[data-page="home"] div#today-queries>div.lazy-visibility div.custom-query div.content div.lazy-visibility {
            border-right: 4px solid var(--ls-page-blockquote-bg-color);
        }
    
        body[data-page="home"] div#today-queries>div.lazy-visibility div.custom-query div.my-2 {
            padding: 0.2em;
            margin: 0.2em;
        }
    
        body[data-page="home"] div#today-queries>div.lazy-visibility div.custom-query div.breadcrumb.block-parents {
            color: var(--ct-external-link-color);
            margin-bottom: 0.6em;
        }
    
        body[data-page="home"] div#today-queries .sm\:px-7 {
            padding-left: unset;
        }
    
        /* Journal-queries h2-h4 header */
        body[data-page="home"] div#today-queries h2,
        body[data-page="home"] div#today-queries h3,
        body[data-page="home"] div#today-queries h4 {
            font-size: 16px;
            padding: 4px;
        }
    
        /* remove space */
        body[data-page="home"]:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div#main-content-container {
            margin: 0;
            padding-top: unset;
        }
    
    }


    @media screen and (min-width: 1850px) and (max-width: 1910px) {

        body[data-page="home"]:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div#main-content-container,
        body[data-page="home"]:not(.is-pdf-active) main:not(.ls-left-sidebar-open) div#main-content-container {
            padding-left: 1em;
        }

        body[data-page="home"]:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div#today-queries,
        body[data-page="home"]:not(.is-pdf-active) main:not(.ls-left-sidebar-open) div#today-queries {
            width: 360px;
        }

        body[data-page="home"]:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div.journal>div.flex.flex-col:first-child {
            min-width: 850px;
        }

        /* SCHEDULED AND DEADLINE */
        body[data-page="home"]:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div#today-queries+div.flex.flex-col {
            width: 380px;
        }

    }

    @media screen and (min-width: 1911px) and (max-width: 2019px) {

        body[data-page="home"]:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div.journal>div.flex.flex-col:first-child {
            min-width: 920px;
        }

        /* SCHEDULED AND DEADLINE */
        body[data-page="home"]:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div#today-queries+div.flex.flex-col {
            width: 460px;
        }
    
    }

    @media screen and (min-width: 2020px) {

        body[data-page="home"]:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div#journals div.references {
            min-width: 670px;
        }

        body[data-page="home"]:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div.journal>div.flex.flex-col:first-child {
            min-width: 1000px;
        }

        /* SCHEDULED AND DEADLINE */
        body[data-page="home"]:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div#today-queries+div.flex.flex-col {
            width: 520px;
        }

    }


    @media screen and (min-width: 1850px) and (max-width: 2259px) {

        body[data-page="home"]:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div#journals div.references {
            min-width: 350px;
            max-width: 400px;
        }

        /* SCHEDULED AND DEADLINE */
        body[data-page="home"]:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div#today-queries+div.flex.flex-col {
            right: 400px;
        }
    
        /* journal queries space */
        body[data-page="home"]:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div#journals {
            margin-right: 360px;
        }
    }
    
    @media screen and (min-width: 2260px) {

        body[data-page="home"]:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div#journals div.references {
            min-width: 400px;
            max-width: 670px;
        }

        body[data-page="home"]:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div#journals div.journal>div.flex.flex-col:first-child {
            max-width: 1250px;
            margin-left: 4em;
        }
    
        /* SCHEDULED AND DEADLINE */
        body[data-page="home"]:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div#journals div#today-queries+div.flex.flex-col {
            right: 525px;
        }
    
        /* journal queries space */
    
        body[data-page="home"]:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div#journals div#today-queries {
            width: 500px;
        }

        body[data-page="home"]:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div#journals {
            margin-right: 500px;
        }
    }
    
    @media screen and (min-width: 2800px) {

        body[data-page="home"]:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div#journals div.references {
            min-width: 670px;
            max-width: 670px;
        }

        body[data-page="home"]:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div#journals div.journal>div.flex.flex-col:first-child {
            min-width: 1200px;
            max-width: 1430px;
        }
    
        /* SCHEDULED AND DEADLINE */
        body[data-page="home"]:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div#journals div#today-queries+div.flex.flex-col {
            right: 640px;
        }
    
        /* journal queries space */
    
        body[data-page="home"]:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div#journals div#today-queries {
            width: 620px;
        }
    
        /* IF Not right sidebar */
        body[data-page="home"]:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div#journals {
            margin-right: 620px;
        }

    }

`);


} else {


    //Not Side

    logseq.provideStyle(String.raw`

    @media screen and (min-width: 1850px) {
    
        /* Contents Page */
        body[data-page="home"]:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div#main-content-container div.relative+div.references.mt-6.flex-1.flex-row,
        body[data-page="home"]:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div#main-content-container div.page-hierarchy {
            width: 566px;
        }
    
        /* IF not right sidebar */
        body[data-page="home"]:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div#journals div.references {
            max-width: 900px;
            max-height: 800px;
            overflow-y: auto;
            outline: 3px solid var(--ls-guideline-color);
            outline-offset: 2px;
            border-radius: 0.6em;
            padding-left: 3em;
            margin-left: 6em;
        }
    
        /*
    
        SCHEDULED AND DEADLINE
        
        */
    
        body[data-page="home"]:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div#today-queries+div.flex.flex-col {
            position: fixed;
            bottom: 1em;
            padding: 0.3em;
            outline: 4px solid var(--ls-guideline-color);
            outline-offset: 3px;
            border-radius: 1.2em;
            background: unset;
            backdrop-filter: blur(20px);
            font-size: small;
            max-height: 30vh;
            overflow: auto;
            z-index: 1;
        }
    
        /* CANCEL IF right sidebar */
        /* CANCEL IF PDF-view CANCEL */
        body[data-page="home"] main.ls-right-sidebar-open div#today-queries+div.flex.flex-col,
        body[data-page="home"].is-pdf-active div#today-queries+div.flex.flex-col {
            display: none;
        }
    
        /*
        
        /*
    
        Journal queries
        
        */
    
        /* IF Not right sidebar */
        body[data-page="home"]:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div#today-queries {
            width: 560px;
            position: fixed;
            right: 0;
            top: calc(var(--ls-headbar-height) + var(--ls-headbar-inner-top-padding));
            bottom: 3px;
            overflow-y: scroll;
            font-size: smaller;
            border-left: 2px solid var(--ls-guideline-color);
            padding: 0.12em;
        }
    
        /* CANCEL */
        body[data-page="home"] main.ls-right-sidebar-open div#root div#journals div#today-queries,
        body[data-page="home"].is-pdf-active div#root div#journals div#today-queries {
            display: none;
        }
    
        /* IF tabs-plugin */
        body[data-page="home"].is-tabs-loaded div#root div#journals div#today-queries {
            top: calc(var(--ls-headbar-height) + var(--ls-headbar-inner-top-padding) + 40px);
        }
    
        /* Task in query --> bold */
        body[data-page="home"] div#today-queries .now,
        body[data-page="home"] div#today-queries .later,
        body[data-page="home"] div#today-queries .doing,
        body[data-page="home"] div#today-queries .todo {
            font-weight: 600;
        }
    
        body[data-page="home"] div#today-queries>div.lazy-visibility div.custom-query {
            margin-top: 0.1em;
            margin-bottom: 0.8em;
        }
    
        body[data-page="home"] div#today-queries>div.lazy-visibility div.custom-query div.custom-query-title {
            outline: 2px solid var(--ls-guideline-color);
            font-size: medium;
            background: var(--ls-page-blockquote-bg-color);
        }
    
        body[data-page="home"] div#today-queries>div.lazy-visibility div.custom-query div.custom-query-title:hover {
            outline: 4px;
        }
    
        body[data-page="home"] div#today-queries.mt-10 {
            margin-top: 0.1em;
        }
    
        body[data-page="home"] div#today-queries>div.lazy-visibility div.custom-query div.content {
            padding-top: 0.15em;
        }
    
        body[data-page="home"] div#today-queries>div.lazy-visibility div.custom-query div.content div.lazy-visibility:not(:last-of-type) {
            border-bottom: 3px dotted var(--ls-guideline-color);
            padding: 0.6em;
        }
    
        body[data-page="home"] div#today-queries>div.lazy-visibility div.custom-query div.content div.lazy-visibility {
            border-right: 4px solid var(--ls-page-blockquote-bg-color);
        }
    
        body[data-page="home"] div#today-queries>div.lazy-visibility div.custom-query div.my-2 {
            padding: 0.2em;
            margin: 0.2em;
        }
    
        body[data-page="home"] div#today-queries>div.lazy-visibility div.custom-query div.breadcrumb.block-parents {
            color: var(--ct-external-link-color);
            margin-bottom: 0.6em;
        }
    
        body[data-page="home"] div#today-queries .sm\:px-7 {
            padding-left: unset;
        }
    
        /* Journal-queries h2-h4 header */
        body[data-page="home"] div#today-queries h2,
        body[data-page="home"] div#today-queries h3,
        body[data-page="home"] div#today-queries h4 {
            font-size: 16px;
            padding: 4px;
        }
    
        /* remove space */
        body[data-page="home"] div#main-content-container {
            margin: 0;
            padding-top: unset;
        }
    
        body[data-page="home"]:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div#main-container {
            padding-right: 622px;
        }
    
        /* journal queries */
        body[data-page="home"]:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div#today-queries {
            width: 620px;
        }
    
        /* SCHEDULED AND DEADLINE */
        body[data-page="home"]:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div#today-queries+div.flex.flex-col {
            right: 20px;
        }
    
    }
    
    @media screen and (min-width: 2260px) {
    
        body[data-page="home"]:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div#journals div.journal>div.flex.flex-col:first-child {
            min-width: 1200px;
            max-width: 1430px;
        }
    
        body[data-page="home"]:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div#main-container {
            padding-right: 706px;
        }
    
        body[data-page="home"]:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div#journals div.journal>div.flex.flex-col:first-child {
            max-width: 1250px;
        }
    
        /* journal queries */
        body[data-page="home"]:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div#journals div#today-queries {
            width: 704px;
        }
    }
    
    @media screen and (min-width: 2780px) {
    
        /* SCHEDULED AND DEADLINE */
        body[data-page="home"]:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div#journals div#today-queries+div.flex.flex-col {
            right: 720px;
        }
    
    }
`);
}



//page Linked References

if (pageLinkedReferences === "Enable") {
    logseq.provideStyle(String.raw`
    @media screen and (min-width: 1850px) {
        /*
        
        page Linked References
        
        */
        body[data-page="page"] div#main-content-container div.relative div.lazy-visibility div.references {
            margin-top: 4em;
            margin-bottom: 4em;
        }
        
        body[data-page="page"]:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div#main-content-container div.relative div.lazy-visibility div.references div.references-blocks div.content>div,
        body[data-page="page"]:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div#main-content-container div.relative+div+div div.references div.references-blocks div.content>div,
        body[data-page="page"]:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div#main-content-container div.relative+div+div+div div.references div.references-blocks div.content>div {
            gap: 1.2em;
        }
        
        body[data-page="page"]:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div#main-content-container div.relative div.lazy-visibility div.references div.references-blocks div.content>div>div.lazy-visibility,
        body[data-page="page"]:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div#main-content-container div.relative+div+div div.references div.references-blocks div.content>div>div.lazy-visibility,
        body[data-page="page"]:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div#main-content-container div.relative+div+div+div div.references div.references-blocks div.content>div>div.lazy-visibility {
            overflow: auto;
            border-radius: 1em;
            border: 2px solid var(--color-level-1);
            max-height: 450px;
            display: block;
            margin: 0.2em;
        }
        
        body[data-page="page"] div#main-content-container div.relative h2.font-bold {
            display: block;
            margin-left: auto;
            margin-right: auto;
        }
    }
`);
}



//switch right sidebar

if (RightSidebar === undefined || RightSidebar === "original") {
    logseq.provideStyle(String.raw`
        @media screen and (min-width: 1850px) {
        
            div#right-sidebar {
                border: 4px var(--ls-guideline-color);
                border-radius: 0.25em;
                overflow: scroll;
                background-color: unset;
            }
        
            div#right-sidebar div.resizer {
                background: var(--ls-guideline-color);
            }
        
            div#right-sidebar::-webkit-scrollbar {
                width: 12px;
                background: var(--ls-guideline-color);
            }
        
            /* right-sidebar-background */
            div#right-sidebar div.cp__right-sidebar-scrollable>div+div {
                background-image: linear-gradient(var(--color-level-1) 25%,
                        transparent 25%);
                background-size: 50px 15px;
            }
        
            div#right-sidebar div.cp__right-sidebar-scrollable>div.cp__right-sidebar-topbar {
                height: unset;
            }
        
            div#right-sidebar div.cp__right-sidebar div.sidebar-item {
                padding-top: unset;
            }
        
            div#right-sidebar div.sidebar-item-list {
                display: flex;
                flex-direction: column;
                flex-wrap: wrap;
                align-content: flex-start;
                overflow-x: scroll;
                font-size: 0.96em;
                scroll-snap-type: x;
            }
        
            div#right-sidebar div.sidebar-item-list::-webkit-scrollbar {
                height: 12px;
            }
        
            div#right-sidebar div.sidebar-item.content>div>div:first-of-type {
                margin-top: 0;
                margin-bottom: 0.4em;
                position: sticky !important;
                top: -1em;
                backdrop-filter: blur(20px);
                z-index: +1;
                font-weight: 700;
            }
        
            div#right-sidebar div.sidebar-item.content {
                min-width: 550px;
                max-width: 900px;
                resize: both;
                align-self: flex-start;
                margin-bottom: 0.4em;
                max-height: fit-content;
                overflow-y: visible;
                padding-bottom: 3em;
                background: var(--ls-primary-background-color);
            }
        
            div#right-sidebar div.sidebar-item-list {
                display: flex;
                padding-bottom: 0;
                margin: unset;
                height: calc(99vh - 20px);
            }
        
            /* IF tabs-plugin */
            body.is-tabs-loaded div#right-sidebar div.sidebar-item-list {
                height: calc(99vh - 60px);
            }
        
            div#right-sidebar div.sidebar-item-list div.sidebar-item.flex-col {
                width: 100% !important;
            }
        
            div#right-sidebar div.graph {
                height: 800px !important;
            }
        
            div#right-sidebar div.graph canvas {
                height: 100% !important;
                width: 100% !important;
                border: 2px double;
            }
        
            div#right-sidebar div.sidebar-item {
                overflow: auto;
            }
        
            div#right-sidebar div.sidebar-item::-webkit-scrollbar {
                width: 15px;
                height: 20px;
            }
        
            div.cp__right-sidebar {
                transition: unset;
            }
        
            /* right-sidebar Tables-Wrap */
            div#right-sidebar .table-auto {
                table-layout: fixed;
                width: 90%;
            }
        
            div#right-sidebar .table-auto td.whitespace-nowrap {
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
        
            /* right-sidebar collapse */
            div#right-sidebar div.sidebar-item.content span.rotating-arrow:first-child {
                transform: scale(2, 2);
                margin-right: 0.6em;
            }
        
            div.cp__right-sidebar div.sidebar-item a.close {
                transform: unset;
                margin-left: 1em;
            }
        
            div#right-sidebar div.relative+div.references.mt-6.flex-1.flex-row,
            div#right-sidebar div.page-hierarchy,
            div#right-sidebar div.sidebar-item div.is-journals div.relative+div.flex.flex-col,
            main.ls-right-sidebar-open div#today-queries {
                display: none;
            }
        
            /* hidden-bar */
            div#right-sidebar div.hidden {
                display: block;
                margin-top: 1em;
                margin-bottom: -2em;
                padding: 0;
                width: 100%;
                height: 1em;
                background-color: var(--color-level-3);
                border-radius: 1.5em;
            }
        
            div#right-sidebar div.hidden div {
                display: none;
            }
        
            div#right-sidebar div.sidebar-item.content div.initial {
                min-height: 400px;
            }
        
            /* right-sidebar topbar */
            div#right-sidebar div.cp__right-sidebar-topbar {
                flex-direction: row-reverse;
            }
        
            div#right-sidebar span.ls-icon-layout-sidebar-right svg {
                width: 24px;
                height: 24px;
            }
        
            main.ls-right-sidebar-open div#main-content-container {
                justify-content: left;
                padding-left: 1em;
            }

            main.ls-right-sidebar-open div[data-modal-name="page-search"] {
                transform: unset !important;
                left: unset;
            }
        
        
            /* ELSE PDF view & right sidebar */
            body:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div#main-content-container div.flex-1.page.relative {
                margin-bottom: 2em;
                margin-top: 2em;
                margin-left: 1.5em;
            }           
            
            /* Non fix (TODO) */
            /* CANCEL double time picker */
            div#right-sidebar div#date-time-picker {
                width: 300px;
                background: var(--color-level-1);
                z-index: var(--ls-z-index-level-4);
            }

        }
`);
}


//switch page-tags and hierarchy
//Side
if (TagsHierarchy === undefined || TagsHierarchy === "Side") {
    logseq.provideStyle(String.raw`

        @media screen and (min-width: 1850px) {

            body[data-page="page"] main.ls-wide-mode div#main-content-container div.cp__sidebar-main-content {
                max-width: 1450px;
            }

            body[data-page="page"]:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div#main-content-container div.flex-1.page.relative {
                margin-bottom: 2em;
                margin-top: 2em;
                margin-left: 1.5em;
            }
        
            /* right-space */
            body[data-page="page"]:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div#main-content-container div.relative+div.references.mt-6.flex-1.flex-row,
            body[data-page="page"]:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div#main-content-container div.page-hierarchy {
                position: fixed;
                width: 390px;
                max-height: 40vh;
                overflow-y: auto;
                padding: 1.5em;
                font-size: 0.95em;
                background-color: var(--ls-primary-background-color);
                border-radius: 10px;
            }
        
            /* Pages-tagged-with */
            body[data-page="page"]:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div#main-content-container div.relative+div.references.mt-6.flex-1.flex-row {
                top: 6.5em;
                right: 1em;
            }
        
            body[data-page="page"]:not(.is-tabs-loaded.is-pdf-active) main:not(.ls-right-sidebar-open) div#main-content-container div.relative+div.references.mt-6.flex-1.flex-row {
                top: 4.5em;
            }
        
            /* page-hierarchy */
            body[data-page="page"]:not(.is-pdf-active) div#main-content-container div.page-hierarchy,
            body[data-page="page"]:not(.ls-right-sidebar-open) div#main-content-container div.page-hierarchy {
                right: 1em;
                bottom: 3em;
            }    
        
        }

        
        @media screen and (min-width: 1850px) and (max-width: 2259px) {

            body[data-page="page"]:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div#main-container {
                padding-right: 424px;
            }
    
            /* Contents Page */
            body[data-page="page"]:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div#main-content-container div.relative+div.references.mt-6.flex-1.flex-row,
            body[data-page="page"]:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div#main-content-container div.page-hierarchy {
                width: 420px;
            }
    
        }
        @media screen and (min-width: 2260px) {
    
            body[data-page="page"]:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div#main-container {
                padding-right: 684px;
            }
    
            /* Contents Page */
            body[data-page="page"]:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div#main-content-container div.relative+div.references.mt-6.flex-1.flex-row,
            body[data-page="page"]:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div#main-content-container div.page-hierarchy {
                width: 680px;
            }
        
        }
`);


    //Page-tags and Hierarchy
    //Bottom
} else if (TagsHierarchy === "Bottom") {
    logseq.provideStyle(String.raw`

        /* Bottom < 1624 */
        @media screen and (min-width: 1850px) {
            
            body[data-page="page"] div#main-content-container div.cp__sidebar-main-content {
                max-width: 1450px;
            }

            body[data-page="page"]:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div#main-content-container div.flex-1.page.relative {
                margin-bottom: 2em;
                margin-top: 2em;
                margin-left: 1.5em;
            }
        
            /* right-space */
            body[data-page="page"]:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div#main-content-container div.relative+div.references.mt-6.flex-1.flex-row,
            body[data-page="page"]:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div#main-content-container div.page-hierarchy {
                position: fixed;
                max-height: 210px;
                width: 42vw;
                overflow-y: auto;
                padding: 1.5em;
                font-size: 0.95em;
                background-color: var(--ls-primary-background-color);
                border-radius: 10px;
                z-index: var(--ls-z-index-level-3);
            }
        
            /* Pages-tagged-with */
            body[data-page="page"]:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div#main-content-container div.relative+div.references.mt-6.flex-1.flex-row {
                bottom: 0;
                right: 0.3em;
            }
        
            /* page-hierarchy */
            body[data-page="page"]:not(.is-pdf-active) div#main-content-container div.page-hierarchy,
            body[data-page="page"] main:not(.ls-right-sidebar-open) div#main-content-container div.page-hierarchy {
                right: 42vw;
                bottom: 0;
            }
        }

`);
}

};