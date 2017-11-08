$(function(){
  $('.portfolio-item a').on('click', function(event){
    event.preventDefault();

    $('.portfolio-item').removeClass('active');
    $('.portfolio-display-item').removeClass('active');

    $(this).parent().addClass('active');
    $('.portfolio-display-item#'+$(this).data('banner')).addClass('active');
  });
});