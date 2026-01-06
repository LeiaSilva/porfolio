//Movimiento de las cards
const cardBox = document.querySelector('.educacion-container-cardBox');
const btnNext = document.querySelector('ion-icon[name="chevron-forward-outline"]');
const btnBack = document.querySelector('ion-icon[name="chevron-back-outline"]');
const cards = document.querySelectorAll('.educacion-container-card');

let currentIndex = 0;

function updateCarousel() {
    const cardWidth = cards[0].clientWidth + 48; // El 48 es por los márgenes (1.5rem + 1.5rem aprox)
    cardBox.style.transform = `translateX(${-currentIndex * cardWidth}px)`;
}

btnNext.addEventListener('click', () => {
    if (currentIndex < cards.length - 1) {
        currentIndex++;
        updateCarousel();
    } else {
        currentIndex = 0;
        updateCarousel();
    }
});

btnBack.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    } else {
        currentIndex = cards.length - 1;
        updateCarousel();
    }
});
