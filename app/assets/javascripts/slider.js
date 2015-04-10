
//when website ready runs a function within curly braces
$(document).ready(function(){
  var app = {
    init: function() {
      this.imageCount = $("img").size();
      this.nextImage = 1;

      setInterval(function(){
        this.fadeAllOut($(".instagram-image"));
        if($(".slider").attr("value")){
          this.rotateImage();
          this.fadeImageIn($("#"+this.nextImage));
        } else {
          this.rotateImage();
          this.fadeImageIn($("#"+this.nextImage));
        }
      }.bind(this), 3000)
    },
    fadeImageIn: function(image) {
      image.fadeIn(2000)
    },
    fadeAllOut: function(images) {
      images.fadeOut(900);
    },
    rotateImage: function() {
console.log("imageCount is: " + this.imageCount);
console.log("nextImage is: " + this.nextImage);
      if (this.nextImage >= this.imageCount) {
        this.nextImage = 1;
      } else {
        this.nextImage += 1;
      }
    }
  };
  app.init();
});
