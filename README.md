# Logseq Plugin: Column Layout

- Journals, linked references, and journal queries can be placed side by side.

> ⚠️Cancel if the screen width is less than `1850px`

[![latest release version](https://img.shields.io/github/v/release/YU000jp/Logseq-column-Layout)](https://github.com/YU000jp/Logseq-column-Layout/releases)
[![License](https://img.shields.io/github/license/YU000jp/Logseq-column-Layout?color=blue)](https://github.com/YU000jp/Logseq-column-Layout/blob/main/LICENSE)

## Changelog

- ContextMenu functions separate as a plugin => [SomeMenuExtender](https://github.com/YU000jp/logseq-plugin-some-menu-extender) #2023/04/01

- page-tags and hierarchy display function in content page (non-journals) separate as a plugin => [Page-tags and Hierarchy](https://github.com/YU000jp/logseq-page-tags-and-hierarchy)

## Screenshot

![スクリーンショット 2022-10-14 0207414](https://user-images.githubusercontent.com/111847207/195663729-7c979e9e-9309-4f0b-9766-581778c5aaa7.png)

![image](https://user-images.githubusercontent.com/111847207/229287018-f99c3a07-4f39-40a1-8bce-f6ee6ae17a78.png)

## What can do

### Journals

- If you use the reference function and write the timeline, it is also effective as a log.
- Press ⌨️`cmd(win) + alt` at the same time to get the reference by mouse dragging on the bullet.

![スクリーンショット 2022-10-14 0207412](https://user-images.githubusercontent.com/111847207/195662824-35aecadd-c404-42a8-82eb-54ffc628c321.png)

### Linked reference

#### Suitable for [Omnivore plugin](https://github.com/omnivore-app/logseq-omnivore)

- Omnivore is a **WebClipping tool** that can be quoted to Logseq.
- You can see the table of web clips for the day next to the journal, so it's easy to access. (View `substack.com` newsletter)

#### 📅 As a list for inclusion in the next journal

- Use [datenlp plugin](https://github.com/hkgnp/logseq-datenlp-plugin). Add `@wednesday` or read past journals and add `@today`. They become links.

#### PDF highlights

- Logseq has the ability to read and highlight PDF file. If you add a date link to highlights, it will be included in the list of linked references.
- [PDF highlights (docs.logseq.com)](https://docs.logseq.com/#/page/pdf%20highlights)

### Journal queries

- To get more task management
- On Logseq, edit `config.edn` file. [For more details refer to this link(sample code)](https://github.com/YU000jp/logseq-default-queries-journals)

![Animation1](img/journal-queries-demo.gif)

### Original right sidebar

- Pages can be placed side by side in right sidebar.
- Adjust the size by selecting the bottom right of the block. But don't make it too small.
- Changed not to display page-tags and Hierarchy in right sidebar.
- Display several pages side by side in right sidebar.

![Animation2](https://user-images.githubusercontent.com/111847207/200146804-e0e53c12-933a-417e-b19a-e9e782e1c492.gif)

## ⚠️ Remarks

- Linked References space is blank if there are no tasks in Logseq.
- Linked reference from journal are limited to dates other than today.
- If you find it difficult to see the image in a reduced view, please use the zoom function or open it in sidebar.

## 🚧 Troubleshoot

- Please let me know on [GitHub](https://github.com/YU000jp/Logseq-column-Layout/issues).
- It would be helpful if you could take a screenshot.

## Other my plugins

- [SomeMenuExtemder](https://github.com/YU000jp/logseq-plugin-some-menu-extender)
- [Column Layout](https://github.com/YU000jp/Logseq-column-Layout)
- [Panel Coloring](https://github.com/YU000jp/logseq-plugin-panel-coloring)
- [Page-tags and Hierarchy](https://github.com/YU000jp/logseq-page-tags-and-hierarchy)
- [Rakuten-books](https://github.com/YU000jp/logseq-plugin-rakuten-books)
- [booklog-jp-import](https://github.com/YU000jp/logseq-plugin-booklog-jp-import)

### Supported plugins

- [Awesome UI](https://github.com/yoyurec/logseq-awesome-ui)
- [Awesome Links](https://github.com/yoyurec/logseq-awesome-links)

### Unsupported plugin

- [Awesome Styler](https://github.com/yoyurec/logseq-awesome-styler)

## Credit

- [Vertical Panels for Sidebar](https://github.com/r-hegde/logseq-vertical-panels)

---

<a href="https://www.buymeacoffee.com/yu000japan" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-violet.png" alt="🍌Buy Me A Coffee" style="height: 42px;width: 152px" ></a>
