class HomeController < ApplicationController
    def index
      @profiles = Profile.where.not(id: current_user.profile) 
    end
end 