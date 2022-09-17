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
            z-index: 10;
            border-radius: 10px;
            padding: 0.5em;
            max-width: 410px;
        }
        .light-theme div#today-queries+div.flex.flex-col {
            background-color: #eed67e;
        }
        .dark-theme div#today-queries+div.flex.flex-col {
            background-color: var(--ls-primary-background-color);
            border: 2px solid #eed67e;
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
            top: 0;
            bottom: 0;
            overflow-y: scroll;
            z-index: 0;
            font-size: smaller;
            background-color: var(--ls-primary-background-color);
            border-radius: 10px;
            padding-bottom: 4em;
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
            top: 50px;
            z-index: 15;
        }
        /* right-sidebar-background */
        div.cp__right-sidebar-scrollable>div+div {
            background: #999;
        }
        div.cp__right-sidebar-scrollable>div.cp__right-sidebar-topbar {
            height: unset;
        }
        div.cp__right-sidebar div.sidebar-item {
            min-height: 4em;
            padding-top: unset;
        }
        div.sidebar-item-list {
            padding-left: 0.3rem !important;
            padding-right: 0.1rem !important;
            height: 96vh !important;
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            align-content: flex-start;
            padding-bottom: 0;
        }
        div.sidebar-item.content>div>div:first-of-type {
            margin-top: 0;
            position: sticky !important;
            top: 0;
            padding: 0.5rem;
            z-index: 10;
            backdrop-filter: blur(20px);
            font-size: small;
        }
        div.sidebar-item.content.color-level.px-4 {
            min-width: 33vw;
            overflow-y: scroll;
        }
        div.sidebar-item-list.flex-1.scrollbar-spacing {
            display: flex;
            padding-bottom: 0;
        }
        div#right-sidebar {
            overflow-x: scroll;
            border: 2px double #666;
        }
        div.cp__right-sidebar div.sidebar-item.content {
            resize: both;
            display: inline-block;
            align-self: flex-start;
            overflow-y: auto;
            max-height: 91vh;
            max-width: 700px;
        }
        div.sidebar-item-list div.sidebar-item.flex-col {
            width: 100% !important;
        }
        div.graph {
            height: 500px !important;
        }
        div.graph canvas {
            height: 100% !important;
            width: 100% !important;
        }
        div.graph:hover {
            transform:scale(1.4,1.4);
            position: fixed;
            right: 4em;
            background-color: var(--color-level-1);
            border: 2px double;
            z-index: 35;
            margin: 5em;
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
        /* themes */
        /* #kanban */
        [data-refs-self*="kanban"]>.block-children-container>.block-children {
            overflow-x: scroll !important;
            flex-direction: column;
            max-width: 790px;
        }
        /* TODO-List */
        .light-theme div#logseq-plugin-todo span {
            color: #666;
        }
    }
}
/* Screen size Finish */

    `);
}

// bootstrap
logseq.ready(main).catch(console.error)
