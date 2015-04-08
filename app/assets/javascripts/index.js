function auth(code) {
  var url = 'https://api.instagram.com/oauth/access_token';

  $.ajax({
    type: 'POST',
    url: url,
    data: {
      'client_id': '075438af884843c89f53ba9a32657559',
      'client_secret': 'c23da1f862e945b1b62578a3b1642b06',
      'grant_type':'authorization_code',
      'redirect_uri':'http://localhost:3000/',
      'code': code
    },
    dataType: 'json',
    success: function(o) {
       console.log(o.access_token);
    },

  });

}
