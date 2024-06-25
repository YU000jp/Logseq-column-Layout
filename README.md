# Logseq Plugin: *Column Layout*

- Apply column layout style to Journals in Logseq - For quick reference, place journals, linked references, and journal queries side by side.
   > For non-journals >> [Page-tags and Hierarchy  plugin](https://github.com/YU000jp/logseq-page-tags-and-hierarchy/)

<div align="right">

[English](https://github.com/YU000jp/Logseq-column-Layout)/[日本語](https://github.com/YU000jp/Logseq-column-Layout/blob/main/README.ja.md) [![latest release version](https://img.shields.io/github/v/release/YU000jp/Logseq-column-Layout)](https://github.com/YU000jp/Logseq-column-Layout/releases)
[![License](https://img.shields.io/github/license/YU000jp/Logseq-column-Layout?color=blue)](https://github.com/YU000jp/Logseq-column-Layout/blob/main/LICENSE)
[![Downloads](https://img.shields.io/github/downloads/YU000jp/Logseq-column-Layout/total.svg)](https://github.com/YU000jp/Logseq-column-Layout/releases)
 Published 20220913 <a href="https://www.buymeacoffee.com/yu000japan"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a pizza&emoji=🍕&slug=yu000japan&button_colour=FFDD00&font_colour=000000&font_family=Poppins&outline_colour=000000&coffee_colour=ffffff" /></a>
</div>

- Screenshot

  > ![image 2022-10-14 0207414](https://user-images.githubusercontent.com/111847207/195663729-7c979e9e-9309-4f0b-9766-581778c5aaa7.png)

## What can do

### Journals

- If use the reference function and write the timeline, it is also effective as a log. Press ⌨️`cmd(win) + alt` at the same time to get the reference by mouse dragging on the bullet.

  > ![image 2022-10-14 0207412](https://user-images.githubusercontent.com/111847207/195662824-35aecadd-c404-42a8-82eb-54ffc628c321.png)

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

- Not supported > [Awesome Styler](https://github.com/yoyurec/logseq-awesome-styler) plugin cannot be used at the same time
- Install from Logseq Marketplace
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

## Showcase / Questions / Ideas / Help

> Go to the [Discussions](https://github.com/YU000jp/Logseq-column-Layout/discussions) tab to ask and find this kind of things.
- Linked References space is blank if there are no tasks in Logseq.
- Linked reference from journal are limited to dates other than today.
- If you find it difficult to see the image in a reduced view, please use the zoom function or open it in sidebar.
- This plugin relies on Logseq's DOM (Document Object Model) structure. If the DOM structure changes due to a Logseq version update, styles may not be applied. We will adjust the CSS to deal with it. If you notice something, please raise an issue.
- If you do not want to display multiple diaries in journals
   - [Single Journal plugin](https://github.com/YU000jp/logseq-plugin-single-journal)
- Place the mini calendar on top of journals
   - [Show weekday and week-number plugin](https://github.com/YU000jp/logseq-plugin-show-weekday-and-week-number)

## Credit

- Author > [@YU000jp](https://github.com/YU000jp)
