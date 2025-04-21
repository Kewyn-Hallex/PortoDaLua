const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
let currentSlideIndex = 0;

function updateSlidePosition() {
  const slideWidth = slides[0].getBoundingClientRect().width;
  track.style.transform = 'translateX(-' + (slideWidth * currentSlideIndex) + 'px)';
}

nextButton.addEventListener('click', () => {
  if (currentSlideIndex < slides.length - 1) {
    currentSlideIndex++;
    updateSlidePosition();
  }
});

prevButton.addEventListener('click', () => {
  if (currentSlideIndex > 0) {
    currentSlideIndex--;
    updateSlidePosition();
  }
});
