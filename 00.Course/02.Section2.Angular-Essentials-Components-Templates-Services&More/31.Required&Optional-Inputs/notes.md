# Section 2 : Angular essentials components, templates, services & more

## 31. Required & Optional Inputs (6 min)

- [Udemy](https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/43788560#overview)

- **Purpose**: Learn how to differentiate between required and optional inputs in Angular components, ensuring robust and reusable components.

---

### Key Concepts

1. **What Are Required and Optional Inputs?**:

   - **Required Inputs**: Properties that must be provided by the parent component for the child component to function correctly.
   - **Optional Inputs**: Properties that have default values in the child component, allowing them to function even if the parent does not pass data.

2. **Why Use Optional Inputs?**:
   - Improves component flexibility by allowing default configurations.
   - Simplifies parent component usage when certain properties are not always necessary.

---

### Steps for Defining Required and Optional Inputs

1. **Set Up the Child Component**:

   - Add `@Input` properties in the child component to represent required and optional inputs:

     ```typescript
     import { Component, Input } from "@angular/core";

     @Component({
       selector: "app-user-card",
       templateUrl: "./user-card.component.html",
       styleUrls: ["./user-card.component.css"],
     })
     export class UserCardComponent {
       @Input() user!: { name: string; age: number }; // Required input
       @Input() theme: string = "light"; // Optional input with a default value
     }
     ```

   - **Explanation**:
     - The `!` after `user` tells Angular that this required input will always be provided.
     - The `theme` input has a default value (`'light'`), making it optional.

2. **Use Inputs in the Template** (`user-card.component.html`):

   - Display the `user` data and adjust styling based on the `theme` input:
     ```html
     <div [ngClass]="theme" class="user-card">
       <h3>{{ user.name }}</h3>
       <p>Age: {{ user.age }}</p>
     </div>
     ```

3. **Style Based on the Theme** (`user-card.component.css`):

   - Define styles for the `light` and `dark` themes:

     ```css
     .user-card {
       padding: 1rem;
       border: 1px solid #ccc;
       border-radius: 5px;
       text-align: center;
     }

     .light {
       background-color: #f9f9f9;
       color: #333;
     }

     .dark {
       background-color: #333;
       color: #f9f9f9;
     }
     ```

4. **Pass Required and Optional Inputs from the Parent**:

   - Use the `@Input` properties in the parent template:

     ```html
     <app-user-card *ngFor="let user of users" [user]="user" [theme]="'dark'">
     </app-user-card>
     ```

   - If the `theme` input is omitted, the default value (`'light'`) will be applied.

5. **Handle Missing Required Inputs**:
   - If a required input is not provided, Angular will throw an error. Always ensure required inputs are passed from the parent.

---

### Key Takeaways:

- **Required Inputs**:
  - Use the `!` operator to ensure required inputs are always passed.
  - Missing required inputs will result in runtime errors.
- **Optional Inputs**:

  - Provide a default value to make inputs optional.
  - Simplifies usage in parent components.

- **Dynamic Styling**:
  - Inputs like `theme` can control appearance dynamically using conditional classes.

---

Let me know if you’re ready to proceed to Chapter 32! 🚀
