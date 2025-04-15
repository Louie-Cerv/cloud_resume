const counter = document.getElementById('count');
async function UpdateVisitCount() {
    let response = await fetch("https://kzbrv7w7a4tbwqo4lpwywo6spa0ymrki.lambda-url.us-west-1.on.aws/");
    let data = await response.json();
    if (counter) {
        counter.innerHTML = data;
    }
}

UpdateVisitCount();

document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('darkModeToggle');

    if (!toggleBtn) {
        console.error("Dark mode toggle button not found!");
        return;
    }

    const updateTheme = (theme) => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        if (theme === 'dark') {
            toggleBtn.textContent = 'LIGHT';
            toggleBtn.setAttribute('aria-label', 'Enable light mode');
            toggleBtn.setAttribute('aria-pressed', 'true');
        } else {
            toggleBtn.textContent = 'DARK';
            toggleBtn.setAttribute('aria-label', 'Enable dark mode');
            toggleBtn.setAttribute('aria-pressed', 'false');
        }
    };

    // Initial theme setup (moved to inline script for faster visual update)
    // const currentTheme = localStorage.getItem('theme');
    // if (currentTheme === 'dark') {
    //     updateTheme('dark');
    // } else {
    //     updateTheme('light');
    // }

    toggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        updateTheme(newTheme);
    });
});