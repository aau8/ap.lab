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

// Открытие меню
const burger = document.querySelector('.header__menu__burger'),
      menu = document.querySelector('.header__menu__block');

burger.addEventListener('click', (e) => {
  e.stopPropagation();
  burger.classList.toggle('_active');
  menu.classList.toggle('_show');

  closeMenuWhenClickBg();
})

function closeMenuWhenClickBg() {
  document.addEventListener('click', (e) => {
    const target = e.target,
          itsMenu = target == menu || menu.contains(target),
          itsBurger = target == burger,
          menuIsOpen = menu.classList.contains('_show');

    if (!itsMenu && !itsBurger && menuIsOpen) {
      burger.classList.remove('_active');
      menu.classList.remove('_show');
    }
  })
}