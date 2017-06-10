const $navButton = $('.nav-button');
const $nav = $('.main-nav');

$nav.hide();
$navButton.click(function () {
  $nav.slideToggle();
})

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


//////Video Page//////
//hide extra videos
$('.moreCoverVideos').hide();
$('.moreWitzkeVideos').hide();
$('.moreLivingRoomVideos').hide();

//slideToggle extra video divs
$('.videoMoreButton').click(function () {
  $(this).prev().slideToggle();

  if ($(this).text() === 'show more') {
    $(this).text('show less');
  } else {
    $(this).text('show more');
  }
});


var $videoOverlay = $('<div id="videoOverlay"></div>');
var $popUpVideo = $('<div id="popUpVideo"></div>');
var videoHtml = '<iframe width="560" height="315" src="';

$('body').append($videoOverlay);
$videoOverlay.hide();

//image click sends to youtube video
$('.videos img').click(function(evt) {
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
  $videoOverlay.append($popUpVideo);
  $videoOverlay.show();

});

//hide overlay and video when clicked
$videoOverlay.click(function() {
  $videoOverlay.hide();
  $('iframe').remove();
});


//create and hide video titles for mouseover
$('.coverText').hide();

$('.videos img').hover(function () {
  $(this).siblings('div').show();
}, function () {
  $('.coverText').hide();
});


