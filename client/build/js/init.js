(function($) {
  $(function() {

    var windowHeight = $(window).height();
    $("#index-banner").css("height", windowHeight);

    $(window).resize(function() {
      var windowHeight = $(window).height();
      $("#index-banner").css("height", windowHeight);
    })


    $('.button-collapse').sideNav({
      menuWidth: "35%",
      closeOnClick: true
    });
    $('.parallax').parallax();
    $("select").material_select();

    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
            || location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
               if (target.length) {
                 $('html,body').animate({
                     scrollTop: target.offset().top - 50
                }, 1000);
                return false;
            }
        }
    });

    var target = $("#about_me").offset().top - 80;

    $(window).scroll(function() {
     if ($(document).scrollTop() > target) {
       $("#nav-bar").css("background-color", "rgb(20, 20, 20)");
     } else {
       $("#nav-bar").css("background-color", "transparent");
     }
    });

  });   // end of document ready
})(jQuery);   // end of jQuery name space
