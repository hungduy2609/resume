/**
 * Education Section - MVC Module
 */

class EducationModel extends BaseModel {
    constructor() {
        super('education');
    }

    getEducation() {
        return this.getData();
    }
}

class EducationView extends BaseView {
    constructor() {
        super('education-container');
    }

    render(education) {
        const educationHtml = education
            .map(
                (edu) => `
            <div class="education-card ${edu.isHighlight ? 'highlight-card' : ''}">
                <div class="education-icon">${getIcon(edu.icon)}</div>
                <h3 class="education-title">${edu.title}</h3>
                <p class="education-institution">${edu.institution}</p>
                <p class="education-period">${edu.period}</p>
            </div>
        `
            )
            .join('');

        const html = `
            <section id="education" class="section education-section">
                <div class="container">
                    <h2 class="section-title">Education & Certifications</h2>
                    <div class="education-grid">
                        ${educationHtml}
                    </div>
                </div>
            </section>
        `;
        super.render(html);
    }
}

class EducationController extends BaseController {
    constructor() {
        super(new EducationModel(), new EducationView());
    }

    init() {
        this.render();
    }

    render() {
        const data = this.model.getEducation();
        if (data) {
            this.view.render(data);
        }
    }
}
