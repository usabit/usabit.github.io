(function ($, window, document, undefined) {
    'use strict';

    if($('.page-content > div').attr('id') == "home") {
        console.log('home');

        window.onscroll = function () {
            if(window.innerWidth < 601) {
                if(window.pageYOffset > 980 && window.pageYOffset < 2565) {
                    $('.lets-talk').addClass('active');
                } else {
                    $('.lets-talk').removeClass('active');
                }
            }
        }
    }
})(jQuery, window, document);
