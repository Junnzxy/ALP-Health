/* landing-page.js - LandingPage.html */

// Header shadow on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (!header) return;
    if (window.scrollY > 20) {
        header.classList.add('shadow-md');
        header.classList.remove('shadow-sm');
    } else {
        header.classList.add('shadow-sm');
        header.classList.remove('shadow-md');
    }
});

// Hover lift for feature cards (.group elements)
const cards = document.querySelectorAll('.group');
cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-4px)';
        card.style.transition = 'all 0.3s ease';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});