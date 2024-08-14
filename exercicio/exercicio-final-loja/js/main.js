const carouselInner = document.querySelector('.carousel-inner');
let currentSlide = 0;
const numSlides = carouselInner.children.length;
const loopMultiplier = 3;
const autoPlayInterval = 3000; 

for (let i = 0; i < numSlides * loopMultiplier; i++) {
  const slide = carouselInner.children[i % numSlides].cloneNode(true);
  carouselInner.appendChild(slide);
}

const slideWidth = carouselInner.children[0].offsetWidth;

function updateCarousel() {
  carouselInner.style.transform = `translateX(${(-currentSlide * slideWidth)}px)`;
  if (currentSlide >= numSlides * loopMultiplier) {
    currentSlide = 0;
    // Re-clone slides to maintain infinite loop
    for (let i = 0; i < numSlides * loopMultiplier; i++) {
      const slide = carouselInner.children[i % numSlides].cloneNode(true);
      carouselInner.appendChild(slide);
    }
  }
}

updateCarousel();

setInterval(() => {
  currentSlide++;
  updateCarousel();
}, autoPlayInterval);

