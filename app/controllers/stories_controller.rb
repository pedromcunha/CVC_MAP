class StoriesController < ApplicationController

  def home

  end 

  def show
    @story = Story.where(id: params[:id]).take

    render json: @story
  end 

  def create
    @story = Story.new(story_params)
    if @story.save 
       render json: @story
    else
       render json: @story.errors.full_messages, status: :unprocessable_entity
    end
  end 

  private 

  def story_params 
    params.permit(:title, :section_1, :section_2, :section_3, :photo, :url, :age, :race, :city, :state, :noc )
  end 
end
