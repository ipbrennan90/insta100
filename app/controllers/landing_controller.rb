class LandingController < ApplicationController

  def index
    @insta_api = InstagramAPI.new

    search_type=params[:search_type]

    if current_user.present?


      unless search_type =="2"
        @search=params[:search]
      end

      if @search.blank?
        @response = {}
        flash[:error] = "Please enter something"
      elsif search_type == "1"
        @response = @insta_api.tag_photos("#{@search}", "#{current_user.token}")
      elsif search_type =="2"
        @location=Location.create!(address: "#{@search}")
        @response=@insta_api.location_photos(@location.latitude, @location.longitude, "#{current_user.token}")
      elsif search_type =="3"
        @response = @insta_api.selfie("#{current_user.token}")
      end
    else
      token = ENV['API_TOKEN']
      @response = @insta_api.selfie(token)
    end

  end



end
