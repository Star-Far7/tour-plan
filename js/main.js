const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button--next",
    prevEl: ".swiper-button--prev",
  },
});

window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    document.querySelector(".swiper-button--next").click();
  }
  if (e.key === "ArrowLeft") {
    document.querySelector(".swiper-button--prev").click();
  }
});
