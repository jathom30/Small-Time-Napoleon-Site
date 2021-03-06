const $navButton = $('.nav-button');
const $nav = $('.main-nav');
const $navButtonAndArrow = $('#buttonAndArrow');
const $navArrow = $('<img id="navArrow" src="../img/downArrow.png">');

//add overlay when nav is extended
var $navOverlay = $('<div class="navOverlay"></div>');
var $header = $('header');

$('body').append($navOverlay);
//$navButtonAndArrow.append($navArrow);


//hide or show nav depending on window size
$(document).ready(function () {

  function checkWidth() {

    var windowWidth = $(window).width();

    if (windowWidth <= 799) {
      $('.main-nav').css('display', 'block');
      $nav.hide();
      $navButtonAndArrow.append($navArrow);
    } else {
      $nav.show();
      $navArrow.remove();
      $('.main-nav').css('display', 'flex');
    }

  }

  checkWidth();

  $(window).resize(checkWidth);

});


//flip arrow as needed
$navButtonAndArrow.click(function () {
  $nav.slideToggle();
  $navArrow.toggleClass('arrowSelected');
  $navOverlay.toggleClass('navSelected');
  if ($navOverlay.hasClass('navSelected')) {
    $navOverlay.show();
    //move arrow to nav-drop-down
    $navArrow.appendTo('.main-nav-drop-down').addClass('inDropDown');
  } else {
    $navOverlay.hide();
    //move arrow back to button div
    $navArrow.appendTo($navButtonAndArrow).removeClass('inDropDown');
  }
});

//if arrow is in nav-drop-down div, make it clickable
$navArrow.click(function () {
  if ($navArrow.hasClass('inDropDown')) {
    $nav.slideUp();
    $navArrow.removeClass('arrowSelected');
    $navOverlay.removeClass('navSelected').hide();
    $navArrow.appendTo($navButtonAndArrow).removeClass('inDropDown');
  }
})

$navOverlay.click(function () {
  $navOverlay.hide();
  $nav.slideUp();
  $navArrow.removeClass('arrowSelected');
  $navOverlay.removeClass('navSelected');
});

//assign current page title to the nav button
var currentPage = $(document).find('title').text();
$navButton.text(currentPage);



//////Photo Page//////
//hide extra photos
$('.morePhotos').hide();

//slideToggle extra photo divs
$('.photoButton').click(function () {
  $(this).prev().slideToggle();

  if ($(this).text() === 'show more') {
    $(this).text('show less');
  } else {
    $(this).text('show more');
  }
});

//Light-box for photos
var $overlay = $('<div id="photoOverlay"></div>');
var $image = $('<img>');
var $caption = $('<p></p>');

//an image to overlay
$overlay.append($image);

//add overlay
$('body').append($overlay);

//a caption to overlay
$overlay.append($caption);

//capture click event on a link to an image
$('.photoPage a').click(function (event) {
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




//////Video Page///////
//hide extra videos
$('.moreCoverVideos').hide();
$('.moreWitzkeVideos').hide();
$('.moreLivingRoomVideos').hide();



//slideToggle extra video divs
$('.videoMoreButton').click(function () {
  $(this).prev().slideToggle();
  //toggle bottom border of video divs off an on depending on their state
  $(this).parent().children('div').first().toggleClass('addBorderBottom');

  //change 'show more' vid button depending on state
  if ($(this).text() === 'show more') {
    $(this).text('show less');
  } else {
    $(this).text('show more');
  }
});

//add video overlay when image is clicked
var $videoOverlay = $('<div id="videoOverlay"></div>');
var $videoSize = $('<div class="videoSize"></div>');
var $popUpVideo = $('<div class="flexVideo"></div>');
var videoHtml = '<iframe width="560" height="315" src="';

$('body').append($videoOverlay);
$videoOverlay.hide();

//image click sends to youtube video
$('.videos img').click(function (evt) {
  evt.preventDefault();

  //create and set url for vid
  var url = 'https://www.youtube.com/embed/';
  url += $(this).attr('alt');
  this.parentElement.setAttribute('href', url);

  //create popup
  videoHtml = '<iframe width="560" height="315" src="';
  videoHtml += url;
  videoHtml += '" frameborder="0" allowfullscreen>';
  videoHtml += '</iframe>';

  $popUpVideo.append(videoHtml);
  $videoSize.append($popUpVideo);
  $videoOverlay.append($videoSize);
  $videoOverlay.show();
});

//hide overlay and video when clicked
$videoOverlay.click(function () {
  $videoOverlay.hide();
  $('iframe').remove();
});


//create and hide video titles for mouseover
$('.coverText').hide();

$('.videos img').hover(function () {
  $(this).siblings('div').show();
  $(this).addClass('blurred');
}, function () {
  $('.coverText').hide();
  $(this).removeClass('blurred');
});

//creating hover effect if on a device with touch
if (window.Touch) {
  $('.videos img').bind('touchstart', function () {
    $(this).siblings('div').show();
    $(this).addClass('blurred');
  }).on('touchend', function () {
    $('.coverText').hide();
    $(this).removeClass('blurred');
  });
}
