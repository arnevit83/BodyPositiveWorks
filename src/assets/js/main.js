/*! Custom * !*/

$(document).ready(function() {

  function CloseMobilemenu() {
    $('html').removeClass('nav-open');
    materialKit.misc.navbar_menu_visible = 0;
    $('#bodyClick').remove();
    setTimeout(function() {
      $toggle.removeClass('toggled');
    }, 550);

    $('html').removeClass('nav-open-absolute');
  }

  $(".dropdown-item").click(function(event) {
    CloseMobilemenu();
  });
  $(".mobile-close").click(function(event) {
    CloseMobilemenu();
  });



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
