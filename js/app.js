document.addEventListener("DOMContentLoaded", function() {

    // Toggle hamburger active class
    let hamburger = document.querySelector(".hamburger");

    hamburger.addEventListener("click", function() {
        hamburger.classList.toggle("is-active");
    });

});
