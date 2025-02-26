document.addEventListener('DOMContentLoaded', function() {
    const themeSwitch = document.getElementById('theme-switch');
    const body = document.body;

    // Check if the user has a preferred theme in localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme);
    }

    // Toggle between light and dark mode
    themeSwitch.addEventListener('click', function() {
        if (body.classList.contains('darkmode')) {
            body.classList.remove('darkmode');
            localStorage.setItem('theme', 'lightmode');
        } else {
            body.classList.add('darkmode');
            localStorage.setItem('theme', 'darkmode');
        }
    });
});