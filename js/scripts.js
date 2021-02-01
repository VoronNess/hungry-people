'use strict';

// Open and close mobile menu
(function () {
  const menuOpenBtn = document.querySelector(`.header__nav-toggle`);
  const menu = document.querySelector(`.header__nav`);
  let menuShow = true;

  menuOpenBtn.addEventListener(`click`, () => {
    if (menuShow) {
      menu.classList.remove(`header__nav--closed`);
      menu.classList.add(`header__nav--opened`);
      menuShow = false;
    } else {
      menu.classList.remove(`header__nav--opened`);
      menu.classList.add(`header__nav--closed`);
      menuShow = true;
    }
  });

  // Specials-slider
  const dots = document.querySelectorAll(`.dot`);
  const slidesList = document.querySelector(`.specials__list`);
  const liveSlides = slidesList.children;
  const classCurrentDot = `dot__current`;
  const classCurrentSpecial = `slide__current`;

  const showCurrentItem = (i, collection, classChange) => {
    for (const item of collection) {
      item.classList.remove(classChange);
    }
    collection[i].classList.add(classChange);
  };

  dots.forEach((item, indexDot) => {
    item.addEventListener(`click`, () => {
      let currentSlide = indexDot;
      showCurrentItem(currentSlide, liveSlides, classCurrentSpecial);
      showCurrentItem(currentSlide, dots, classCurrentDot);
    });
  });

  // Menu-table-slider
  const menuCategories = document.querySelectorAll(`.menu__nav`);
  const menuSlidesList = document.querySelector(`.menu__slide-list`);
  const menuliveSlides = menuSlidesList.children;
  const classCurrentMenu = `menu__current`;
  const classCurrentCategory = `menu__nav-current`;

  menuCategories.forEach((item, indexCategory) => {
    item.addEventListener(`click`, () => {
      let menuCurrentSlide = indexCategory;
      showCurrentItem(menuCurrentSlide, menuliveSlides, classCurrentMenu);
      showCurrentItem(menuCurrentSlide, menuCategories, classCurrentCategory);
    });
  });

  // Validation and Notice for Forms

  const bookingForm = document.querySelector(`.booking__form`);
  const telInputBooking = document.querySelector(`.booking__form--tel`);

  const contactsForm = document.querySelector(`.contacts__form`);
  const telInputContacts = document.querySelector(`.contacts__form--tel`);
  const rightTelSymbols = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{6,10}$/;

  const successNotice = document.querySelector(`.modal__booking-success`);
  const closeNoticeBtn = successNotice.querySelector(`.modal__btn-close`);

  closeNoticeBtn.addEventListener(`click`, () => {
    successNotice.classList.remove(`modal-show`);
  });

  bookingForm.addEventListener(`submit`, (evt) => {
    evt.preventDefault();
    successNotice.classList.add(`modal-show`);
    bookingForm.reset();
  });

  contactsForm.addEventListener(`submit`, (evt) => {
    evt.preventDefault();
    successNotice.classList.add(`modal-show`);
    contactsForm.reset();
  });

  telInputBooking.addEventListener(`input`, () => {
    if (!rightTelSymbols.test(telInputBooking.value)) {
      telInputBooking.setCustomValidity(
          `введите действующий телефон в формате +774377634574, 84848434343 или 454545`
      );
      telInputBooking.reportValidity();
    } else {
      telInputBooking.setCustomValidity(``);
    }
  });

  telInputContacts.addEventListener(`input`, () => {
    if (!rightTelSymbols.test(telInputContacts.value)) {
      telInputContacts.setCustomValidity(
          `введите действующий телефон в формате +774377634574, 84848434343 или 454545`
      );
      telInputContacts.reportValidity();
    } else {
      telInputContacts.setCustomValidity(``);
    }
  });
})();
