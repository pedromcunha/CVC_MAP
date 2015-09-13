class CreateStories < ActiveRecord::Migration
  def change
    create_table :stories do |t|
      t.string :title
      t.string :section_1
      t.string :section_2
      t.string :section_3

      t.timestamps null: false
    end
  end
end
