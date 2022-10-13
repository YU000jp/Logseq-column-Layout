function main(){logseq.provideStyle(String.raw`

/* Screen size */
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
            pointer-events: none;
        }
        div#main-content-container input.form-checkbox+div input.form-checkbox+a {
            text-decoration: line-through;
            pointer-events: none;
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
        main:not(.ls-left-sidebar-open) div#journals {
            margin-right: 430px;
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
            position: fixed;
            bottom: 2em;
            right: 395px;
            border-radius: 5px;
            padding: 0.6em;
            max-width: 380px;
            border: 2px solid var(--ls-guideline-color);
            border-radius: 0.6em;
            background: var(--color-level-1);
            font-size: small;
            max-height: 50vh;
            overflow: auto;
            z-index: 1;

        }
        main:not(.ls-left-sidebar-open) div#journals div#today-queries+div.flex.flex-col {
            max-width: 460px;
        }
        div#journals div#today-queries+div.flex.flex-col:hover {
            background: unset;
            backdrop-filter: blur(40px);
            z-index: var(--ls-z-index-level-1);
            min-width: 560px;
            max-width: 560px;
            min-height: 400px;
            padding-right: 60px;
        }
        main:not(.ls-left-sidebar-open) div#journals div#today-queries+div.flex.flex-col {
            right: 470px;
        }
        main.ls-left-sidebar-open div#journals div#today-queries+div.flex.flex-col:hover {
            margin-right: -175px;
        }
        main:not(.ls-left-sidebar-open) div#journals div#today-queries+div.flex.flex-col:hover {
            margin-right: -105px;
        }
        /* IF PDF-view CANCEL */
        body.is-pdf-active div#journals div#today-queries+div.flex.flex-col {
            display: none;            
        }
        /* a Journal Linked References */
        div#journals div.references {
            max-height: 60vh;
            min-width: 360px;
            max-width: 360px;
            overflow-y: scroll;
            font-size: small;
            position: sticky;
            top: 3em;
            bottom: 3em;
            padding: 0.4em;
            margin-right: 5px;
            z-index: 0;
            border: 2px solid var(--ls-guideline-color);
            border-radius: 0.6em;
            background: var(--color-level-1);
        }
        div#journals div.references:hover {
            background: unset;
            backdrop-filter: blur(40px);
            min-width: 670px;
            max-width: 670px;
            overflow-x: visible;
            z-index: var(--ls-z-index-level-1);
            padding-bottom: 4em;
        }
        /* --IF left-sidebar-open +100px */
        main:not(.ls-left-sidebar-open) div#journals div.references {
            width: 460px;
            max-width: 460px;
        }
        div#journals div.references:hover {
            margin-right: -205px;
        }
        main.ls-left-sidebar-open div#journals div.references:hover {
            margin-right: -305px;
        }
        div#journals div.references div.pt-6{
            padding: 0.1em;
        }
        div#journals div.references div.hidden {
            width: 670px;
            display: block;
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
        main div#root div.max-w-7xl.mx-auto.pb-24 {
            max-width: auto;
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
            border-left: 2px solid var(--ls-guideline-color);
            padding: 0.3em;
        }
        /* --IF tabs-plugin */
        body:not(.is-tabs-loaded) div#root div#journals div#today-queries {
            top: calc(var(--ls-headbar-height) + var(--ls-headbar-inner-top-padding));
        }
        /* --IF PDF-view CANCEL */
        body.is-pdf-active div#journals div#today-queries {
            display: none;            
        }
        /* --IF left-sidebar-open */
        main:not(.ls-left-sidebar-open) div#journals div#today-queries {
            width: 470px;
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
        div#journals div#today-queries div.color-level div.blocks-container,
        div#journals div#today-queries div.color-level {
            background-color: unset;
        }
        div#journals div#today-queries>div.lazy-visibility div.custom-query {
            margin-top: 0.2em;
            margin-bottom: 1.2em;
        }
        div#journals div#today-queries>div.lazy-visibility div.custom-query div.custom-query-title {
            border-top: 2px solid var(--ls-guideline-color);
            border-top-left-radius: 15px;
            border-top-right-radius: 15px;
            padding-top: 0.4em;
            padding-left: 2em;
            text-shadow: 1px 1px var(--ls-block-highlight-color);
            font-size: medium;
            background: var(--ls-page-blockquote-bg-color);
        }  
        div#journals div#today-queries.mt-10 {
            margin-top: 0.1em;
        }
        div#journals div#today-queries>div.lazy-visibility div.custom-query div.content {
            padding-top: 0.4em;
        }
        div#journals div#today-queries>div.lazy-visibility div.custom-query div.content div.lazy-visibility:not(:last-of-type) {
            border-bottom: 2px solid var(--ls-guideline-color);
            padding: 0.8em;
        }
        div#journals div#today-queries>div.lazy-visibility div.custom-query div.content div.lazy-visibility {
            border-right: 4px solid var(--ls-page-blockquote-bg-color);
        }
        
        div#journals div#today-queries>div.lazy-visibility div.custom-query div.my-2 {
            padding: 0.2em;
            margin: 0.2em;
        }
        div#journals div#today-queries>div.lazy-visibility div.custom-query div.breadcrumb.block-parents {
            color: var(--ct-external-link-color);
            margin-bottom: 0.6em;
        }
        div#journals div#today-queries .sm\:px-7 {
            padding-left: unset;
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
            min-width: 24vw;
            width: 60%;
            position: fixed;
            right: 0;
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
        main.ls-right-sidebar-open div#main-content-container {
            justify-content: left;
            padding-left: 1em;
        }
        main.ls-right-sidebar-open div#head {
            width: 30vw;
        }
        div#right-sidebar.cp__right-sidebar.open {
            max-width: 72vw;
            top: 0;
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
        div.journal>div.flex.flex-col:first-child {
            max-width: 1170px;
        }
    }
    @media screen and (min-width: 2260px) {
        div.journal>div.flex.flex-col:first-child {
            max-width: 1320px;
        }
        main:not(.ls-right-sidebar-open) div.journal>div.flex.flex-col:first-child {
            margin-left: 4em;
        }
        /* SCHEDULED AND DEADLINE */
        main.ls-left-sidebar-open div#journals div#today-queries+div.flex.flex-col {
            right: 525px;
        }
       div#journals div#today-queries {
            width: 520px;
        }
        div#journals {
            margin-right: 490px;
        }
        /* ELSE pages */
        div#main-content-container div.flex-1.page.relative {
            margin-right: 520px;
        }
        /* ELSE Pages right-space */
        div#main-content-container div.relative+div.references.mt-6.flex-1.flex-row,
        div#main-content-container div.page-hierarchy {
            width: 520px;
        }
    }
    @media screen and (min-width: 2440px) {
        div.journal>div.flex.flex-col:first-child {
            min-width: 1050px;
            max-width: 1430px;
        }
        div#journals div#today-queries {
            width: 620px;
        }
        /* SCHEDULED AND DEADLINE */
        main.ls-left-sidebar-open div#journals div#today-queries+div.flex.flex-col {
            right: 625px;
        }
        /* Journal-queries space */
        div#journals {
            margin-right: 590px;
        }
    }
/* Screen size Finish */

`);}logseq.ready(main).catch(console.error);