class StoriesController < ApplicationController

  def home

  end 

  def index
    @story = Story.where(id: Random.rand(11)).take

    render json: @story
  end 

  def create
    binding.pry
    @story = Story.new(story_params)

    if @story.save 
       render json: @story

    else
      render json: @story.errors, status: :unprocessable_entity
    end
  end 

  private 

  def story_params 
    params.permit(:title, :section_1, :section_2, :section_3)
  end 
end
