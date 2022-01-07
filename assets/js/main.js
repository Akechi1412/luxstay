/*=====================slide show======================*/
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

$(".discover__card-list").slick({
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
