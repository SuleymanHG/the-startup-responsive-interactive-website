const articles = document.querySelectorAll('.carousel article');
let currentIndex = 0;

// Initialize the first article
articles[currentIndex].classList.add('active');

// Track touch events
let startY = 0, endY = 0;

document.addEventListener('touchstart', (event) => {
  startY = event.touches[0].clientY;
});

document.addEventListener('touchend', (event) => {
  endY = event.changedTouches[0].clientY;

  if (startY > endY + 50) {
    // Swipe up
    goToNext();
  } else if (startY < endY - 50) {
    // Swipe down
    goToPrev();
  }
});

function goToNext() {
  if (currentIndex < articles.length - 1) {
    articles[currentIndex].classList.remove('active');
    articles[currentIndex].classList.add('prev');
    currentIndex++;
    articles[currentIndex].classList.add('active');
  }
}

function goToPrev() {
  if (currentIndex > 0) {
    articles[currentIndex].classList.remove('active');
    currentIndex--;
    articles[currentIndex].classList.remove('prev');
    articles[currentIndex].classList.add('active');
  }
}
