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
