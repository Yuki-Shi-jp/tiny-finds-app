# README
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
| name               | decimal    | null: false                    | ポリゴンの名前
| coordinates        | text       | null: false                    | 座標
| user               | references | null: false, foreign_key: true | 外部キー
### Association

- belongs_to:user
- has_many :reviews
- serialize :coordinates, JSON # coordinatesを配列として扱うためにserializeを使用


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
- has_many :photos, dependent: :destroy

<!-- # models/photo.rb
class Photo < ApplicationRecord
  belongs_to :review
  mount_uploader :image, ImageUploader # carrierwaveを使用して画像アップロード機能を実装
end -->