$(document).ready(function () {
var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 500) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});
btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});
$('.flip').click(function(){
  $(this).find('.card').toggleClass('flipped');
});

$('#toggle').on('click' ,function(){
  $('.card').toggleClass('flipped');
});

$('#front').on('click' ,function(){
  $('.card').addClass('flipped');
});

$('#back').on('click' ,function(){
  $('.card').removeClass('flipped');
});
});