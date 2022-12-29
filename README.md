# logseq-plugin-column-layout

- Cancel if the screen width is less than `1850px`.
- Journals, linked references, and journal queries can be placed side by side.

[![latest release version](https://img.shields.io/github/v/release/YU000jp/Logseq-column-Layout)](https://github.com/YU000jp/Logseq-column-Layout/releases)
[![License](https://img.shields.io/github/license/YU000jp/Logseq-column-Layout?color=blue)](https://github.com/YU000jp/Logseq-column-Layout/blob/main/LICENSE)

![スクリーンショット 2022-10-14 0207414](https://user-images.githubusercontent.com/111847207/195663729-7c979e9e-9309-4f0b-9766-581778c5aaa7.png)

![image](https://user-images.githubusercontent.com/111847207/206630653-c12bb5da-c0df-4f1b-8819-09d5090fd593.png)

## What can do

### Journals 📚

- If you use the reference function and write the timeline, it is also effective as a log.
- Press ⌨️`cmd(win) + alt` at the same time to get the reference by mouse dragging.

![スクリーンショット 2022-10-14 0207412](https://user-images.githubusercontent.com/111847207/195662824-35aecadd-c404-42a8-82eb-54ffc628c321.png)

### Linked reference

#### Suitable for [logseq Omnivore plugin](https://github.com/omnivore-app/logseq-omnivore)

- Omnivore is a **WebClipping tool** that can be quoted to Logseq.
- You can see the table of web clips for the day next to the journal, so it's easy to access. (View `substack.com` newsletter)

#### As a list for inclusion in the next journal 📅

- Use [logseq datenlp plugin](https://github.com/hkgnp/logseq-datenlp-plugin). Add `@wednesday` or read past journals and add `@today`. They become links.

#### View completed tasks ✅

- After DONE a task, a dialog will appear asking if you want to add a completed property. (Credit [logseq task completion tracker plugin](https://github.com/DimitryDushkin/logseq-plugin-task-check-date))

### Journal queries

- To get more task management
- On Logseq, edit `config.edn` file. [For more details refer to this link(sample code)](https://github.com/YU000jp/logseq-default-queries-journals)

![Animation1](img/journal-queries-demo.gif)

### Right sidebar

- Pages can be placed side by side in the sidebar.([Credit: Logseq Vertical Panels for Sidebar](https://github.com/r-hegde/logseq-vertical-panels))
- Adjust the size by selecting the bottom right of the block. But don't make it too small.
- Changed not to display page-tags and Hierarchy in the right sidebar. Clearly display the right sidebar.
- Display several pages side by side in right sidebar.

![Animation2](https://user-images.githubusercontent.com/111847207/200146804-e0e53c12-933a-417e-b19a-e9e782e1c492.gif)

### Content page (non-journals)

- Display "page-tags" and "page-hierarchy" ([logseq-page-tags-and-hierarchy](https://github.com/YU000jp/logseq-page-tags-and-hierarchy))

### Right-click context menu🖱️

#### ✔️ DONE with completed

- Add a completed property with DONE [Credit: logseq-plugin-task-check-date](https://github.com/DimitryDushkin/logseq-plugin-task-check-date)

#### 🔵🟣Link as reference

- Mouse drag a bullet for the block to move it into the journal.

#### 🔵🟣LATER as reference

- As a LATER task, do the repeat task to record in the journal,

#### ❌ Delete this block

## ⚠️Remarks

- The Linked Reference space is blank if there are no tasks in Logseq.
- Linked reference from journal are limited to dates other than today.
- If you find it difficult to see the image in a reduced view, please use the zoom function or open it in sidebar.

## 🚧Troubleshoot

- Please let me know on [GitHub](https://github.com/YU000jp/Logseq-column-Layout/issues).
- It would be helpful if you could take a screenshot.

---

<a href="https://www.buymeacoffee.com/yu000japan" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-violet.png" alt="🍌Buy Me A Coffee" style="height: 42px;width: 152px" ></a>
