//Hide all sections
$('.section').children('div').hide();


//hide name logo on scroll down, reveal name on scroll up
var $nameLogo = $('.name-logo');
$nameLogo.height()
$(window).scroll(function () {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > 200) {
    $nameLogo.css('opacity', 0);
  } else {
    $nameLogo.css('opacity', 1 - scrollTop / 200);
  }
}).scroll();

//open selected div and close all others
var sectionButton = document.querySelectorAll('.section h2');
$(sectionButton).click(function () {

  //get this clicked header and open its next sibling
  var $clicked = $(this).get(0);
  var opened = $clicked.nextSibling.nextSibling;
  $(opened).slideToggle();

  //get parent of opened div and closes siblings children's divs
  var parent = opened.parentElement;
  var $others = $(parent).siblings();
  $others.children('div').slideUp();

});


//Light-box for photos
var $overlay = $('<div id="overlay"></div>');
var $image = $('<img>');
var $caption = $('<p></p>');

//an image to overlay
$overlay.append($image);

//add overlay
$('body').append($overlay);

//a caption to overlay
$overlay.append($caption);

//capture click event on a link to an image
$('#image-gallery ul a').click(function (event) {
  event.preventDefault();

  //add alt attribute as the caption
  var captionText = $(this).children('img').attr('alt');
  $caption.text(captionText);



  var imageLocation = $(this).attr('href');
  //update overlay with the image linked in the link
  $image.attr('src', imageLocation);

  //show the overlay
  $overlay.show();



});

//when overlay is clicked
$overlay.click(function () {
  //hide overlay
  $overlay.hide();
});


//Pop-up Content
const $popUp = $('#pop-up');
const $facebookLikeButton = $('.facebook-like');
const $cancelPopUp = $('.cancel-pop-up');

$popUp.hide();

$popUp.ready(function () {
  $popUp.fadeIn(1000);
})

$facebookLikeButton.click(function () {
  window.location.href = 'http://facebook.com/smalltimenapoleonband';
});

$cancelPopUp.click(function () {
  $popUp.hide();
});
