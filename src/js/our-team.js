const slides = document.querySelectorAll('.slide');
const dashes = document.querySelectorAll('.dash');
const nextBtn = document.querySelector('.arrow.right');
const previousBtn = document.querySelector('.arrow.left');

let currentSlideIndex = 0;

function updateButtonsVisibility() {
  if (currentSlideIndex === 0) {
    previousBtn.style.display = 'none';
  } else {
    previousBtn.style.display = 'block';
  }

  if (currentSlideIndex === slides.length - 1) {
    nextBtn.style.display = 'none';
  } else {
    nextBtn.style.display = 'block';
  }
}

function showSlide(index) {
  slides.forEach((slide, i) => slide.classList.toggle('active', i === index));
  dashes.forEach((dash, i) => dash.classList.toggle('active', i === index));
  updateButtonsVisibility();
}

function goToNextSlide() {
  if (currentSlideIndex < slides.length - 1) {
    currentSlideIndex += 1;
    showSlide(currentSlideIndex);
  }
}

function goToPreviousSlide() {
  if (currentSlideIndex > 0) {
    currentSlideIndex -= 1;
    showSlide(currentSlideIndex);
  }
}

nextBtn.addEventListener('click', goToNextSlide);
previousBtn.addEventListener('click', goToPreviousSlide);

dashes.forEach((dash, i) => {
  dash.addEventListener('click', () => {
    currentSlideIndex = i;
    showSlide(currentSlideIndex);
  });
});

showSlide(currentSlideIndex);
