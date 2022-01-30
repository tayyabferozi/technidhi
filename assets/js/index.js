AOS.init({ duration: 700, offset: 200 });

var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".products-swiper", {
  navigation: {
    nextEl: ".products-swiper-right",
    prevEl: ".products-swiper-left",
  },
});

$("#faqs .item").click(function () {
  $(this).find(".answer").slideToggle();
  $(this).toggleClass("active");
});

const firstEl = document.querySelector("#faqs .item");
$(firstEl).click();
