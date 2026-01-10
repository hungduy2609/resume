/**
 * CV Landing Page - JavaScript
 * Handles navigation, scroll effects, and interactive features
 */

(function() {
    'use strict';

    // ============================================
    // Section Configuration
    // ============================================
    const sectionsConfig = [
        { containerId: 'navigation-container', file: 'sections/navigation.html' },
        { containerId: 'hero-container', file: 'sections/hero.html' },
        { containerId: 'profile-container', file: 'sections/profile.html' },
        { containerId: 'experience-container', file: 'sections/experience.html' },
        { containerId: 'skills-container', file: 'sections/skills.html' },
        { containerId: 'projects-container', file: 'sections/projects.html' },
        { containerId: 'education-container', file: 'sections/education.html' },
        { containerId: 'contact-container', file: 'sections/contact.html' },
        { containerId: 'footer-container', file: 'sections/footer.html' }
    ];

    // ============================================
    // Load Section from File
    // ============================================
    async function loadSection(containerId, filePath) {
        try {
            const container = document.getElementById(containerId);
            if (!container) {
                console.warn(`Container ${containerId} not found`);
                return;
            }

            const response = await fetch(filePath);
            if (!response.ok) {
                throw new Error(`Failed to load ${filePath}: ${response.statusText}`);
            }

            const html = await response.text();
            container.innerHTML = html;
        } catch (error) {
            console.error(`Error loading section ${filePath}:`, error);
            const container = document.getElementById(containerId);
            if (container) {
                container.innerHTML = `<div style="padding: 2rem; text-align: center; color: #ef4444;">
                    <p>Error loading section. Please check if ${filePath} exists.</p>
                </div>`;
            }
        }
    }

    // ============================================
    // Load All Sections
    // ============================================
    async function loadAllSections() {
        const loadPromises = sectionsConfig.map(config =>
            loadSection(config.containerId, config.file)
        );

        await Promise.all(loadPromises);

        // After all sections are loaded, initialize DOM-dependent features
        initializeAfterLoad();
    }

    // ============================================
    // DOM Elements (will be initialized after sections load)
    // ============================================
    let navbar, menuToggle, navMenu, navLinks, scrollTopBtn;

    function getDOMElements() {
        navbar = document.getElementById('navbar');
        menuToggle = document.getElementById('menuToggle');
        navMenu = document.getElementById('navMenu');
        navLinks = document.querySelectorAll('.nav-link');
        scrollTopBtn = document.getElementById('scrollTop');
    }

    // ============================================
    // Navigation Scroll Effect
    // ============================================
    function handleNavbarScroll() {
        if (!navbar) return;
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    // ============================================
    // Mobile Menu Toggle
    // ============================================
    function toggleMobileMenu() {
        if (!navMenu || !menuToggle) return;
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
    }

    // ============================================
    // Smooth Scroll for Navigation Links
    // ============================================
    function handleSmoothScroll(e) {
        const href = e.currentTarget.getAttribute('href');

        // Only handle anchor links
        if (href.startsWith('#')) {
            e.preventDefault();
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 70; // Account for fixed navbar

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                if (navMenu.classList.contains('active')) {
                    toggleMobileMenu();
                }
            }
        }
    }

    // ============================================
    // Scroll to Top Button
    // ============================================
    function handleScrollTop() {
        if (!scrollTopBtn) return;
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    }

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // ============================================
    // Intersection Observer for Animations
    // ============================================
    function initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe elements for animation
        const animateElements = document.querySelectorAll(
            '.highlight-item, .timeline-item, .skill-category, .project-card, .education-card'
        );

        animateElements.forEach((el, index) => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
            observer.observe(el);
        });
    }

    // ============================================
    // Active Navigation Link Highlighting
    // ============================================
    function updateActiveNavLink() {
        if (!navLinks || navLinks.length === 0) return;
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
    }

    // ============================================
    // Project Cards Expand/Collapse Enhancement
    // ============================================
    function initProjectDetails() {
        const projectDetails = document.querySelectorAll('.project-responsibilities');

        projectDetails.forEach(details => {
            const summary = details.querySelector('summary');

            summary.addEventListener('click', (e) => {
                // Close other open details (optional - remove if you want multiple open)
                // projectDetails.forEach(other => {
                //     if (other !== details && other.hasAttribute('open')) {
                //         other.removeAttribute('open');
                //     }
                // });
            });
        });
    }

    // ============================================
    // Skill Tags Hover Effect
    // ============================================
    function initSkillTags() {
        const skillTags = document.querySelectorAll('.skill-tag');

        skillTags.forEach(tag => {
            tag.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-2px) scale(1.05)';
            });

            tag.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });
    }

    // ============================================
    // Performance Optimization: Throttle Function
    // ============================================
    function throttle(func, wait) {
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

    // ============================================
    // Event Listeners
    // ============================================
    function initEventListeners() {
        // Navbar scroll effect
        window.addEventListener('scroll', throttle(handleNavbarScroll, 10));

        // Mobile menu toggle
        if (menuToggle) {
            menuToggle.addEventListener('click', toggleMobileMenu);
        }

        // Smooth scroll for nav links
        navLinks.forEach(link => {
            link.addEventListener('click', handleSmoothScroll);
        });

        // Scroll to top button
        window.addEventListener('scroll', throttle(handleScrollTop, 10));
        if (scrollTopBtn) {
            scrollTopBtn.addEventListener('click', scrollToTop);
        }

        // Active nav link highlighting
        window.addEventListener('scroll', throttle(updateActiveNavLink, 100));

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (navMenu && navMenu.classList.contains('active') &&
                !navMenu.contains(e.target) &&
                menuToggle && !menuToggle.contains(e.target)) {
                toggleMobileMenu();
            }
        });
    }

    // ============================================
    // Initialize After Sections Load
    // ============================================
    function initializeAfterLoad() {
        // Get DOM elements after sections are loaded
        getDOMElements();

        // Initialize all features
        initEventListeners();
        initScrollAnimations();
        initProjectDetails();
        initSkillTags();

        // Initial checks
        if (navbar) handleNavbarScroll();
        if (scrollTopBtn) handleScrollTop();
    }

    // ============================================
    // Initialize on DOM Load
    // ============================================
    function init() {
        // Wait for DOM to be fully loaded, then load all sections
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                loadAllSections();
            });
        } else {
            // DOM already loaded
            loadAllSections();
        }
    }

    // Start initialization
    init();

    // ============================================
    // Export functions for potential external use
    // ============================================
    window.CVPage = {
        scrollToSection: (sectionId) => {
            const element = document.getElementById(sectionId);
            if (element) {
                const offsetTop = element.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    };

})();

