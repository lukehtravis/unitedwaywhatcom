$(document).ready(function(){
  // Shows dropdown menu when user hover over main menu
  $('.main-menu > ul > li').mouseenter(function() {
    $('.level-2, .main-menu .arrow-up').removeClass('selected');
    $(this).find('ul, .arrow-up').addClass('selected');
  })
  $('.main-menu > ul > li').mouseleave(function(){
    $(this).find('ul, .arrow-up').removeClass('selected');
  })

  // Shows hamburger menu on click desktop
  $('.menu-hamburger').on('click', function(){
    $(this).find('.secondary-menu, .arrow-up').slideToggle();
  })
})
