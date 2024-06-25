# Logseq プラグイン: *Column Layout*

- Logseqの日誌(ジャーナル)にカラムレイアウトのスタイルを適用します。
日次ジャーナルと、そのリンク参照("Lined References")、ジャーナルクエリ(Journal Queries)を横並びにして配置します。
  > 日誌以外の場合 >> [ページタグと階層 プラグイン](https://github.com/YU000jp/logseq-page-tags-and-hierarchy/)

<div align="right">

[English](https://github.com/YU000jp/Logseq-column-Layout)/[日本語](https://github.com/YU000jp/Logseq-column-Layout/blob/main/README.ja.md) [![latest release version](https://img.shields.io/github/v/release/YU000jp/Logseq-column-Layout)](https://github.com/YU000jp/Logseq-column-Layout/releases)
[![License](https://img.shields.io/github/license/YU000jp/Logseq-column-Layout?color=blue)](https://github.com/YU000jp/Logseq-column-Layout/blob/main/LICENSE)
[![Downloads](https://img.shields.io/github/downloads/YU000jp/Logseq-column-Layout/total.svg)](https://github.com/YU000jp/Logseq-column-Layout/releases)
 公開日 20220913 <a href="https://www.buymeacoffee.com/yu000japan"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a pizza&emoji=🍕&slug=yu000japan&button_colour=FFDD00&font_colour=000000&font_family=Poppins&outline_colour=000000&coffee_colour=ffffff" /></a>
</div>

- スクリーンショット
  > ![image](https://user-images.githubusercontent.com/111847207/195663729-7c979e9e-9309-4f0b-9766-581778c5aaa7.png)

## できること

### 日誌

- 引用(ブロック参照)で、タイムラインを記述します。ログの記録としても効果的です。 ⌨️`Win/Cmd + Alt` キーを同時押しで、箇条書き(・)を掴みながらドラッグして、そのブロック参照をブロックに置きます。

  > ![image](https://user-images.githubusercontent.com/111847207/195662824-35aecadd-c404-42a8-82eb-54ffc628c321.png)

### "Lined References"

#### [Omnivoreプラグイン](https://github.com/omnivore-app/logseq-omnivore) が適しています

- 「Omnivore.app」というWebアプリは、**Logseq に引用できるWebクリップのツール** です。その日のWebクリップが、日記の隣に表示されます。 (`substack.com` のニュースレターも表示できます。)

#### 📅 次の日記を書く際の思考リストとして、リンクする

- [datenlpプラグイン](https://github.com/hkgnp/logseq-datenlp-plugin) を使用します。水曜日に表示させたい場合は`@wednesday`、もしくは過去の日記を読んで気になったブロックに`@today`を追加します。これらはリンクになり、"Linked References" という参照リストに含まれます。(当日分は含まれません)

#### PDFのハイライト

- Logseq はPDFファイルを読み込んでそのPDFにマーカーをつける機能 (ハイライト)があります。そのブロックの親に日付リンクをタグ付けすると、"Lined References" という参照リストに含まれます。 [PDFハイライト（docs.logseq.com 英語）](https://docs.logseq.com/#/page/pdf%20highlights)

### ジャーナルクエリ

> 通常では、NOWクエリーとNEXTクエリーの 2つのクエリーが設置されています。タスクをさらに取得するには、Logseq から`config.edn` ファイルでその設定の変更をおこないます。 [その詳細については、このリンク（サンプルコード）を参照してください (英語)](https://github.com/YU000jp/logseq-default-queries-journals)

---

## はじめに

#### 次のプラグインはサポートされていません > [Awesome Styler](https://github.com/yoyurec/logseq-awesome-styler) プラグインは同時に使用できません

Logseq マーケットプレイス からインストール
  - 右上のツールバーで `---` を押して `プラグイン` を開きます。 `マーケットプレース` を選択します。検索フィールドに `Column` と入力し、検索結果から選択してインストールします。

### 使用方法

- スタイルは日誌のみ適用されます。ウィンドウサイズが1850px未満の場合、スタイルは適用されません。

### プラグイン設定

- 日誌の隣に"Lined References"を配置する
   - `true` デフォルト
   - `false`
- 右サイドバーのコンテンツを並列に配置する
   > ⚠️ Logseq v0.9.14バージョンから、横並びの制限は2になりました。
   - `true`
   - `false` デフォルト

> 画像サイズ制限機能は、[画像プレビュープラグイン](https://github.com/YU000jp/logseq-plugin-preview-image)に移動しました。

---

## ショーケース / 質問 / アイデア / ヘルプ

> [ディスカッション](https://github.com/YU000jp/Logseq-column-Layout/discussions)タブに移動して質問し、この種の情報を見つけてください。

- Logseqにタスクがない場合、"Lined References"のスペースは空白になります。
- 日記からの参照("Lined References")は、今日以外の日付に限られます。
- 縮小表示で画像が見にくい場合、ズーム機能を使用するか、サイドバーで開いてください。
- 日誌で、昨日などの過去の分を表示したくない場合
  - [Single Journal プラグイン](https://github.com/YU000jp/logseq-plugin-single-journal)
- 日誌の上にミニカレンダーを配置する
  - [Show weekday and week-number プラグイン](https://github.com/YU000jp/logseq-plugin-show-weekday-and-week-number)

## クレジット

- 製作者 > [@YU000jp](https://github.com/YU000jp)

<a href="https://www.buymeacoffee.com/yu000japan"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a pizza&emoji=🍕&slug=yu000japan&button_colour=FFDD00&font_colour=000000&font_family=Poppins&outline_colour=000000&coffee_colour=ffffff" /></a>
