document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    
    
    function showSingleCardOnNarrowScreens() {
        if (window.innerWidth <= 768) {
            cards.forEach((card, index) => {
                if (index === 0) {
                    card.style.display = 'inline-flex';
                } else {
                    card.style.display = 'none';
                }
            });
        } else {
            cards.forEach(card => {
                card.style.display = 'inline-flex';
            });
        }
    }
    
    
    showSingleCardOnNarrowScreens();
    
   
    window.addEventListener('resize', showSingleCardOnNarrowScreens);
});
