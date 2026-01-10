/**
 * Experience Section - MVC Module
 */

class ExperienceModel extends BaseModel {
    constructor() {
        super('workExperience');
    }

    getWorkExperience() {
        return this.getData();
    }
}

class ExperienceView extends BaseView {
    constructor() {
        super('experience-container');
    }

    render(experiences) {
        const timelineHtml = experiences
            .map(
                (exp) => `
            <div class="timeline-item">
                <div class="timeline-marker">${getIcon('timelineMarker')}</div>
                <div class="timeline-content">
                    <div class="timeline-header">
                        <h3 class="timeline-title">${exp.title}</h3>
                        <span class="timeline-company">${exp.company}</span>
                        <span class="timeline-date">${exp.period}</span>
                    </div>
                    <ul class="timeline-description">
                        ${exp.responsibilities.map((resp) => `
                            <li>
                                <span class="list-icon">${getIcon('listItem')}</span>
                                <span>${resp}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            </div>
        `
            )
            .join('');

        const html = `
            <section id="experience" class="section experience-section">
                <div class="container">
                    <h2 class="section-title">Work Experience</h2>
                    <div class="timeline">
                        ${timelineHtml}
                    </div>
                </div>
            </section>
        `;
        super.render(html);
    }
}

class ExperienceController extends BaseController {
    constructor() {
        super(new ExperienceModel(), new ExperienceView());
    }

    init() {
        this.render();
    }

    render() {
        const data = this.model.getWorkExperience();
        if (data) {
            this.view.render(data);
        }
    }
}
