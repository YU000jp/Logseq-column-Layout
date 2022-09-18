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
            max-width: 1000px;
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
        /* Linked References */
        div#journals div.references {
            max-height: 1220px;
            z-index: 1;
            width: 350px;
            overflow-y: auto;
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
            top: 86px;
            bottom: 0;
            overflow-y: scroll;
            font-size: smaller;
            background-color: var(--ls-primary-background-color);
            border-radius: 10px;
            padding-top: auto;
            padding-bottom: 3em;
        }
        /* ELSE tabs-plugin */
        body:not(.is-tabs-loaded) div#root div#today-queries {
            top:48px;
        }
        div#today-queries:hover {
            position: fixed;
            top: 86px;
            right: 0;
            width: 480px;
            border: 2px double;
            z-index: 35;
            margin: 2em;
            padding-top: 0;
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
        }
        div#today-queries>div.lazy-visibility div.custom-query div.foldable-title {
            height: 3em;
        }
        div#today-queries>div.lazy-visibility div.custom-query div.foldable-title div.items-center {
            height: 100%;
            padding: 3px;
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
            border: 2px double #666;
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
            padding-left: 0.3rem !important;
            padding-right: 0.1rem !important;
            height: 96vh !important;
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            align-content: flex-start;
            padding-bottom: 0;
        }
        div#right-sidebar div.sidebar-item.content>div>div:first-of-type {
            margin-top: 0;
            position: sticky !important;
            top: 0;
            padding: 0.5rem;
            z-index: 10;
            backdrop-filter: blur(20px);
            font-size: small;
        }
        div#right-sidebar div.sidebar-item.content.color-level.px-4 {
            min-width: 33vw;
            overflow-y: scroll;
        }
        div#right-sidebar div.sidebar-item-list.flex-1.scrollbar-spacing {
            display: flex;
            padding-bottom: 0;
        }
        div#right-sidebar div.cp__right-sidebar div.sidebar-item.content {
            resize: both;
            display: inline-block;
            align-self: flex-start;
            overflow-y: auto;
            max-height: 91vh;
            max-width: 600px;
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
        }
        div#right-sidebar div.graph:hover {
            transform:scale(1.4,1.4);
            position: fixed;
            right: 4em;
            background-color: var(--color-level-1);
            border: 2px double;
            z-index: calc(var(--ls-z-index-level-3) + 10);
            margin: 5em;
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
