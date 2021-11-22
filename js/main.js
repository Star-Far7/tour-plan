// Слайдер
const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button--next",
    prevEl: ".swiper-button--prev",
  },
});

// Функция перелистывания слайдера с помощью стрелок влево и вправо
window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    document.querySelector(".swiper-button--next").click();
  }
  if (e.key === "ArrowLeft") {
    document.querySelector(".swiper-button--prev").click();
  }
});
