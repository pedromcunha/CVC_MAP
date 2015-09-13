class AddSourceIdToStory < ActiveRecord::Migration
  def change
    add_column :stories, :source_id, :integer 
  end
end
