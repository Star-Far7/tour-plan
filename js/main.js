// Слайдер
const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button--next",
    prevEl: ".swiper-button--prev",
  },

  // Эффект перелистывания слайда
  effect: "coverflow",

  // Прелистывания слайдера с помощью стрелок влево и вправо
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});
