function main() {
    logseq.provideStyle(String.raw`

/* Screen size */
@supports (display: flex) {
    @media screen and (min-width: 1850px) {
        /* Images sizedown */
        .asset-container img {
            max-width: 600px !important;
        }
        div.flex-1.journal.page {
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
        }
        /* content-size */
        :root {
            --ls-main-content-max-width: auto !important;
        }
        /* Journal-queries space */
        div#journals {
            margin-right: 360px;
        }
        /* Journals */
        .journal>div.flex.flex-col:first-child {
            margin-right: 0.5em;
            min-width: 750px;
            max-width: 1050px;
            flex: 3;
        }
        /* SCHEDULED AND DEADLINE */
        div#today-queries+div.flex.flex-col {
            position: fixed;
            right: 410px;
            top: 0.1em;
            z-index: calc(var(--ls-z-index-level-1) + 1);
            border-radius: 10px;
            padding: 0.5em;
            max-width: 410px;
        }
        .light-theme div#today-queries+div.flex.flex-col {
            background: rgba(105,170,198,0.8);
            border: 1px;
        }
        .dark-theme div#today-queries+div.flex.flex-col {
            background-color: var(--ls-primary-background-color);
            border: 2px solid #69aac6;
        }
        div#journals div.lazy-visibility {
            min-width: 340px;
        }
        /* Linked References */
        div#journals div.references {
            visibility: visible;
            min-height: 400px;
            max-height: 1220px;
            z-index: 1;
            width: 360px;
            overflow-y: auto;
            overflow-x: hidden;
            font-size: smaller;
        }
        div.journal>div.lazy-visibility div.references-blocks div.flex.flex-col>div {
            padding-left: 0;
            padding-right: 0;
        }
        div.max-w-7xl.mx-auto.pb-24 {
            max-width: 2400px !important;
        }
        /* Journal-queries */
        div#today-queries {
            width: 385px;
            position: fixed;
            right: 1em;
            top: 88px;
            bottom: 0;
            overflow-y: scroll;
            font-size: smaller;
            background-color: var(--ls-primary-background-color);
            border-radius: 10px;
            padding-top: auto;
            padding-bottom: 3em;
            margin-top: auto;
        }
        /* ELSE tabs-plugin */
        body:not(.is-tabs-loaded) div#root div#today-queries {
            top:52px;
        }
        div#today-queries:hover {
            position: fixed;
            top: 90px;
            right: 0;
            width: 480px;
            border: 2px double;
            z-index: 30;
            margin: 2em;
        }
        body:not(.is-tabs-loaded) div#root div#today-queries:hover {
            top:46px;
        }
        /* Fix "Extra space when journal queries are not active #6773" */
        div#today-queries>div.lazy-visibility {
            min-height: unset !important;
        }
       div#today-queries>div.lazy-visibility div.custom-query {
            background: var(--color-level-1);
            margin-top: 0;
        } 
        div#today-queries>div.lazy-visibility div.custom-query>div>div.content>div.foldable-title {
            height: 3em;
            background: var(--color-level-2);
        }
        div#today-queries>div.lazy-visibility div.custom-query>div>div.content>div.foldable-title>div.items-center {
            height: 100%;
            padding: 2px;
        }          
        div#today-queries.mt-10 {
            margin-top: 0.1em;
        }
        div#today-queries div.flex.flex-col,
        div#today-queries div.flex.flex-col div.initial {
            padding: 0;
        }
        div#today-queries time {
            font-size: medium;
        }
        div#today-queries .sm\:px-7 {
            padding-left: unset;
        }
        div#today-queries a.block-marker {
            font-size: 22px;
        }
        /* Journal-queries h2-h4 header sizedown */
        div#today-queries h2,
        div#today-queries h3,
        div#today-queries h4 {
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
            border: 2px double;
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
        }
        div#right-sidebar div.sidebar-item-list.flex-1.scrollbar-spacing {
            display: flex;
            padding-bottom: 0;
            margin: unset;
        }
        div#right-sidebar div.cp__right-sidebar div.sidebar-item.content {

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
        /* ELSE Pages */
        div#main-content-container div.flex-1.page.relative {
            margin-right: 400px;
            padding: 6em;
        }
        /* ELSE Pages Pages-tagged-with */
        div#main-content-container div.relative+div.references.mt-6.flex-1.flex-row {
            max-width: 370px;
            order: 2;
            position: fixed;
            right: 2em;
            top: 4em;
            bottom: 4em;
            overflow-y: auto;
            z-index: 0;
            margin-right: 2em;
            padding: 2em;
            background-color: var(--ls-primary-background-color);
            border-radius: 10px;
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
            z-index: var(--ls-z-index-level-3);
            border-radius: 10px;
        }
    }
}
/* Screen size Finish */

    `);
}

// bootstrap
logseq.ready(main).catch(console.error)
