var sliderInt=1;
var sliderNext=2;
//when website ready runs a function within curly braces
$(document).ready(function(){
  function startSlider(){
    var count = $("img").size();
    loop = setInterval(function(){
      if(sliderNext > count){
        sliderNext = 1;
        sliderInt = 1;
      }
      $(".slider img").fadeOut(900);
      $nextImage = $("#"+sliderNext)
      $nextImage.fadeIn(2000);

      sliderInt = sliderNext;
      sliderNext = sliderNext+1;

      console.log(sliderNext)

    }, 3000)
  }

  startSlider();
});


// 
//   $("#1").fadeIn(300);
//   startSlider();
//
//
//   app = {
//     init: function() {
//       this.imageCount = $("img").size;
//       this.currentImage = 1;
//       this.nextImage = 1;
//
//       while(true) {
//         this.fadeOut(".slider img");
//         this.rotateImage();
//         this.fadeIn($("#"+this.nextImage))
//
//       }
//     }
//     fadeIn: function($image) {
//       $image.fadeIn(2000)
//     },
//     fadeOut: function($images) {
//       $images.fadeOut(900);
//     },
//     rotateImage: function() {
//       if (this.currentImage > this.imageCount) {
//         this.nextImage = 1;
//         this.currentImage = 1;
//       } else {
//         this.nextImage += 1;
//       }
//     }
//   }
//
//   app.init()
//
//
// });
