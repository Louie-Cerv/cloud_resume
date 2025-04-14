const counter = document.getElementById('count');
async function UpdateVisitCount() {
    let response = await fetch("https://kzbrv7w7a4tbwqo4lpwywo6spa0ymrki.lambda-url.us-west-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = data;
}

UpdateVisitCount();

const toggleBtn = document.getElementById('darkModeToggle');
const currentTheme = localStorage.getItem('theme');

// Check if theme is saved in localStorage
if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    toggleBtn.textContent = '🌙';  // Change the icon to "dark" mode indicator
} else {
    document.documentElement.setAttribute('data-theme', 'light');
    toggleBtn.textContent = '🌓';  // Set it to "light" mode icon
}

toggleBtn.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');
    if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        toggleBtn.textContent = '🌓';  // Switch back to "light" mode icon
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        toggleBtn.textContent = '🌙';  // Switch to "dark" mode icon
    }
});
