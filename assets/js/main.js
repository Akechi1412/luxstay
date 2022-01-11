/*===========================Search input=========================== */
$(document).ready(function () {
  const $searchbarWidth = $(".header__searchbar").outerWidth();
  $(".header__search-suggest").css({ width: $searchbarWidth + "px" });
  $(document).mouseup((e) => {
    if (
      !$(".header__search").is(e.target) &&
      $(".header__search").has(e.target).length === 0
    ) {
      $(".header__search").removeClass("header__search--active");
    }
  });
  $(".header__search-input").on("click", () => {
    $(".header__search").addClass("header__search--active");
  });
  $(".header__search-input").keyup(function () {
    if ($(this).val().length > 0) {
      $(".header__search-clear").css({ display: "inline-block" });
      $(".header__search-suggest-heading").css({ display: "none" });
    } else {
      $(".header__search-clear").css({ display: "none" });
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
          arrows: false,
          variableWidth: true,
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
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arows: false,
          variableWidth: true,
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
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
          variableWidth: true,
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
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
          variableWidth: true,
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
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          variableWidth: true,
          arrows: false,
        },
      },
    ],
  });
});
