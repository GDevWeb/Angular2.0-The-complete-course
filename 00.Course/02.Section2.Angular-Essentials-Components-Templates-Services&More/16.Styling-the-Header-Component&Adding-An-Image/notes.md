# Section 2 : Angular essentials components, templates, services & more

## 16. Styling the Header Component & Adding an Image (6 min)

- [Udemy](https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/43788478#overview)

- **Purpose**: Learn how to apply custom styles to a component and include images in the template.

---

### Steps to Style the Header Component

1. **Update the Component Template** (`header.component.html`):

   - Add an image and adjust the HTML structure for styling:

     ```html
     <header>
       <img src="assets/logo.png" alt="App Logo" class="logo" />
       <h1>{{ title }}</h1>
       <h2>{{ subtitle }}</h2>
     </header>
     ```

   - **Note**: Place the `logo.png` image in the `src/assets/` folder for proper referencing.

2. **Style the Component** (`header.component.css`):

   - Add CSS to style the header and the image:

     ```css
     header {
       background-color: #f4f4f9;
       padding: 1.5rem;
       text-align: center;
       border-bottom: 2px solid #ddd;
     }

     .logo {
       width: 50px;
       height: 50px;
       margin-bottom: 1rem;
     }

     h1 {
       margin: 0;
       font-size: 2rem;
       color: #333;
     }

     h2 {
       margin: 0;
       font-size: 1.2rem;
       color: #555;
     }
     ```

3. **Serve the Application**:
   - Start the development server to see the updated styles and image:
     ```bash
     ng serve
     ```
   - Visit `http://localhost:4200` in your browser.

---

### Key Takeaways:

- Images are typically stored in the `src/assets/` directory and referenced in templates.
- Component-specific styles in Angular ensure that your styles do not affect other parts of the application.
- Use class selectors to style elements and keep the CSS clean and organized.

---

Let me know if you’re ready to continue with Chapter 17!
