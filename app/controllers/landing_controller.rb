class LandingController < ApplicationController

  def index
    if current_user.present?

      insta_api = InstagramAPI.new

      search_type=params[:search_type]
      unless search_type =="2"
        @search=params[:search]
      end

      if search_type == "1"
        @response = insta_api.tag_photos("#{@search}", "#{current_user.token}")
      elsif search_type =="2"
        @location=Location.create!(address: "#{params[:search]}")
        @response=insta_api.location_photos(@location.latitude, @location.longitude, "#{current_user.token}")
      else
        @response = insta_api.popular("#{current_user.token}")
      end
    end

  end


end
