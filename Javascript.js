const slider = document.getElementById("slider");
const leftBtn = document.querySelector(".scroll-btn.left");
const rightBtn = document.querySelector(".scroll-btn.right");

rightBtn.addEventListener("click", () => {
  slider.scrollBy({ left: 300, behavior: "smooth" });
});

leftBtn.addEventListener("click", () => {
  slider.scrollBy({ left: -300, behavior: "smooth" });
});
