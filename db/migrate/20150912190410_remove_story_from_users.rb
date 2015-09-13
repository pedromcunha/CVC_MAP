class RemoveStoryFromUsers < ActiveRecord::Migration
  def change
    remove_column :users, :story
  end
end
