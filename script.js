$(document).ready(function () {
    // Lock scroll for intro animation
    $("body").css("overflow", "hidden");
    setTimeout(() => $("body").css("overflow", "auto"), 2500);

    const introOffset = $("#intro").offset()?.top + 50 || 100;

    const checkNavbarVisibility = () => {
        if ($(window).scrollTop() > introOffset - 100) {
            $(".navbar").addClass("show");
        } else {
            $(".navbar").removeClass("show");
        }
    };

    // Initial check
    checkNavbarVisibility();

    // Scroll listener
    $(window).on("scroll", checkNavbarVisibility);

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
            projects: [],
        };
    },
    methods: {
        openModal(index) {
            const modalId = '#carouselModal' + index;
            const modalEl = document.querySelector(modalId);
            const modal = new bootstrap.Modal(modalEl);
            modal.show();
        },
        toggleDescription(index) {
            this.projects[index].showDescription = !this.projects[index].showDescription;
        },
        async fetchProjects() {
            const res = await fetch('projects.json');
            const data = await res.json();

            // Ensure each project has a description and toggle state
            data.forEach(project => {
                if (!Array.isArray(project.description)) {
                    project.description = [];
                }
                project.showDescription = false;
            });

            this.projects = data;
        }
    },
    mounted() {
        this.fetchProjects();
    }
});

vueApp.mount('#vue_app');


 const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 80; // adjust for navbar height
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });

  
//code for top button

$(window).scroll(function () {
    if ($(this).scrollTop() > 600) {
        $("#scrollTopBtn").fadeIn();
    } else {
        $("#scrollTopBtn").fadeOut();
    }
});

$("#scrollTopBtn").click(function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
});

