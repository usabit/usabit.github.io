$(function(){
    $('.site-header.homepage').data('size','big');
});

$(window).scroll(function(){

    var duration = 300;

    if($(document).scrollTop() > 40)
    {
        if($('.site-header.homepage').data('size') == 'big')
        {
            $('.site-header.homepage').data('size','small');
            $('.site-header.homepage').stop().animate({ padding:'20px' }, { queue: false, duration: duration });
            $('.site-header.homepage .site-title img').stop().animate({width:'30px', marginRight: '10px'}, { queue: false, duration: duration });
            $('.site-header.homepage .site-title svg#usabit-logotipo').stop().animate({width:'80px'}, { queue: false, duration: duration });
        }
    }
    else
    {
        if($('.site-header.homepage').data('size') == 'small')
        {
            $('.site-header.homepage').data('size','big');
            $('.site-header.homepage').stop().animate({padding:'50px 20px'}, { queue: false, duration: duration });
            $('.site-header.homepage .site-title img').stop().animate({width:'60px', marginRight: '18px'}, { queue: false, duration: duration });
            $('.site-header.homepage .site-title svg#usabit-logotipo').stop().animate({width:'120px'}, { queue: false, duration: duration });
        }  
    }
});