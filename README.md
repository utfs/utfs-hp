
# utfs-hp

 > 東大金融研究会設立を記念に作られた、非常にシンプルな静的サイトです。
 > Vue.jsのフレームワークであるNuxt.jsで作り、Guthubを介してNetlifyにデプロイしています。
 > 記事に関してはContentfulで作成してAPIから取得しています。

## ビルド方法

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## デプロイ方法

GithubのMasterブランチにプッシュすることで自動的にNetlifyにデプロイされます。


## ファイル構成

基本的にかなりオーソドックスなファイル構成です。


## Gitの使い方

### masterへのmerge
developをmasterにマージする。このときdevelopは削除せずに残す。

### ブランチ名
masterとdevelop以外は基本使い捨てなので短期的に重複しなければなんでも良いです。
例：

feature/[機能名など]
feature-[機能名など]
feature_[開発者名など]


### コミットメッセージ
いわゆる、チケット駆動型(1行目にチケット番号を書く)+ライト版(コミット種別が少ない)
1行目
[コミット種別] refs #[チケット番号] [チケットタイトル or 要約]
チケットタイトルをそのまま使用できるのが理想。
コミット種別

fix：バグ修正
add：新規（ファイル）機能追加
update：機能修正（バグではない）
remove：削除（ファイル）

3行目
変更した理由を出来るかぎり具体的に書きます。