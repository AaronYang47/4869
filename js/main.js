/* ============================================
   4869 — Website Interactions
   ============================================ */

(function () {
    'use strict';

    // ── Navbar scroll effect ─────────────────
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        const handleScroll = () => {
            if (window.scrollY > 40) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
    }

    // ── Mobile nav toggle ────────────────────
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('show');
        });
        navLinks.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => navLinks.classList.remove('show'));
        });
    }

    // ── Scroll reveal animation ──────────────
    const revealElements = document.querySelectorAll('.reveal');
    if (revealElements.length > 0 && 'IntersectionObserver' in window) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
        );
        revealElements.forEach((el) => observer.observe(el));
    } else {
        revealElements.forEach((el) => el.classList.add('visible'));
    }

    // ── FAQ accordion ────────────────────────
    document.querySelectorAll('.faq-question').forEach((question) => {
        question.addEventListener('click', () => {
            const item = question.parentElement;
            const wasOpen = item.classList.contains('open');
            document.querySelectorAll('.faq-item').forEach((i) => i.classList.remove('open'));
            if (!wasOpen) {
                item.classList.add('open');
            }
        });
    });

    // ── Smooth anchor scroll offset ──────────
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', (e) => {
            const targetId = anchor.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                const offset = 80;
                const top = target.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    });

    // ── Animated number counters ─────────────
    const counters = document.querySelectorAll('[data-count]');
    if (counters.length > 0 && 'IntersectionObserver' in window) {
        const counterObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        animateCounter(entry.target);
                        counterObserver.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.5 }
        );
        counters.forEach((c) => counterObserver.observe(c));
    }

    function animateCounter(el) {
        const target = parseInt(el.dataset.count, 10);
        const suffix = el.dataset.suffix || '';
        const duration = 1600;
        const start = performance.now();

        function update(now) {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = Math.floor(eased * target) + suffix;
            if (progress < 1) requestAnimationFrame(update);
            else el.textContent = target + suffix;
        }
        requestAnimationFrame(update);
    }

    // ── Contact form (demo — no backend) ─────
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button[type="submit"]');
            const originalText = btn.textContent;
            btn.textContent = 'Opening GitHub…';
            btn.disabled = true;

            const name = contactForm.querySelector('[name="name"]').value;
            const email = contactForm.querySelector('[name="email"]').value;
            const message = contactForm.querySelector('[name="message"]').value;

            const subject = encodeURIComponent(`4869 Support — ${name}`);
            const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
            window.location.href = `https://github.com/AaronYang47/4869/issues/new?title=${subject}&body=${body}`;

            setTimeout(() => {
                btn.textContent = originalText;
                btn.disabled = false;
            }, 3000);
        });
    }

    // ── Active nav highlight ─────────────────
    const sections = document.querySelectorAll('section[id]');
    if (sections.length > 0) {
        const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');
        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach((section) => {
                const top = section.offsetTop - 120;
                if (window.scrollY >= top) current = section.id;
            });
            navAnchors.forEach((a) => {
                a.classList.toggle('active', a.getAttribute('href') === '#' + current);
            });
        }, { passive: true });
    }
})();
