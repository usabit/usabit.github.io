(function ($, window, document, undefined) {
    'use strict';

    // Show FB Messenger
    $('.site-header__messenger-link').on('click', function(e) {
        e.preventDefault();
        $(this).parents('.site-header__messenger').toggleClass('active');
    });
})(jQuery, window, document);
