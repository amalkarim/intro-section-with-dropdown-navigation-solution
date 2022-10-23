$(document).click(function() {
  $('.submenu').slideUp();
  $('.dropdown img').removeClass('rotated');

  if ($('nav').hasClass('showed')) $('nav').removeClass('showed');

  if ($('.overlay').is(':visible')) $('.overlay').fadeOut();
})

$('.dropdown').click(function(e) {
  e.stopPropagation();

  if (!$('nav').hasClass('showed')) {
    $('.submenu').slideUp();
    $('.dropdown img').removeClass('rotated');
  }

  let submenu = $(this).siblings('.submenu');

  if (submenu.is(':hidden')) {
    $(this).find('img').addClass('rotated');
  } else {
    $(this).find('img').removeClass('rotated');
  }

  if (submenu.is(':hidden')) {
    submenu.slideDown(300);
  } else {
    submenu.slideUp (300);
  }
});

$('#hamburger').click(function(e) {
  e.stopPropagation();
  $('nav').addClass('showed');
  $('.overlay').fadeIn();
});

$('#closeBtn').click(function(e) {
  e.stopPropagation();
  $('nav').removeClass('showed');
  $('.overlay').fadeOut();
});

$('nav').click(function(e) {
  if ($(this).hasClass('showed')) e.stopPropagation();
});