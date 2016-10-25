(function($) {
  $(function() {
    $('.button-collapse').sideNav();
    $('.parallax').parallax();

    var wheight = $(window).height();
    $("#index-banner").css("height", wheight);

    $(window).resize(function() {
      var wheight = $(window).height();
      $("#index-banner").css("height", wheight);
    })

  });   // end of document ready
})(jQuery);   // end of jQuery name space
