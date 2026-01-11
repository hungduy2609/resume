/**
 * Navigation Section - MVC Module
 */

class NavigationModel extends BaseModel {
    constructor() {
        super('navigation');
    }

    getMenuItems() {
        return [
            { href: '#home', label: 'Home' },
            { href: '#profile', label: 'Profile' },
            { href: '#experience', label: 'Experience' },
            { href: '#skills', label: 'Skills' },
            { href: '#projects', label: 'Projects' },
            { href: '#education', label: 'Education' },
            { href: '#contact', label: 'Contact' },
        ];
    }
}

class NavigationView extends BaseView {
    constructor() {
        super('navigation-container');
    }

    render(menuItems) {
        const menuItemsHtml = menuItems.map(item =>
            `<li><a href="${item.href}" class="nav-link">${item.label}</a></li>`
        ).join('');

        const html = `
            <nav class="navbar" id="navbar">
                <div class="container">
                    <div class="nav-content">
                        <div class="logo">
                            <img src="resource/logo.png" alt="Logo" class="logo-image" />
                        </div>
                        <ul class="nav-menu" id="navMenu">
                            ${menuItemsHtml}
                        </ul>
                        <div class="nav-actions">
                            <button class="snow-toggle" id="snowToggle" aria-label="Toggle snow effect" title="Bật/Tắt hiệu ứng tuyết">
                                <img src="resource/snow-icon.svg" alt="Snow" class="snow-icon" />
                            </button>
                        <button class="menu-toggle" id="menuToggle" aria-label="Toggle menu">
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                        </div>
                    </div>
                </div>
                <div class="scroll-progress-bar" id="scrollProgressBar">
                    <div class="scroll-progress-fill" id="scrollProgressFill"></div>
                </div>
            </nav>
        `;
        super.render(html);
    }
}

class NavigationController extends BaseController {
    constructor() {
        super(new NavigationModel(), new NavigationView());
    }

    init() {
        this.render();
        this.setupEventListeners();
    }

    render() {
        const menuItems = this.model.getMenuItems();
        this.view.render(menuItems);
    }

    setupEventListeners() {
        // Use event delegation on document to catch clicks
        document.addEventListener('click', (e) => {
            if (e.target.closest('#menuToggle')) {
                e.preventDefault();
                e.stopPropagation();
                const navMenu = document.getElementById('navMenu');
                if (navMenu) {
                    navMenu.classList.toggle('active');
                    console.log('Menu toggled, active:', navMenu.classList.contains('active'));
                }
            }
        });

        // Also set up direct listener as backup
        const setupMenu = () => {
            const menuToggle = document.getElementById('menuToggle');
            const navMenu = document.getElementById('navMenu');

            if (menuToggle && navMenu) {
                menuToggle.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    navMenu.classList.toggle('active');
                    console.log('Direct listener: Menu toggled, active:', navMenu.classList.contains('active'));
                });
                console.log('Menu toggle listener attached');
            } else {
                setTimeout(setupMenu, 100);
            }
        };

        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', setupMenu);
        } else {
            setTimeout(setupMenu, 100);
        }

        setTimeout(() => {
            // Snow effect toggle - wait for snowController to be available
            const snowToggle = document.getElementById('snowToggle');
            if (snowToggle) {
                // Try to setup snow toggle, retry if snowController not ready
                const setupSnowToggle = () => {
                    if (window.snowController) {
                        // Update button state based on current snow state
                        this.updateSnowToggleState(snowToggle);

                        snowToggle.addEventListener('click', () => {
                            const isActive = window.snowController.toggle();
                            this.updateSnowToggleState(snowToggle, isActive);
                        });
                    } else {
                        // Retry after a short delay
                        setTimeout(setupSnowToggle, 50);
                    }
                };
                setupSnowToggle();
            }

            // Close mobile menu when clicking on a link
            const navMenu = document.getElementById('navMenu');
            if (navMenu) {
                const navLinks = navMenu.querySelectorAll('.nav-link');
                navLinks.forEach(link => {
                    link.addEventListener('click', () => {
                        navMenu.classList.remove('active');
                    });
                });
            }
        }, 100);
    }

    updateSnowToggleState(button, isActive = null) {
        if (isActive === null) {
            isActive = window.snowController?.isActive ?? false;
        }
        button.classList.toggle('active', isActive);
    }
}
