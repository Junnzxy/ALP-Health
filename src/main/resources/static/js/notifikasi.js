/* notifikasi.js - Notifikasi.html */

// Button press micro-interaction
document.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('mousedown', () => {
        btn.style.transform = 'scale(0.95)';
    });
    btn.addEventListener('mouseup', () => {
        btn.style.transform = 'scale(1)';
    });
    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'scale(1)';
    });
});

// Tab filter switching
const filterButtons = document.querySelectorAll('button.px-stack-md');
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(b => {
            b.classList.remove('bg-primary', 'text-on-primary');
            b.classList.add('bg-surface-container', 'text-on-surface-variant');
        });
        button.classList.remove('bg-surface-container', 'text-on-surface-variant');
        button.classList.add('bg-primary', 'text-on-primary');
    });
});