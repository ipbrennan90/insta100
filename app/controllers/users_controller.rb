class UsersController<ApplicationController

  def create_user
    insta_api= InstagramAPI.new
    insta_user = insta_api.token(params[:code])


    @user = User.create!(token: insta_user[:access_token], name:insta_user[:user][:username], prof_pic:insta_user[:user][:profile_picture])
    if @user.save
      redirect_to root_path
    end

  end
end
