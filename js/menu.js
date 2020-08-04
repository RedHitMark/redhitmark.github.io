"use strict";

document.addEventListener("DOMContentLoaded", function() {
    let hamburgerButton = document.getElementById("hamburger-button");
    let closeMobileMenuButton = document.getElementById("close-mobile-menu-button");
    let mobileMenu = document.getElementById("mobile-menu");
    let mobileMenuLinks = document.querySelectorAll("#mobile-menu nav a");

    function openMenu(event) {
        mobileMenu.style.width = "100%";
    }
    function closeMenu(event) {
        mobileMenu.style.width = "0";
    }

    hamburgerButton.addEventListener("click", openMenu);

    closeMobileMenuButton.addEventListener("click", closeMenu);

    mobileMenuLinks.forEach((button) => {
        button.addEventListener("click", closeMenu);
    });
});