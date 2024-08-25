# README

# アプリケーション名
Tiny-Finds(意味：小さい発見)
# アプリケーション概要
老若男女問わず小さな発見（ワクワクすること）を地図上に写真やレビューとしてシェアすることができる。
# URL
https://tiny-finds-app.onrender.com/
# テスト用アカウント
Basic認証 ID:admin  Pass:2222  
テスト用アカウント メールアドレス：test@test.com  パスワード：1test1
# 利用方法  
### ワクワクを探したい利用者
.新規登録をしていただきログインする  
.地図上で気になる地域を直感的に縁を描きながら囲む  
.円で囲ったところのビューが表示され、ブラウザ上でワクワクを共有できたり、気になった場所へ直接行く等の行動につながる。  
### 情報共有したい利用者
.ログインした利用者が、ワクワクを発見した場所を地図上にピンを指してレビューやコメントをしていただく  
.投稿者のレビュー内容について、他の利用者がいいね機能やコメントを入力していただく  
# アプリケーションを作成した背景  
私自身２児の父親になりますが、子供と遊ぶために出かけることが好きです。  
しかし、時々思うのです。  
  
車や公共交通機関を使って遠くまで行きたくない。かと言って、近くの公園で一緒に遊ぶのも飽きてきた・・・。  
そんな中、自分が子供の頃、父親が何をしてくれていたかを振り返り、近くの小川で一緒に魚釣りや自転車に乗って近くの山に入りカブトムシ取ったりと。  
小さい頃に自身が経験したワクワクを子供達に持ってもらいたいのと、親も一緒に楽しんでもらいたい、そう言う思いで同じような境遇の方々と情報共有できればと思いアプリケーションを作成しました。  
もう子供が大きくなってしまった親世代であっても年齢性別関係なくレビュー投稿出来るので地域との交流も活発化するのではないかと考えております。  
# 実装した機能についての画像やGIFについて  
イメージとしてはこちらです。  
[![Image from Gyazo](https://i.gyazo.com/ff457061c195db6dd3ae335d96335611.gif)](https://gyazo.com/ff457061c195db6dd3ae335d96335611)  
完成図予定  
[![Image from Gyazo](https://i.gyazo.com/3809f5e61ec606baf292d1658dd47016.jpg)](https://gyazo.com/3809f5e61ec606baf292d1658dd47016)
# 実装予定の機能  
.地図上に指で手書きで円を描き、囲った中だけピンとレビューが見れるように実装(某不動産のアプリのようなことをブラウザ上で)  
.年代別やライフスタイルに合わせたタグでの表示ON,OFF機能  
.いいねボタンの実装  
# データベース設計  
[![Image from Gyazo](https://i.gyazo.com/3e55fa0d6b9ea9c566d99214ab681bb3.png)](https://gyazo.com/3e55fa0d6b9ea9c566d99214ab681bb3)  
# 画面遷移図  
[![Image from Gyazo](https://i.gyazo.com/bf31597b09a3f50eb954bfe960808fcd.png)](https://gyazo.com/bf31597b09a3f50eb954bfe960808fcd)
# 開発環境  
.Ruby on Rails  
.Java Script  
.Google Map API  
.  
# ローカルでの動作方法  
git cloneしてから、ローカルで動作をさせるまでに必要なコマンドを記載。  
# 工夫したポイント  
イメージと近い記事がなかったため、知識を蓄積しながら作成しています。  
# 制作時間  
制作中のため、予定としては1ヶ月で考えております。
# テーブル設計

## users テーブル

| Column             | Type   | Options                   |
| ------------------ | ------ | ------------------------- |
| nickname           | string | null: false               | ニックネーム
| email              | string | null: false, unique: true | メールアドレス
| encrypted_password | string | null: false               | パスワード
| last_name          | string | null: false               | 名前
| first_name         | string | null: false               | 苗字
| kana_last_name     | string | null: false               | カナ名前
| kana_first_name    | string | null: false               | カナ苗字
| birthday           | date   | null: false               | 誕生日


### Association

- has_many :reviews
- has_many :locations


# テーブル設計

## Locations テーブル

| Column             | Type       | Options                        |
| ------------------ | ---------- | ------------------------------ |
| name               | string     | null: false                    | ポリゴンの名前
| coordinates        | text       | null: false                    | 座標
| user               | references | null: false, foreign_key: true | 外部キー
### Association

- belongs_to:user
- has_many :reviews


# テーブル設計

## Reviews テーブル

| Column       | Type         | Options                        |
| ------------ | ------------ | ------------------------------ |
| caption      | string       | null: false                    | 題名（見出し）
| rating_id    | integer      | null: false                    | レビューの評価（⭐︎で１から５段階表示）
| comment      | string       | null: false                    | ちょっとしたコメント
| user         | references   | null: false, foreign_key: true | 外部キー
| location     | references   | null: false, foreign_key: true | 外部キー

### Association

- belongs_to:location
- belongs_to:user
- has_many :active_storage_attachments, as: :record, dependent: :destroy
