let curSlide = 0;
setSlides(curSlide);

function setSlides(slideIndex) {
  const slides = document.querySelectorAll(".slide");
  console.log("Printing", slides);

  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${indx * 100}%)`;
  });
}

function handleNext() {
  const slides = document.querySelectorAll(".slide");
  console.log("Slides ", slides);
  if (curSlide === slides.length - 1) {
    return;
  } else {
    curSlide++;
  }

  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
}

function handlePrev() {
  const slides = document.querySelectorAll(".slide");
  console.log("Slides ", slides);
  if (curSlide === 0) {
    return;
  } else {
    curSlide--;
  }

  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
}
