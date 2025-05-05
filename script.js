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

