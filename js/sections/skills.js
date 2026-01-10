/**
 * Skills Section - MVC Module
 */

class SkillsModel extends BaseModel {
    constructor() {
        super('skills');
    }

    getSkills() {
        return this.getData();
    }
}

class SkillsView extends BaseView {
    constructor() {
        super('skills-container');
    }

    render(skills) {
        const skillCategories = [
            { icon: 'programming', title: 'Programming', items: skills.programming },
            { icon: 'automation', title: 'Automation Tools', items: skills.automationTools },
            { icon: 'cicd', title: 'CI/CD & Version Control', items: skills.cicd },
            { icon: 'testing', title: 'Testing Frameworks & Management', items: skills.testingFrameworks },
            { icon: 'messaging', title: 'Messaging & Queueing Systems', items: skills.messaging },
            { icon: 'methodology', title: 'Testing Methodologies', items: skills.methodologies },
        ];

        const skillsHtml = skillCategories
            .map(
                (cat) => `
            <div class="skill-category">
                <h3 class="skill-category-title">
                    <span class="skill-icon">${getIcon(cat.icon)}</span>
                    ${cat.title}
                </h3>
                <div class="skill-tags">
                    ${cat.items.map((item) => `<span class="skill-tag">${item}</span>`).join('')}
                </div>
            </div>
        `
            )
            .join('');

        const html = `
            <section id="skills" class="section skills-section">
                <div class="container">
                    <h2 class="section-title">Skills</h2>
                    <div class="skills-grid">
                        ${skillsHtml}
                    </div>
                </div>
            </section>
        `;
        super.render(html);
    }
}

class SkillsController extends BaseController {
    constructor() {
        super(new SkillsModel(), new SkillsView());
    }

    init() {
        this.render();
    }

    render() {
        const data = this.model.getSkills();
        if (data) {
            this.view.render(data);
        }
    }
}
