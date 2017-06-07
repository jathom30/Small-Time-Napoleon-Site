const $navButton = $('.nav-button');
const $nav = $('.main-nav');

$nav.hide();
$navButton.click(function () {
  $nav.slideToggle();
})

var currentPage = $(document).find('title').text();

$navButton.text(currentPage);

