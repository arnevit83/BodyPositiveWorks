/*! Custom * !*/
$(document).ready(function() {
  function isValidEmailAddress(emailAddress) {
    var pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
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
