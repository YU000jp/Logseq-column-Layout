function main(){logseq.provideStyle(String.raw`

/* Screen size */
@supports (display: flex) {
    @media screen and (min-width: 1900px) {
        div#root div.absolute {
            position: absolute;
            backdrop-filter: blur(40px);
            z-index: var(--ls-z-index-level-5);
        }
        .block-content .asset-container .asset-overlay {
            background-image: none;
        }
        .block-content .asset-container .asset-action-bar {
            background: rgba(6,6,6,0.7);
            color: #fff;
            font-size: small;
        }
        /* left-sidebar tweak */
        div.nav-content-item-inner {
            margin-top: 2em;
        }
        div#main-content-container blockquote {
            font-size: 0.95em;
        }
        /* Tweak Link :hover */
        div#main-content-container a:hover {
            font-weight: 700;
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
            margin-right: 355px;
        }
        div#journals div.block-children-container {
            max-width: 96%;
        }
        /* Journals */
        div.journal>div.flex.flex-col:first-child {
            margin-left: 1em;
            min-width: 750px;
            flex: 3;
        }
        /* SCHEDULED AND DEADLINE */
        div#journals div#today-queries+div.flex.flex-col {
            transform:scale(0.85,0.85);
            position: fixed;
            bottom: 2em;
            right: 364px;
            border: 2px var(--ls-link-text-color);
            border-radius: 5px;
            padding: 0.5em;
            max-width: 410px;
        }
        div#journals div#today-queries+div.flex.flex-col:hover {
            backdrop-filter: blur(40px);
            z-index: var(--ls-z-index-level-1);
            transform:scale(0.95,0.95);
            min-width: 600px;
            max-width: 600px;
            border-color: unset;
        }
        main.ls-left-sidebar-open div#journals div#today-queries+div.flex.flex-col:hover {
            margin-right: -200px;
        }
        /* CANCEL PDF-view */
        body.is-pdf-active div#journals div#today-queries+div.flex.flex-col {
            display: none;            
        }
        /* a Journal Linked References */
        div#journals div.references {
            max-height: 60vh;
            min-width: 340px;
            max-width: 360px;
            overflow-y: scroll;
            font-size: smaller;
            position: sticky;
            top: 3em;
            bottom: 3em;
            padding: 1em;
            margin-right: 4px;
            z-index: 0;
        }
        main:not(.ls-left-sidebar-open) div#journals div.references {
            width: 480px;
            max-width: 480px;
        }
        div#journals div.references:hover {
            backdrop-filter: blur(40px);
            min-width: 670px;
            max-width: 670px;
            overflow-x: visible;
            z-index: var(--ls-z-index-level-1);
            margin-right: -115px;
        }
        main.ls-wide-mode div#journals div.references:hover {
            margin-right: -115px;
        }

        main:not(.ls-left-sidebar-open.ls-wide-mode) div#journals div.references:hover {
            margin-right: -170px;
        }
        main.ls-left-sidebar-open:not(.ls-wide-mode) div#journals div.references:hover {
            margin-right: -300px;
        }
        div#journals div.references div.hidden {
            width: 670px;
            display: block;
        }
        main.ls-wide-mode div#journals div.references:hover {
            margin-right: -300px;
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
            width: 385px;
            position: fixed;
            right: 2px;
            top:  calc(var(--ls-headbar-height) + var(--ls-headbar-inner-top-padding) + 40px);
            bottom: 3px;
            overflow-y: scroll;
            font-size: smaller;
            background-color: var(--ls-secondary-background-color);
            border-radius: 10px;
            padding: 0.3em;
        }
        /* ELSE tabs-plugin */
        body:not(.is-tabs-loaded) div#root div#journals div#today-queries {
            top: calc(var(--ls-headbar-height) + var(--ls-headbar-inner-top-padding));
        }
        /* CANCEL PDF-view */
        body.is-pdf-active div#journals div#today-queries {
            display: none;            
        }
        div#journals div#today-queries:hover {
            background-color: var(--ls-guideline-color);
        }
        /* Journal-queries Task bold */
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
            backdrop-filter: blur(40px);
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
            top: calc(var(--ls-headbar-height) + var(--ls-headbar-inner-top-padding));
            bottom: 0;
            border: 4px var(--ls-guideline-color);
            border-radius: 0.25em;
            overflow: scroll;
            background-color: unset;
            height: fit-content;
        }
        div#right-sidebar div.resizer {
            background: var(--ls-guideline-color);
        }
        div#right-sidebar::-webkit-scrollbar {
            width: 12px;
            background: var(--ls-guideline-color);
        }
        /* IF tabs-plugin */
        body.is-tabs-loaded div#root div#right-sidebar {
            top: calc(var(--ls-headbar-height) + var(--ls-headbar-inner-top-padding) + 40px);
        }
        /* right-sidebar-background */
        div#right-sidebar div.cp__right-sidebar-scrollable>div+div {
            backdrop-filter: blur(40px);
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
            overflow-y: scroll;
            resize: both;
            display: inline-block;
            align-self: flex-start;
            overflow-y: auto;
            margin-bottom: 0.4em;
            max-height: fit-content;
            padding-bottom: 3em;
        }
        div#right-sidebar div.sidebar-item-list {
            display: flex;
            padding-bottom: 0;
            margin: unset;
            height: calc(99vh - var(--ls-headbar-height) + var(--ls-headbar-inner-top-padding) - 20px);
        }
        /* IF tabs-plugin */
        body.is-tabs-loaded div#right-sidebar div.sidebar-item-list {
            height: calc(99vh - var(--ls-headbar-height) + var(--ls-headbar-inner-top-padding) - 60px);
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
            transform:scale(2.0,2.0);
            margin-right: 0.6em;
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
        /* right-sidebar topbar */
        div#right-sidebar div.cp__right-sidebar-topbar {
            flex-direction: row-reverse;
        }
        div#right-sidebar span.ls-icon-layout-sidebar-right svg {
            width: 24px;
            height: 24px;
        }
        /* ELSE-page */
        div#main-content-container div.flex-1.page.relative {
            margin-right: 390px;
            margin-bottom: 2em;
            margin-top: 2em;
            margin-left: 1.5em;
        }
        div#main-content-container div.flex-1.page.relative div.relative {
            max-width: 1600px;
        }
        /* page Linked References */
        div#main-content-container div.relative div.lazy-visibility div.references {
            margin-top: 8em;
            margin-bottom: 4em;
        }
        main.ls-wide-mode div#main-content-container div.relative div.lazy-visibility div.references div.references-blocks div.content>div,
        main.ls-wide-mode div#main-content-container div.relative+div+div div.references div.references-blocks div.content>div,
        main.ls-wide-mode div#main-content-container div.relative+div+div+div div.references div.references-blocks div.content>div {
            flex-direction: row;
            align-items: stretch;
            justify-content: flex-start;
            flex-wrap: wrap;
            gap: 0.8em;
            padding-right: 50px;
        }
        main.ls-wide-mode div#main-content-container div.relative div.lazy-visibility div.references div.references-blocks div.content>div>div.lazy-visibility,
        main.ls-wide-mode div#main-content-container div.relative+div+div div.references div.references-blocks div.content>div>div.lazy-visibility,
        main.ls-wide-mode div#main-content-container div.relative+div+div+div div.references div.references-blocks div.content>div>div.lazy-visibility {
            overflow: auto;
            border-radius: 1.5em;
            max-height: 780px;
            flex: 28%;
            max-width: 615px;
        }
        div#main-content-container div.references div.references-blocks div.content>div>div.lazy-visibility div.fade-enter,
        div#main-content-container div.references div.references-blocks div.content>div>div.lazy-visibility div.fade-enter>div,
        div#main-content-container div.references div.references-blocks div.content>div>div.lazy-visibility div.fade-enter div.initial {
            height: 100%;
        }
        main.ls-wide-mode div#main-content-container div.references div.references-blocks div.content>div>div.lazy-visibility div.fade-enter>div {
            padding: 0.4em;
            margin: 0;
            height: 100%;
        }
        main.ls-wide-mode div#main-content-container div.references  div.references-blocks div.content>div>div.lazy-visibility {
            width: 44vh;
        }
        main.ls-wide-mode div#main-content-container div.references  div.references-blocks div.content>div>div.lazy-visibility img {
            max-width: 450px !important;
        }
        div#main-content-container div.relative h2.font-bold {
            display: block;
            margin-left: auto;
            margin-right: auto;
        }
        /* ELSE Page right-space */
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
        main.ls-wide-mode div.cp__sidebar-help-btn::before {
            content: "◇Wide-mode (Switch 「ESC」「tw」)";
            position: fixed;
            bottom: 0.5em;
            right: 200px;
            padding: 0.2em;
            background-color: var(--ls-primary-background-color);
            font-size: 0.95em;
        }
        /* #kanban */
         div#root [data-refs-self*="kanban"]>.block-children-container>.block-children {
            overflow-x: scroll;
            padding: 1em;
            margin-top: 1em;
            font-size: smaller;
        }
        main.ls-wide-mode div#main-content-container div.relative div.lazy-visibility div.references div.references-blocks div.content>div [data-refs-self*="kanban"]>.block-children-container>.block-children,
        main.ls-wide-mode div#main-content-container div.relative+div+div div.references div.references-blocks div.content>div [data-refs-self*="kanban"]>.block-children-container>.block-children,
        main.ls-wide-mode div#main-content-container div.relative+div+div+div div.references div.references-blocks div.content>div [data-refs-self*="kanban"]>.block-children-container>.block-children,
        div#right-sidebar [data-refs-self*="kanban"]>.block-children-container>.block-children {
            flex-wrap: wrap;
        }
        body:not(.is-tabs-loaded) div#root div#today-queries:hover {
            top:46px;
        }
        div.journal>div.flex.flex-col:first-child {
            max-width: 1100px;
        }
        main:not(.ls-left-sidebar-open) div#journals div#today-queries {
            width: 470px;
        }
        main:not(.ls-left-sidebar-open) div#journals {
            margin-right: 430px;
        }
        main:not(.ls-left-sidebar-open) div#journals div#today-queries+div.flex.flex-col {
            right: 470px;
            min-width: 450px;
        }
    }
    @media screen and (min-width: 2260px) {
        div.journal>div.flex.flex-col:first-child {
            max-width: 1150px;
        }
        /* SCHEDULED AND DEADLINE */
        main.ls-left-sidebar-open div#journals div#today-queries+div.flex.flex-col {
            right: 480px;
            min-width: 500px;
        }
        div#journals div#today-queries {
            width: 520px;
        }
        div#journals {
            margin-right: 485px;
        }
        div#journals div.references {
            width: 700px;
            max-width: 420px;
        }
        main.ls-left-sidebar-open div#journals div.references:hover {
            margin-right: -240px;
        }
        main.ls-left-sidebar-open div#journals div#today-queries+div.flex.flex-col:hover {
            margin-right: unset;
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
        /* a journal linked-references */
        div#journals div.references:hover {
            margin-right: -170px;
        }
    }
    @media screen and (min-width: 2440px) {
        div.journal>div.flex.flex-col:first-child {
            min-width: 1050px;
            max-width: 1350px;
        }
        /* SCHEDULED AND DEADLINE */
        main.ls-left-sidebar-open div#journals div#today-queries+div.flex.flex-col {
            right: 620px;
        }
        div#journals div#today-queries {
            width: 620px;
        }
        /* Journal-queries space */
        div#journals {
            margin-right: 620px;
        }
        main.ls-wide-mode div#journals div.references:hover {
            margin-right: -170px;
        }
    }
    @media screen and (min-width: 2620px) {
        main.ls-left-sidebar-open div#journals div.references {
            max-width: 500px;
        }
        main.ls-left-sidebar-open div#journals div.references:hover {
            margin-right: -185px;
        }
        main:not(.ls-left-sidebar-open) div#journals div.references {
            max-width: 670px;
        }
        main:not(.ls-left-sidebar-open) div#journals div.references:hover {
            margin-right: 0;
        }
    }
}
/* Screen size Finish */

`);}logseq.ready(main).catch(console.error)