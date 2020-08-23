"use strict";
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
function setCookie(name, value, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));

    const expires = "expires="+ d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}
function getCookie(name) {
    const cookieString = decodeURIComponent(document.cookie);
    const cookies = cookieString.split('; ');

    let i = 0;
    while (i < cookies.length && !cookies[i].startsWith(name+'=')) {
        i++;
    }

    if(i < cookies.length) {
        return cookies[i].substr(name.length+1);
    } else {
        return '';
    }
}
document.addEventListener("DOMContentLoaded", () => {
    /** Intro typing **/
    new Typed('#typed', {
        stringsElement: '#typed-strings',
        typeSpeed: 100,
        startDelay: 1000,
        backSpeed: 50,
        smartBackspace: true,
        shuffle: true,
        backDelay: 2000,
        loop: true,
    });


    /** Cookie consent **/
    const cookieConsentBar = document.getElementById("cookie-consent-bar");
    const cookieAgreeContent = getCookie('cookieAgree');
    const footer = document.getElementById("footer")

    if (cookieAgreeContent === "yes") {
        cookieConsentBar.style.display = "none";
        footer.classList.remove("banner-visible")
    } else {
        const cookieConsentButton = document.getElementById("cookie-consent-button");
        cookieConsentButton.addEventListener("click", () => {
            cookieConsentBar.style.display = "none";
            footer.classList.remove("banner-visible")
            setCookie('cookieAgree', 'yes', 30);
        });
    }


    /** Scroll event handler **/
    let aboutSection = document.getElementById("about");
    let skillsSection = document.getElementById("skills");
    let careerSection = document.getElementById("career");
    let projectsSection = document.getElementById("projects");
    let contactSection = document.getElementById("contact");

    let aboutNavLink = document.querySelector('#desktop-header > nav > a[href$="about"]');
    let skillsNavLink = document.querySelector('#desktop-header > nav > a[href$="skills"]');
    let careerNavLink = document.querySelector('#desktop-header > nav > a[href$="career"]');
    let projectsNavLink = document.querySelector('#desktop-header > nav > a[href$="projects"]');
    let contactNavLink = document.querySelector('#desktop-header > nav > a[href$="contact"]');

    async function checkVisibleElement() {

        if (isInViewport(aboutSection)) {
            aboutNavLink.classList.add("active-view");
            skillsNavLink.classList.remove("active-view");
            careerNavLink.classList.remove("active-view");
            projectsNavLink.classList.remove("active-view");
            contactNavLink.classList.remove("active-view");
            //console.log(1);
        } else if (isInViewport(skillsSection)) {
            aboutNavLink.classList.remove("active-view");
            skillsNavLink.classList.add("active-view");
            careerNavLink.classList.remove("active-view");
            projectsNavLink.classList.remove("active-view");
            contactNavLink.classList.remove("active-view");
            //console.log(2);
        } else if (isInViewport(careerSection)) {
            aboutNavLink.classList.remove("active-view");
            skillsNavLink.classList.remove("active-view");
            careerNavLink.classList.add("active-view");
            projectsNavLink.classList.remove("active-view");
            contactNavLink.classList.remove("active-view");
            //console.log(3);
        } else if (isInViewport(projectsSection)) {
            aboutNavLink.classList.remove("active-view");
            skillsNavLink.classList.remove("active-view");
            careerNavLink.classList.remove("active-view");
            projectsNavLink.classList.add("active-view");
            contactNavLink.classList.remove("active-view");
            //console.log(4);
        } else if (isInViewport(contactSection)) {
            aboutNavLink.classList.remove("active-view");
            skillsNavLink.classList.remove("active-view");
            careerNavLink.classList.remove("active-view");
            projectsNavLink.classList.remove("active-view");
            contactNavLink.classList.add("active-view");
            //console.log(5);
        }
    }
    checkVisibleElement()
    document.addEventListener('scroll',  checkVisibleElement);
});