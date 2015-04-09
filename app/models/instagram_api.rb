class InstagramAPI

  def initialize
    @conn = Faraday.new(url: 'https://api.instagram.com')
  end

  def token(code)
    response = @conn.post do |req|
      req.url '/oauth/access_token'
      req.body = {client_id: ENV['CLIENT_ID'],
            client_secret: ENV['CLIENT_SECRET'],
            grant_type:'authorization_code',
            redirect_uri:'http://localhost:3000/users',
            code: code}
    end
    JSON.parse(response.body, symbolize_names:true)

  end



  def tag_photos(search, token)
    response = @conn.post do |req|
      req.url "/v1/tags/search?q=#{search}&access_token=#{token}"
    end
    JSON.parse(response.body, symbolize_names:true)
  end
end
