class LandingController < ApplicationController

  def index
    @user=current_user
    insta_api = InstagramAPI.new
    @search = insta_api.tag_photos("", "#{current_user.token}")
  end


end
