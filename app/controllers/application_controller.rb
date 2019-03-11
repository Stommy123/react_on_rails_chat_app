class ApplicationController < ActionController::Base
    before_action :authenticate_user!
    p 'hello world'
end
