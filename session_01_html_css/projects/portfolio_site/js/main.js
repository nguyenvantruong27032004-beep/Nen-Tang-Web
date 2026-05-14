/* =======================================================
   main.js — Portfolio JavaScript
   Session 01 · Bài 1.1 · Header + Hero Section
   ======================================================= */

/* ── 1. Header Scroll Effect ────────────────────────────── */
(function () {
    'use strict';

    const header = document.getElementById('site-header');

    function onScroll() {
        if (window.scrollY > 20) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // run once on load
})();

/* ── 2. Active Nav Link on Scroll ──────────────────────── */
(function () {
    'use strict';

    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('main section[id]');

    function updateActiveLink() {
        const scrollY = window.scrollY + 100; // offset

        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionH   = section.offsetHeight;
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionH) {
                current = section.id;
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveLink, { passive: true });
    updateActiveLink();
})();

/* ── 3. Close mobile menu after clicking a nav link ────── */
(function () {
    'use strict';

    const menuToggle = document.getElementById('menu-toggle');
    const navLinks   = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (menuToggle) menuToggle.checked = false;
        });
    });
})();

console.log('[Portfolio] JS loaded — Session 01');
