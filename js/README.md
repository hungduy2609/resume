# Modular MVC Architecture

This directory contains a modular MVC (Model-View-Controller) implementation for the CV Landing Page, where each section has its own Model, View, and Controller.

## File Structure

```
js/
├── shared/
│   └── data.js              # Centralized CV data (shared across all sections)
├── core/
│   ├── base.js             # Base classes (BaseModel, BaseView, BaseController)
│   └── app-controller.js   # Main application controller (global event handlers)
├── sections/
│   ├── navigation.js       # Navigation section (Model, View, Controller)
│   ├── hero.js             # Hero section (Model, View, Controller)
│   ├── profile.js          # Profile section (Model, View, Controller)
│   ├── experience.js       # Work Experience section (Model, View, Controller)
│   ├── skills.js           # Skills section (Model, View, Controller)
│   ├── projects.js         # Projects section (Model, View, Controller)
│   ├── education.js        # Education section (Model, View, Controller)
│   ├── contact.js          # Contact section (Model, View, Controller)
│   └── footer.js           # Footer section (Model, View, Controller)
└── app.js                  # Application entry point (initializes all sections)
```

## Architecture Overview

### Shared Data (`shared/data.js`)

-   **Purpose**: Centralized data storage for all CV information
-   **Access**: All sections access data via `window.CVData`
-   **Structure**: Contains `personalInfo`, `profile`, `workExperience`, `skills`, `projects`, `education`

### Base Classes (`core/base.js`)

-   **BaseModel**: Base class for all section models

    -   Provides `getData()` method to access shared data
    -   Supports `updateData()` for dynamic updates

-   **BaseView**: Base class for all section views

    -   Provides `render()` and `clear()` methods
    -   Manages container references

-   **BaseController**: Base class for all section controllers
    -   Provides `init()` and `render()` methods
    -   Coordinates between Model and View

### Section Modules (`sections/*.js`)

Each section follows the MVC pattern:

-   **Model**: Extends `BaseModel`, accesses specific data from `CVData`
-   **View**: Extends `BaseView`, renders HTML for the section
-   **Controller**: Extends `BaseController`, initializes and coordinates Model/View

Example structure:

```javascript
class HeroModel extends BaseModel {
    constructor() {
        super('personalInfo'); // Access personalInfo from CVData
    }
}

class HeroView extends BaseView {
    constructor() {
        super('hero-container'); // Render to hero-container
    }

    render(personalInfo) {
        // Generate HTML
    }
}

class HeroController extends BaseController {
    constructor() {
        super(new HeroModel(), new HeroView());
    }

    init() {
        this.render();
    }

    render() {
        const data = this.model.getPersonalInfo();
        this.view.render(data);
    }
}
```

### App Controller (`core/app-controller.js`)

-   **Purpose**: Manages global application state and event handlers
-   **Responsibilities**:
    -   Registers and initializes all section controllers
    -   Handles global events (navbar scroll, mobile menu, smooth scroll, scroll to top)
    -   Manages scroll animations
    -   Provides public API for external use

### App Entry Point (`app.js`)

-   **Purpose**: Initializes the entire application
-   **Responsibilities**:
    -   Loads shared data into `window.CVData`
    -   Creates instances of all section controllers
    -   Registers sections with AppController
    -   Exports public API via `window.CVApp`

## Usage

The application automatically initializes when the page loads. Each section is independent and can be modified without affecting others.

### Accessing the Application

```javascript
// Access via window.CVApp
window.CVApp.scrollToSection('contact');
window.CVApp.controller.handleSkillTags();
window.CVApp.sections.hero.render();
```

## Updating Data

To update CV information, edit `js/shared/data.js`:

```javascript
// Example: Update personal info
CVData.personalInfo.email = 'newemail@example.com';
```

## Adding a New Section

1. **Create section file** (`js/sections/newsection.js`):

    ```javascript
    class NewSectionModel extends BaseModel {
        constructor() {
            super('dataKey'); // Key in CVData
        }
    }

    class NewSectionView extends BaseView {
        constructor() {
            super('newsection-container');
        }

        render(data) {
            // Generate HTML
        }
    }

    class NewSectionController extends BaseController {
        constructor() {
            super(new NewSectionModel(), new NewSectionView());
        }

        init() {
            this.render();
        }
    }
    ```

2. **Add data** to `js/shared/data.js` if needed

3. **Add container** to `index.html`:

    ```html
    <div id="newsection-container"></div>
    ```

4. **Register in** `js/app.js`:

    ```javascript
    const newsectionController = new NewSectionController();
    appController.registerSection('newsection', newsectionController);
    ```

5. **Add script tag** to `index.html`:
    ```html
    <script src="js/sections/newsection.js"></script>
    ```

## Benefits

-   ✅ **Modularity**: Each section is independent and self-contained
-   ✅ **Maintainability**: Easy to find and modify specific sections
-   ✅ **Scalability**: Simple to add new sections without affecting existing ones
-   ✅ **Separation of Concerns**: Clear MVC pattern per section
-   ✅ **Reusability**: Base classes provide common functionality
-   ✅ **Testability**: Each section can be tested independently
-   ✅ **Organization**: Clear file structure and naming conventions

## Section Independence

Each section module is completely independent:

-   Can be modified without affecting other sections
-   Has its own Model, View, and Controller
-   Shares data through centralized `CVData`
-   Can be easily removed or disabled

## Migration from Monolithic MVC

The previous monolithic MVC structure (`model.js`, `view.js`, `controller.js`) has been replaced with this modular approach. Benefits:

-   Easier to maintain (smaller, focused files)
-   Better organization (one file per section)
-   Clearer dependencies (each section is self-contained)
-   Faster development (less scrolling, easier navigation)
