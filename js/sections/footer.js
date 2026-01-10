/**
 * Footer Section - MVC Module
 */

class FooterModel extends BaseModel {
    constructor() {
        super('personalInfo');
    }

    getPersonalInfo() {
        return this.getData();
    }
}

class FooterView extends BaseView {
    constructor() {
        super('footer-container');
    }

    render(personalInfo) {
        const html = `
            <footer class="footer">
                <div class="container">
                    <p>&copy; ${new Date().getFullYear()} ${personalInfo.name}. All rights reserved.</p>
                    <p class="footer-note">Built with passion for quality and automation</p>
                </div>
            </footer>
            <button class="scroll-top" id="scrollTop" aria-label="Scroll to top">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="18 15 12 9 6 15"/>
                </svg>
            </button>
        `;
        super.render(html);
    }
}

class FooterController extends BaseController {
    constructor() {
        super(new FooterModel(), new FooterView());
    }

    init() {
        this.render();
    }

    render() {
        const data = this.model.getPersonalInfo();
        if (data) {
            this.view.render(data);
        }
    }
}
