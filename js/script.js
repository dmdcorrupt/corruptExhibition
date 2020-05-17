//animates nav elements
function addPulse(e){
  this.classList.add('animated', 'pulse');
}

function removePulse(e){
  this.classList.remove('animated', 'pulse');
}

//function for adding shadow to navbar when scrolling
$(function () {
  $(document).scroll(function () {
    var $nav = $(".sticky-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});

//fades preloader out after assets have loaded
$(window).on('load', function() {
  $(".loader").delay(4000).fadeOut("slow");
  $(".hidden").delay(4000).fadeOut("slow");
  $("#overlayer").delay(4000).fadeOut("slow");
})