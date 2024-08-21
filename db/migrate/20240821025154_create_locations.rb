class CreateLocations < ActiveRecord::Migration[7.0]
  def change
    create_table :locations do |t|
      t.string :name,null: false
      t.text :coordinates,null: false
      t.eferences :user, null: false, foreign_key: true
      t.timestamps
    end
  end
end
