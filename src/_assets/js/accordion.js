(function ($, window, document, undefined) {
    'use strict';

    // accordion
    $('.accordion-click').on('click', function (e) {
        e.preventDefault();
        $('.accordion-click').parent().not($(this).parent()).removeClass('active');
        $(this).parent().toggleClass('active');
    });
})(jQuery, window, document);