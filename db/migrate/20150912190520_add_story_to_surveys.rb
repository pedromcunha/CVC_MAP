class AddStoryToSurveys < ActiveRecord::Migration
  def change
    add_column :surveys, :story, :text
  end
end
