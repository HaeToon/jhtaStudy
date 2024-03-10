const header = document.querySelector("header");
const gnb = document.querySelector(".gnb");
gnb.addEventListener("mouseenter", function () {
  //console.log("마우스 올라갔습니다.");
  header.classList.add("over");
});
gnb.addEventListener("mouseleave", function () {
  //console.log("마우스 내려갔습니다.");
  header.classList.remove("over");
});
