# MVC Architecture

This directory contains the MVC (Model-View-Controller) implementation for the CV Landing Page.

## File Structure

```
js/
├── model.js      # Data management (CV information)
├── view.js       # UI rendering and DOM manipulation
├── controller.js  # Business logic and event handling
└── app.js        # Application entry point
```

## Architecture Overview

### Model (`model.js`)

-   **Purpose**: Manages all CV data and state
-   **Responsibilities**:
    -   Stores personal information, work experience, skills, projects, education
    -   Provides getter methods to access data
    -   Can be extended with update methods for dynamic data changes

### View (`view.js`)

-   **Purpose**: Handles all UI rendering and DOM manipulation
-   **Responsibilities**:
    -   Renders all sections (Navigation, Hero, Profile, Experience, Skills, Projects, Education, Contact, Footer)
    -   Generates HTML from data
    -   Updates DOM elements

### Controller (`controller.js`)

-   **Purpose**: Coordinates between Model and View, handles business logic
-   **Responsibilities**:
    -   Initializes the application
    -   Attaches event listeners
    -   Handles user interactions (scroll, menu, navigation)
    -   Manages animations
    -   Coordinates data flow between Model and View

### App (`app.js`)

-   **Purpose**: Application entry point
-   **Responsibilities**:
    -   Initializes MVC components
    -   Sets up the application
    -   Exports public API

## Usage

The application automatically initializes when the page loads. The MVC pattern ensures:

-   **Separation of Concerns**: Data, presentation, and logic are separated
-   **Maintainability**: Easy to update data or UI independently
-   **Testability**: Each component can be tested separately
-   **Scalability**: Easy to add new features

## Updating Data

To update CV information, edit `js/model.js`:

```javascript
// Example: Update personal info
cvModel.updatePersonalInfo({
    email: 'newemail@example.com',
});
```

## Adding New Features

1. **New Data**: Add to `model.js` in the `data` object
2. **New UI**: Add render method in `view.js`
3. **New Logic**: Add handler method in `controller.js`
4. **Wire Up**: Call new methods in `controller.init()` or `view.renderAll()`

## Benefits

-   ✅ Clean separation of concerns
-   ✅ Easy to maintain and extend
-   ✅ Testable components
-   ✅ Reusable code structure
-   ✅ Better organization
