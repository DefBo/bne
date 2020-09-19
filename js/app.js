document.addEventListener("DOMContentLoaded", function() {

    // Toggle hamburger active class
    let hamburger = document.querySelector(".hamburger");
    let body = document.querySelector("body");

    hamburger.addEventListener("click", function() {
        hamburger.classList.toggle("is-active");
        body.classList.toggle("nav-is-open");
    });

});
