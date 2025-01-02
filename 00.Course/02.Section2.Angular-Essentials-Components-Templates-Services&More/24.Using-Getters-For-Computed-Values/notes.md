# Section 2 : Angular essentials components, templates, services & more

## 24. Using Getters for Computed Values (6 min)

- [Udemy](https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/43788522#overview)

- **Purpose**: Learn how to use getters in a component class to compute values dynamically and access them in templates.

---

### Key Concepts

1. **What Are Getters?**:

   - Getters are special methods in a class that allow you to compute and return values dynamically.
   - In Angular, getters are especially useful when you need to derive or process data before displaying it in the template.

2. **Syntax for Getters**:
   - Define a getter using the `get` keyword:
     ```typescript
     get propertyName(): returnType {
       return computedValue;
     }
     ```

---

### Steps for Using Getters in Angular

1. **Define a Getter in the Component Class** (`user.component.ts`):

   - Add a getter to compute a value dynamically based on existing data:

     ```typescript
     import { Component } from "@angular/core";

     @Component({
       selector: "app-user",
       templateUrl: "./user.component.html",
       styleUrls: ["./user.component.css"],
     })
     export class UserComponent {
       currentValue: number = 50;
       maxValue: number = 100;

       get progressPercentage(): string {
         return ((this.currentValue / this.maxValue) * 100).toFixed(2) + "%";
       }
     }
     ```

   - **Explanation**:
     - The `progressPercentage` getter calculates the percentage of progress dynamically.
     - It uses `this.currentValue` and `this.maxValue` to compute the value.

2. **Access the Getter in the Template** (`user.component.html`):

   - Use string interpolation to bind the computed value:
     ```html
     <div class="progress-bar">
       <div class="progress-fill" [style.width]="progressPercentage"></div>
       <p>Progress: {{ progressPercentage }}</p>
     </div>
     ```

3. **Style the Progress Bar** (`user.component.css`):

   - Add styles for a dynamic progress bar:

     ```css
     .progress-bar {
       width: 100%;
       height: 20px;
       background-color: #f3f3f3;
       border: 1px solid #ccc;
       position: relative;
     }

     .progress-fill {
       height: 100%;
       background-color: #4caf50;
     }

     p {
       text-align: center;
       margin: 0.5rem 0 0 0;
       font-size: 0.9rem;
     }
     ```

4. **Test the Application**:
   - Serve the app and verify the dynamic updates:
     ```bash
     ng serve
     ```
   - Open `http://localhost:4200` to see the progress percentage dynamically calculated and displayed.

---

### Key Takeaways:

- Getters provide a clean way to compute values dynamically based on component properties.
- They simplify templates by encapsulating logic in the component class.
- Use getters for computations that depend on other properties and need to update dynamically.

---

Let me know if you’re ready to move on to Chapter 25!
