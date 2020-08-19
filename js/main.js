"use strict";

document.addEventListener("DOMContentLoaded", function() {
    /** Intro typing **/
    const typed = new Typed('#typed', {
        stringsElement: '#typed-strings',
        typeSpeed: 100,
        startDelay: 1000,
        backSpeed: 50,
        smartBackspace: true,
        shuffle: true,
        backDelay: 2000,
        loop: true,
    });

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    let cookieConsentButton = document.getElementById("cookie-consent-button");
    let cookieConsentBar = document.getElementById("cookie-consent-bar");
    cookieConsentButton.addEventListener("click", (event) => {
       cookieConsentBar.style.display = "none";
    });

    document.addEventListener('scroll',  () => {
        let introSection = document.getElementById("intro");
        let aboutSection = document.getElementById("about");
        let careerSection = document.getElementById("career");
        let projectsSection = document.getElementById("projects");
        let contactSection = document.getElementById("contact");

        let aboutNavLink = document.querySelector('#desktop-header nav a[href$="about"]');
        let careerNavLink = document.querySelector('#desktop-header nav a[href$="career"]');
        let projectsNavLink = document.querySelector('#desktop-header nav a[href$="projects"]');
        let contactNavLink = document.querySelector('#desktop-header nav a[href$="contact"]');

        if(isInViewport(aboutSection)) {
            aboutNavLink.classList.add("active-view");
            careerNavLink.classList.remove("active-view");
            projectsNavLink.classList.remove("active-view");
            contactNavLink.classList.remove("active-view");
        } else if (isInViewport(careerSection)) {
            aboutNavLink.classList.remove("active-view");
            careerNavLink.classList.add("active-view");
            projectsNavLink.classList.remove("active-view");
            contactNavLink.classList.remove("active-view");
        } else if (isInViewport(projectsSection)) {
            aboutNavLink.classList.remove("active-view");
            careerNavLink.classList.remove("active-view");
            projectsNavLink.classList.add("active-view");
            contactNavLink.classList.remove("active-view");
        } else if (isInViewport(contactSection)) {
            aboutNavLink.classList.remove("active-view");
            careerNavLink.classList.remove("active-view");
            projectsNavLink.classList.remove("active-view");
            contactNavLink.classList.add("active-view");
        }
    });
});