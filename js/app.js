document.addEventListener("DOMContentLoaded", function() {

    // Toggle hamburger active class
    let hamburger = document.querySelector(".hamburger");
    let body = document.querySelector("body");

    hamburger.addEventListener("click", function() {
        hamburger.classList.toggle("is-active");
        body.classList.toggle("nav-is-open");
    });

    //Initialize controller for scrollmagic
    var controller = new ScrollMagic.Controller();

    //Images animation on scroll
    var revealItem = document.getElementsByClassName('scrl');
    for (var i = 0; i < revealItem.length; i++) {
        if (window.innerWidth >= 768) {
            new ScrollMagic.Scene({
                triggerElement: revealItem[i],
                offset: 0,
                triggerHook: 0.749999,
            })
                .setClassToggle(revealItem[i], '_visible')
                .addTo(controller);
        } else if (window.innerWidth < 768) {
            new ScrollMagic.Scene({
                triggerElement: revealItem[i],
                offset: 0,
                triggerHook: 0.849999,
            })
                .setClassToggle(revealItem[i], '_visible')
                .addTo(controller);
        }
    }

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 150) {
            $(".top-nav").addClass("top-nav_solid");
        } else {
            $(".top-nav").removeClass("top-nav_solid");
        }
    });

    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
    });
});
