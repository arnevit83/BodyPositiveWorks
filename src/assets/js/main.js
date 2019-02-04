/*! Custom * !*/

$(document).ready(function() {

  $('.ScrollUp').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 'slow');
    $('.ScrollUp').fadeIn();
    return false;
  });

  $(window).on("scroll", function() {
    if ($(window).scrollTop() > 800) {
      $('.ScrollUp').fadeIn();

    } else {
      $('.ScrollUp').fadeOut();

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
  $('.gallery-feed').spectragram('getUserFeed', {
    complete: galleryfeedkFunc(),
    max: 8,
    size: "small",
    wrapEachWith: "<div class='IGFeed'></div>"
  });

});

function galleryfeedkFunc() {

  window.setTimeout(function() {

    $(".gallery-feed").find("a").replaceWith(function() {
      return $(this).contents();
    });
  }, 3000);
};
window.setTimeout(function() {
  $("#SliderBanner").children().children().css("display", "block");

}, 2000);
