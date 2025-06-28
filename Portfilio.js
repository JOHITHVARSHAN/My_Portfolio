document.addEventListener('DOMContentLoaded', function () {
    // Example: Toggle project details on click
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('click', function () {
            this.classList.toggle('expanded');
        });
    });

    // Example: Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const target = document.getElementById(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Example: Show/hide mobile menu
    const menuBtn = document.getElementById('menu-btn');
    const navMenu = document.getElementById('nav-menu');
    if (menuBtn && navMenu) {
        menuBtn.addEventListener('click', function () {
            navMenu.classList.toggle('visible');
        });
    }
});