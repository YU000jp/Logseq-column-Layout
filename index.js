function main() {
    logseq.provideStyle(String.raw`


/* ページ内画像のサイズダウン(最大サイズの設定) */
.asset-container img {
    max-width: 600px !important;
}



/* カラムレイアウト(高解像度ディスプレイ向け、横幅大きめ) */
@supports (display: flex) {
@media screen and (min-width: 1850px) {

div.flex-1.journal.page {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}

/* メインコンテンツのサイズアップ */
:root {
    --ls-main-content-max-width: auto !important;
}

/* 右クエリーカラムの領域確保 */
div#journals {
    margin-right: 360px;
}

/* ジャーナルカラム */
.journal>div.flex.flex-col:first-child {
    margin-right: 0.5em;
    min-width: 750px;
    max-width: 1000px;
    flex: 3;
}


/* SCHEDULED AND DEADLINEを浮かせる */
div#today-queries+div.flex.flex-col {
    position: fixed;
    right: 440px;
    top: 0.5em;
    z-index: 10;
    margin: 1em;
    border-radius: 10px;
    padding:1em;
    padding-left: 2em;
}
.light-theme div#today-queries+div.flex.flex-col {
    background-color: #eed67e;
}
.dark-theme div#today-queries+div.flex.flex-col {
    background-color: var(--ls-primary-background-color);
    border: 2px solid #eed67e;
}

div#today-queries+div.flex.flex-col h2.font-bold.opacity-50 {
    font-size: larger;
}


/* Linked Referencesカラム flex表示 */
div#journals div.references {
    max-height: 1220px;
    z-index: 1;
    width: 350px;
    overflow-y: auto;
    font-size: smaller;
}

div.max-w-7xl.mx-auto.pb-24 {
    max-width: 2400px !important;
}


/* 右クエリーカラム 固定表示 上下にスクロール可能 */
div#today-queries {
    width: 385px;
    position: fixed;
    right: 1em;
    top: -0.1em;
    bottom: 0;
    overflow-y: scroll;
    z-index: 0;
    font-size: smaller;
    background-color: var(--ls-primary-background-color);
    border-radius: 10px;
    padding-bottom: 4em;
}

div#today-queries div.flex.flex-col,
div#today-queries div.flex.flex-col div.initial {
    padding: 0;
}
div#today-queries time{
    font-size: medium;
}
div#today-queries .sm\:px-7{
    padding-left: unset;
}

div#today-queries a.block-marker {
    font-size: 22px;
}


/* 右サイドバーを浮かせる */
div#right-sidebar {
    position: fixed;
    right: 0;
    top: 48px;
    z-index: 15;
}

/* 右サイドバーの背景色 */
div.cp__right-sidebar-scrollable>div+div {
    background: #999;
}

/* Linked Referencesのpaddingを減らす */

div.journal>div.lazy-visibility div.references-blocks div.flex.flex-col>div {
    padding-left: 0;
    padding-right: 0;
}



/* ジャーナル以外のページ */
div#main-content-container div.flex-1.page.relative {
    margin-right: 400px;
    padding: 6em;
}

/* Pages tagged with "〇〇" のみ右側にfixed固定表示 上下スクロール */
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


/* 各テーマパッケージのfix */

/* #kanban かんばん表示タグ */
[data-refs-self*="kanban"] > .block-children-container > .block-children {
    overflow-x: scroll !important;
    flex-direction: column;
    max-width: 760px;
}
/* TODOリストプラグイン */
.light-theme div#logseq-plugin-todo span {
    color: #666;
}


}}/* カラムレイアウトここまで */




    `);
}

// bootstrap
logseq.ready(main).catch(console.error)
