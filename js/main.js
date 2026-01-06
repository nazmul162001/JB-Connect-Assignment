/**
 * JB Connect - Main JavaScript
 */

document.addEventListener('DOMContentLoaded', function() {
    initHamburgerMenu();
    initSmoothScroll();
    initScrollAnimations();
});

/**
 * Hamburger Menu Toggle
 */
function initHamburgerMenu() {
    const hamburger = document.getElementById('hamburger');
    const navList = document.getElementById('navList');
    const overlay = document.getElementById('menuOverlay');

    if (!hamburger || !navList) return;

    function closeMenu() {
        hamburger.classList.remove('active');
        navList.classList.remove('active');
        if (overlay) overlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    function openMenu() {
        hamburger.classList.add('active');
        navList.classList.add('active');
        if (overlay) overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    hamburger.addEventListener('click', function() {
        if (navList.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    // Close menu when clicking on a link
    const navLinks = navList.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            closeMenu();
        });
    });

    // Close menu when clicking overlay
    if (overlay) {
        overlay.addEventListener('click', closeMenu);
    }
}

/**
 * Smooth Scroll for Anchor Links
 */
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            e.preventDefault();
            const target = document.querySelector(href);

            if (target) {
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - 20;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Scroll Animations
 */
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll(
        '.section-title, .section-text, .service-item, ' +
        '.reason-wrapper, .story-item, .profile-layout'
    );

    animatedElements.forEach((el) => {
        el.classList.add('fade-in');
    });

    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animatedElements.forEach(el => {
        observer.observe(el);
    });
}
