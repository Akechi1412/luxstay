/*=============================Preload=======================*/
$(window).on("load", function () {
  $("#preloader").remove();
});
/*============================Mobile menu============================== */
$(document).ready(function () {
  $(document).mouseup((e) => {
    if (
      !$(".header__menu").is(e.target) &&
      $(".header__menu").has(e.target).length === 0
    ) {
      $(".header__menu").removeClass("header__menu--mobile-opened");
      $(".header__mobile-menu-overlay").css({ display: "none" });
    }
  });
  $(".header__mobile-menu-open").on("click", () => {
    $(".header__menu").addClass("header__menu--mobile-opened");
    $(".header__mobile-menu-overlay").css({ display: "block" });
  });
  $(".header__mobile-menu-close").on("click", () => {
    $(".header__menu").removeClass("header__menu--mobile-opened");
    $(".header__mobile-menu-overlay").css({ display: "none" });
  });
});
/*===========================Search input=========================== */
$(document).ready(function () {
  $(document).mouseup((e) => {
    if (
      !$(".header__search-suggest").is(e.target) &&
      $(".header__search-suggest").has(e.target).length === 0
    ) {
      $(".header__search").removeClass("header__search--active");
      $(".header__search-suggest").css({ display: "none" });
    }
  });
  $(".header__search-input").on("click", () => {
    $(".header__search").addClass("header__search--active");
    $(".header__search-suggest").css({ display: "block" });
  });
  $(".header__search-input").keyup(function () {
    if ($(this).val().length > 0) {
      $(".header__search-clear").css({ opacity: "1" });
      $(".header__search-suggest-heading").css({ display: "none" });
    } else {
      $(".header__search-clear").css({ opacity: "0" });
      $(".header__search-suggest-heading").css({ display: "block" });
    }
  });
  $(".header__search-clear").click(function () {
    $(".header__search-input").val("");
    $(this).css({ display: "none" });
  });
});
/*====================================Guest booking===================================== */
$(document).ready(function () {
  $(document).mouseup((e) => {
    if (
      !$(".header__guest-booking").is(e.target) &&
      $(".header__guest-booking").has(e.target).length === 0
    ) {
      $(".header__guest-booking").removeClass("header__guest-booking--active");
    }
  });
  $(".header__guest-select").on("click", () => {
    $(".header__guest-booking").toggleClass("header__guest-booking--active");
  });
});
/*====================================Header dropdown===================================== */
$(document).ready(function () {
  $(document).mouseup((e) => {
    if (
      !$(".header__dropdown").is(e.target) &&
      $(".header__dropdown").has(e.target).length === 0
    ) {
      $(".header__dropdown").removeClass("header__dropdown--active");
    }
  });
  $(".header__dropdown-select").on("click", () => {
    $(".header__dropdown").toggleClass("header__dropdown--active");
  });
});
/*=====================slick slider======================*/
$(document).ready(function () {
  $(".slide-show__list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    draggable: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000,
  });

  const prevButtonSlick = `<button type='button' class='slick-arrow slick-prev pull-left'><ion-icon class="slick-arow-icon" name="chevron-back-outline"></ion-icon></button>`;
  const nextButtonSlick = `<button type='button' class='slick-arrow slick-next pull-right'><ion-icon class="slick-arow-icon" name="chevron-forward-outline"></ion-icon></button>`;
  /*=======================location slide======================= */
  $(".location__card-list").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    draggable: true,
    dots: false,
    speed: 600,
    infinite: false,
    prevArrow: prevButtonSlick,
    nextArrow: nextButtonSlick,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
          variableWidth: true,
          speed: 100,
        },
      },
    ],
  });

  $(".favour__card-list").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    draggable: false,
    dots: false,
    speed: 600,
    infinite: false,
    prevArrow: prevButtonSlick,
    nextArrow: nextButtonSlick,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          arrows: true,
          variableWidth: true,
          speed: 400,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arows: false,
          variableWidth: true,
          speed: 100,
        },
      },
    ],
  });

  $(".suggest__card-list").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    draggable: true,
    dots: false,
    speed: 600,
    infinite: false,
    prevArrow: prevButtonSlick,
    nextArrow: nextButtonSlick,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          arrows: true,
          variableWidth: true,
          speed: 400,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
          variableWidth: true,
          speed: 100,
        },
      },
    ],
  });

  $(".explore__card-list").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    draggable: true,
    dots: false,
    speed: 600,
    infinite: false,
    prevArrow: prevButtonSlick,
    nextArrow: nextButtonSlick,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          arrows: true,
          variableWidth: true,
          speed: 400,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
          variableWidth: true,
          speed: 100,
        },
      },
    ],
  });

  $(".instruction__card-list").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    draggable: false,
    dots: false,
    speed: 600,
    infinite: false,
    prevArrow: prevButtonSlick,
    nextArrow: nextButtonSlick,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          arrows: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          variableWidth: true,
          arrows: true,
          speed: 400,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          variableWidth: true,
          speed: 100,
          arrows: false,
        },
      },
    ],
  });
});
