/**
 * Main Application Controller
 * Manages all section controllers and global event handlers
 */

class AppController {
    constructor() {
        this.sections = {};
        this.init();
    }

    /**
     * Register a section controller
     */
    registerSection(name, controller) {
        this.sections[name] = controller;
    }

    /**
     * Initialize all sections
     */
    init() {
        // Wait for DOM and data to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.initSections();
                this.attachGlobalEventHandlers();
            });
        } else {
            this.initSections();
            this.attachGlobalEventHandlers();
        }
    }

    /**
     * Initialize all registered sections
     */
    initSections() {
        Object.values(this.sections).forEach(controller => {
            if (controller && typeof controller.init === 'function') {
                controller.init();
            }
        });
    }

    /**
     * Attach global event handlers (navigation, scroll, etc.)
     */
    attachGlobalEventHandlers() {
        this.handleNavbarScroll();
        this.handleMobileMenu();
        this.handleSmoothScroll();
        this.handleScrollToTop();
        this.handleActiveNavLink();
        this.handleScrollProgress();
        this.initScrollAnimations();
    }

    /**
     * Handle navbar scroll effect
     */
    handleNavbarScroll() {
        const navbar = document.getElementById('navbar');
        if (!navbar) return;

        const handleScroll = this.throttle(() => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }, 10);

        window.addEventListener('scroll', handleScroll);
        handleScroll();
    }

    /**
     * Handle mobile menu toggle
     */
    handleMobileMenu() {
        const menuToggle = document.getElementById('menuToggle');
        const navMenu = document.getElementById('navMenu');

        if (!menuToggle || !navMenu) return;

        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');

            const spans = menuToggle.querySelectorAll('span');
            if (navMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });

        document.addEventListener('click', (e) => {
            if (navMenu.classList.contains('active') &&
                !navMenu.contains(e.target) &&
                !menuToggle.contains(e.target)) {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('active');
                const spans = menuToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }

    /**
     * Handle smooth scroll for navigation links
     */
    handleSmoothScroll() {
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                if (href.startsWith('#')) {
                    e.preventDefault();
                    const targetId = href.substring(1);
                    const targetElement = document.getElementById(targetId);

                    if (targetElement) {
                        const offsetTop = targetElement.offsetTop - 70;
                        window.scrollTo({
                            top: offsetTop,
                            behavior: 'smooth'
                        });

                        const navMenu = document.getElementById('navMenu');
                        if (navMenu && navMenu.classList.contains('active')) {
                            navMenu.classList.remove('active');
                            const menuToggle = document.getElementById('menuToggle');
                            if (menuToggle) {
                                menuToggle.classList.remove('active');
                                const spans = menuToggle.querySelectorAll('span');
                                spans[0].style.transform = 'none';
                                spans[1].style.opacity = '1';
                                spans[2].style.transform = 'none';
                            }
                        }
                    }
                }
            });
        });
    }

    /**
     * Handle scroll to top button
     */
    handleScrollToTop() {
        const scrollTopBtn = document.getElementById('scrollTop');
        if (!scrollTopBtn) return;

        const handleScroll = this.throttle(() => {
            if (window.scrollY > 300) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        }, 10);

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    /**
     * Handle active navigation link highlighting
     */
    handleActiveNavLink() {
        const navLinks = document.querySelectorAll('.nav-link');
        if (!navLinks || navLinks.length === 0) return;

        const handleScroll = this.throttle(() => {
            const sections = document.querySelectorAll('.section, .hero');
            const scrollPosition = window.scrollY + 100;

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${sectionId}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }, 100);

        window.addEventListener('scroll', handleScroll);
    }

    /**
     * Handle scroll progress bar (mobile only)
     */
    handleScrollProgress() {
        const progressBar = document.getElementById('scrollProgressBar');
        const progressFill = document.getElementById('scrollProgressFill');

        if (!progressBar || !progressFill) return;

        const updateProgress = this.throttle(() => {
            const windowHeight = window.innerHeight;
            const documentHeight = Math.max(
                document.body.scrollHeight,
                document.body.offsetHeight,
                document.documentElement.clientHeight,
                document.documentElement.scrollHeight,
                document.documentElement.offsetHeight
            );
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

            // Calculate scroll percentage
            const scrollableHeight = documentHeight - windowHeight;
            let scrollPercentage = 0;

            if (scrollableHeight > 0) {
                scrollPercentage = (scrollTop / scrollableHeight) * 100;
            }

            // Ensure 100% when at the bottom (with small threshold for rounding)
            if (scrollTop + windowHeight >= documentHeight - 1) {
                scrollPercentage = 100;
            }

            // Update progress bar
            progressFill.style.width = `${Math.min(100, Math.max(0, scrollPercentage))}%`;
        }, 10);

        window.addEventListener('scroll', updateProgress);
        window.addEventListener('resize', updateProgress); // Update on resize
        updateProgress(); // Initial update
    }

    /**
     * Initialize scroll animations
     */
    initScrollAnimations() {
        const observerOptions = {
            threshold: 0,
            rootMargin: '0px 0px 150px 0px',
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        const animateElements = document.querySelectorAll(
            '.highlight-item, .timeline-item, .skill-category, .project-card, .education-card'
        );

        animateElements.forEach((el, index) => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = `opacity 0.3s ease ${index * 0.03}s, transform 0.3s ease ${index * 0.03}s`;
            observer.observe(el);
        });
    }

    /**
     * Handle skill tags hover effects
     */
    handleSkillTags() {
        document.addEventListener('mouseenter', (e) => {
            if (e.target.matches('.skill-tag')) {
                e.target.style.transform = 'translateY(-2px) scale(1.05)';
            }
        }, true);

        document.addEventListener('mouseleave', (e) => {
            if (e.target.matches('.skill-tag')) {
                e.target.style.transform = 'translateY(0) scale(1)';
            }
        }, true);
    }

    /**
     * Throttle function for performance
     */
    throttle(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    /**
     * Public method to scroll to a section
     */
    scrollToSection(sectionId) {
        const element = document.getElementById(sectionId);
        if (element) {
            const offsetTop = element.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    }
}
