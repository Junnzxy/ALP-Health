/* hoaks.js - Hoaks.html */

// Search input ring on focus
const searchInput = document.getElementById('hoaxSearch');
if (searchInput) {
    searchInput.addEventListener('focus', () => {
        searchInput.parentElement.classList.add('ring-2', 'ring-primary/20');
    });
    searchInput.addEventListener('blur', () => {
        searchInput.parentElement.classList.remove('ring-2', 'ring-primary/20');
    });
}

// Placeholder for myth card hover (JS micro-interactions can be extended here)
const cards = document.querySelectorAll('.myth-card-hover');
cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        // Extended interactions can be added here
    });
});