(function ($, window, document, undefined) {
    'use strict';

    // anchors animate
    $('.anchor').on('click', function(e) {
        e.preventDefault();

        var open = $(this).attr('href').split('#')[1];

        if (open != '') {
            $('html, body').animate({ scrollTop: $('#'+open).offset().top -50 });
        }
    });
})(jQuery, window, document);
