/*! Custom * !*/
var images = [
  "/assets/images/bg2.webp",
  "/assets/images/bg3.webp",

  "/assets/images/bg5.webp",
  "/assets/images/bg1.webp"
]
$(document).ready(function() {
  // Ugly Background change
  //Still need to do the png backward compatility

  var i = 0;
  var backgroundchange = true
  setInterval(function() {

    if (backgroundchange) {
      $(".page-header").css('background-image',"url(" + images[i] + ")").bind('onreadystatechange load', function(){
        if (this.complete) $(this).fadeIn(300);
        });
      i = i + 1;
      if (i == images.length) {
        i = 0;
      }    }
    }, 8000);




  $('.ScrollUp').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 'slow');
    $('.ScrollUp').fadeIn();
    return false;
  });

  $(window).on("scroll", function() {
    if ($(window).scrollTop()  > 800) {
      $('.ScrollUp').fadeIn();
            backgroundchange = false;
    } else {
      $('.ScrollUp').fadeOut();
      backgroundchange = true;
    }
    if ($(window).scrollTop()  > 100 ) {
            backgroundchange = false;
    } else {
      backgroundchange = true;
    }

  });

  $('.ScrollUp').hover(
    function() {
      $(this).addClass('shadow')
    },
    function() {
      $(this).removeClass('shadow')
    }
  )
})




$.fn.preload = function() {
    this.each(function(){
        $('<img/>')[0].src = this;
    });
}
$(images).preload();
