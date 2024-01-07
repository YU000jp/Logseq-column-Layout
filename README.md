[日本語](https://github.com/YU000jp/Logseq-column-Layout/blob/main/README.ja.md)

# Logseq Plugin: *Column Layout (Journals UI)*

1. Journals view UI: For quick reference, place journals, linked references, and journal queries side by side.
  > For non-journals >> [Page-tags and Hierarchy (Page UI) plugin](https://github.com/YU000jp/logseq-page-tags-and-hierarchy/)

[![latest release version](https://img.shields.io/github/v/release/YU000jp/Logseq-column-Layout)](https://github.com/YU000jp/Logseq-column-Layout/releases)
[![License](https://img.shields.io/github/license/YU000jp/Logseq-column-Layout?color=blue)](https://github.com/YU000jp/Logseq-column-Layout/blob/main/LICENSE)
[![Downloads](https://img.shields.io/github/downloads/YU000jp/Logseq-column-Layout/total.svg)](https://github.com/YU000jp/Logseq-column-Layout/releases)
 Published 2022/09/13

- Screenshot

   ![image 2022-10-14 0207414](https://user-images.githubusercontent.com/111847207/195663729-7c979e9e-9309-4f0b-9766-581778c5aaa7.png)

## What can do

### Journals

- If use the reference function and write the timeline, it is also effective as a log. Press ⌨️`cmd(win) + alt` at the same time to get the reference by mouse dragging on the bullet.

![image 2022-10-14 0207412](https://user-images.githubusercontent.com/111847207/195662824-35aecadd-c404-42a8-82eb-54ffc628c321.png)

### Linked reference

#### Suitable for [Omnivore plugin](https://github.com/omnivore-app/logseq-omnivore)

- Omnivore is a **WebClipping tool** that can be quoted to Logseq. It is possible to see the table of web clips for the day next to the journal, so it's easy to access. (View `substack.com` newsletter)

#### 📅 As a list for inclusion in the next journal

- Use [datenlp plugin](https://github.com/hkgnp/logseq-datenlp-plugin). Add `@wednesday` or read past journals and add `@today`. They become links.

#### PDF highlights

- Logseq has the ability to read and highlight PDF file. If you add a date link to highlights, it will be included in the list of linked references. [PDF highlights (docs.logseq.com)](https://docs.logseq.com/#/page/pdf%20highlights)

### Journal queries

- To get more task management. On Logseq, edit `config.edn` file. [For more details refer to this link(sample code)](https://github.com/YU000jp/logseq-default-queries-journals)

---

## Getting Started

Not supported > [Awesome Styler](https://github.com/yoyurec/logseq-awesome-styler) plugin cannot be used at the same time

Install from Logseq Marketplace
  - Press `---` on the top right toolbar to open `Plugins`. Select `Marketplace`. Type `Column` in the search field, select it from the search results and install

### Usage

- Styles be applied only to journals. The styles are not applied if the window size is less than 1850px.

### Plugin Settings

- Place "Linked References" next to journals: boolean
   - `true` default
   - `false`
- Make right sidebar content next to each other: boolean
   > ⚠️Starting with Logseq v0.9.14 version, the limit is 2.
   - `true`
   - `false` default

> Image size limit feature' has been moved to [Preview Image plugin](https://github.com/YU000jp/logseq-plugin-preview-image).

---

## Questions❔

1. Linked References space is blank if there are no tasks in Logseq.
1. Linked reference from journal are limited to dates other than today.
1. If you find it difficult to see the image in a reduced view, please use the zoom function or open it in sidebar.

## Showcase / Questions / Ideas / Help

> Go to the [discussion](https://github.com/YU000jp/Logseq-column-Layout/discussions) tab to ask and find this kind of things.

1. This plugin relies on Logseq's DOM (Document Object Model) structure. If the DOM structure changes due to a Logseq version update, styles may not be applied. We will adjust the CSS to deal with it. If you notice something, please raise an issue.
1. If you do not want to display multiple diaries in journals
   - [Single Journal plugin](https://github.com/YU000jp/logseq-plugin-single-journal)
1. Place the mini calendar on top of journals
   - https://github.com/YU000jp/logseq-plugin-show-weekday-and-week-number

Author > [@YU000jp](https://github.com/YU000jp)

<a href="https://www.buymeacoffee.com/yu000japan" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-violet.png" alt="🍌Buy Me A Coffee" style="height: 42px;width: 152px" ></a>
