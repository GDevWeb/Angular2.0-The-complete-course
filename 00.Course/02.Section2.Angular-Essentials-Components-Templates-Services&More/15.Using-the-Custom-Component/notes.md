# Section 2 : Angular essentials components, templates, services & more

## 15. Using the Custom Component

- [Udemy](https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/43788472#overview)

- **Purpose**: Understand how to reuse and integrate your custom components in different parts of an Angular application.

---

### Steps to Use a Custom Component

1. **Include the Component in a Template**:

   - Use the custom component's **selector** (`app-header`) wherever you want it to appear.
   - For example, in `app.component.html`:
     ```html
     <app-header></app-header>
     <div>
       <p>Welcome to the main content of the app!</p>
     </div>
     ```

2. **Reuse the Component**:

   - Components can be reused multiple times within the same or different templates:
     ```html
     <app-header></app-header>
     <div>
       <p>This is the content section 1.</p>
     </div>
     <app-header></app-header>
     <div>
       <p>This is the content section 2.</p>
     </div>
     ```

3. **Pass Data Between Components** (Optional):

   - Components can communicate with each other using **inputs** and **outputs**.
   - Update the `header.component.ts` to accept an input property:

     ```typescript
     import { Component, Input } from "@angular/core";

     @Component({
       selector: "app-header",
       templateUrl: "./header.component.html",
       styleUrls: ["./header.component.css"],
     })
     export class HeaderComponent {
       @Input() title: string = "Default Title";
       @Input() subtitle: string = "Default Subtitle";
     }
     ```

   - Use the component and pass data to it:
     ```html
     <app-header
       [title]="'Dynamic Title'"
       [subtitle]="'Dynamic Subtitle'"
     ></app-header>
     ```

4. **Test the Application**:
   - Serve the application using:
     ```bash
     ng serve
     ```
   - Open `http://localhost:4200` in your browser to verify the output.

---

### Key Takeaways:

- Components are reusable by using their selector tags in templates.
- You can pass data dynamically using Angular’s **@Input** properties.
- Components help in creating modular, maintainable, and scalable applications.

---

Let me know if you’re ready to proceed to Chapter 16!
