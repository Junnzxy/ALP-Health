/* reminder.js - Reminder.html */

// Toggle switch opacity feedback
const toggles = document.querySelectorAll('.switch input');
toggles.forEach(toggle => {
    toggle.addEventListener('change', function () {
        const parent = this.closest('.p-4');
        if (parent) {
            parent.style.opacity = this.checked ? '1' : '0.6';
        }
    });
});

// Time input change logger (hook for API calls in Spring Boot)
const timeInputs = document.querySelectorAll('input[type="time"]');
timeInputs.forEach(input => {
    input.addEventListener('change', (e) => {
        console.log(`Setting time to: ${e.target.value}`);
        // TODO: Kirim ke Spring Boot endpoint, contoh:
        // fetch('/api/reminder/time', { method: 'POST', body: JSON.stringify({ time: e.target.value }) })
    });
});