Published on logseq marketplace. 

# logseq-plugin-column-layout
 - Cancel if the screen width is less than `1850px`.
 - Journals, linked references, and journal queries can be placed side by side.
 ![スクリーンショット 2022-10-14 0207414](https://user-images.githubusercontent.com/111847207/195663729-7c979e9e-9309-4f0b-9766-581778c5aaa7.png)

## How to
### Journals 📚
 - If you use the reference function and write the timeline, it is also effective as a log.
 - Press ⌨️`cmd(win) + alt` at the same time to get the reference by mouse dragging.

![スクリーンショット 2022-10-14 0207412](https://user-images.githubusercontent.com/111847207/195662824-35aecadd-c404-42a8-82eb-54ffc628c321.png)

### Linked Reference
#### Suitable for [logseq Omnivore plugin](https://github.com/omnivore-app/logseq-omnivore) 🚩
- Omnivore is a **webclipping tool** that can be quoted to Logseq.
- You can see the table of web clips for the day next to the journal, so it's easy to access. (View `substack.com` newsletter)
#### As a list for inclusion in the next journal 📅
 - Use [Logseq datenlp plugin](https://github.com/hkgnp/logseq-datenlp-plugin). Add `@wednesday` or read past journals and add `@today`. They become links.
 #### View completed tasks ✅
 - Try using [Logseq task completion tracker plugin](https://github.com/DimitryDushkin/logseq-plugin-task-check-date).

### Journal Queries
 - Change the journal query to get more task management.
 - On Logseq, edit `config.edn` file. [For more details refer to this link(sample code)](https://github.com/YU000jp/logseq-default-queries-journals)
![Animation1](img/journal-queries-demo.gif)

### Right Sidebar
 - Pages can be placed side by side in the sidebar.(Credit: [Logseq Vertical Panels for Sidebar](https://github.com/r-hegde/logseq-vertical-panels))
 - Adjust the size by selecting the bottom right of the block. But don't make it too small.
 - Changed not to display page-tags and Hierarchy in the right sidebar. Clearly display the right sidebar.
 - Display several pages side by side in right sidebar.
 
![Animation2](https://user-images.githubusercontent.com/111847207/200146804-e0e53c12-933a-417e-b19a-e9e782e1c492.gif)

### The page other than journals
 - Display "page-tags" and "page-hierarchy" ([logseq page-tags and hierarchy plugin](https://github.com/YU000jp/logseq-page-tags-and-hierarchy))
 
 - "Linked References" side by side (only Wide-mode). If the display space is small, hold down ⌨️`Shift` and click to open it in the right sidebar.
 - Wide mode(⌨️`t w`) is recommended if you want to use Linked References side by side. Journals will be left justified.
 ![image](https://user-images.githubusercontent.com/111847207/200147083-f2ff65dd-0ba4-49eb-986c-c384178f9354.png)

### Right-click context menu 🖱️
#### Link a reference (LATER task)
 - Take a reference for a repeat task. It records when you run it. [For more details refer to this link](https://github.com/YU000jp/logseq-repeat-task-reference/blob/main/README.md).
#### Delete a block

## Attention⚠️
 - Some plugins are not supported. (Let me know on [GitHub](https://github.com/YU000jp/Logseq-column-Layout/issues).)
 - The Linked Reference space is blank if there are no tasks in Logseq.
 - Linked reference from journal are limited to dates other than today.
 - If you find it difficult to see the image in a reduced view, please use the zoom function or open it in sidebar.

---

 <a href="https://www.buymeacoffee.com/yu000japan" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>
 
