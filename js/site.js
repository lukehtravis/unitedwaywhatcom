$(document).ready(function(){
  $('.main-menu > ul > li').on('click', function() {
    $(this).find('ul > li').toggle();
  })
})
