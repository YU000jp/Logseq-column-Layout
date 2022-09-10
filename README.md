# Logseq-column-Layout

![1662768116823-So7NpcKumn](https://user-images.githubusercontent.com/111847207/189483249-87505a6e-29f5-4ee5-91f7-961be542da16.png)

![1662766493774-uanJkoieHO](https://user-images.githubusercontent.com/111847207/189484368-024b8451-1456-4e11-bd88-3457f797b9d0.png)


## INSTALL

the screen min-width: 1850px

Incompatible with some theme packages.


### Edit Logseq 「custom.css」

```clojure
@import url('https://yu000jp.github.io/Logseq-column-Layout/custom.css');
```


---


## Change Jounal Queries

Enhancing Journal Queries turns Logseq into an outliner task management tool.

 ![1662770461291-FhSBaJXekb](https://user-images.githubusercontent.com/111847207/189484746-8364ad0c-98d2-4117-b321-b79d7c56052c.png)

### Edit Logseq「config.edn」 (part of)

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
 
