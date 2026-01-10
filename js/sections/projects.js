/**
 * Projects Section - MVC Module
 */

class ProjectsModel extends BaseModel {
    constructor() {
        super('projects');
    }

    getProjects() {
        return this.getData();
    }
}

class ProjectsView extends BaseView {
    constructor() {
        super('projects-container');
    }

    render(projects) {
        const projectsHtml = projects
            .map(
                (project) => `
            <div class="project-card">
                <div class="project-header">
                    <h3 class="project-title">${project.name}</h3>
                    ${project.isCurrent ? '<span class="project-badge">Current</span>' : ''}
                </div>
                <div class="project-meta">
                    <span class="project-duration">${project.duration}</span>
                    <span class="project-team">Team: ${project.teamSize} members</span>
                </div>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">
                    <h4>Technologies:</h4>
                    <div class="tech-tags">
                        ${project.technologies.map((tech) => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                </div>
                <div class="project-role">
                    <strong>Position:</strong> ${project.position}
                </div>
                <details class="project-responsibilities">
                    <summary>Key Responsibilities</summary>
                    <ul>
                        ${project.responsibilities.map((resp) => `
                            <li>
                                <span class="list-icon">${getIcon('listItemCheck')}</span>
                                <span>${resp}</span>
                            </li>
                        `).join('')}
                    </ul>
                </details>
            </div>
        `
            )
            .join('');

        const html = `
            <section id="projects" class="section projects-section">
                <div class="container">
                    <h2 class="section-title">Project History</h2>
                    <div class="projects-grid">
                        ${projectsHtml}
                    </div>
                </div>
            </section>
        `;
        super.render(html);
    }
}

class ProjectsController extends BaseController {
    constructor() {
        super(new ProjectsModel(), new ProjectsView());
    }

    init() {
        this.render();
    }

    render() {
        const data = this.model.getProjects();
        if (data) {
            this.view.render(data);
        }
    }
}
