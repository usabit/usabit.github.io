(function ($, window, document, undefined) {
    'use strict';

    var $win = $(window);
    var $box = $('.site-header__messenger');

    $win.on('click.fb', function(event){
        if ($box.has(event.target).length == 0 && !$box.is(event.target)) {
            $box.removeClass('active');
        } else {
            $box.addClass('active');
        }
    });
})(jQuery, window, document);