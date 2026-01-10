# CV Landing Page - Le Hung Duy

A modern, responsive CV landing page built with HTML, CSS, and JavaScript.

## Features

-   **Responsive Design**: Fully responsive layout that works on all devices
-   **Modern UI/UX**: Clean, professional design with smooth animations
-   **Smooth Scrolling**: Enhanced navigation with smooth scroll effects
-   **Interactive Elements**: Hover effects, animations, and interactive components
-   **SEO Optimized**: Semantic HTML structure for better SEO
-   **Performance**: Optimized code with throttled scroll events
-   **Accessibility**: ARIA labels and keyboard navigation support

## File Structure

```
CV/
├── index.html          # Main HTML structure
├── styles.css          # All styling and responsive design
├── js/                 # MVC Architecture
│   ├── model.js        # Data management (CV information)
│   ├── view.js         # UI rendering and DOM manipulation
│   ├── controller.js   # Business logic and event handling
│   ├── app.js          # Application entry point
│   └── README.md       # MVC documentation
├── sections/           # Individual section files (legacy, now using MVC)
│   ├── navigation.html
│   ├── hero.html
│   ├── profile.html
│   ├── experience.html
│   ├── skills.html
│   ├── projects.html
│   ├── education.html
│   ├── contact.html
│   └── footer.html
└── README.md          # This file
```

## Sections

1. **Hero Section**: Introduction with call-to-action buttons
2. **Profile**: Professional summary and highlights
3. **Work Experience**: Timeline of work history
4. **Skills**: Categorized skills with visual tags
5. **Projects**: Detailed project history with expandable details
6. **Education**: Education and certifications
7. **Contact**: Contact information and social links

## Technologies Used

-   HTML5 (Semantic elements)
-   CSS3 (CSS Variables, Flexbox, Grid, Animations)
-   Vanilla JavaScript (ES6+)
-   Google Fonts (Inter)

## Browser Support

-   Chrome (latest)
-   Firefox (latest)
-   Safari (latest)
-   Edge (latest)

## Usage

### Option 1: Using a Local Server (Recommended)

Due to browser security restrictions (CORS), you need to run a local server to load sections dynamically:

**Using Python:**

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Using Node.js (http-server):**

```bash
npx http-server -p 8000
```

Then open `http://localhost:8000` in your browser.

### Option 2: Direct File Access

If you open `index.html` directly, sections may not load due to CORS restrictions. Consider using a local server for the best experience.

### No Build Process Required

-   No dependencies or build tools needed
-   All assets are self-contained
-   Pure HTML, CSS, and JavaScript

## Customization

### Colors

Edit CSS variables in `styles.css`:

```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    /* ... */
}
```

### Content (MVC Architecture)

With MVC pattern, all data is centralized in `js/model.js`:

-   **Personal Info**: Edit `personalInfo` object in `model.js`
-   **Profile**: Edit `profile` object in `model.js`
-   **Work Experience**: Edit `workExperience` array in `model.js`
-   **Skills**: Edit `skills` object in `model.js`
-   **Projects**: Edit `projects` array in `model.js`
-   **Education**: Edit `education` array in `model.js`

The View (`js/view.js`) automatically renders all sections from the Model data.

**Note**: The `sections/` directory contains legacy HTML files. The application now uses MVC pattern with data-driven rendering.

### Animations

Modify animation timings and effects in `styles.css` and `script.js`.

## Architecture

### MVC Pattern

The application uses **Model-View-Controller (MVC)** architecture:

-   **Model** (`js/model.js`): Manages all CV data and state
-   **View** (`js/view.js`): Handles UI rendering and DOM manipulation
-   **Controller** (`js/controller.js`): Coordinates between Model and View, handles business logic
-   **App** (`js/app.js`): Application entry point

### Benefits:

-   ✅ Separation of concerns
-   ✅ Easy to maintain and extend
-   ✅ Testable components
-   ✅ Better code organization

## Code Patterns Used

-   **MVC Architecture**: Model-View-Controller pattern for clean separation
-   **CSS Variables**: For maintainable theming
-   **BEM-like Naming**: Consistent class naming convention
-   **Modular JavaScript**: Class-based architecture with singleton pattern
-   **Throttling**: Performance optimization for scroll events
-   **Intersection Observer**: Efficient scroll animations
-   **Semantic HTML**: Proper HTML5 semantic elements
-   **Event Delegation**: For dynamically rendered elements

## Performance

-   Throttled scroll event handlers
-   CSS transforms for animations (GPU accelerated)
-   Lazy loading ready structure
-   Minimal JavaScript footprint

## License

Personal use - Le Hung Duy
