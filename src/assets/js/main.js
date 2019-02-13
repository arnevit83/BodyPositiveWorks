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
    }, 'fast');
    $('.ScrollUp').fadeIn();
    return false;
  });

  $(window).on("scroll", function() {
    if ($(window).scrollTop() > 400) {
      $('.ScrollUp').fadeIn();


      if($(window).scrollTop() + $(window).height() > $(document).height() - 500) {


   $('#vertical-nav').fadeOut("fast");

       } else {

     $('#vertical-nav').fadeIn();

       }



    } else {
      $('.ScrollUp').fadeOut();
   $('#vertical-nav').fadeOut("fast");
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
