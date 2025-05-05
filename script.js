$(document).ready(function () {
    // Lock scroll until animation ends
    $("body").css("overflow", "hidden");
    setTimeout(() => $("body").css("overflow", "auto"), 2500);

    // Show navbar after scrolling past the #intro section
    const introOffset = $("#intro").offset().top + 50; // triggers earlier
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > introOffset - 100) {
            $(".navbar").addClass("show");
        } else {
            $(".navbar").removeClass("show");
        }
    });

    // Smooth scroll
    $(".hero-arrow-link").on("click", function (e) {
        e.preventDefault();
        const target = $($(this).attr("href"));
        if (target.length) {
            $("html, body").animate({ scrollTop: target.offset().top }, 800);
        }
    });
});


const vueApp = Vue.createApp({
    data() {
        return {
            pageTitle: 'Gallery',
            projects: []
        };
    },
    methods: {
        openModal(index) {
            const modalId = '#carouselModal' + index;
            const modalEl = document.querySelector(modalId);
            const modal = new bootstrap.Modal(modalEl);
            modal.show();
        },
        async fetchProjects() {
            const res = await fetch('projects.json');
            const data = await res.json();
            this.projects = data;
        }
    },
    mounted() {
        this.fetchProjects();
    }
});

vueApp.mount('#vue_app');

window.addEventListener("scroll", () => {
    document.querySelectorAll(".parallax-inner").forEach((el) => {
        const speed = parseFloat(el.getAttribute("data-speed")) || 0.2;
        const offset = window.scrollY * speed;
        el.style.transform = `translateY(${offset}px)`;
    });
});
