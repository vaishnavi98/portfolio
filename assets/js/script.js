// ---------------------------------------------
// Neon Hover Glow for Buttons
// ---------------------------------------------
const neonButtons = document.querySelectorAll('.btn, .btn-outline');

neonButtons.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        btn.style.boxShadow = "0 0 20px #b366ff, 0 0 40px #b366ff";
    });

    btn.addEventListener('mouseleave', () => {
        btn.style.boxShadow = "none";
    });
});


// ---------------------------------------------
// Smooth Scroll for Internal Links
// ---------------------------------------------
const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});


// ---------------------------------------------
// Fade-in Animation on Scroll
// ---------------------------------------------
const fadeElements = document.querySelectorAll('.project-card, .about, .contact');

function fadeInOnScroll() {
    fadeElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }
    });
}

window.addEventListener('scroll', fadeInOnScroll);
window.addEventListener('load', fadeInOnScroll);


// ---------------------------------------------
// Neon Glow on Navbar When Scrolling
// ---------------------------------------------
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 20) {
        nav.style.boxShadow = "0 0 20px #6a00ff";
    } else {
        nav.style.boxShadow = "0 0 10px rgba(106, 0, 255, 0.4)";
    }
});
