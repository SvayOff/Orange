$(function () {
  $('.slider__inner').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: '<button type = "button" class= "slick-next" ><span class="icon-chevron-right"> </span> </button>',
    prevArrow: '<button type = "button" class= "slick-prev" ><span class="icon-chevron-left"> </span> </button>',
  });
});
