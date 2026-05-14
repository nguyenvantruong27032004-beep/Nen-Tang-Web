/* =======================================================
   main.js — Portfolio JavaScript
   Session 01 · Bài 1.1 + 1.2 · Header, Hero, Skills
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
    onScroll();
})();

/* ── 2. Active Nav Link on Scroll ──────────────────────── */
(function () {
    'use strict';

    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('main section[id]');

    function updateActiveLink() {
        const scrollY = window.scrollY + 100;

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

/* ── 4. Skills Progress Bar Animation on Scroll ────────── */
(function () {
    'use strict';

    const skillBars = document.querySelectorAll('.skill-progress');

    if (skillBars.length === 0) return;

    function animateBar(bar) {
        const targetWidth = bar.getAttribute('data-width');
        if (targetWidth) {
            bar.style.width = targetWidth + '%';
            bar.classList.add('animate');
        }
    }

    // Use IntersectionObserver for scroll-triggered animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateBar(entry.target);
                observer.unobserve(entry.target); // only animate once
            }
        });
    }, {
        threshold: 0.3
    });

    skillBars.forEach(bar => observer.observe(bar));
})();

console.log('[Portfolio] JS loaded — Session 01 (Bài 1.2)');
