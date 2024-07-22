document.addEventListener('DOMContentLoaded', function () {
    const wrapper = document.querySelector(".wrapper");
    const carousel = document.querySelector(".carousel");
    const firstCardWidth = carousel.querySelector(".card").offsetWidth;
    const arrowBtns = document.querySelectorAll(".wrapper i");
    const carouselChildren = [...carousel.children];

    let isDragging = false,
        isAutoPlay = true,
        startX, startScrollLeft, timeoutId;

    let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

    console.log("Initial cardPerView:", cardPerView);

    // Duplicate cards to create infinite scroll effect
    carouselChildren.slice(-cardPerView).reverse().forEach(card => {
        carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
    });

    carouselChildren.slice(0, cardPerView).forEach(card => {
        carousel.insertAdjacentHTML("beforeend", card.outerHTML);
    });

    // Initial positioning of the carousel
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.offsetWidth;
    carousel.classList.remove("no-transition");

    console.log("Initial carousel.scrollLeft:", carousel.scrollLeft);

    // Click event for arrow buttons
    arrowBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const scrollAmount = btn.id === "left" ? -firstCardWidth : firstCardWidth;
            console.log(`Button ${btn.id} clicked. Scroll amount:`, scrollAmount);
            carousel.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });
    });

    // Dragging event handlers
    const dragStart = (e) => {
        isDragging = true;
        carousel.classList.add("dragging");

        startX = e.pageX;
        startScrollLeft = carousel.scrollLeft;
    };

    const dragging = (e) => {
        if (!isDragging) return;

        carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
    };

    const dragStop = () => {
        isDragging = false;
        carousel.classList.remove("dragging");
    };

    // Infinite scroll handler
    const infiniteScroll = () => {
        if (carousel.scrollLeft === 0) {
            carousel.classList.add("no-transition");
            carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
            carousel.classList.remove("no-transition");
        } else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
            carousel.classList.add("no-transition");
            carousel.scrollLeft = carousel.offsetWidth;
            carousel.classList.remove("no-transition");
        }

        clearTimeout(timeoutId);
        if (!wrapper.matches(":hover")) autoPlay();
    };

    // Auto play functionality
    const autoPlay = () => {
        if (window.innerWidth < 800 || !isAutoPlay) return;

        timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
    };

    autoPlay();

    // Event listeners for dragging and infinite scroll
    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("mousemove", dragging);
    document.addEventListener("mouseup", dragStop);
    carousel.addEventListener("scroll", infiniteScroll);
    wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
    wrapper.addEventListener("mouseleave", autoPlay);

    // Navbar scroll functionality
    window.addEventListener('scroll', function () {
        const navbar = document.getElementById('navbar');
        const heroButtons = document.getElementById('hero-buttons');
        const navbarHeight = navbar.offsetHeight;
        const scrollPosition = window.scrollY;

        if (scrollPosition > navbarHeight) {
            heroButtons.style.opacity = '0';
            heroButtons.style.pointerEvents = 'none';
        } else {
            heroButtons.style.opacity = '1';
            heroButtons.style.pointerEvents = 'auto';
        }
    });

    const leftButton = document.getElementById('left');
    const rightButton = document.getElementById('right');

    if (leftButton && rightButton) {
        leftButton.addEventListener('click', function () {
            console.log("Left button clicked");
            carousel.scrollBy({
                left: -carousel.clientWidth / 3,
                behavior: 'smooth'
            });
        });

        rightButton.addEventListener('click', function () {
            console.log("Right button clicked");
            carousel.scrollBy({
                left: carousel.clientWidth / 3,
                behavior: 'smooth'
            });
        });
    }
});
