// Function to add the 'animate' class when elements come into view
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate');

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fly-in');
                    observer.unobserve(entry.target); // Stop observing after animation
                }
            });
        },
        {
            threshold: 0.5, // Trigger when 50% of the element is visible
        }
    );

    elements.forEach((element) => {
        observer.observe(element);
    });
}

// Call the function when the page loads
window.addEventListener('load', animateOnScroll);