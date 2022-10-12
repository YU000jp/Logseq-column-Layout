Sorry, Not compatible with Safari browser. Address the issue early


# Logseq Column-Layout Plugin

 - Journals, linked references, and journal queries can be placed side by side if the minimum screen width is "1900px" or more.

 - Pages can be placed side by side in the sidebar.(Credit: [Logseq Vertical Panels for Sidebar](https://github.com/r-hegde/logseq-vertical-panels))

![1662768116823-So7NpcKumn](https://user-images.githubusercontent.com/111847207/189483249-87505a6e-29f5-4ee5-91f7-961be542da16.png)

![1662766493774-uanJkoieHO](https://user-images.githubusercontent.com/111847207/189498997-5d6f791b-2a6b-45d7-bcb2-d09bee36d431.png)

## INSTALL
 - the screen min-width: 1900px
 - This Plugin is available on the Logseq Market place.
 - Some plugins are not supported.


## Pattern
 ### the page other than journals
 - display "page-tags" and "page-hierarchy".(Credit: [logseq page-tags and hierarchy](https://github.com/YU000jp/logseq-page-tags-and-hierarchy))
 - "Linked References" side by side (only Wide-mode)
 - Wide mode(shortcut: 「**tw**」) is recommended if you want to use them side by side. Journals will be left justified.

![スクリーンショット 2022-10-02 102232](https://user-images.githubusercontent.com/111847207/193434026-5595de15-2e40-42a2-95d4-ab0f1c2b55c3.png)

---

# Change Journal Queries (**OPTION**)
 - Enhancing Journal Queries turns Logseq into an outliner task management tool.
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
 
## SUPPORT
  - If the plugin helps you, I'd really appreciate your support. You can buy me a coffee here.
 <a href="https://www.buymeacoffee.com/yu000japan" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>
 
