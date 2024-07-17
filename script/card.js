document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    
    // Function to show only one card on narrow screens
    function showSingleCardOnNarrowScreens() {
        if (window.innerWidth <= 768) {
            cards.forEach((card, index) => {
                if (index === 0) {
                    card.style.display = 'inline-flex'; // Display the first card
                } else {
                    card.style.display = 'none'; // Hide other cards
                }
            });
        } else {
            cards.forEach(card => {
                card.style.display = 'inline-flex'; // Display all cards on wider screens
            });
        }
    }
    
    // Initial call to show cards based on screen width
    showSingleCardOnNarrowScreens();
    
    // Update cards visibility on window resize
    window.addEventListener('resize', showSingleCardOnNarrowScreens);
});
