/* pusat-informasi.js - PusatInformasi.html */

// Prevent default for anchor-only links
document.querySelectorAll('button, a').forEach(el => {
    el.addEventListener('click', function (e) {
        if (this.getAttribute('href') === '#') e.preventDefault();
    });
});

// Scroll reveal for section cards
const observerOptions = { threshold: 0.1 };

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in', 'fade-in', 'slide-in-from-bottom-4', 'duration-500');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('section > div').forEach(el => observer.observe(el));