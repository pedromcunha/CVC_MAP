class CreateSources < ActiveRecord::Migration
  def change
    create_table :sources do |t|
      t.string :age
      t.string :gender

      t.timestamps null: false
    end
  end
end
