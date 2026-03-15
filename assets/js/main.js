/* =============================================
   SMRITI REGMI — PORTFOLIO MAIN SCRIPT
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

    // ============ TYPED.JS ============
    new Typed('#typed-text', {
        strings: [
            'Agentic AI Systems',
            'Autonomous AI Agents',
            'LLM-Powered Solutions',
            'MLOps Pipelines',
            'Research-Driven AI'
        ],
        typeSpeed: 55,
        backSpeed: 30,
        backDelay: 1800,
        loop: true,
        smartBackspace: true,
        onStringTyped: function() {
            // re-apply gradient clipping after typed.js updates span
        }
    });

    // ============ NAVBAR ============
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const navLinkItems = document.querySelectorAll('.nav-link');

    // Hamburger toggle
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close on link click
    navLinkItems.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Navbar scroll effect + active link
    window.addEventListener('scroll', () => {
        if (window.scrollY > 60) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        updateActiveNav();
        toggleScrollTopBtn();
    });

    function updateActiveNav() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 100;

        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');

            if (scrollPos >= top && scrollPos < top + height) {
                navLinkItems.forEach(link => link.classList.remove('active'));
                const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
                if (activeLink) activeLink.classList.add('active');
            }
        });
    }

    // ============ SKILLS TABS ============
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.getAttribute('data-tab');

            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            btn.classList.add('active');
            const targetContent = document.getElementById(target);
            if (targetContent) {
                targetContent.classList.add('active');
                // Re-trigger reveal for newly visible cards
                targetContent.querySelectorAll('.skill-card').forEach((card, i) => {
                    card.classList.remove('revealed');
                    setTimeout(() => card.classList.add('revealed'), i * 40);
                });
            }
        });
    });

    // ============ SCROLL TO TOP ============
    const scrollTopBtn = document.getElementById('scrollTopBtn');

    function toggleScrollTopBtn() {
        if (window.scrollY > 400) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    }

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // ============ SCROLL REVEAL ============
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px'
    });

    // Observe all animatable elements
    const animatables = document.querySelectorAll(
        '.skill-card, .pub-card, .blog-card, .project-card, .hobby-card, .contact-card'
    );

    animatables.forEach((el, i) => {
        el.classList.add('reveal-on-scroll');
        el.style.transitionDelay = `${(i % 4) * 0.08}s`;
        revealObserver.observe(el);
    });

    // ============ SMOOTH SCROLL for anchor links ============
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // ============ BLOG CARD CLICK ============
    document.querySelectorAll('.blog-card').forEach(card => {
        const link = card.querySelector('.blog-read-more');
        if (link) {
            card.addEventListener('click', (e) => {
                if (!e.target.closest('a')) {
                    window.open(link.href, '_blank');
                }
            });
        }
    });

    // Trigger initial scroll check
    updateActiveNav();
    toggleScrollTopBtn();

    // Initial reveal for elements already in viewport
    setTimeout(() => {
        animatables.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                el.classList.add('revealed');
            }
        });
    }, 300);

});
