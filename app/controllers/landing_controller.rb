class LandingController < ApplicationController

  def index
    @user=User.last
  end


end
