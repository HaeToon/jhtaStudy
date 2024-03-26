const header = document.querySelector("header");
const gnb = document.querySelector(".gnb");
const btnTop = document.querySelector(".btn-top");

gnb.addEventListener("mouseenter", function () {
  header.classList.add("headerSpread");
});
gnb.addEventListener("mouseleave", function () {
  header.classList.remove("headerSpread");
});

btnTop.addEventListener("click", function () {
  window.scroll({
    top: 0,
    // behavior: "smooth",
  });
});
const swiper = new Swiper("#main-visual", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },
  autoplay: {
    delay: 3000,
  },
});
