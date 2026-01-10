/**
 * Main Application Entry Point
 * Initializes MVC architecture
 */

(function () {
    'use strict';

    // Initialize MVC
    const controller = new CVController(cvModel, cvView);

    // Initialize scroll animations after a short delay to ensure DOM is ready
    setTimeout(() => {
        controller.initScrollAnimations();
    }, 50);

    // Export to window for potential external use
    window.CVApp = {
        controller: controller,
        model: cvModel,
        view: cvView,
        scrollToSection: (sectionId) => controller.scrollToSection(sectionId),
    };
})();
