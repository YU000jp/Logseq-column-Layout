# Logseq Plugin: *Column Layout (UI)*

- For quick reference, it is possible to place journals, linked references, and journal queries side by side.

> ⚠️Cancel if the screen width is less than `1850px`

[![latest release version](https://img.shields.io/github/v/release/YU000jp/Logseq-column-Layout)](https://github.com/YU000jp/Logseq-column-Layout/releases)
[![License](https://img.shields.io/github/license/YU000jp/Logseq-column-Layout?color=blue)](https://github.com/YU000jp/Logseq-column-Layout/blob/main/LICENSE)
[![Downloads](https://img.shields.io/github/downloads/YU000jp/Logseq-column-Layout/total.svg)](https://github.com/YU000jp/Logseq-column-Layout/releases)
 Published 2022/09/13

## Screenshot

![image 2022-10-14 0207414](https://user-images.githubusercontent.com/111847207/195663729-7c979e9e-9309-4f0b-9766-581778c5aaa7.png)

## What can do

### Journals

- If you use the reference function and write the timeline, it is also effective as a log.
- Press ⌨️`cmd(win) + alt` at the same time to get the reference by mouse dragging on the bullet.

![image 2022-10-14 0207412](https://user-images.githubusercontent.com/111847207/195662824-35aecadd-c404-42a8-82eb-54ffc628c321.png)

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

### Original right sidebar

- Pages can be placed side by side in right sidebar.
- Adjust the size by selecting the bottom right of the block. But don't make it too small.
- Changed not to display page-tags and Hierarchy in right sidebar.
- Display several pages side by side in right sidebar.

![Animation](https://user-images.githubusercontent.com/111847207/200146804-e0e53c12-933a-417e-b19a-e9e782e1c492.gif)

---

## Getting Started

### Install from Logseq Marketplace

- Press `---` on the top right toolbar to open `Plugins`
- Select `Marketplace`
- Type `Column` in the search field, select it from the search results and install

![image](https://user-images.githubusercontent.com/111847207/229359128-8a35bc00-b9ab-4048-be6f-5026bf0980a5.png)

### Usage

- When this plugin install, the style be applied to journals.

> By default, original right sidebar is turned on. it is possible to set in the plugin settings.

### Plugin Settings

- [Journals] Linked References side by side: boolean
   - `true` default
   - `false`
- Original right sidebar: boolean
   - `true` default
   - `false`
- Change large image max-size (open journals): number (px)
   - `300` < `660` default < `800`
- Change large image max-size (open pages): number (px)
   - `300` < `1050` default > `1200`

---

## Questions❔

- Linked References space is blank if there are no tasks in Logseq.
- Linked reference from journal are limited to dates other than today.
- If you find it difficult to see the image in a reduced view, please use the zoom function or open it in sidebar.

### Supported plugins

- [Awesome UI](https://github.com/yoyurec/logseq-awesome-ui)
- [Awesome Links](https://github.com/yoyurec/logseq-awesome-links)

### Unsupported plugin

- [Awesome Styler](https://github.com/yoyurec/logseq-awesome-styler)

## Showcase / Questions / Ideas / Help

> Go to the [discussion](https://github.com/YU000jp/Logseq-column-Layout/discussions) tab to ask and find this kind of things.

## Author

- GitHub: [YU000jp](https://github.com/YU000jp)

## Prior art & Credit

- [Vertical Panels for Sidebar](https://github.com/r-hegde/logseq-vertical-panels)

---

<a href="https://www.buymeacoffee.com/yu000japan" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-violet.png" alt="🍌Buy Me A Coffee" style="height: 42px;width: 152px" ></a>
