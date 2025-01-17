document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector('.carousel-track');
    const items = document.querySelectorAll('.carousel-item');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    let index = 0;
    const totalSlides = items.length;
    const slideWidth = window.innerWidth;

    function updateCarousel() {
        track.style.transition = "transform 0.5s ease-in-out";
        track.style.transform = `translateX(-${index * slideWidth}px)`;
    }

    function goNext() {
        index = (index + 1) % totalSlides; 
        updateCarousel();
    }

    function goPrev() {
        index = (index - 1 + totalSlides) % totalSlides;
        updateCarousel();
    }

    nextBtn.addEventListener('click', goNext);
    prevBtn.addEventListener('click', goPrev);

});
