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
$('.videoSubsection').hide();


//hide extra info for videos
$('.videoNavAndInfo p').hide();

//hover and click for more videos
$('#coversVideoButton').hover(function () {
  $('#coversInfo').show();
}, function () {
  $('#coversInfo').hide();
});

$('#coversVideoButton').click(function () {
  $('#coverVideos').slideToggle();
  $('#witzkeVideos').slideUp();
  $('#mtsuVideos').slideUp();
  $('#livingRoomVideos').slideUp();
});


$('#witzkeVideoButton').hover(function () {
  $('#witzkeInfo').show();
}, function () {
  $('#witzkeInfo').hide();
});

$('#witzkeVideoButton').click(function () {
  $('#witzkeVideos').slideToggle();
  $('#mtsuVideos').slideUp();
  $('#livingRoomVideos').slideUp();
  $('#coverVideos').slideUp();
});


$('#mtsuVideoButton').hover(function () {
  $('#witzkeInfo').show();
}, function () {
  $('#witzkeInfo').hide();
});

$('#mtsuVideoButton').click(function () {
  $('#mtsuVideos').slideToggle();
  $('#witzkeVideos').slideUp();
  $('#livingRoomVideos').slideUp();
  $('#coverVideos').slideUp();
});


$('#livingRoomVideoButton').hover(function () {
  $('#witzkeInfo').show();
}, function () {
  $('#witzkeInfo').hide();
});

$('#livingRoomVideoButton').click(function () {
  $('#livingRoomVideos').slideToggle();
  $('#witzkeVideos').slideUp();
  $('#mtsuVideos').slideUp();
  $('#coverVideos').slideUp();
});


////open selected div and close all others
//var sectionButton = document.querySelectorAll('.section h2');
//$(sectionButton).click(function () {
//
//  //get this clicked header and open its next sibling
//  var $clicked = $(this).get(0);
//  var opened = $clicked.nextSibling.nextSibling;
//  $(opened).slideToggle();
//
//  //get parent of opened div and closes siblings children's divs
//  var parent = opened.parentElement;
//  var $others = $(parent).siblings();
//  $others.children('div').slideUp();
//
//});

//image click sends to youtube video, need to stop default and create popup
$('.videos img').click(function() {
  var url = 'http://youtube.com/watch?v=';
  url += $(this).attr('alt');
  console.log(url);
  this.parentElement.setAttribute('href', url);
});

$('#coverText').hide();

$('.test').hover(function () {
  $('#coverText').show();
}, function () {
  $('#coverText').hide();
});
