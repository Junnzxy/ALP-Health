const togglePassword = document.getElementById('togglePassword');
        const passwordInput = document.getElementById('password');
        const passwordIcon = document.getElementById('passwordIcon');

        togglePassword.addEventListener('click', function () {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            
            // Toggle the icon and style
            if (type === 'text') {
                passwordIcon.textContent = 'visibility_off';
                this.classList.add('text-primary');
                this.classList.remove('text-outline');
            } else {
                passwordIcon.textContent = 'visibility';
                this.classList.remove('text-primary');
                this.classList.add('text-outline');
            }
        });

        // Ripple Effect
        document.querySelectorAll('button').forEach(button => {
            button.addEventListener('click', function(e) {
                let ripple = document.createElement('span');
                ripple.classList.add('ripple');
                this.appendChild(ripple);
                let d = Math.max(this.clientWidth, this.clientHeight);
                ripple.style.width = ripple.style.height = d + 'px';
                let rect = this.getBoundingClientRect();
                ripple.style.left = e.clientX - rect.left - d/2 + 'px';
                ripple.style.top = e.clientY - rect.top - d/2 + 'px';
                setTimeout(() => ripple.remove(), 600);
            });
        });