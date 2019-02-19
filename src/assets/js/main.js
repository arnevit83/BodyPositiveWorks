/*! Custom * !*/
$(document).ready(function() {
  function isValidEmailAddress(emailAddress) {
    var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return pattern.test(emailAddress);
  }
  $("#emailsignup").submit(function(e) {


    if (isValidEmailAddress($("#emailsignupemail").val())) {

      var form = $(this);
      var url = form.attr('action');
      $.ajax({
        type: "POST",
        url: url,
        data: form.serialize(), // serializes the form's elements.
        success: function(data) {
          $("#emailsignupbutton").prop('disabled', true);
          $("#emailsignupbutton").html("Thank you!")
          $("#emailsignupemail").html("");


        }
      });
    } else {
      $("#emailsignupbutton").html("Try Again!")
    }



    e.preventDefault(); // avoid to execute the actual submit of the form.
  });


  function Rightmenu() {
    var contentSections = $('.cd-section'),
      navigationItems = $('#vertical-nav a');
    headerNavigationItems = $('#headerNavigationItems a');

    updateNavigation();
    $(window).on('scroll', function() {
      updateNavigation();
    });

    //smooth scroll to the section
    navigationItems.on('click', function(event) {
      event.preventDefault();
      smoothScroll($(this.hash));
    });

    //smooth scroll to the section
    headerNavigationItems.on('click', function(event) {
      event.preventDefault();
      smoothScroll($(this.hash));
    });

    //smooth scroll to second section
    $('.cd-scroll-down').on('click', function(event) {
      event.preventDefault();
      smoothScroll($(this.hash));
    });

    //open-close navigation on touch devices
    $('.touch .cd-nav-trigger').on('click', function() {
      $('.touch #vertical-nav').toggleClass('open');

    });
    //close navigation on touch devices when selectin an elemnt from the list
    $('.touch #vertical-nav a').on('click', function() {
      $('.touch #vertical-nav').removeClass('open');
    });

    function updateNavigation() {
      contentSections.each(function() {
        $this = $(this);
        var activeSection = $('#vertical-nav a[href="#' + $this.attr('id') + '"]').data('number') - 1;
        if (($this.offset().top - $(window).height() / 2 < $(window).scrollTop()) && ($this.offset().top + $this.height() - $(window).height() / 2 > $(window).scrollTop())) {
          navigationItems.eq(activeSection).addClass('is-selected');
        } else {
          navigationItems.eq(activeSection).removeClass('is-selected');
        }
      });
    }

    function smoothScroll(target) {
      $('body,html').animate({
          'scrollTop': target.offset().top - 120
        },
        900
      );
    }
  }

  function CloseMobilemenu() {
    $('html').removeClass('nav-open');
    materialKit.misc.navbar_menu_visible = 0;
    $('#bodyClick').remove();


    if (typeof $toggle != 'undefined') {
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




  };

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
  $(window).on('hashchange', function(e) {
    jQuery(document).ready(function($) {
      Rightmenu();
    });
    Rightmenu();
  });
  $(window).on("scroll", function() {
    if ($(window).scrollTop() > 200) {
      $('.ScrollUp').fadeIn();


      if ($(window).scrollTop() + $(window).height() > $(document).height() - 500) {


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
  $('.ScrollUp').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 'fast');
    $('.ScrollUp').fadeIn();
    return false;
  });
  $('.gallery-feed').spectragram('getUserFeed', {
    complete: galleryfeedkFunc(),
    max: 8,
    size: "small",
    wrapEachWith: "<div class='IGFeed'></div>"
  });
  Rightmenu();
});
