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
    if ($('.logo').is(":hidden")) {
      $('.secondary-menu-mobile, .arrow-up').slideToggle();
    } else {
      $(this).find('.secondary-menu, .arrow-up').slideToggle();
    }
  })

  var photos = $(".header-photos").toArray();
  window.setInterval(changePhoto, 6000);

  function changePhoto() {
    photos.push(photos.shift());
    var newBackground = photos[0];
    newBackground = $(newBackground).attr("data-photoid");
    $(".banner").css("background-image", "url(assets/img/" + newBackground +")");
  }

})
