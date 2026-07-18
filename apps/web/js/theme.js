export function toggleTheme() {
    const html = document.documentElement;
    const icon = document.getElementById('theme-toggle-icon');
    if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        html.classList.add('light');
        if (icon) icon.textContent = 'dark_mode';
    } else {
        html.classList.remove('light');
        html.classList.add('dark');
        if (icon) icon.textContent = 'light_mode';
    }
    localStorage.setItem('onius_theme', html.classList.contains('dark') ? 'dark' : 'light');
}

export function setupThemeToggle() {
    const btn = document.getElementById('theme-toggle');
    if (btn) {
        btn.addEventListener('click', toggleTheme);
    }
}

export function initTheme() {
    const icon = document.getElementById('theme-toggle-icon');
    if (!icon) return;
    const isDark = document.documentElement.classList.contains('dark');
    icon.textContent = isDark ? 'light_mode' : 'dark_mode';
}
