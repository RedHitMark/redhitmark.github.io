"use strict";

document.addEventListener("DOMContentLoaded", function() {
    /** Lazy Loading **/
    const observer = lozad('.lazy', {
        rootMargin: '100px 0px',
        threshold: 0.1,
        enableAutoReload: true
    });
    observer.observe();

    /** Menu Script**/
    let hamburgerButton = document.getElementById("hamburger-button");
    let closeMobileMenuButton = document.getElementById("close-mobile-menu-button");
    let mobileMenu = document.getElementById("mobile-menu");
    let mobileMenuLinks = document.querySelectorAll("#mobile-menu nav a");

    function openMenu() {
        mobileMenu.style.width = "100%";
    }
    function closeMenu() {
        mobileMenu.style.width = "0";
    }
    hamburgerButton.addEventListener("click", openMenu);

    closeMobileMenuButton.addEventListener("click", closeMenu);

    mobileMenuLinks.forEach((button) => {
        button.addEventListener("click", closeMenu);
    });


});