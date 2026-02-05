// Smooth scroll
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Navbar background on scroll
window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");
    navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// Reveal on scroll
function reveal() {
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach((el) => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const revealPoint = 150;

        if (elementTop < windowHeight - revealPoint) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", reveal);

// Typing effect
const text = "Web Developer | Robotics Enthusiast | Problem Solver";
let i = 0;

function typingEffect() {
    if (i < text.length) {
        document.querySelector(".typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typingEffect, 60);
    }
}

typingEffect();
