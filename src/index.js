import '@logseq/libs';
import { getDateForPage } from 'logseq-dateutils';
import { logseq as PL } from "../package.json";


import { settingUI } from './setting';
const pluginId = PL.id;


/* main */
const main = () => {

    settingUI(); /* -setting */
    console.info(`#${pluginId}: MAIN`); /* -plugin-id */

    //switch contextmenu
    const SwitchContextMenu = logseq.settings.switchContext || "";
    if (SwitchContextMenu === undefined || SwitchContextMenu === "enable") {
        /* ContextMenuItem for DONE */
        logseq.Editor.registerBlockContextMenuItem('✔️ DONE with completed', async ({ uuid }) => {
            const block = await logseq.Editor.getBlock(uuid);
            if (!block?.marker) return logseq.UI.showMsg('This block is not a task', 'error');
            const userConfigs = await logseq.App.getUserConfigs();
            const preferredDateFormat = userConfigs.preferredDateFormat;
            const today = new Date();
            const todayDateInUserFormat = getDateForPage(today, preferredDateFormat);
            console.log(`#${pluginId}: ${todayDateInUserFormat}`);
            const newRawContent = block.content.replace(new RegExp(`^${block.marker}`), `DONE`);
            await logseq.Editor.updateBlock(uuid, newRawContent);
            logseq.Editor.upsertBlockProperty(uuid, `completed`, todayDateInUserFormat);
            /* (scheduled deadline remove) -----TODO*/
            logseq.UI.showMsg(`${block.marker} → ✔️ DONE with completed`);
            console.log(`#${pluginId}: ✔️ DONE with completed`);
        });

        /* ContextMenuItem reference */
        logseq.Editor.registerBlockContextMenuItem('🔵🟣Link as reference', async ({ uuid }) => {
            const userConfigs = await logseq.App.getUserConfigs();
            const preferredDateFormat = userConfigs.preferredDateFormat;
            const today = new Date();
            const todayDateInUserFormat = getDateForPage(today, preferredDateFormat);
            console.log(`#${pluginId}: ${todayDateInUserFormat}`);
            const insertObj = await logseq.Editor.insertBlock(uuid, `🔵🟣 ((` + uuid + `))`);
            logseq.Editor.upsertBlockProperty(insertObj.uuid, "referenced", todayDateInUserFormat);
            logseq.App.openInRightSidebar(insertObj.uuid);
            logseq.UI.showMsg("🔵🟣 Mouse drag the block to move it to the journal.");
            console.log(`#${pluginId}: Link as reference`);
        });

        /* ContextMenuItem LATER  */
        logseq.Editor.registerBlockContextMenuItem('🔵🟣LATER as reference', async ({ uuid }) => {
            const block = await logseq.Editor.getBlock(uuid);
            if (block?.marker == "LATER") return logseq.UI.showMsg('This block is LATER', 'error');
            const userConfigs = await logseq.App.getUserConfigs();
            const preferredDateFormat = userConfigs.preferredDateFormat;
            const today = new Date();
            const todayDateInUserFormat = getDateForPage(today, preferredDateFormat);
            console.log(`#${pluginId}: ${todayDateInUserFormat}`);
            const insertObj = await logseq.Editor.insertBlock(uuid, `LATER 🔵🟣 ((` + uuid + `))`);
            /* logseq.Editor.upsertBlockProperty(uuid, "referenced",todayDateInUserFormat); */
            logseq.App.openInRightSidebar(insertObj.uuid);
            logseq.UI.showMsg("🔵🟣 Mouse drag the block to move it to the journal.");
            console.log(`#${pluginId}: 🔵🟣LATER as reference`);
        });

        /* ContextMenuItem Delete */
        logseq.Editor.registerBlockContextMenuItem('❌ Delete this block', async ({ uuid }) => {
            logseq.Editor.removeBlock(uuid);
            logseq.UI.showMsg("delete the block");
            console.log(`#${pluginId}: delete the block`);
        });

        /* ContextMenuItem right-sidebar */
        logseq.Editor.registerBlockContextMenuItem('🟢Open at right sidebar', async ({ uuid }) => {
            logseq.App.openInRightSidebar(uuid);
            logseq.UI.showMsg("🟢Open at right sidebar");
            console.log(`#${pluginId}: 🟢Open at right sidebar`);
        });
    }



    const RightSidebar = logseq.settings.switchRightSidebar || "";
    const TagsHierarchy = logseq.settings.switchTagsHierarchy || "";
    const LinkedReferences = logseq.settings.switchLinkedReferences || "";
    const JournalQueries = logseq.settings.switchJournalQueries || "";

    //require CSS

    logseq.provideStyle(String.raw`
        @media screen and (min-width: 1850px) {
            /*
    
            Fix bugs
            
            */
            
            /* Fix "Extra space when journal queries are not active #6773" */
            div#journals div#today-queries>div.lazy-visibility {
                min-height: unset !important;
            }
            
            /* journal queries */
            div#journals div#today-queries>div.lazy-visibility>div.shadow {
                display: none;
            }
            
            /* background conflict journal queries */
            div#journals div#today-queries div.color-level div.blocks-container,
            div#journals div#today-queries div.color-level {
                background-color: unset;
            }
            
            /* CANCEL double time picker */
            div#right-sidebar div#date-time-picker {
                display: block;
                position: fixed;
                width: 300px;
                background: var(--color-level-1);
                z-index: var(--ls-z-index-level-4);
            }
            
            div.timestamp div#date-time-picker:nth-of-type(2),
            div.timestamp div#date-time-picker:nth-of-type(3) {
                display: block;
                position: absolute;
                width: 400px;
                background: var(--color-level-1);
            }
            
            div#time-repeater {
                min-width: 200px;
            }
            
            /*
            
            Tweak
            
            */
            
            /* image toolbar */
            .block-content .asset-container .asset-overlay {
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

            /* content-size */
            :root {
                --ls-main-content-max-width: 2000px !important;
                --ls-main-content-max-width-wide: auto !important;
            }

            main div#main-content-container div.flex-1.page.relative div.relative {
                max-width: 1600px;
            }

            div.journal>div.flex.flex-col:first-child {
                max-width: 1170px;
            }

            /*
            
            page Linked References
            
            */

            div#main-content-container div.relative div.lazy-visibility div.references {
                margin-top: 8em;
                margin-bottom: 4em;
            }
        
            body:not(.is-pdf-active) main.ls-wide-mode:not(.ls-right-sidebar-open) div#main-content-container div.relative div.lazy-visibility div.references div.references-blocks div.content>div,
            body:not(.is-pdf-active) main.ls-wide-mode:not(.ls-right-sidebar-open) div#main-content-container div.relative+div+div div.references div.references-blocks div.content>div,
            body:not(.is-pdf-active) main.ls-wide-mode:not(.ls-right-sidebar-open) div#main-content-container div.relative+div+div+div div.references div.references-blocks div.content>div {
                flex-direction: row;
                align-items: stretch;
                justify-content: flex-start;
                flex-wrap: wrap;
                gap: 0.8em;
                padding-right: 50px;
            }
        
            body:not(.is-pdf-active) main.ls-wide-mode:not(.ls-right-sidebar-open) div#main-content-container div.relative div.lazy-visibility div.references div.references-blocks div.content>div>div.lazy-visibility,
            body:not(.is-pdf-active) main.ls-wide-mode:not(.ls-right-sidebar-open) div#main-content-container div.relative+div+div div.references div.references-blocks div.content>div>div.lazy-visibility,
            body:not(.is-pdf-active) main.ls-wide-mode:not(.ls-right-sidebar-open) div#main-content-container div.relative+div+div+div div.references div.references-blocks div.content>div>div.lazy-visibility {
                overflow: auto;
                border-radius: 1.5em;
                max-height: 780px;
                flex: 28%;
                max-width: 615px;
                display: block;
            }
        
            main.ls-wide-mode div#main-content-container div.references div.references-blocks div.content>div>div.lazy-visibility div.fade-enter>div {
                padding: 0.4em;
                margin: 0;
                height: 100%;
            }
        
            body:not(.is-pdf-active) main:not(.ls-right-sidebar-open) main.ls-wide-mode div#main-content-container div.references div.references-blocks div.content>div>div.lazy-visibility {
                width: 44vh;
            }
        
            main.ls-wide-mode div#main-content-container div.references div.references-blocks div.content>div>div.lazy-visibility img {
                max-width: 450px !important;
            }
        
            div#main-content-container div.relative h2.font-bold {
                display: block;
                margin-left: auto;
                margin-right: auto;
            }
        }
    `);


    //switch linked References

    //journal queries bottom & LinkedReferences Side
    if (JournalQueries !== "Side" && LinkedReferences === "Side") {
        logseq.provideStyle(String.raw`
        @media screen and (min-width: 1850px) {
            /* journals */
            div#main-content-container div.flex-1.journal.page {
                display: flex;
                wrap: nowrap;
                justify-content: space-between;
            }

            div.journal>div.flex.flex-col:first-child {
                margin-left: 1em;
                min-width: 1000px;
                flex: 1;
            }
    }
    `);

        //journal queries Side & Linked References Side
    } else if (LinkedReferences === undefined || LinkedReferences === "Side") {
        logseq.provideStyle(String.raw`
            @media screen and (min-width: 1850px) {
                /* journals */
                div#main-content-container div.flex-1.journal.page {
                    display: flex;
                    justify-content: flex-start;
                }

                div.journal>div.flex.flex-col:first-child {
                    margin-left: 1em;
                    min-width: 1000px;
                    flex: 1;
                }
                /*
    
                Journal Linked References
                
                */
            
                div#journals div.references div.pt-6 {
                    padding: 0.1em;
                }
            
                div#journals div.references div.hidden {
                    width: 670px;
                    display: block;
                }
            
                div#journals div.journal.page div.lazy-visibility div.fade-enter-active {
                    height: 100%;
                }
            
                div#journals div.journal>div.lazy-visibility div.references-blocks div.flex.flex-col>div,
                div#journals div.references div.references-blocks div.lazy-visibility div.px-2 {
                    padding-left: 0;
                    padding-right: 0;
                }
            
                /* IF not right sidebar */
                main:not(.ls-right-sidebar-open) div#journals div.references {
                    max-height: 60vh;
                    min-width: 360px;
                    max-width: 670px;
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
            
                /* IF not right sidebar */
                main:not(.ls-right-sidebar-open) div#journals div.references:hover {
                    background: unset;
                    backdrop-filter: blur(40px);
                    min-width: 670px;
                    max-width: 670px;
                    overflow-x: visible;
                    z-index: var(--ls-z-index-level-1);
                    padding-bottom: 4em;
                }
            
                /* CANCEL IF right-sidebar */
                main.ls-right-sidebar-open div#journals div.references {
                    display: none;
                }
            
                /* CANCEL IF PDF-view */
                body.is-pdf-active div#journals div.references {
                    display: none;
                }
            
                /* IF left-sidebar --> +100px */
                main:not(.ls-left-sidebar-open) div#journals div.references {
                    max-width: 460px;
                }
            
            }
    `);
    } else {
        //Not Side
        logseq.provideStyle(String.raw`
        @media screen and (min-width: 1850px) {
            /* IF not right sidebar */
            main:not(.ls-right-sidebar-open) div#journals div.references {
                max-width: 900px;
                max-height: 800px;
                overflow-y: auto;
                font-size: smaller;
                outline: 3px solid var(--ls-guideline-color);
                outline-offset: 2px;
                border-radius: 0.6em;
                padding-left: 3em;
                margin-left: 9em;
            }
    }
    `);
    }



    //switch journal queries
    //Side
    if (JournalQueries === undefined || JournalQueries === "Side") {
        logseq.provideStyle(String.raw`
                @media screen and (min-width: 1850px) {
                    /*
                    Journal-queries space
                    */

                    /* IF right sidebar */
                    main.ls-right-sidebar-open div#journals {
                        margin-right: unset;
                    }
                
                    /* IF Not right sidebar */
                    main:not(.ls-right-sidebar-open) div#journals div.block-children-container {
                        display: block;
                    }
                    /*
    
                    SCHEDULED AND DEADLINE
                    
                    */
                
                    main:not(.ls-right-sidebar-open) div#today-queries+div.flex.flex-col {
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
                    main.ls-right-sidebar-open div#today-queries+div.flex.flex-col {
                        display: none;
                    }
                
                    /* CANCEL IF PDF-view CANCEL */
                    body.is-pdf-active div#today-queries+div.flex.flex-col {
                        display: none;
                    }

                    /*
    
                    Journal queries
                    
                    */
                
                    /* IF Not right sidebar */
                    main:not(.ls-right-sidebar-open) div#today-queries {
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
                    main.ls-right-sidebar-open div#root div#journals div#today-queries {
                        display: none;
                    }
                
                    /* CANCEL IF PDF-view */
                    body.is-pdf-active div#root div#journals div#today-queries {
                        display: none;
                    }
                
                    /* IF tabs-plugin */
                    body.is-tabs-loaded div#root div#journals div#today-queries {
                        top: calc(var(--ls-headbar-height) + var(--ls-headbar-inner-top-padding) + 40px);
                    }
                
                    /* IF left-sidebar */
                    main:not(.ls-left-sidebar-open) div#today-queries {
                        width: 470px;
                    }
                
                    /* Task in query --> bold */
                    div#today-queries .now,
                    div#today-queries .later,
                    div#today-queries .doing,
                    div#today-queries .todo {
                        font-weight: 600;
                    }
                
                    div#today-queries>div.lazy-visibility div.custom-query {
                        margin-top: 0.1em;
                        margin-bottom: 0.8em;
                    }
                
                    div#today-queries>div.lazy-visibility div.custom-query div.custom-query-title {
                        outline: 2px solid var(--ls-guideline-color);
                        font-size: medium;
                        background: var(--ls-page-blockquote-bg-color);
                    }
                
                    div#today-queries>div.lazy-visibility div.custom-query div.custom-query-title:hover {
                        outline: 4px;
                    }
                
                    div#today-queries.mt-10 {
                        margin-top: 0.1em;
                    }
                
                    div#today-queries>div.lazy-visibility div.custom-query div.content {
                        padding-top: 0.15em;
                    }
                
                    div#today-queries>div.lazy-visibility div.custom-query div.content div.lazy-visibility:not(:last-of-type) {
                        border-bottom: 3px dotted var(--ls-guideline-color);
                        padding: 0.6em;
                    }
                
                    div#today-queries>div.lazy-visibility div.custom-query div.content div.lazy-visibility {
                        border-right: 4px solid var(--ls-page-blockquote-bg-color);
                    }
                
                    div#today-queries>div.lazy-visibility div.custom-query div.my-2 {
                        padding: 0.2em;
                        margin: 0.2em;
                    }
                
                    div#today-queries>div.lazy-visibility div.custom-query div.breadcrumb.block-parents {
                        color: var(--ct-external-link-color);
                        margin-bottom: 0.6em;
                    }
                
                    div#today-queries .sm\:px-7 {
                        padding-left: unset;
                    }
                
                    /* Journal-queries h2-h4 header */
                    div#today-queries h2,
                    div#today-queries h3,
                    div#today-queries h4 {
                        font-size: 16px;
                        padding: 4px;
                    }

                    /* remove space */
                    main div#main-content-container {
                        margin : 0;
                        padding-top:unset;
                    }
                }
                
                @media screen and (min-width: 1850px) and (max-width: 2259px) {
                    /* SCHEDULED AND DEADLINE */

                    /* IF left sidebar */
                    main.ls-left-sidebar-open div#today-queries+div.flex.flex-col:hover {
                        width: 560px;
                        margin-right: -160px;
                    }
                
                    /* IF not left sidebar*/
                    main:not(.ls-left-sidebar-open) div#today-queries+div.flex.flex-col {
                        right: 470px;
                    }

                    main:not(.ls-right-sidebar-open) div#today-queries+div.flex.flex-col {
                        right: 395px;
                        width: 400px;
                    }
                
                    /* IF not left sidebar */
                    main:not(.ls-left-sidebar-open) div#today-queries+div.flex.flex-col {
                        width: 460px;
                    }
                
                    /* IF Not left sidebar */
                    main:not(.ls-left-sidebar-open) div#today-queries+div.flex.flex-col:hover {
                        width: 560px;
                        margin-right: -100px;
                        z-index: var(--ls-z-index-level-1);
                    }
                    /* journal queries space */
                    /* IF Not right sidebar */
                    main:not(.ls-right-sidebar-open) div#journals {
                        margin-right: 360px;
                    }
                
                    /* IF Not left sidebar*/
                    main:not(.ls-left-sidebar-open) div#journals {
                        margin-right: 430px;
                    }
                
                }

                @media screen and (min-width: 2260px) {
                    main div#journals div.journal>div.flex.flex-col:first-child {
                        max-width: 1250px;
                    }
                
                    main:not(.ls-right-sidebar-open) div#journals div.journal>div.flex.flex-col:first-child {
                        margin-left: 4em;
                    }
                
                    /* SCHEDULED AND DEADLINE */
                    main div#journals div#today-queries+div.flex.flex-col {
                        right: 525px;
                    }
                    
                    /* journal queries space */

                    main div#journals div#today-queries {
                        width: 500px;
                    }

                    /* IF Not right sidebar */
                    main:not(.ls-right-sidebar-open) div#journals {
                        margin-right: 500px;
                    }
                
                    /* IF Not left sidebar*/
                    main:not(.ls-left-sidebar-open) div#journals {
                        margin-right: 560px;
                    }
                }
                
                @media screen and (min-width: 2800px) {
                    div#journals div.journal>div.flex.flex-col:first-child {
                        min-width: 1200px;
                        max-width: 1430px;
                    }
                    /* SCHEDULED AND DEADLINE */
                    main div#journals div#today-queries+div.flex.flex-col {
                        right: 620px;
                    }
                    /* journal queries space */

                    main div#journals div#today-queries {
                        width: 620px;
                    }

                    /* IF Not right sidebar */
                    main:not(.ls-right-sidebar-open) div#journals {
                        margin-right: 620px;
                    }
                
                    /* IF Not left sidebar*/
                    main:not(.ls-left-sidebar-open) div#journals {
                        margin-right: 680px;
                    }
                }
        `);


    } else {

        //journal queries Not Side

        logseq.provideStyle(String.raw`
            @media screen and (min-width: 1850px) {
            /*
        
            SCHEDULED AND DEADLINE
            
            */
        
            main:not(.ls-right-sidebar-open) div#journals div#today-queries+div.flex.flex-col {
                position: fixed;
                bottom: 1em;
                right: 1em;
                padding: 0.3em;
                width: 560px;
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
            main.ls-right-sidebar-open div#journals div#today-queries+div.flex.flex-col {
                display: none;
            }

            /* hover */
            main div#journals div#today-queries+div.flex.flex-col:hover {
                z-index: var(--ls-z-index-level-1);
            }

            /* CANCEL IF PDF-view CANCEL */
            body.is-pdf-active div#journals div#today-queries+div.flex.flex-col {
                display: none;
            }
            /*
    
            Journal queries
            
            */
            /* IF Not right sidebar */
            main:not(.ls-right-sidebar-open) div#journals div#today-queries {
                max-width: 900px;
                max-height: 800px;
                overflow-y: auto;
                font-size: smaller;
                outline: 3px solid var(--ls-guideline-color);
                outline-offset: 2px;
                border-radius: 0.6em;
                padding-left: 3em;
                margin-left: 9em;
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
                div#right-sidebar div.page-hierarchy {
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
            
                div#right-sidebar div.sidebar-item div.is-journals div.relative+div.flex.flex-col {
                    display: none;
                }
            
                /* ELSE PDF view & right sidebar */
                body:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div#main-content-container div.flex-1.page.relative {
                    margin-bottom: 2em;
                    margin-top: 2em;
                    margin-left: 1.5em;
                }            
            }
    `);
    }


    //switch page-tags and hierarchy
    //Side
    if (TagsHierarchy === undefined || TagsHierarchy === "Side") {
        logseq.provideStyle(String.raw`

            @media screen and (min-width: 1850px) {

                /* ELSE Page right-space */
                body:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div#main-content-container div.relative+div.references.mt-6.flex-1.flex-row,
                body:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div#main-content-container div.page-hierarchy {
                    position: fixed;
                    max-height: 40vh;
                    overflow-y: auto;
                    padding: 1.5em;
                    font-size: 0.95em;
                    background-color: var(--ls-primary-background-color);
                    border-radius: 10px;
                    z-index: 1;
                }  
            
                /* Pages-tagged-with */
                body:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div#main-content-container div.relative+div.references.mt-6.flex-1.flex-row {
                    top: 6.5em;
                    right: 1em;
                }
            
                body.is-pdf-active div#main-content-container div.relative+div.references.mt-6.flex-1.flex-row,
                main.ls-right-sidebar-open div#main-content-container div.relative+div.references.mt-6.flex-1.flex-row {
                    display: none;
                }
            
                body:not(.is-tabs-loaded.is-pdf-active) main:not(.ls-right-sidebar-open) div#main-content-container div.relative+div.references.mt-6.flex-1.flex-row {
                    top: 4.5em;
                }
            
                /* page-hierarchy */
                body:not(.is-pdf-active) div#main-content-container div.page-hierarchy,
                main:not(.ls-right-sidebar-open) div#main-content-container div.page-hierarchy {
                    right: 1em;
                    bottom: 3em;
                }
            
                body.is-pdf-active div#main-content-container div.page-hierarchy,
                main.ls-right-sidebar-open div#main-content-container div.page-hierarchy {
                    display: none;
                }    

            }
            @media screen and (min-width: 1850px) and (max-width: 2259px) {
                /* ELSE Page right-space */
                body:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div#main-content-container div.relative+div.references.mt-6.flex-1.flex-row,
                body:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div#main-content-container div.page-hierarchy {
                    width: 400px;
                }

                /* ELSE pages */
                main:not(.ls-right-sidebar-open) div#main-content-container div.flex-1.page.relative {
                    margin-right: 404px;
                }
            }
            @media screen and (min-width: 2260px) {

                main:not(.ls-right-sidebar-open) div#main-content-container div.flex-1.page.relative {
                    margin-right: 680px;
                }

                div#main-content-container div.relative+div.references.mt-6.flex-1.flex-row,
                div#main-content-container div.page-hierarchy {
                    width: 680px;
                }

            }
    `);


        //Page-tags and Hierarchy
        //Bottom
    } else if (TagsHierarchy === "Bottom") {
        logseq.provideStyle(String.raw`
            @media screen and (min-width: 1850px) {
                body:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div#main-content-container div.flex-1.page.relative {
                    margin-bottom: 2em;
                    margin-top: 2em;
                    margin-left: 1.5em;
                }
                /* right-space */
                body:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div#main-content-container div.relative+div.references.mt-6.flex-1.flex-row,
                body:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div#main-content-container div.page-hierarchy {
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
                body:not(.is-pdf-active) main:not(.ls-right-sidebar-open) div#main-content-container div.relative+div.references.mt-6.flex-1.flex-row {
                    bottom: 0;
                    right: 0.3em;
                }
                /* page-hierarchy */
                body:not(.is-pdf-active) div#main-content-container div.page-hierarchy,
                main:not(.ls-right-sidebar-open) div#main-content-container div.page-hierarchy {
                    right: 42vw;
                    bottom: 0;
                }
            }
    `);
    }

    console.info(`#${pluginId}: loaded`);
};/* end_main */

logseq.ready(main).catch(console.error);