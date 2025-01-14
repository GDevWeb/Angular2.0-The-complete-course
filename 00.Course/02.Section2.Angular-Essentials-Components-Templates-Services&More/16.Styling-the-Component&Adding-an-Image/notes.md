# Section 2 : Angular Essentials - Components, Templates, Services & More

## **Chapter 16: Styling the Header Component & Adding an Image**

- [udemy](https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/43788478#overview)

---

### **Objective**:

Learn to enhance the appearance of the header by adding custom styles and including an image to make it visually appealing.

---

#### **Key Concepts**:

1. **Component Styling**:

   - Use the component’s `.css` or `.scss` file to apply styles specific to that component.

2. **Adding an Image**:

   - Use Angular's asset pipeline to include and reference images in your components.

3. **Best Practices for Styling**:
   - Keep styles modular and scoped to the component to avoid global conflicts.
   - Use CSS variables or classes for maintainable styling.

---

#### **Step-by-Step Guide**:

1. **Ensure `assets` Path is Recognized**:

   - Confirm that the image is in the correct directory:

     ```
     src/assets/logo.png
     ```

   - Open `angular.json` and verify the `assets` array includes the `src/assets` folder:

     ```json
     "assets": [
       "src/favicon.ico",
       "src/assets"
     ]
     ```

   - If `src/assets` is missing, add it to the configuration and save the file.

   - Restart the development server to apply changes:

     ```bash
     ng serve
     ```

   - Use the correct path in the template:

     ```html
     <img src="assets/logo.png" alt="EasyTask Logo" />
     ```

   - Perform a hard refresh (`Ctrl + F5` or `Cmd + Shift + R`) to ensure the image is loaded correctly.

2. **Add an Image to the Header**:

   - Place your image in the `src/assets` folder:

     ```
     src/assets/logo.png
     ```

   - Update `header.component.html` to include the image:
     ```html
     <header>
       <img src="assets/logo.png" alt="EasyTask Logo" class="logo" />
       <h1>{{ title }}</h1>
       <h2 *ngIf="subtitle">{{ subtitle }}</h2>
     </header>
     ```

3. **Style the Header**:

   - Open `header.component.css` and add styles for the header and image:

     ```css
     header {
       display: flex;
       align-items: center;
       justify-content: space-between;
       background-color: var(--bg-color, #6200ea);
       color: white;
       padding: 1rem 2rem;
     }

     .logo {
       height: 50px;
       margin-right: 1rem;
     }

     h1 {
       font-size: 1.8rem;
     }

     h2 {
       font-size: 1.2rem;
       font-weight: 300;
     }
     ```

4. **Pass Styles Dynamically**:

   - Allow the background color to be dynamic using `@Input()`:

     ```typescript
     @Input() bgColor: string = '#6200ea';
     ```

   - Update the styles dynamically in the template:
     ```html
     <header [ngStyle]="{ 'background-color': bgColor }">
       <img src="assets/logo.png" alt="EasyTask Logo" class="logo" />
       <h1>{{ title }}</h1>
       <h2 *ngIf="subtitle">{{ subtitle }}</h2>
     </header>
     ```

5. **Test the Component**:
   - Verify that:
     - The header displays the logo, title, and subtitle correctly.
     - The background color updates dynamically based on the input.

---

#### **Hands-On Practice**:

1. Add a logo or any relevant image to your **HeaderComponent**.
2. Style the header using the provided CSS or your own custom styles.
3. Test dynamic styling by passing a different `bgColor` from the parent component.

---

Once you've completed this, you’re ready to move to the next chapter!
