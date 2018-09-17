"use strict";

function reset($elem) {
    $elem.before($elem.clone(true));
    var $newElem = $elem.prev();
    $elem.remove();
    return $newElem;
}

/* Subtle animations */
$(document).ready(() => {
    // Get nav buttons
    let navs = $("div.nav-button-start-invis");

    // Fade in at start
    navs.each(function(i, elem) {
        //$(this).addClass("fadeInAnimation");
        //$(this).delay(70 * i).css({opacity: "0.55"});
        $(this).delay(600.0 * Math.random()).animate({opacity: "0.55"}, {
            duration: 500 + 1200 * Math.random(),
            complete: function() {
                $(this).removeAttr("style");
                $(this).removeClass("nav-button-start-invis nav-click");
                $(this).addClass("nav-button-custom");
                }
            });
    });

    // Animated scrolling
    $("div.nav-click").each(function(i, elem) {
        $(this).click( () => {
            let targ = $(this).attr('value');

            var target = $(targ);
            if (target.length) {
                $('html,body').stop(true, true).animate({scrollTop: target.offset().top - 25}, 1000);
                return false;
            }

        });
    });

});
