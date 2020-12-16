"use strict";

document.addEventListener('lazybeforeunveil', function(e){
    let bg = e.target.getAttribute('data-bg');
    if(bg){
        e.target.style.backgroundImage = 'url(' + bg + ')';
    }
});
document.addEventListener("DOMContentLoaded", function() {
    /** Lazy Loading **/



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