$(function() {

    $("#banner-fullwidth").owlCarousel({
        nav: true,
        autoplay: true,
        autoplaySpeed: 1200,
        autoplayTimeout: 8000,
        autoplayHoverPause: true,
        slideSpeed: 1300,
        items : 1,
        loop: true,
        navText: [
            "<i class='fa fa-chevron-left'></i>",
            "<i class='fa fa-chevron-right'></i>"
        ]
    });

});
