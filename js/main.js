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

    document.addEventListener('scroll',  () => {
        let introSection = document.getElementById("intro");
        let aboutSection = document.getElementById("about");
        let skillsSection = document.getElementById("career");
        let projectsSection = document.getElementById("projects");
        let contactSection = document.getElementById("career");

        /*let p1 = document.getElementById("p1");
        let p2 = document.getElementById("p2");
        let p3 = document.getElementById("p3");
        if(isInViewport(pre1)) {
            p1.classList.add("curr-active");
            p1.classList.add("slideRight");

            p2.classList.remove("curr-active");
            p2.classList.remove("slideRight");

            p3.classList.remove("curr-active");
            p3.classList.remove("slideRight");
        } else if (isInViewport(pre2)) {
            p1.classList.remove("curr-active");
            p1.classList.remove("slideRight");

            p2.classList.add("curr-active");
            p2.classList.add("slideRight");

            p3.classList.remove("curr-active");
            p3.classList.remove("slideRight");
        } else if (isInViewport(pre3)) {
            p1.classList.remove("curr-active");
            p1.classList.remove("slideRight");

            p2.classList.remove("curr-active");
            p2.classList.remove("slideRight");

            p3.classList.add("curr-active");
            p3.classList.add("slideRight");
        }*/
    });
});