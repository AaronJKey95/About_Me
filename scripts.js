// scripts.js
document.addEventListener("DOMContentLoaded", function() {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.carousel-button.next');
    const prevButton = document.querySelector('.carousel-button.prev');

    // Set the width of each slide
    const setSlideWidth = () => {
        const slideWidth = track.clientWidth;
        slides.forEach((slide) => {
            slide.style.width = `${slideWidth}px`;
        });
    };

    // Arrange the slides next to one another
    const setSlidePosition = () => {
        const slideWidth = slides[0].getBoundingClientRect().width;
        slides.forEach((slide, index) => {
            slide.style.left = slideWidth * index + 'px';
        });
    };

    // Move to target slide
    const moveToSlide = (track, currentSlide, targetSlide) => {
        const amountToMove = targetSlide.style.left;
        track.style.transform = 'translateX(-' + amountToMove + ')';
        currentSlide.classList.remove('current-slide');
        targetSlide.classList.add('current-slide');
    };

    // Initialize slide widths and positions
    setSlideWidth();
    setSlidePosition();

    nextButton.addEventListener('click', e => {
        const currentSlide = track.querySelector('.current-slide');
        const nextSlide = currentSlide.nextElementSibling;
        if (nextSlide) {
            moveToSlide(track, currentSlide, nextSlide);
        }
    });

    prevButton.addEventListener('click', e => {
        const currentSlide = track.querySelector('.current-slide');
        const prevSlide = currentSlide.previousElementSibling;
        if (prevSlide) {
            moveToSlide(track, currentSlide, prevSlide);
        }
    });

    // Update slide widths and positions on window resize
    window.addEventListener('resize', () => {
        setSlideWidth();
        setSlidePosition();
    });
});
