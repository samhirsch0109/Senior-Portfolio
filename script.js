const navbar = document.querySelector(".navbar");
const heroHeading = document.querySelector(".hero-heading");

// Show navbar when hero is out of view
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                navbar.classList.add("show");
            } else {
                navbar.classList.remove("show");
            }
        });
    },
    { threshold: 0.1 }
);

observer.observe(heroHeading);

// Trigger animation manually after load (in case CSS delay fails)
window.addEventListener("DOMContentLoaded", () => {
    heroHeading.style.animationPlayState = 'running';
});
