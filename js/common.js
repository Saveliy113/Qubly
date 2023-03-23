$(function () {
  new WOW().init();

  $('.hamburger').click(function () {
    $(this).toggleClass('is-active');

    if ($(this).hasClass('is-active')) {
      $('.mnu_top').slideDown(300);
    } else {
      $('.mnu_top').slideUp(300);
    }
  });

  /*--------REVIEWS TABS--------*/

  $('.nav_rev > div').click(function () {
    const revId = $(this).data('revid');

    $('.nav_rev > div').not(this).removeClass('active');
    $(this).addClass('active');

    $('.item_rev').not(revId).removeClass('active');
    $(revId).addClass('active');
  });

  /*----------------------------*/
});
