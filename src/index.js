import "./styles.css";

const slides = document.querySelectorAll("img");
const nextArrow = document.querySelector(".next-arrow");
const prevArrow = document.querySelector(".prev-arrow");
const buttons = document.querySelectorAll("button");

let slideIndex = 0;

function populateSlider() {
  if (slides.length > 0) {
    slides[slideIndex].classList.add("displayedSlide");
    buttons[slideIndex].classList.add("active");
    setInterval(nextSlide, 10000);
  }
}

function showSlide(index) {
  if (index >= slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  }
  slides.forEach((slide) => {
    slide.classList.remove("displayedSlide");
  });
  buttons.forEach((button) => {
    button.classList.remove("active");
  });
  slides[slideIndex].classList.add("displayedSlide");
  buttons[slideIndex].classList.add("active");
}

function prevSlide() {
  slideIndex--;
  showSlide(slideIndex);
}

function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}

nextArrow.addEventListener("click", nextSlide);
prevArrow.addEventListener("click", prevSlide);

document.addEventListener("DOMContentLoaded", populateSlider());
