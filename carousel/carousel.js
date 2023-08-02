let slideImages = document.querySelectorAll(".slide");
let leftArrow = document.querySelector("#arrow-left");
let rightArrow = document.querySelector("#arrow-right");
let current = 0;

//clear all images
const reset = () => {
  for (let i = 0; i < slideImages.length; i++) {
    slideImages[i].style.display = "none";
  }
};

const startSlide = () => {
  reset();
  slideImages[0].style.display = "block";
};

//show previous
const slideLeft = () => {
  reset();
  slideImages[current - 1].style.display = "block";
  current--;
};

//left arrow Click
leftArrow.addEventListener("click", () => {
  if (current === 0) {
    current = slideImages.length;
  }
  slideLeft();
});

//show Next
const slideRight = () => {
  reset();
  slideImages[current + 1].style.display = "block";
  current++;
};
//right arrow Click

rightArrow.addEventListener("click", () => {
  if (current === slideImages.length - 1) {
    current = -1;
  }
  slideRight();
});

startSlide();
