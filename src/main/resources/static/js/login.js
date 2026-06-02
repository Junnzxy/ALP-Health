/* hasil-analisis.js - HasilAnalisis.html */

// Hover lift for shadow cards
document.querySelectorAll('.shadow-level-1').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-2px)';
        card.style.transition = 'all 0.3s ease';
        card.style.boxShadow = '0px 8px 30px rgba(0,0,0,0.08)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0px)';
        card.style.boxShadow = '0px 4px 20px rgba(0,0,0,0.04)';
    });
});

// Smooth scroll for nav links (prevent default for demo)
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const text = this.innerText;
        console.log('Navigating to:', text);
    });
});