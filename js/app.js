/**
 * Main Application Entry Point
 * Initializes modular MVC architecture
 */

(function () {
    'use strict';

    // Initialize data first
    window.CVData = CVData;

    // Initialize all section controllers
    const navigationController = new NavigationController();
    const heroController = new HeroController();
    const profileController = new ProfileController();
    const experienceController = new ExperienceController();
    const skillsController = new SkillsController();
    const projectsController = new ProjectsController();
    const educationController = new EducationController();
    const contactController = new ContactController();
    const footerController = new FooterController();

    // Initialize main app controller
    const appController = new AppController();

    // Register all sections
    appController.registerSection('navigation', navigationController);
    appController.registerSection('hero', heroController);
    appController.registerSection('profile', profileController);
    appController.registerSection('experience', experienceController);
    appController.registerSection('skills', skillsController);
    appController.registerSection('projects', projectsController);
    appController.registerSection('education', educationController);
    appController.registerSection('contact', contactController);
    appController.registerSection('footer', footerController);

    // Initialize skill tags hover effects
    setTimeout(() => {
        appController.handleSkillTags();
    }, 100);

    // Export to window for potential external use
    window.CVApp = {
        controller: appController,
        sections: {
            navigation: navigationController,
            hero: heroController,
            profile: profileController,
            experience: experienceController,
            skills: skillsController,
            projects: projectsController,
            education: educationController,
            contact: contactController,
            footer: footerController,
        },
        scrollToSection: (sectionId) => appController.scrollToSection(sectionId),
    };
})();
