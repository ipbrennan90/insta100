
//when website ready runs a function within curly braces
$(document).ready(function(){
  app = {
    init: function() {
      this.imageCount = $("img").size;
      this.currentImage = 1;
      this.nextImage = 1;

      setInterval(function(){
        // debugger;
        this.fadeAllOut($(".instagram-image"))
        if($(".slider").attr("value")){
          this.rotateImage();
          this.fadeImageIn($("#"+this.nextImage))
        }
        else{
          this.rotateImage();
          this.fadeImageIn($("#"+this.nextImage))
        }


      }.bind(this), 3000)
    },
    fadeImageIn: function($image) {
      $image.fadeIn(2000)
    },
    fadeAllOut: function($images) {
      $images.fadeOut(900);
    },
    rotateImage: function() {
      if (this.nextImage > this.imageCount) {
        this.nextImage = 1;
        this.currentImage = 1;
      } else {
        this.nextImage += 1;
      }
    }
  },
  app.init()
});
