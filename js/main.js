$(document).ready(function () {
  new Swiper(".hotel-slider", {
    loop: !0,
    navigation: {
      nextEl: ".hotel-slider__button--next",
      prevEl: ".hotel-slider__button--prev",
    },
    effect: "coverflow",
    keyboard: { enabled: !0, onlyInViewport: !1 },
  });
  new Swiper(".reviews-slider", {
    loop: !0,
    navigation: {
      nextEl: ".reviews-slider__button--next",
      prevEl: ".reviews-slider__button--prev",
    },
  });
  $(".newslatter").parallax({ imageSrc: "img/newslatter-bg.webp", speed: 0.4 });
  $(".menu-button").on("click", function () {
    return $(".navbar-battom").toggleClass("navbar-battom--visible");
  });
  var c = $('[data-toggle="modal"]'),
    d = $(".modal__close");
  c.on("click", function () {
    var a = $(".modal__overlay"),
      b = $(".modal__dialog");
    a.addClass("modal__overlay--visible");
    b.addClass("modal__dialog--visible");
  });
  d.on("click", function (a) {
    a.preventDefault();
    a = $(".modal__overlay");
    var b = $(".modal__dialog");
    a.removeClass("modal__overlay--visible");
    b.removeClass("modal__dialog--visible");
  });
  $(document).keyup(function (a) {
    if ("Escape" === a.key || 27 === a.keyCode) {
      a = $(".modal__overlay");
      var b = $(".modal__dialog");
      a.removeClass("modal__overlay--visible");
      b.removeClass("modal__dialog--visible");
    }
  });
  $(".form-validate").each(function () {
    $(this).validate({
      errorClass: "invalid",
      rules: {
        name: { required: !0, minlength: 2 },
        email: { required: !0, email: !0 },
        phone: { minlength: 16 },
      },
      messages: {
        name: {
          required: "Please specify your name",
          minlength: "The name is at least 2 letters.",
        },
        email: {
          required: "Enter your email address ",
          email: "name@domain.com. ",
        },
        phone: "Please specify your phone",
      },
    });
  });
  $(".phone").mask("+7(999)999-99-99");
  AOS.init();
});
