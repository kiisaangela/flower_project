document.addEventListener('DOMContentLoaded', function() {
  const themeSwitch = document.getElementById('theme-switch');
  const body = document.body;

  // Check if the user has a preferred theme in localStorage
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'darkmode') {
      body.classList.add('darkmode');
  }

  // Toggle between light and dark mode with transition
  themeSwitch.addEventListener('click', function() {
      // Use requestAnimationFrame to ensure smooth transition
      requestAnimationFrame(() => {
          body.classList.toggle('darkmode');
          localStorage.setItem('theme', body.classList.contains('darkmode') ? 'darkmode' : 'lightmode');
      });
  });
});