/**
 * Base Classes for MVC Architecture
 * Provides base functionality for all sections
 */

/**
 * Base Model Class
 */
class BaseModel {
    constructor(dataKey) {
        this.dataKey = dataKey;
        this.data = null;
    }

    getData() {
        if (!this.data && window.CVData) {
            this.data = window.CVData[this.dataKey];
        }
        return this.data;
    }

    updateData(newData) {
        this.data = { ...this.data, ...newData };
        if (window.CVData) {
            window.CVData[this.dataKey] = this.data;
        }
    }
}

/**
 * Base View Class
 */
class BaseView {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
    }

    render(html) {
        if (this.container) {
            this.container.innerHTML = html;
        }
    }

    clear() {
        if (this.container) {
            this.container.innerHTML = '';
        }
    }
}

/**
 * Base Controller Class
 */
class BaseController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    init() {
        // Override in child classes
    }

    render() {
        // Override in child classes
    }
}
