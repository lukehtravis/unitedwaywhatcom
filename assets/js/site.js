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

  // Sets url for initial photo on banner
  // Grab the image
  var initialPhoto = $(".banner.home>img").first().attr('src');
  initialPhoto = "url('" + initialPhoto + "')";
  // Set the background
  $(".banner.home").css("background-image", initialPhoto);

  // Code for Carousel on Home page
  // Images are input in cms or by devs as empty img elements right under .banner (.banner > img)
  // Code below
  // 1. creates and array of .banner > img elements
  // 2. Shifts array to switch to next element
  // 3. takes url of current element at top of array (1st in line)
  // 4. inputs it into the css for the background images
  // 5. Waits 6 seconds then does it again
  // Code stays aware of browser size through scrset atttribute on img tags;

  var photos = $(".banner.home>img").toArray();

  window.setInterval(changePhoto, 6000);

  function changePhoto() {
    photos.push(photos.shift());
    var newBackground = photos[0];
    newBackground = $(newBackground).prop('currentSrc');
    $(".banner.home").css("background-image", "url("+ newBackground +")");
  }

})
