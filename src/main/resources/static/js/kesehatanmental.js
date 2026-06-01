/* kesehatan-mental.js - KesehatanMental.html */

// Category filter tab switching
const filterButtons = document.querySelectorAll('button.whitespace-nowrap');
filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        filterButtons.forEach(b => {
            b.classList.remove('bg-primary', 'text-on-primary');
            b.classList.add('bg-surface', 'border', 'border-outline-variant', 'text-on-surface-variant');
        });
        btn.classList.remove('bg-surface', 'border', 'border-outline-variant', 'text-on-surface-variant');
        btn.classList.add('bg-primary', 'text-on-primary');
    });
});

// Scroll reveal for tonal cards
const observerOptions = { threshold: 0.1 };

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
        }
    });
}, observerOptions);

document.querySelectorAll('.tonal-card').forEach(card => {
    card.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-8');
    observer.observe(card);
});