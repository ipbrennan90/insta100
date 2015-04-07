Rails.application.routes.draw do
root 'landing#index'
get 'sign-in', to: redirect('https://api.instagram.com/oauth/authorize/?client_id=075438af884843c89f53ba9a32657559&redirect_uri=http://localhost:3000/&response_type=code')
end
