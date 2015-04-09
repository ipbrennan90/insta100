class LandingController < ApplicationController

  def index
    @user=current_user
    insta_api = InstagramAPI.new
    @tag=params[:search]
    if @tag
      @search = insta_api.tag_photos("#{@tag}", "#{current_user.token}")
    end
  end


end
