class AddUserToSurvey < ActiveRecord::Migration
  def change
    add_column :surveys, :user_id, :integer
  end
end
