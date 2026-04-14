// ========================
// Hamburger Menu
// ========================
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links a');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
});

// Close menu when a link is clicked
navItems.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('open');
    });
});

// ========================
// Active Nav on Scroll
// ========================
const sections = document.querySelectorAll('section');

function highlightNav() {
    const scrollPos = window.scrollY + 100;

    sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');
        const link = document.querySelector(`.nav-links a[href="#${id}"]`);

        if (link) {
            if (scrollPos >= top && scrollPos < top + height) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        }
    });
}

window.addEventListener('scroll', highlightNav);

// ========================
// Skill Bar Animation
// ========================
function animateSkills() {
    const skillFills = document.querySelectorAll('.skill-fill');

    skillFills.forEach(fill => {
        const rect = fill.getBoundingClientRect();
        const targetWidth = fill.getAttribute('data-width');

        if (rect.top < window.innerHeight && rect.bottom > 0) {
            fill.style.width = targetWidth + '%';
        }
    });
}

window.addEventListener('scroll', animateSkills);
window.addEventListener('load', animateSkills);
