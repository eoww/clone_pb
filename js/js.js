console.clear();

$(".search-icon").click(function () {
  $(".search-box").addClass("active");
});

$(".menu-icon").click(function () {
  $(".menu-box").addClass("active");
  $("html").addClass("active");
});

$(".search-close-btn").click(function () {
  $(".search-box").removeClass("active");
});

$(".menu-close-btn").click(function () {
  $(".menu-box").removeClass("active");
  $("html").removeClass("active");
});

$(".more-menu").click(function () {
  if ($(".more-menu").hasClass("active")) {
    $(".more-menu").removeClass("active");
    $(".more-sub").removeClass("active");
    $(".more-menu" + " i").removeClass("fa-solid fa-angle-up");
    $(".more-menu" + " i").addClass("fa-solid fa-angle-down");
    $(".font-blue > span" + ", .font-blue > i").removeClass("font-e");
  } else {
    $(".more-menu").addClass("active");
    $(".more-sub").addClass("active");
    $(".more-menu" + " i").addClass("fa-solid fa-angle-up");
    $(".font-blue > span" + ", .font-blue > i").addClass("font-e");
  }
});
