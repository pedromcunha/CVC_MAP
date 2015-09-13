class AddQuesToSurveys < ActiveRecord::Migration
  def change
    add_column  :surveys,  :q1, :string
    add_column  :surveys,  :q2, :string
    add_column  :surveys,  :q3, :string
    add_column  :surveys,  :q4, :string 
    add_column  :surveys,  :q5, :text 
  end
end
