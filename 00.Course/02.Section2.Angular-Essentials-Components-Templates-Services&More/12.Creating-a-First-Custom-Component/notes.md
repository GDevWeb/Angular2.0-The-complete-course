# **Chapter 12: Creating a First Custom Component**

## **What Is a Custom Component?**

- [udemy](https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/43788462#overview)

---

- A custom component is one that you define to break your application into smaller, reusable parts.
- It encapsulates a specific piece of functionality or a UI section.

---

## **Steps to Create a Custom Component**

1. **Generate the Component**:
   Use the Angular CLI to create a new component:

   ```bash
   ng generate component components/header
   ```

   - This creates four files: `.component.ts`, `.component.html`, `.component.css` (or `.scss`), and `.component.spec.ts`.
   - The component is automatically declared in `AppModule`.

2. **Edit the Component**:

   - Open the newly created `header.component.ts` and add the logic for your header.
   - Example:

     ```typescript
     import { Component } from "@angular/core";

     @Component({
       selector: "app-header",
       templateUrl: "./header.component.html",
       styleUrls: ["./header.component.css"],
     })
     export class HeaderComponent {
       title = "EasyTask";
     }
     ```

3. **Update the Template**:

   - Open `header.component.html` and define the layout:
     ```html
     <header>
       <h1>{{ title }}</h1>
     </header>
     ```

4. **Style the Component**:

   - Open `header.component.css` and add styling:
     ```css
     header {
       background-color: #6200ea;
       color: white;
       padding: 1rem;
       text-align: center;
     }
     ```

5. **Include the Component in AppComponent**:
   - Open `app.component.html` and add the selector for the `HeaderComponent`:
     ```html
     <app-header></app-header> <router-outlet></router-outlet>
     ```

---

#### **Modern Angular Practices**

- Use **TypeScript** for strongly-typed properties (e.g., `title: string = 'EasyTask';`).
- Encapsulate styles within components using Angular’s ViewEncapsulation mechanism (default).

---

#### **Hands-On Practice**

1. Generate the `HeaderComponent` as described.
2. Display a title (`EasyTask`) in the header.
3. Add basic styles to match the look of the EasyTask project.

---

Once you complete these steps, we’ll move to the next chapter to **configure and extend the header component**. Let me know if you need clarification or additional guidance!
