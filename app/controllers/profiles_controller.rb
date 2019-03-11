class ProfilesController < ApplicationController
  def index
    @profiles = Profile.where.not(id: current_user.profile)
    render json: @profiles
  end 
  def show
    @profile = Profile.find(params[:id])
  end
end 