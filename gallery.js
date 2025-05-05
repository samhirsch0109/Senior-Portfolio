// JavaScript
const galleryApp = Vue.createApp({
    data() {
        return {
            pageTitle: 'Gallery',
            projects: [/* same array as before */]
        };
    },
    methods: {
        openModal(index) {
            const modalId = '#carouselModal' + index;
            const modalEl = document.querySelector(modalId);
            const modal = new bootstrap.Modal(modalEl);
            modal.show();
        }
    }
});

galleryApp.mount("#gallery_vue");

let ticking = false;
window.addEventListener("scroll", () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            document.querySelectorAll(".parallax-item").forEach((el) => {
                const speed = parseFloat(el.getAttribute("data-speed")) || 0.5;
                const offset = window.scrollY * speed;
                el.style.transform = `translateY(${offset}px)`;
            });
            ticking = false;
        });
        ticking = true;
    }
});
