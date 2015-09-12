class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :age 
      t.string :gender, :limit => 1
      t.text :story

      t.timestamps null: false
    end
  end
end
