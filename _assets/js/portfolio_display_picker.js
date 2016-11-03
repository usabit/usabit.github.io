$(function(){
  $('.portfolio-item a').on('click', function(event){
    event.preventDefault();

    $('.portfolio-item a').removeClass('active');
    $('.portfolio-display-item').removeClass('active');

    $(this).addClass('active');
    $('.portfolio-display-item#'+$(this).data('banner')).addClass('active');
  });
});