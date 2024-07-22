document.addEventListener('DOMContentLoaded', () => {
    const carouselWrapper = document.querySelector('.carousel-wrapper');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');

    let currentIndex = 0;
    const cardWidth = 300; // Adjust this value if your cards have a different width
    const cardMargin = 20; // Adjust this value if your cards have a different margin
    const totalCards = document.querySelectorAll('.custom-card').length;

    function updateCarousel() {
        const offset = -(cardWidth + cardMargin) * currentIndex;
        carouselWrapper.style.transform = `translateX(${offset}px)`;
    }

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentIndex < totalCards - 3) { // Show 3 cards at a time
            currentIndex++;
            updateCarousel();
        }
    });
});
