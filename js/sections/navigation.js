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
                        <div class="logo">LH Duy</div>
                        <ul class="nav-menu" id="navMenu">
                            ${menuItemsHtml}
                        </ul>
                        <button class="menu-toggle" id="menuToggle" aria-label="Toggle menu">
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
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
    }

    render() {
        const menuItems = this.model.getMenuItems();
        this.view.render(menuItems);
    }
}
