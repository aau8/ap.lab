if (document.querySelector('.about__slider')) {
  const swiperInsta = new Swiper('.about__slider', {
    loop: true,
    effect: 'fade',
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}

if (document.querySelector('.product-second-slider')) {
  const swiperSecondProduct = new Swiper('.product-second-slider .swiper-container', {
    spaceBetween: 12,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    slideToClickedSlide: true,

    breakpoints: {
      768: {
        slidesPerView: 3,
      },
      320: {
        slidesPerView: 2,
      }
    }
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
}

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

// Модальные окна
const modalOpenElems = document.querySelectorAll('[data-modal-open]'),
      modalBg = document.querySelector('.modals-bg'),
      body = document.querySelector('body');

modalOpenElems.forEach(modalOpen => {
  modalOpen.addEventListener('click', (e) => {
    e.stopPropagation();
    
    const modalOpenData = modalOpen.dataset.modalOpen,
          modal = document.querySelector(`[data-modal=${modalOpenData}]`);

    modal.classList.add('_show');
    modalBg.classList.add('_show');
    body.classList.add('_lock');

    closeModalWithClickBg(modal, modalOpen);
    closeModalWithClickClose(modal);
  })
})

function closeModalWithClickBg(modal, modalOpen) {
  document.addEventListener('click', (e) => {
    if (modal.classList.contains('_show')) {
        const modalBody = modal.querySelector('.modal-card');
        const target = e.target,
              itsModal = target == modalBody || modalBody.contains(target),
              isBtnModalOpen = target == modalOpen,
              modalShow = modal.classList.contains('_show');

      if (!itsModal && !isBtnModalOpen && modalShow) {
        modalBg.classList.remove('_show');
        modal.classList.remove('_show');
        body.classList.remove('_lock');
        return false;
      }
    }
  })
}

function closeModalWithClickClose(modal) {
  const modalClose = modal.querySelector('.modal-close');

  modalClose.addEventListener('click', () => {
    modalBg.classList.remove('_show');
    modal.classList.remove('_show');
    body.classList.remove('_lock');
  })
}

// Маска для инпута телефона
function maskPhone(selector, masked = '+7 (___) ___-__-__') {
	const elems = document.querySelectorAll(selector);

	function mask(event) {
		const keyCode = event.keyCode;
		const template = masked,
			def = template.replace(/\D/g, ""),
			val = this.value.replace(/\D/g, "");
		console.log(template);
		let i = 0,
			newValue = template.replace(/[_\d]/g, function (a) {
				return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
			});
		i = newValue.indexOf("_");
		if (i !== -1) {
			newValue = newValue.slice(0, i);
		}
		let reg = template.substr(0, this.value.length).replace(/_+/g,
			function (a) {
				return "\\d{1," + a.length + "}";
			}).replace(/[+()]/g, "\\$&");
		reg = new RegExp("^" + reg + "$");
		if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
			this.value = newValue;
		}
		if (event.type === "blur" && this.value.length < 5) {
			this.value = "";
		}

	}

	for (const elem of elems) {
		elem.addEventListener("input", mask);
		elem.addEventListener("focus", mask);
		elem.addEventListener("blur", mask);
	}
	
}

maskPhone(".mask");

// Табы
if (document.querySelector('.tab')) {

const tabHeaderElems = document.querySelectorAll('.tab-header'),
      tabBodyElems = document.querySelectorAll('.tab-body');

tabHeaderElems.forEach(tabHeader => {
  tabHeader.addEventListener('click', () => {
    const tabHeaderData = tabHeader.dataset.tabHeader,
          tabBody = tabHeader.closest('.tab').querySelector(`[data-tab-body="${tabHeaderData}"]`);

    for (let i = 0; i < tabHeaderElems.length; i++) {
      tabHeaderElems[i].classList.remove('_active');
      tabBodyElems[i].classList.remove('_show');
    }

    tabHeader.classList.add('_active');
    tabBody.classList.add('_show');
  })
})

}