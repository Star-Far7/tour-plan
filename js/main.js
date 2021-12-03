$(document).ready(function () {
  // Слайдер
  const hotelSlider = new Swiper(".hotel-slider", {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: ".hotel-slider__button--next",
      prevEl: ".hotel-slider__button--prev",
    },

    // Эффект перелистывания слайда
    effect: "coverflow",

    // Прелистывания слайдера с помощью стрелок влево и вправо
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  });

  // Слайдер
  const reviewsSlider = new Swiper(".reviews-slider", {
    // Optional parameters
    loop: true,
    effect: "flip",
    // Navigation arrows
    navigation: {
      nextEl: ".reviews-slider__button--next",
      prevEl: ".reviews-slider__button--prev",
    },
  });

  // Эффект паралакса
  $(".newslatter").parallax({
    imageSrc: "img/newslatter-bg.jpeg",
    speed: 0.4,
  });

  // Модальная кнопка
  const menuButton = $(".menu-button");
  // Функция вызова меню
  menuButton.on("click", () =>
    $(".navbar-battom").toggleClass("navbar-battom--visible")
  );

  //Модальная кнопка
  const modalButton = $('[data-toggle="modal"]');
  const closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);

  // Функция вызова
  function openModal() {
    const modalOverlay = $(".modal__overlay");
    const modalDialog = $(".modal__dialog");
    modalOverlay.addClass("modal__overlay--visible");
    modalDialog.addClass("modal__dialog--visible");
  }
  // Функция закрытия
  function closeModal(event) {
    event.preventDefault();
    const modalOverlay = $(".modal__overlay");
    const modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }
  // Закрытие окна нажатием на Escape
  $(document).keyup(function (e) {
    if (e.key === "Escape" || e.keyCode === 27) {
      const modalOverlay = $(".modal__overlay");
      const modalDialog = $(".modal__dialog");
      modalOverlay.removeClass("modal__overlay--visible");
      modalDialog.removeClass("modal__dialog--visible");
    }
  });
});
