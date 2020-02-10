$(document).ready(function () {

    $("#buttonUp").hide();
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $("#buttonUp").fadeIn();
      } else {
        $("#buttonUp").fadeOut();
      }
    });
    $("#buttonUp").click(function (e) {
      e.preventDefault();
      $("body,html").animate({
        scrollTop: 0
      }, 800);
      return false;
    });
    
    $('.navbar-collapse').on('show.bs.collapse', function () {
      if ($(window).scrollTop() < 66) {
        $("body,html").animate({
            scrollTop: 66
        }, 200);
      }
      
      $('html').addClass('nav-is-open');
      $('html').removeClass('nav-is-closed');
    });
    
    $('.navbar-collapse').on('shown.bs.collapse', function () {
      $('html').addClass('nav-is-open');
      $('html').removeClass('nav-is-closed');
    });
    
    $('.navbar-collapse').on('hide.bs.collapse', function () {
      $('html').removeClass('nav-is-open');
      $('html').addClass('nav-is-closed');
    });
    
    $('.navbar-collapse').on('hidden.bs.collapse', function () {
      $('html').removeClass('nav-is-open');
      $('html').addClass('nav-is-closed');
    });
    
    var anchor = window.location.hash;
    $(".collapse").collapse('hide');
    $(anchor).collapse('show');

});