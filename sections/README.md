# Sections Directory

This directory contains individual HTML files for each section of the CV landing page.

## File Structure

- **navigation.html** - Top navigation bar
- **hero.html** - Hero/introduction section
- **profile.html** - Profile summary section
- **experience.html** - Work experience timeline
- **skills.html** - Skills and technologies
- **projects.html** - Project history
- **education.html** - Education and certifications
- **contact.html** - Contact information
- **footer.html** - Footer and scroll-to-top button

## How to Edit

1. Open the section file you want to edit (e.g., `profile.html`)
2. Modify the HTML content as needed
3. Save the file
4. Refresh your browser to see changes

## Tips

- Each section is self-contained HTML
- Maintain the same class names and structure for styling consistency
- Keep the section `id` attributes unchanged (used for navigation)
- Use semantic HTML elements for better accessibility

## Example: Editing Profile Section

```html
<!-- sections/profile.html -->
<section id="profile" class="section profile-section">
    <div class="container">
        <h2 class="section-title">Profile</h2>
        <!-- Edit content here -->
    </div>
</section>
```

## Notes

- Don't include `<html>`, `<head>`, or `<body>` tags in section files
- Only include the section HTML content
- The main `index.html` will load these sections automatically
