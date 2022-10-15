# Logseq Column-Layout Plugin
 - Journals, linked references, and journal queries can be placed side by side if the minimum screen width is "1850px" or more.
 ![スクリーンショット 2022-10-14 0207414](https://user-images.githubusercontent.com/111847207/195663729-7c979e9e-9309-4f0b-9766-581778c5aaa7.png)

## How to
### Journals
 - If you use the reference function and write the timeline, it is also effective as a log.
 - Press 「cmd(win)」+「alt」 at the same time to get the reference by mouse dragging.
 ![スクリーンショット 2022-10-14 0207412](https://user-images.githubusercontent.com/111847207/195662824-35aecadd-c404-42a8-82eb-54ffc628c321.png)
### Linked Reference
 - Suitable for [Logseq-Omnivore plugin](https://github.com/omnivore-app/logseq-omnivore).　Omnivore is a webclipping tool that can be quoted to Logseq.
 - You can see the table of contents of the web clips next to the journal, so it's easy to browse to the journal from there.
### Journal Queries
 - Change the journal query to get more task management.　See the "Option" section below.
### Right Sidebar
 - Pages can be placed side by side in the sidebar.(Credit: [Logseq Vertical Panels for Sidebar](https://github.com/r-hegde/logseq-vertical-panels))
 - You can adjust the size by selecting the bottom right of the block. But don't make it too small.
![スクリーンショット 2022-10-14 022234](https://user-images.githubusercontent.com/111847207/195664336-43845b98-7a45-4d78-884a-fa0048f49b47.png)

## Attention⚠️
 - the screen min-width: 1850px
 - Some plugins are not supported. (Let me know on [GitHub](https://github.com/YU000jp/Logseq-column-Layout/issues).)
 - The space is blank if there are no tasks in Logseq.
 - Linked references are limited to dates other than today.

### The page other than journals
 - display "page-tags" and "page-hierarchy" ([logseq page-tags and hierarchy plugin](https://github.com/YU000jp/logseq-page-tags-and-hierarchy))
 - "Linked References" side by side (only Wide-mode). If the display space is small, hold down "Shift" and click to open it in the right sidebar.
 - Wide mode(shortcut: 「**tw**」) is recommended if you want to use them side by side. Journals will be left justified.
![スクリーンショット 2022-10-02 102232](https://user-images.githubusercontent.com/111847207/193434026-5595de15-2e40-42a2-95d4-ab0f1c2b55c3.png)

## Install
 - This Plugin is available on the Logseq Market place.

---


# Option
 ## Change Journal Queries
 - Enhancing Journal Queries turns Logseq into an outliner task management tool.
 ![1662770461291-FhSBaJXekb](https://user-images.githubusercontent.com/111847207/189484746-8364ad0c-98d2-4117-b321-b79d7c56052c.png)

 ### Edit Logseq「config.edn」 (part of)
![1662772563325-tkA2Gj61wv](https://user-images.githubusercontent.com/111847207/189498869-2b99016d-a2b3-44cc-80ed-f9e0cb123d78.png)



 - See "[Logseq Default Query 6-pack](https://gist.github.com/psu/abf8d8c206f11d56c0e214d0bfcf065f)" or my sample.

#### My sample

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
 

## SUPPORT
 <a href="https://www.buymeacoffee.com/yu000japan" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>
 
