class LandingController < ApplicationController

  def index

    @insta_api = InstagramAPI.new
    @insta_user = @insta_api.token(params[:code])
    @search = params[:search]
  end


end
