/* chatbot.js - Chatbot.html */

function sendMessage(text) {
    const input = document.getElementById('chat-input');
    const message = text || input.value.trim();
    if (!message) return;

    const chatContainer = document.getElementById('chat-container');

    // User message bubble
    const userMsg = document.createElement('div');
    userMsg.className = 'flex justify-end gap-stack-sm ml-auto max-w-[85%]';
    userMsg.innerHTML = `
        <div class="bg-primary text-on-primary p-stack-md rounded-2xl rounded-tr-none">
            <p class="text-body-md">${message}</p>
            <span class="text-[10px] text-on-primary/70 mt-1 block text-right">Sekarang</span>
        </div>
    `;
    chatContainer.appendChild(userMsg);

    if (!text) input.value = '';
    chatContainer.scrollTop = chatContainer.scrollHeight;

    // Simulate bot typing
    setTimeout(() => {
        const botMsg = document.createElement('div');
        botMsg.className = 'flex gap-stack-sm max-w-[85%] animate-pulse';
        botMsg.innerHTML = `
            <div class="w-8 h-8 rounded-full bg-primary flex-shrink-0 flex items-center justify-center text-on-primary">
                <span class="material-symbols-outlined text-[18px]">smart_toy</span>
            </div>
            <div class="bg-surface-container p-stack-md rounded-2xl rounded-tl-none">
                <p class="text-body-md text-on-surface">Menganalisis...</p>
            </div>
        `;
        chatContainer.appendChild(botMsg);
        chatContainer.scrollTop = chatContainer.scrollHeight;

        setTimeout(() => {
            botMsg.classList.remove('animate-pulse');
            botMsg.querySelector('p').innerText = "Sudah berapa lama ini berlangsung?";

            // Update progress bar
            const progressBar = document.getElementById('progress-bar');
            const stepLabel = document.getElementById('step-label');
            const progressPercent = document.getElementById('progress-percent');

            if (progressBar) progressBar.style.width = '66%';
            if (stepLabel) stepLabel.innerText = 'Langkah 2 dari 3';
            if (progressPercent) progressPercent.innerText = '66%';

            chatContainer.scrollTop = chatContainer.scrollHeight;
        }, 1000);
    }, 500);
}