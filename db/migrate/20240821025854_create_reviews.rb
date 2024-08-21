class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.string :caption,null: false
      t.integer :rating_id,null: false
      t.string :comment,null: false
      t.references :user,null: false, foreign_key: true
      t.references :location,null: false, foreign_key: true
      t.timestamps
    end
  end
end
