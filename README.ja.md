[English](https://github.com/YU000jp/Logseq-column-Layout)

# Logseq プラグイン: *Column Layout (UI)* カラム レイアウト

- 日誌のためのページビューUI: 日誌ページで、日誌(ジャーナル)、"Lined References"、日誌クエリーを横並びにして配置します。
  > 日誌以外の場合 >> [ページタグと階層 プラグイン（ワイドビューモード）](https://github.com/YU000jp/logseq-page-tags-and-hierarchy/)

[![最新リリースバージョン](https://img.shields.io/github/v/release/YU000jp/Logseq-column-Layout)](https://github.com/YU000jp/Logseq-column-Layout/releases)
[![ライセンス](https://img.shields.io/github/license/YU000jp/Logseq-column-Layout?color=blue)](https://github.com/YU000jp/Logseq-column-Layout/blob/main/LICENSE)
[![ダウンロード](https://img.shields.io/github/downloads/YU000jp/Logseq-column-Layout/total.svg)](https://github.com/YU000jp/Logseq-column-Layout/releases)
 公開日: 2022/09/13

## スクリーンショット

![image](https://user-images.githubusercontent.com/111847207/195663729-7c979e9e-9309-4f0b-9766-581778c5aaa7.png)

## できること

### 日誌

- 参照機能(リファレンス)を使用してタイムラインを記述する場合、ログの記録としても効果的です。 ⌨️`cmd(win) + alt`キーを同時押しで、バレッド(・)を掴んでドラッグしてリファレンスをブロックに置きます。

![image](https://user-images.githubusercontent.com/111847207/195662824-35aecadd-c404-42a8-82eb-54ffc628c321.png)

### "Lined References"

#### [Omnivoreプラグイン](https://github.com/omnivore-app/logseq-omnivore)に適しています

- 「Omnivore.app」というWebアプリは、Logseqに引用できる**Webクリップのツール**です。その日のWebクリップが、日記の隣に表示されます。 (`substack.com`のニュースレターも表示できます。)

#### 📅 次の日記を書く際の思考リストとして、リンクする

- [datenlpプラグイン](https://github.com/hkgnp/logseq-datenlp-plugin)を使用します。水曜日に表示させたい場合は`@wednesday`、もしくは過去の日記を読んで気になったブロックに`@today`を追加します。これらはリンクになり、"Linked References"のリストに含まれます。(当日分は含まれない)

#### PDFのハイライト

- LogseqはPDFファイルを読み込んでハイライトする機能があります。ハイライトに日付リンクを追加すると、"Lined References"のリストに含まれます。 [PDFハイライト（docs.logseq.com）](https://docs.logseq.com/#/page/pdf%20highlights)

### 日誌クエリー

> 通常では2つのクエリーが設置されています。タスクをさらに取得するには、Logseqから`config.edn`ファイルでその設定の変更をおこないます。 [その詳細については、このリンク（サンプルコード）を参照してください](https://github.com/YU000jp/logseq-default-queries-journals)

---

## はじめに

#### 次のプラグインはサポートされていません

1. [Awesome Styler](https://github.com/yoyurec/logseq-awesome-styler) プラグインは同時に使用できません

### Logseq マーケットプレイスからインストール

- 右上のツールバーで `---` を押して `プラグイン` を開きます。 `マーケットプレース` を選択します。検索フィールドに `Column` と入力し、検索結果から選択してインストールします。

### 使用方法

- スタイルは日誌のみ適用されます。ウィンドウサイズが1850px未満の場合、スタイルは適用されません。

### プラグイン設定

- 日誌の隣に"Lined References"を配置する: ブール
   - `true` デフォルト
   - `false`
- 右サイドバーのコンテンツを並列に配置する: ブール
   > ⚠️ Logseq v0.9.14バージョンから、横並びの制限は2になりました。
   - `true`
   - `false` デフォルト
- 大きな画像の最大サイズ（日誌用）を変更: スライダー
   - `300` < `660` デフォルト < `800` [px]
- 大きな画像の最大サイズ（日誌以外のページ用）を変更: スライダー
   - `300` < `1050` デフォルト < `1200` [px]

---

## 質問❔

- Logseqにタスクがない場合、"Lined References"のスペースは空白になります。
- 日記からの参照("Lined References")は、今日以外の日付に限られます。
- 縮小表示で画像が見にくい場合、ズーム機能を使用するか、サイドバーで開いてください。

## ショーケース / 質問 / アイデア / ヘルプ

> [ディスカッション](https://github.com/YU000jp/Logseq-column-Layout/discussions)タブに移動して質問し、この種の情報を見つけてください。

## 作者

- GitHub: [YU000jp](https://github.com/YU000jp)

---

<a href="https://www.buymeacoffee.com/yu000japan" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-violet.png" alt="🍌Buy Me A Coffee 製作者にコーヒーを奢ってください!" style="height: 42px;width: 152px" ></a>
