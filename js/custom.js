$(function () {
  //    sticky navbar
  $(window).scroll(function () {
    var scrolling = $(this).scrollTop();
    var sticky = $(".sticky-top");
    if (scrolling >= 110) {
      sticky.addClass("bg-nav");
    } else {
      sticky.removeClass("bg-nav");
    }
  });
});
