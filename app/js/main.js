$(function () {
  $('.slider__inner').slick({
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: '<button type = "button" class= "slick-next" ><span class="icon-chevron-right"> </span> </button>',
    prevArrow: '<button type = "button" class= "slick-prev" ><span class="icon-chevron-left"> </span> </button>',
  });
  $('.reviews__slider').slick({
    autoplay: true,
    autoplayInfinite: 3000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: '<button type = "button" class= "slick-next" ><span class="icon-chevron-right"> </span> </button>',
    prevArrow: '<button type = "button" class= "slick-prev" ><span class="icon-chevron-left"> </span> </button>',
  });
});
