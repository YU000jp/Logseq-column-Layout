function main() {
    logseq.provideStyle(String.raw`

/* Screen size */
@supports (display: flex) {
    @media screen and (min-width: 1850px) {
        /* left-sidebar tweak */
        div.nav-content-item-inner {
            margin-top: 2em;
        }
        div#main-content-container blockquote {
            font-size: 0.95em;
        }
        /* Tweak Link :hover */
        div#main-content-container a:hover {
            font-weight: 600;
            font-size: 1.1em;
        }
        /* Tweak Task */
        div#main-content-container .now,
        div#main-content-container .doing,
        div#main-content-container .later,
        div#main-content-container .todo {
            background: linear-gradient(transparent 80%,var(--ls-block-highlight-color) 30%);
        }
        /* Tweak checkbox */
        div#main-content-container input.form-checkbox {
            transform: scale(1.1);
        }
        div#main-content-container input.form-checkbox+div input.form-checkbox {
            transform: scale(0.6);
        }
        div#main-content-container input.form-checkbox+div a {
            font-size: medium;
        }
        /* Task */
        div#main-content-container .now,
        div#main-content-container .later,
        div#main-content-container .doing,
        div#main-content-container .todo {
            font-weight: bold;
            font-size: 1.1em;
        }
        /* Images sizedown */
        div#main-content-container div.asset-container img {
            max-width: 600px;
        }
        div#main-content-container div.flex-1.journal.page {
            display: flex;
            flex-wrap: nowrap;
            justify-content: space-between;
        }
        /* content-size */
        :root {
            --ls-main-content-max-width: 2000px !important;
            --ls-main-content-max-width-wide:  auto !important;
        }
        /* Journal-queries space */
        div#journals {
            margin-right: 360px;
        }
        /* Journals */
        div.journal>div.flex.flex-col:first-child {
            margin-left: 1.4em;
            min-width: 750px;
            flex: 3;
        }
        /* SCHEDULED AND DEADLINE */
        div#journals div#today-queries+div.flex.flex-col {
            transform:scale(0.85,0.85);
            position: fixed;
            bottom: 2em;
            right: 364px;
            z-index: var(--ls-z-index-level-1);
            border: 3px dashed var(--ls-link-text-color);
            border-radius: 10px;
            padding: 0.5em;
            max-width: 410px;
            transition: all 0.4s;
        }
        div#journals div#today-queries+div.flex.flex-col:hover {
            transform:scale(1.0,1.0);
            max-width: 500px;
            margin-right: -5em;
            background: rgba(6,6,6,0.3);
            border-color: unset;
        }
        div.light-theme div#today-queries+div.flex.flex-col {
            background: var(--color-level-2)
        }
        div.dark-theme div#today-queries+div.flex.flex-col {
            background-color: var(--ls-primary-background-color);
        }
        /* CANCEL PDF-view */
        body.is-pdf-active div#journals div#today-queries+div.flex.flex-col {
            display: none;            
        }
        /* a Journal Linked References */
        div#journals div.references {
            max-height: 83vh;
            min-width: 370px;
            max-width: 370px;
            overflow-y: scroll;
            font-size: smaller;
            position: sticky;
            top: 10em;
            bottom: 3em;
            transition: all 0.6s;
            margin-right: 4px;
        }
        /* CANCEL PDF-view */
        body.is-pdf-active div#journals div.references {
            display: none;            
        }
        div#journals div.journal.page div.lazy-visibility div.fade-enter-active {
            height: 100%;
        }
        div#journals div.journal>div.lazy-visibility div.references-blocks div.flex.flex-col>div,
        div#journals div.references div.references-blocks div.lazy-visibility div.px-2 {
            padding-left: 0;
            padding-right: 0;
        }
        div.max-w-7xl.mx-auto.pb-24 {
            max-width: unset !important;
        }
        /* Journal-queries */
        div#journals div#today-queries {
            z-index: var(--ls-z-index-level-1);
            width: 385px;
            position: fixed;
            right: 2px;
            top: 92px;
            bottom: 3px;
            overflow-y: scroll;
            font-size: smaller;
            background-color: var(--ls-primary-background-color);
            border-radius: 10px;
            padding: 0.3em;
            transition: all 0.4s;
        }
        /* ELSE tabs-plugin */
        body:not(.is-tabs-loaded) div#root div#journals div#today-queries {
            top:48px;
        }
        /* CANCEL PDF-view */
        body.is-pdf-active div#journals div#today-queries {
            display: none;            
        }
        /* Journal-queries Task */
        div#journals div#today-queries .now,
        div#journals div#today-queries .later,
        div#journals div#today-queries .doing,
        div#journals div#today-queries .todo {
            font-weight: 700;
        }
        /* Fix "Extra space when journal queries are not active #6773" */
        div#journals div#today-queries>div.lazy-visibility {
            min-height: unset !important;
        }
        /* Fix Logseq a bug */
        div#journals div#today-queries>div.lazy-visibility>div.shadow {
            display: none;
        }
        div#journals div#today-queries>div.lazy-visibility div.custom-query {
            background: var(--color-level-1);
            margin-top: 0;
        } 
        div#journals div#today-queries>div.lazy-visibility div.custom-query>div>div.content>div.foldable-title {
            height: 3em;
            background: var(--color-level-2);
        }
        div#journals div#today-queries>div.lazy-visibility div.custom-query>div>div.content>div.foldable-title>div.items-center {
            height: 100%;
            padding: 2px;
        }          
        div#journals div#today-queries.mt-10 {
            margin-top: 0.1em;
        }
        div#journals div#today-queries div.flex.flex-col,
        div#journals div#today-queries div.flex.flex-col div.initial {
            padding: 0;
        }
        div#journals div#today-queries time {
            font-size: medium;
        }
        div#journals div#today-queries .sm\:px-7 {
            padding-left: unset;
        }
        div#journals div#today-queries a.block-marker {
            font-size: 22px;
        }
        /* Journal-queries h2-h4 header sizedown */
        div#journals div#today-queries h2,
        div#journals div#today-queries h3,
        div#journals div#today-queries h4 {
            font-size: 17px;
            padding: 5px;
        }
        /* right-sidebar */
        div#right-sidebar {
            position: fixed;
            right: 0;
            top: 0;
            margin-top: 2em !important;
            z-index: 10;
            border-radius: 0.25em;
            overflow-x: scroll;
            border: 4px double;
            margin-top: unset !important;
        }
        /* ELSE tabs-plugin */
        body:not(.is-tabs-loaded) div#root div#right-sidebar {
            top:50px;
        }
        /* right-sidebar-background */
        div#right-sidebar div.cp__right-sidebar-scrollable>div+div {
            background: rgba(6,6,6,0.8);
        }
        div#right-sidebar div.cp__right-sidebar-scrollable>div.cp__right-sidebar-topbar {
            height: unset;
        }
        div#right-sidebar div.cp__right-sidebar div.sidebar-item {
            min-height: 4em;
            padding-top: unset;
        }
        div#right-sidebar div.sidebar-item-list {
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            align-content: flex-start;
            overflow-x: scroll;
        }
        div#right-sidebar div.sidebar-item.content>div>div:first-of-type {
            margin-top: 0;
            position: sticky !important;
            top: 0;
            padding: 0.3rem;
            z-index: 10;
            backdrop-filter: blur(20px);
            font-size: small;
        }
        div#right-sidebar div.sidebar-item.content {
            min-width: 560px;
            max-width: 800px;
            overflow-y: scroll;
            resize: both;
            display: inline-block;
            align-self: flex-start;
            overflow-y: auto;
            margin-bottom: 1em;
            max-height: 91vh;
        }
        div#right-sidebar div.sidebar-item-list.flex-1.scrollbar-spacing {
            display: flex;
            padding-bottom: 0;
            margin: unset;
        }
        div#right-sidebar div.sidebar-item-list div.sidebar-item.flex-col {
            width: 100% !important;
        }
        div#right-sidebar div.graph {
            height: 500px !important;
        }
        div#right-sidebar div.graph canvas {
            height: 100% !important;
            width: 100% !important;
            border: 2px double;
        }
        div#right-sidebar ::-webkit-scrollbar {
            width: 15px !important;
            height: 20px !important;
        }
        /* For right-sidebar menu */
        div#custom-context-menu {
            z-index: var(--ls-z-index-level-4);
        }
        /* ELSE-pages */
        div#main-content-container div.flex-1.page.relative {
            margin-right: 390px;
            margin-bottom: 2em;
            margin-top: 2em;
            margin-left: 1.5em;
        }
        div#main-content-container div.flex-1.page.relative div.relative {
            max-width: 1600px;
        }
        /* ELSE-pages Linked References */
        div#main-content-container div.relative div.lazy-visibility div.references {
            margin-top: 8em;
            margin-bottom: 4em;
        }
        div#main-content-container div.relative div.lazy-visibility div.references div.references-blocks div.content>div,
        div#main-content-container div.relative+div+div div.references div.references-blocks div.content>div,
        div#main-content-container div.relative+div+div+div div.references div.references-blocks div.content>div {
            flex-direction: row;
            align-items: stretch;
            justify-content: flex-start;
            flex-wrap: wrap;
            gap: 0.8em;
            padding-right: 50px;
        }
        div#main-content-container div.relative div.lazy-visibility div.references div.references-blocks div.content>div>div.lazy-visibility,
        div#main-content-container div.relative+div+div div.references div.references-blocks div.content>div>div.lazy-visibility,
        div#main-content-container div.relative+div+div+div div.references div.references-blocks div.content>div>div.lazy-visibility {
            overflow-x: hidden;
            border-radius: 1.5em;
            max-height: 78vh;
            flex: 28%;
            max-width: 30vh;
        }
        div#main-content-container div.references div.references-blocks div.content>div>div.lazy-visibility div.fade-enter,
        div#main-content-container div.references div.references-blocks div.content>div>div.lazy-visibility div.fade-enter>div,
        div#main-content-container div.references div.references-blocks div.content>div>div.lazy-visibility div.fade-enter div.initial {
            height: 100%;
        }
        iv#main-content-container div.references div.references-blocks div.content>div>div.lazy-visibility:hover div.fade-enter,
        div#main-content-container div.references div.references-blocks div.content>div>div.lazy-visibility:hover div.fade-enter>div,
        div#main-content-container div.references div.references-blocks div.content>div>div.lazy-visibility:hover div.fade-enter div.initial {
            height: unset;
        }
        div#main-content-container div.references div.references-blocks div.content>div>div.lazy-visibility div.fade-enter>div {
            background-color: var(--color-level-1);
            padding: 0.4em;
            margin: 0;
        }

        div#main-content-container div.references  div.references-blocks div.content>div>div.lazy-visibility {
            width: 44vh;
        }
        div#main-content-container div.references  div.references-blocks div.content>div>div.lazy-visibility img {
            max-width: 450px !important;
        }

        /* :not(main.ls-wide-mode) */ 


        /* ELSE Pages right-space */
        div#main-content-container div.relative+div.references.mt-6.flex-1.flex-row,
        div#main-content-container div.page-hierarchy {
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
        div#main-content-container div.relative+div.references.mt-6.flex-1.flex-row {
            top: 6.5em;
            right: 1em;

        }
        body:not(.is-tabs-loaded) div#main-content-container div.relative+div.references.mt-6.flex-1.flex-row {
            top:4.5em;
        }
        /* page-hierarchy */
        div#main-content-container div.page-hierarchy {
            right: 1em;
            bottom: 3em;
        }
        /* #kanban */
         div#root [data-refs-self*="kanban"]>.block-children-container>.block-children {
            overflow-x: scroll;
            padding: 1em;
            margin-top: 1em;
            font-size: smaller;
        }
         div#root [data-refs-self*="kanban"]>.block-children-container>.block-children:hover {
            visibility: visible;
            transform:scale(1.14,1.14);
            border: 2px double;
            left: 40px;
            background: rgba(6,6,6,0.5);
            z-index: var(--ls-z-index-level-3);
            border-radius: 10px;
        }
        div#journals div#today-queries:hover {
            position: fixed;
            top: 90px;
            right: 0;
            width: 480px;
            border: 4px double;
            z-index: 30;
            margin: 0.5em;
            padding-left: 0.75em;
            padding-right: 0.6em;
            background: rgba(6,6,6,0.3);
        }
        body:not(.is-tabs-loaded) div#root div#today-queries:hover {
            top:46px;
        }
        div.journal>div.flex.flex-col:first-child {
            max-width: 1100px;
        }
        div#journals div.references:hover {
            transform:scale(1.06,1.06);
            border: 4px double;
            z-index: var(--ls-z-index-level-2);
            padding: 1em;
            background: rgba(6,6,6,0.3);
            max-width: 840px;
            border-radius: 10px;
            margin-right: -300px;
        }
    }
    @media screen and (min-width: 2260px) {
        div.journal>div.flex.flex-col:first-child {
            max-width: 1150px;
        }
        /* SCHEDULED AND DEADLINE */
        div#journals div#today-queries+div.flex.flex-col {
            right: 530px;
        }
        div#journals div#today-queries {
            width: 520px;
        }
        div#journals div#today-queries:hover {
            width: 600px;
        }
        div#journals {
            margin-right: 500px;
        }
        div#journals div.references {
            width: 700px;
            max-width: 500px;
        }
        div#journals div.references:hover {
            margin-right: -200px;
        }
        /* ELSE pages */
        div#main-content-container div.flex-1.page.relative {
            margin-right: 500px;
        }
        /* ELSE Pages right-space */
        div#main-content-container div.relative+div.references.mt-6.flex-1.flex-row,
        div#main-content-container div.page-hierarchy {
            width: 500px;
        }
    }
    @media screen and (min-width: 2440px) {
        div.journal>div.flex.flex-col:first-child {
            min-width: 1050px;
            max-width: 1280px;
        }
        /* SCHEDULED AND DEADLINE */
        div#journals div#today-queries+div.flex.flex-col {
            right: 660px;
        }
        div#journals div#today-queries {
            width: 620px;
        }
        div#journals div#today-queries:hover {
            width: 680px;
        }
        /* Journal-queries space */
        div#journals {
            margin-right: 620px;
        }
    }
    @media screen and (min-width: 2600px) {
        div#journals div#today-queries {
            right: 30px;
        }
    }
}
/* Screen size Finish */

    `);
}

// bootstrap
logseq.ready(main).catch(console.error)
