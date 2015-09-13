class AddBioToStory < ActiveRecord::Migration
  def change
   add_column :stories, :age, :string
   add_column :stories, :race, :string
   add_column :stories, :city, :string
   add_column :stories, :state, :string
   add_column :stories, :noc, :string



  end
end
