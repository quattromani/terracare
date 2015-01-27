$('.image-swap').hover(
  function () {
    $('.' + $(this).attr("id")).slideToggle();
  }
  // function () {
  //   $('.' + $(this).attr("id")).css('display', 'none');
  // }
);
