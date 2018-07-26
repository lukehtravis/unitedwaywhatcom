$(document).ready(function(){
  $('.main-menu > ul > li').mouseenter(function() {
    $('.level-2, .arrow-up').removeClass('selected');
    $(this).find('ul, .arrow-up').addClass('selected');
  })
  $('.main-menu > ul > li').mouseleave(function(){
    $(this).find('ul, .arrow-up').removeClass('selected');
  })
})
