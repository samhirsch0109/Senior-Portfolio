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

    // Smooth scroll for ALL anchor links with offset
    $('a[href^="#"]').on("click", function (e) {
        const target = $($(this).attr("href"));
        if (target.length) {
            e.preventDefault();
            const offset = 80; // Adjust to match fixed navbar height
            $("html, body").animate({
                scrollTop: target.offset().top - offset
            }, 800);
        }
    });
});


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

