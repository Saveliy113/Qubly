$(function () {
  new WOW().init();

  /*--------HAMBURGER MENU--------*/

  $('.mobile_menu').click(function () {
    $(this).toggleClass('is-active');

    if ($(this).hasClass('is-active')) {
      $('.mnu_top').slideDown(300);
    } else {
      $('.mnu_top').slideUp(300);
    }
  });

  /*----------------------------*/

  /*--------REVIEWS TABS--------*/

  $('.nav_rev > div').click(function () {
    const revId = $(this).data('revid');

    $('.nav_rev > div').not(this).removeClass('active');
    $(this).addClass('active');

    $('.item_rev').not(revId).removeClass('active');
    $(revId).addClass('active');
  });

  /*----------------------------*/

  /*--------YAKORI--------*/

  $('a.yakor').on('click', function (event) {
    var $anchor = $(this);
    console.log($anchor.offset().top)
    $('html, body')
      .stop()
      .animate(
        {
          scrollTop: $($anchor.attr('href')).offset().top - 57,
        },
        {
          duration: 2000,
          specialEasing: {
            width: 'linear',
            height: 'easeInOutCubic',
          },
        }
      );
    event.preventDefault();
  });

  /*----------------------------*/
});
