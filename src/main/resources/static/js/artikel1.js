
// Scroll effect for header shadow
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

// Prevent default for anchor-only links
document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('click', (e) => {
        if (el.getAttribute('href') === '#') e.preventDefault();
    });
});