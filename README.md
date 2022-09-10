# Column-Layout Plugin for Logseq

If you're using wide monitors, you can place journals, linked references, and journal queries side by side.



![1662768116823-So7NpcKumn](https://user-images.githubusercontent.com/111847207/189483249-87505a6e-29f5-4ee5-91f7-961be542da16.png)

![1662766493774-uanJkoieHO](https://user-images.githubusercontent.com/111847207/189498997-5d6f791b-2a6b-45d7-bcb2-d09bee36d431.png)



## INSTALL

the screen min-width: 1850px

This Plugin is available on the Logseq Market place.


Some plugins are not supported.


---


## Change Jounal Queries (**OPTION**)

Enhancing Journal Queries turns Logseq into an outliner task management tool.

 ![1662770461291-FhSBaJXekb](https://user-images.githubusercontent.com/111847207/189484746-8364ad0c-98d2-4117-b321-b79d7c56052c.png)

### Edit Logseq「config.edn」 (part of)

![1662772563325-tkA2Gj61wv](https://user-images.githubusercontent.com/111847207/189498869-2b99016d-a2b3-44cc-80ed-f9e0cb123d78.png)


```clojure
 :default-queries{
	 :journals[



{:title "🔨 Working Tasks #NOW"
    :query (task NOW)
    :collapsed? false
 }



{:title "📅  Scheduled to #LATER"
    :query (task LATER)
    :collapsed? false
 }



{:title "⚠️ OVERDUE"
   :query [:find (pull ?block [*])
   :in $ ?start ?today
   :where
   [?block :block/marker ?marker]

   (or
     [?block :block/scheduled ?d]
     [?block :block/deadline ?d])

   [(>= ?d ?start)]
   [(<   ?d ?today)]

   [(contains? #{"NOW" "LATER" "TODO" "DOING" "WAITING"} ?marker)]]
     :inputs [:180d :today]
     :result-transform  (fn [result]
             (sort-by  (fn [d]
             (get d :block/deadline) ) result ))
     :collapsed? true
}



{:title "Deadline within 10 days"
  :query [:find (pull ?block [*])
          :in $ ?start ?next
          :where
           (or
            [?block :block/deadline ?d]
           )
           [(> ?d ?start)]
           [(< ?d ?next)]
         ]
  :inputs [:7d :10d-after]
      :result-transform  (fn [result]
             (sort-by  (fn [h]
             (get h :block/deadline) ) result ))
  :collapsed? false
}



{:title "🐬 Project #DOING"
    :query (task DOING)
    :collapsed? true
 }



{:title "⏳ Not Assigned #WAITING"
    :query (task WAITING)
    :collapsed? true
}



{:title "⏰ Scheduled appointments, 14 days #TODO"
 :query [:find (pull ?block [*])
         :in $ ?start ?next
         :where
         (or
           [?block :block/scheduled ?d]
         )
         [(> ?d ?start)]
         [(< ?d ?next)]
        ]
 :inputs [:7d :14d-after]
      :result-transform  (fn [result]
             (sort-by  (fn [d]
             (get d :block/scheduled) ) result ))
 :collapsed? false
}



    ]}
```

### Contains the following 7 queries


 1. 🔨 Working Tasks #NOW

 1. 📅 Scheduled to #LATER

 1. ⚠️ OVERDUE

 1. Deadline within 10 days

 1. 🐬 Project #DOING

 1. ⏳ Not Assigned #WAITING

 1. ⏰ Scheduled appointments, 14 days #TODO
 
 
 ---
 
 ## Change Custom CSS (**OPTION**)
 

 ### Edit Logseq「custom.css」 (part of)
 
 
 ```clojure
 
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

```

 
 ---
 
## SUPPORT

 If this custom css helps you, I'd really appreciate your support. You can buy me a coffee here.
 
 <a href="https://www.buymeacoffee.com/yu000japan" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>
 
