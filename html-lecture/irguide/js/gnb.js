const header = document.querySelector("header");
const btnTop = document.querySelector(".btn-top");
const gnb = document.querySelector(".gnb");

gnb.addEventListener("mouseenter", function () {
  //console.log("마우스 올라갔습니다.");
  header.classList.add("over");
});

gnb.addEventListener("mouseleave", function () {
  //console.log("마우스 내려갔습니다.");
  header.classList.remove("over");
});

btnTop.addEventListener("click", function () {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
});
document.addEventListener("scroll", function () {
  const scrollY = Math.floor(window.scrollY); // 변수
  if (scrollY > 0) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }
  if (scrollY > 300) {
    btnTop.classList.add("show");
  } else {
    btnTop.classList.remove("show");
  }
});
