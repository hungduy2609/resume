/**
 * View - UI Rendering
 * Handles all DOM manipulation and rendering
 */

class CVView {
    constructor() {
        this.containers = {
            navigation: document.getElementById('navigation-container'),
            hero: document.getElementById('hero-container'),
            profile: document.getElementById('profile-container'),
            experience: document.getElementById('experience-container'),
            skills: document.getElementById('skills-container'),
            projects: document.getElementById('projects-container'),
            education: document.getElementById('education-container'),
            contact: document.getElementById('contact-container'),
            footer: document.getElementById('footer-container')
        };
    }

    /**
     * Render Navigation
     */
    renderNavigation() {
        const html = `
            <nav class="navbar" id="navbar">
                <div class="container">
                    <div class="nav-content">
                        <div class="logo">LH Duy</div>
                        <ul class="nav-menu" id="navMenu">
                            <li><a href="#home" class="nav-link">Home</a></li>
                            <li><a href="#profile" class="nav-link">Profile</a></li>
                            <li><a href="#experience" class="nav-link">Experience</a></li>
                            <li><a href="#skills" class="nav-link">Skills</a></li>
                            <li><a href="#projects" class="nav-link">Projects</a></li>
                            <li><a href="#education" class="nav-link">Education</a></li>
                            <li><a href="#contact" class="nav-link">Contact</a></li>
                        </ul>
                        <button class="menu-toggle" id="menuToggle" aria-label="Toggle menu">
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </nav>
        `;
        this.containers.navigation.innerHTML = html;
    }

    /**
     * Render Hero Section
     */
    renderHero(personalInfo) {
        const html = `
            <section id="home" class="hero">
                <div class="container">
                    <div class="hero-content">
                        <div class="hero-text">
                            <h1 class="hero-title">
                                <span class="greeting">Hello, I'm</span>
                                <span class="name">${personalInfo.name}</span>
                            </h1>
                            <p class="hero-subtitle">${personalInfo.title}</p>
                            <p class="hero-description">
                                Passionate automation tester with 3+ years of experience in manual and automated testing.
                                Skilled in designing robust automation frameworks, optimizing test strategies, and ensuring
                                high-quality software solutions.
                            </p>
                            <div class="hero-buttons">
                                <a href="#contact" class="btn btn-primary">Get In Touch</a>
                                <a href="#projects" class="btn btn-secondary">View Projects</a>
                            </div>
                            <div class="hero-social">
                                <a href="mailto:${personalInfo.email}" class="social-link" aria-label="Email">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                                        <polyline points="22,6 12,13 2,6"/>
                                    </svg>
                                </a>
                                <a href="${personalInfo.linkedinUrl}" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="LinkedIn">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                    </svg>
                                </a>
                                <a href="tel:${personalInfo.phone}" class="social-link" aria-label="Phone">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div class="hero-image">
                            <div class="profile-card">
                                <div class="card-glow"></div>
                                <div class="avatar-container">
                                    <img src="${personalInfo.avatar}" alt="${personalInfo.name}" class="avatar-image" />
                                </div>
                                <div class="card-content">
                                    <div class="badge">Test Engineer of the Year 2024</div>
                                    <div class="experience-badge">3+ Years Experience</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
        this.containers.hero.innerHTML = html;
    }

    /**
     * Render Profile Section
     */
    renderProfile(profile) {
        const highlightsHtml = profile.highlights.map(h => `
            <div class="highlight-item">
                <div class="highlight-icon">${h.icon}</div>
                <div class="highlight-text">
                    <h3>${h.title}</h3>
                    <p>${h.description}</p>
                </div>
            </div>
        `).join('');

        const html = `
            <section id="profile" class="section profile-section">
                <div class="container">
                    <h2 class="section-title">Profile</h2>
                    <div class="profile-content">
                        <p class="profile-text">
                            ${profile.description.replace('3+ years', '<strong>3+ years</strong>')}
                        </p>
                        <div class="highlights">
                            ${highlightsHtml}
                        </div>
                    </div>
                </div>
            </section>
        `;
        this.containers.profile.innerHTML = html;
    }

    /**
     * Render Work Experience Section
     */
    renderExperience(experiences) {
        const timelineHtml = experiences.map(exp => `
            <div class="timeline-item">
                <div class="timeline-marker"></div>
                <div class="timeline-content">
                    <div class="timeline-header">
                        <h3 class="timeline-title">${exp.title}</h3>
                        <span class="timeline-company">${exp.company}</span>
                        <span class="timeline-date">${exp.period}</span>
                    </div>
                    <ul class="timeline-description">
                        ${exp.responsibilities.map(resp => `<li>${resp}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `).join('');

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
        this.containers.experience.innerHTML = html;
    }

    /**
     * Render Skills Section
     */
    renderSkills(skills) {
        const skillCategories = [
            { icon: '💻', title: 'Programming', items: skills.programming },
            { icon: '🤖', title: 'Automation Tools', items: skills.automationTools },
            { icon: '🔄', title: 'CI/CD & Version Control', items: skills.cicd },
            { icon: '🧪', title: 'Testing Frameworks & Management', items: skills.testingFrameworks },
            { icon: '📨', title: 'Messaging & Queueing Systems', items: skills.messaging },
            { icon: '📋', title: 'Testing Methodologies', items: skills.methodologies }
        ];

        const skillsHtml = skillCategories.map(cat => `
            <div class="skill-category">
                <h3 class="skill-category-title">
                    <span class="skill-icon">${cat.icon}</span>
                    ${cat.title}
                </h3>
                <div class="skill-tags">
                    ${cat.items.map(item => `<span class="skill-tag">${item}</span>`).join('')}
                </div>
            </div>
        `).join('');

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
        this.containers.skills.innerHTML = html;
    }

    /**
     * Render Projects Section
     */
    renderProjects(projects) {
        const projectsHtml = projects.map(project => `
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
                        ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                </div>
                <div class="project-role">
                    <strong>Position:</strong> ${project.position}
                </div>
                <details class="project-responsibilities">
                    <summary>Key Responsibilities</summary>
                    <ul>
                        ${project.responsibilities.map(resp => `<li>${resp}</li>`).join('')}
                    </ul>
                </details>
            </div>
        `).join('');

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
        this.containers.projects.innerHTML = html;
    }

    /**
     * Render Education Section
     */
    renderEducation(education) {
        const educationHtml = education.map(edu => `
            <div class="education-card ${edu.isHighlight ? 'highlight-card' : ''}">
                <div class="education-icon">${edu.icon}</div>
                <h3 class="education-title">${edu.title}</h3>
                <p class="education-institution">${edu.institution}</p>
                <p class="education-period">${edu.period}</p>
            </div>
        `).join('');

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
        this.containers.education.innerHTML = html;
    }

    /**
     * Render Contact Section
     */
    renderContact(personalInfo) {
        const html = `
            <section id="contact" class="section contact-section">
                <div class="container">
                    <h2 class="section-title">Get In Touch</h2>
                    <div class="contact-content">
                        <p class="contact-description">
                            I'm always open to discussing new opportunities, interesting projects, or just having a chat about
                            automation testing and software quality.
                        </p>
                        <div class="contact-info">
                            <a href="mailto:${personalInfo.email}" class="contact-item">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                                    <polyline points="22,6 12,13 2,6"/>
                                </svg>
                                <span class="contact-text">${personalInfo.email}</span>
                            </a>
                            <a href="tel:${personalInfo.phone}" class="contact-item">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                                </svg>
                                <span class="contact-text">${personalInfo.phone}</span>
                            </a>
                            <a href="${personalInfo.linkedinUrl}" target="_blank" rel="noopener noreferrer" class="contact-item">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                </svg>
                                <span class="contact-text">${personalInfo.linkedin}</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        `;
        this.containers.contact.innerHTML = html;
    }

    /**
     * Render Footer
     */
    renderFooter(personalInfo) {
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
        this.containers.footer.innerHTML = html;
    }

    /**
     * Render all sections
     */
    renderAll(model) {
        const personalInfo = model.getPersonalInfo();
        const profile = model.getProfile();
        const experience = model.getWorkExperience();
        const skills = model.getSkills();
        const projects = model.getProjects();
        const education = model.getEducation();

        this.renderNavigation();
        this.renderHero(personalInfo);
        this.renderProfile(profile);
        this.renderExperience(experience);
        this.renderSkills(skills);
        this.renderProjects(projects);
        this.renderEducation(education);
        this.renderContact(personalInfo);
        this.renderFooter(personalInfo);
    }
}

// Export singleton instance
const cvView = new CVView();
