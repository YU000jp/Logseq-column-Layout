function main(){logseq.provideStyle(String.raw`

/* Screen size */
@supports (display: flex) {
    @media screen and (min-width: 2000px) {
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
            margin-right: 1em;
            z-index: var(--ls-z-index-level-1);
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
            backdrop-filter: blur(20px);
        }
        div#journals div#today-queries+div.flex.flex-col:hover {
            z-index: var(--ls-z-index-level-1);
            transform:scale(0.95,0.95);
            min-width: 600px;
            max-width: 600px;
            background: rgba(6,6,6,0.4);
            border-color: unset;
        }
        main.ls-left-sidebar-open div#journals div#today-queries+div.flex.flex-col:hover {
            margin-right: -200px;
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
            min-width: 340px;
            max-width: 360px;
            overflow-y: scroll;
            font-size: smaller;
            position: sticky;
            top: 10em;
            bottom: 3em;
            padding: 0.7em;
            margin-right: 4px;
            backdrop-filter: blur(20px);
        }
        div#journals div.references:hover {
            background: rgba(6,6,6,0.4);
            max-width: 670px;
            overflow-x: visible;
            z-index: var(--ls-z-index-level-1);
            margin-right: -130px;
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
            background-color: var(--ls-primary-background-color);
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
            top: calc(var(--ls-headbar-height) + var(--ls-headbar-inner-top-padding));
            bottom: 0;
            margin-top: 2em !important;
            border-radius: 0.25em;
            overflow-x: scroll;
            border: 4px double;
            margin-top: unset !important;
            height: unset;
        }
        /* IF tabs-plugin */
        body.is-tabs-loaded div#root div#right-sidebar {
            top: calc(var(--ls-headbar-height) + var(--ls-headbar-inner-top-padding) + 40px);
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
            padding: 0.2rem;
            backdrop-filter: blur(20px);
            font-size: small;
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
            min-height: 20vh;
            max-height: 96vh;
            padding-bottom: 3em;
        }
        div#right-sidebar div.sidebar-item-list {
            display: flex;
            padding-bottom: 0;
            margin: unset;
            height: 92.8vh;
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

        main.ls-wide-mode div#main-content-container div.references  div.references-blocks div.content>div>div.lazy-visibility {
            width: 44vh;
        }
        main.ls-wide-mode div#main-content-container div.references  div.references-blocks div.content>div>div.lazy-visibility img {
            max-width: 450px !important;
        }

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
        div#journals div#today-queries:hover {
            background: rgba(6,6,6,0.4);
        }
        main:not(.ls-left-sidebar-open) div#journals div#today-queries {
            width: 520px;
        }
        main:not(.ls-left-sidebar-open) div#journals {
            margin-right: 500px;
        }
        main:not(.ls-left-sidebar-open) div#journals div.references {
            width: 480px;
            max-width: 480px;
        }
        main:not(.ls-left-sidebar-open) div#journals div.references:hover {
            margin-right: -190px;
            width: 670px;
            max-width: 670px;
        }
        main:not(.ls-left-sidebar-open) div#journals div#today-queries+div.flex.flex-col {
            right: 510px;
            min-width: 500px;
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
            max-width: 1280px;
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
        div#journals div.references {
            max-width: 500px;
        }
        main:not(.ls-left-sidebar-open) div#journals div.references:hover {
            margin-right: -185px;
        }
    }
}
/* Screen size Finish */


`);}logseq.ready(main).catch(console.error)