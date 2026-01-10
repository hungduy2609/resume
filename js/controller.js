/**
 * Controller - Business Logic & Event Handling
 * Coordinates between Model and View
 */

class CVController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.init();
    }

    /**
     * Initialize the application
     */
    init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.render();
                this.attachEventListeners();
            });
        } else {
            this.render();
            this.attachEventListeners();
        }
    }

    /**
     * Render all views
     */
    render() {
        this.view.renderAll(this.model);
    }

    /**
     * Attach all event listeners
     */
    attachEventListeners() {
        this.handleNavbarScroll();
        this.handleMobileMenu();
        this.handleSmoothScroll();
        this.handleScrollToTop();
        this.handleActiveNavLink();
        this.handleProjectDetails();
        this.handleSkillTags();
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
        handleScroll(); // Initial check
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

            // Animate hamburger icon
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

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (navMenu.classList.contains('active') && !navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
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
        navLinks.forEach((link) => {
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
                            behavior: 'smooth',
                        });

                        // Close mobile menu if open
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
        handleScroll(); // Initial check

        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
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

            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    navLinks.forEach((link) => {
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
     * Handle project details expand/collapse
     */
    handleProjectDetails() {
        // This will be called after render, so we need to use event delegation
        document.addEventListener('click', (e) => {
            if (e.target.matches('.project-responsibilities summary')) {
                // Optional: Close other open details
                // const allDetails = document.querySelectorAll('.project-responsibilities');
                // allDetails.forEach(details => {
                //     if (details !== e.target.closest('details') && details.hasAttribute('open')) {
                //         details.removeAttribute('open');
                //     }
                // });
            }
        });
    }

    /**
     * Handle skill tags hover effects
     */
    handleSkillTags() {
        // Use event delegation for dynamically rendered elements
        document.addEventListener(
            'mouseenter',
            (e) => {
                if (e.target.matches('.skill-tag')) {
                    e.target.style.transform = 'translateY(-2px) scale(1.05)';
                }
            },
            true
        );

        document.addEventListener(
            'mouseleave',
            (e) => {
                if (e.target.matches('.skill-tag')) {
                    e.target.style.transform = 'translateY(0) scale(1)';
                }
            },
            true
        );
    }

    /**
     * Initialize scroll animations
     */
    initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px',
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe elements for animation
        const animateElements = document.querySelectorAll('.highlight-item, .timeline-item, .skill-category, .project-card, .education-card');

        animateElements.forEach((el, index) => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = `opacity 0.3s ease ${index * 0.05}s, transform 0.3s ease ${index * 0.05}s`;
            observer.observe(el);
        });
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
                behavior: 'smooth',
            });
        }
    }
}
