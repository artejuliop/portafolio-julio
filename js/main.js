const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-menu a");


menuToggle.addEventListener("click", function () {

    navMenu.classList.toggle("activo");

    if (navMenu.classList.contains("activo")) {
        menuToggle.textContent = "✕";
    } else {
        menuToggle.textContent = "☰";
    }

});


navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("activo");
        menuToggle.textContent = "☰";

    });

});