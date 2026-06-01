/* dashboard.js - Dashboard.html */

// Toggle reminders
document.querySelectorAll('input[type="checkbox"]').forEach(toggle => {
    toggle.addEventListener('change', function () {
        const labelEl = this.closest('label');
        if (!labelEl) return;
        const sibling = labelEl.previousElementSibling;
        if (!sibling) return;
        const span = sibling.querySelector('span:last-child');
        if (span) {
            console.log(`${span.textContent} reminder: ${this.checked ? 'Enabled' : 'Disabled'}`);
        }
    });
});

// Search bar expand on focus
const searchInput = document.querySelector('input[placeholder="Cari penyakit..."]');
if (searchInput) {
    searchInput.addEventListener('focus', () => {
        searchInput.classList.add('w-80');
    });
    searchInput.addEventListener('blur', () => {
        searchInput.classList.remove('w-80');
    });
}