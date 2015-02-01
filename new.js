$(document).ready(function(){
  $('.items').hover(
function() {
  $(this).addClass('active');
},
function() {
  $(this).removeClass('active');
});
});