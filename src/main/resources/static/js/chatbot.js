body {
    font-family: 'Inter', sans-serif;
    background-color: #f8f9fa;
    color: #191c1d;
    -webkit-font-smoothing: antialiased;
}

.material-symbols-outlined {
    font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
    vertical-align: middle;
    display: inline-block;
}

/* Cards */
.card-shadow {
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.04);
}

.tonal-card {
    background-color: #ffffff;
    border-radius: 16px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.04);
    padding: 24px;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.tonal-card:hover {
    box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.08);
}

/* Glass effects */
.glass-card {
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(8px);
    border: 1px solid rgba(255, 255, 255, 0.3);
}

.glass-nav {
    backdrop-filter: blur(8px);
    background-color: rgba(248, 249, 250, 0.8);
}

.glass-header {
    background: rgba(248, 249, 250, 0.8);
    backdrop-filter: blur(12px);
}

.glass-effect {
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
}

/* Tab indicator */
.active-tab-indicator {
    position: absolute;
    bottom: -2px;
    left: 0;
    right: 0;
    height: 2px;
    background-color: #00478d;
}

/* Shadows */
.shadow-level-1 {
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.04);
}

.custom-shadow {
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.04);
}

/* Hero gradient (LandingPage) */
.hero-gradient {
    background: linear-gradient(90deg,
        rgba(248, 249, 250, 1) 30%,
        rgba(248, 249, 250, 0.8) 50%,
        rgba(248, 249, 250, 0) 100%);
}

/* Chatbot */
.active-chip {
    background-color: #00478d !important;
    color: #ffffff !important;
}

.step-transition {
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.gradient-mesh {
    background:
        radial-gradient(at 0% 0%, #d6e3ff 0%, transparent 50%),
        radial-gradient(at 100% 100%, #d5e3ff 0%, transparent 50%);
}

.chat-scroll {
    scrollbar-width: thin;
    scrollbar-color: #c2c6d4 transparent;
}

.chat-scroll::-webkit-scrollbar {
    width: 6px;
}

.chat-scroll::-webkit-scrollbar-thumb {
    background-color: #c2c6d4;
    border-radius: 10px;
}

/* HasilAnalisis */
.custom-scrollbar::-webkit-scrollbar { width: 6px; }
.custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
.custom-scrollbar::-webkit-scrollbar-thumb {
    background: #DEE2E6;
    border-radius: 10px;
}

/* Hoaks */
.myth-card-hover:hover {
    transform: translateY(-4px);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* KesehatanMental */
.tonal-card.mental {
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

/* Notifikasi */
.nav-item-active::after {
    content: '';
    position: absolute;
    bottom: -20px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--primary);
}

/* PusatInformasi */
.glass-effect-pusat {
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
}

/* Reminder - Form Inputs */
.input-field {
    border: 1px solid #DEE2E6;
    border-radius: 8px;
    padding: 12px 16px;
    width: 100%;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.input-field:focus {
    outline: none;
    border-color: #00478d;
    box-shadow: 0 0 0 2px rgba(0, 71, 141, 0.1);
}

.primary-btn {
    background-color: #00478d;
    color: #ffffff;
    font-weight: 600;
    padding: 12px 24px;
    border-radius: 9999px;
    transition: all 0.2s ease;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
}

.primary-btn:hover {
    background-color: #00366b;
    transform: translateY(-1px);
}

.secondary-btn {
    border: 1px solid #00478d;
    color: #00478d;
    font-weight: 600;
    padding: 12px 24px;
    border-radius: 9999px;
    transition: all 0.2s ease;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
}

.secondary-btn:hover {
    background-color: rgba(0, 71, 141, 0.05);
}

.status-chip {
    padding: 4px 12px;
    border-radius: 9999px;
    font-size: 12px;
    font-weight: 600;
}

.chip-success { background-color: rgba(40, 167, 69, 0.1); color: #28a745; }
.chip-warning { background-color: rgba(255, 193, 7, 0.1); color: #856404; }

/* Toggle Switch (Reminder) */
.switch {
    position: relative;
    display: inline-block;
    width: 48px;
    height: 24px;
}

.switch input { opacity: 0; width: 0; height: 0; }

.slider {
    position: absolute;
    cursor: pointer;
    top: 0; left: 0; right: 0; bottom: 0;
    background-color: #ccc;
    transition: .4s;
    border-radius: 24px;
}

.slider:before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 3px;
    bottom: 3px;
    background-color: white;
    transition: .4s;
    border-radius: 50%;
}

.ripple {
            position: absolute;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
        }
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        /* Mobile Specific Typography Adjustments */
        @media (max-width: 768px) {
            h1 { font-size: 24px; line-height: 32px; font-weight: 600; }
        }

input:checked + .slider { background-color: #00478d; }
input:checked + .slider:before { transform: translateX(24px); }