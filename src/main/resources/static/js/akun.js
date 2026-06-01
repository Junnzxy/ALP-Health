/* akun.js - Akun.html */

function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
        window.scrollTo({
            top: element.offsetTop - 80,
            behavior: 'smooth'
        });

        // Update active state in sidebar
        const buttons = document.querySelectorAll('.lg\\:col-span-3 button');
        buttons.forEach(btn => {
            btn.classList.remove('bg-primary-container', 'text-on-primary-container');
            btn.classList.add('text-on-surface-variant');
        });
        event.currentTarget.classList.add('bg-primary-container', 'text-on-primary-container');
        event.currentTarget.classList.remove('text-on-surface-variant');
    }
}

// Dark mode toggle
const darkToggle = document.getElementById('darkToggle');
if (darkToggle) {
    darkToggle.addEventListener('change', () => {
        if (darkToggle.checked) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    });
}

// Simple input focus effects
document.querySelectorAll('input, select').forEach(input => {
    input.addEventListener('focus', () => {
        input.parentElement.classList.add('scale-[1.01]');
    });
    input.addEventListener('blur', () => {
        input.parentElement.classList.remove('scale-[1.01]');
    });
});