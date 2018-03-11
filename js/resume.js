(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  //$('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
  $('a.js-scroll-trigger[href^="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      // Get object with id/name = URL (after #)
      var target = $(this.hash);
      // If no object with correct id, search for name = URL
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Final check to ensure we have a target
      if (target.length) {
        // Cross browser scroll animation
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, {easing:'easeInOutExpo', duration:800 });
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

})(jQuery); // End of use strict
