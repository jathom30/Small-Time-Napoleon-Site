//Hide all sections
$('.section').children('div').hide();


//once page loads, activate background animation
$(document).ready(function() {
  setTimeout(function() {
    $('.backgroundAnimation').addClass('loaded');
  }, 500); //wait 500ms to start animation
});




//open selected div and close all others
var sectionButton = document.querySelectorAll('.section h2');
$(sectionButton).click(function () {

  //disable CTA if screen is wider than 800px
  if ($(window).width() >= 800) {
    $('.bandPhotoMainPage').toggleClass('disableClickMain');
  }

  //get this clicked header and open its next sibling
  var $clicked = $(this).get(0);
  var opened = $clicked.nextSibling.nextSibling;
  $(opened).slideToggle();
  $('.backgroundAnimation').toggleClass('clicked');

  //get parent of opened div and closes siblings children's divs
  var parent = opened.parentElement;
  var $others = $(parent).siblings();
  $others.children('div').slideUp();

});


//Close page divs if clicks are made outside of divs
var tabClosers = ['footer', '.social-media', '.logo', '.backgroundAnimation'];

function closeAllPages(clicked) {
  $(clicked).click(function() {
    $(sectionButton).siblings('div').slideUp();
  });
}

for (i=0;i<tabClosers.length;i++) {
  closeAllPages(tabClosers[i]);
}


//add link to call to action when clicked
$('.bandPhotoMainPage').click(function() {
  window.location = 'http://smalltimenapoleon.bandcamp.com';
})


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

//Press Articles
$('#article').click(function() {
  $(this).children('a');
})




