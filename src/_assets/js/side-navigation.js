(function ($, window, document, undefined) {
    'use strict';

    // side navigation
    $('.site-header__open-menu').on('click', function(e) {
        e.preventDefault();
        $('.sidenav').addClass('active');
        $('html').css('overflow', 'hidden');
    });

    $('.sidenav__close-menu').on('click', function(e) {
        e.preventDefault();
        $('.sidenav').removeClass('active');
        $('html').css('overflow', 'initial');
    });
})(jQuery, window, document);