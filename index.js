function main() {
    logseq.provideStyle(String.raw`


/* ページ内画像のサイズダウン(最大サイズの設定) */
.asset-container img {
    max-width: 600px !important;
}


/* 区切り「---」 の表示 */
hr {
    border-top: 2px dashed;
    margin-top: 2.5em;
}



/* 左サイドバー メニューにカーソルが乗ったとき */
.light-theme div.left-sidebar-inner a:hover {
    background: linear-gradient(#c1e0ff 110%, transparent 70%);
}


/* 左サイドバーのメニューアイコンを大きくする */
.page-icon {
    font-size: 24px;
    padding-right: 1.5em;
}


/* 左サイドバー　縦の間隔調整 */
div.nav-content-item-inner {
    margin-top: 3em;
}


/* #タグの強調 */
a.tag[data-ref] {
    font-weight: bold;
    font-size: 20px;
    margin: 3px;
    box-shadow: :0 0 0 2px #e9ecef;
    border-radius: .25rem;
    padding: 5px;
    border: solid 2px #045591;
}


/* タグにカーソルが乗ったとき */
.light-theme a.tag[data-ref]:hover {
    background: linear-gradient(transparent 70%, #c1e0ff 60%);
    font-weight: bolder;
}


/* チェックボタンのサイズアップ */
input.form-checkbox {
    transform: scale(1.2);
}
input.form-checkbox+div input.form-checkbox {
    transform: scale(0.9);
}
input.form-checkbox+div a {
    font-size: medium;
}

/* NOWの強調 */
.light-theme .now {
    background: linear-gradient(transparent 40%, #c1e0ff 70%);
    font-weight: bold;
}

/* LATERの強調 */
.light-theme .later {
    background: linear-gradient(transparent 70%, #c1e0ff 80%);
    font-weight: bold;
}

/* DOINGの強調 */
.light-theme .doing {
    background: linear-gradient(transparent 40%, #cadbcf 80%);
    font-weight: bold;
}

/* TODOの強調 */
.light-theme .todo {
    background: linear-gradient(transparent 80%, #cadbcf 70%);
    font-weight: bold;
}

/* LATER、NOW、TODO、DOINGなどの強調 */
a.block-marker {
    font-weight: bold;
    font-size: 26px;
    margin-right: 0.3em;
}

/* CANCELED、DONEを打消し線にしない、ピンク */
.canceled,
.done {
    text-decoration：none;
    background: #ffdbed;
    border-radius: 0.25em;
    display: inline;
}

.dark-theme .canceled,
.dark-theme .done {
    color: #111;
}
.dark-theme .canceled a,
.dark-theme .done a {
    color: #222;
}




/* リンクにカーソルが乗ったら強調 */
.light-theme a:hover {
    background: linear-gradient(transparent 70%, #91b2d2 70%);
    font-weight: bold;
    text-shadow: 1px 1px 1px gray;
}


/* ジャーナルページのタイトル */
div.flex h1 {
    overflow: hidden;
    padding: 4px;
    margin-bottom: 0;
    color: #999;
}

div.flex h1:before {
    content: "title";
    font-size: medium;
    padding: 0.5em;
}



/* Taskカードにヘッダーが含まれる場合に文字サイズを小さくする */
div#today-queries h2,
div#today-queries h3,
div#today-queries h4 {
    font-size: 17px;
    padding: 5px;
}


/* タイトルヘッダーの上側に余白をつける */
h2,
h3,
h4 {
    margin-top: 20px;
}


/* ヘッダーサイズの表示をする */
.ls-block h1::after {
    content: "h1";
}

.ls-block h2::after {
    content: "h2";
}

.ls-block h3::after {
    content: "h3";
}

.ls-block h4::after {
    content: "h4";
}

.ls-block h5::after {
    content: "h5";
}

.ls-block h1::after,
.ls-block h2::after,
.ls-block h3::after,
.ls-block h4::after,
.ls-block h5::after,
.ls-block h6::after {
    color: #f1f1f1;
    margin-left: 1em;
    font-size: medium;
    font-weight: bold;
    background: #abbdda;
    padding: 0.5em;
    border-radius: 0.5em;
}


/* クエリーテーブルの項目が見づらいのを調整 */
.custom-query .table-auto>thead>tr>th {
    background-color: rgba(0, 0, 0, 0.1);
    padding: 3px 6px;
    font-weight: bold;
    text-transform: capitalize;
}

.custom-query .table-auto>tbody>tr>td.whitespace-nowrap {
    overflow-wrap: break-word;
    min-width: 20px;
    white-space: normal;
    font-weight: 300;
    font-size: 13px;
}

.custom-query .table-auto>tbody>tr>.whitespace-nowrap img {
    max-height: 120px;
    margin: 0;
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
    max-width: 700px;
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