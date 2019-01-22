$(document).ready(function(){
  $('.header-navbar_hamburger').on('click' , function () {
    $(this).toggleClass('active');
    $('.header-navbar_list').toggleClass('active');
  });
});