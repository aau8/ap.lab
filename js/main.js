const swiperInsta = new Swiper('.about__slider', {
  loop: true,
  effect: 'fade',

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


const swiperSecondProduct = new Swiper('.product-second-slider .swiper-container', {
  // loop: true,
  slidesPerView: 3,
  spaceBetween: 12,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  slideToClickedSlide: true,

});

const swiperMainProduct = new Swiper('.product-main-slider .swiper-container', {
  loop: true,
  effect: 'fade',

  navigation: {
    nextEl: '.product-second-slider .swiper-button-next',
    prevEl: '.product-second-slider .swiper-button-prev',
  },

  thumbs: {
    swiper: swiperSecondProduct,
  },
});