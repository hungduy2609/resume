/**
 * Profile Section - MVC Module
 */

class ProfileModel extends BaseModel {
    constructor() {
        super('profile');
    }

    getProfile() {
        return this.getData();
    }
}

class ProfileView extends BaseView {
    constructor() {
        super('profile-container');
    }

    render(profile) {
        const highlightsHtml = profile.highlights
            .map(
                (h) => `
            <div class="highlight-item">
                <div class="highlight-icon">${getIcon(h.icon)}</div>
                <div class="highlight-text">
                    <h3>${h.title}</h3>
                    <p>${h.description}</p>
                </div>
            </div>
        `
            )
            .join('');

        const html = `
            <section id="profile" class="section profile-section">
                <div class="container">
                    <h2 class="section-title">Profile</h2>
                    <div class="profile-content">
                        <p class="profile-text">
                            ${profile.description.replace('4+ years', '<strong>4+ years</strong>')}
                        </p>
                        <div class="highlights">
                            ${highlightsHtml}
                        </div>
                    </div>
                </div>
            </section>
        `;
        super.render(html);
    }
}

class ProfileController extends BaseController {
    constructor() {
        super(new ProfileModel(), new ProfileView());
    }

    init() {
        this.render();
    }

    render() {
        const data = this.model.getProfile();
        if (data) {
            this.view.render(data);
        }
    }
}
