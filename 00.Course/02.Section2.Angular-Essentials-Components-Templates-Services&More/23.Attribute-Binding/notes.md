# Section 2 : Angular essentials components, templates, services & more

## 23. Attribute Binding

- [Udemy](https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/43797676#overview)

### 23. Attribute Binding (7 min)

- **Purpose**: Understand the difference between property binding and attribute binding, and learn when and how to use attribute binding in Angular.

---

### Key Concepts

1. **Property Binding Recap**:

   - Property binding dynamically binds a value to an underlying DOM property.
   - Example:
     ```html
     <img [src]="imageSource" />
     ```
     - This binds the `src` **property** of the `<img>` element to `imageSource`.
     - While it appears to bind the `src` attribute, it actually targets the `src` property of the DOM element.

2. **When Attribute Binding is Necessary**:

   - Use attribute binding for attributes that do not have a matching DOM property.
   - Common cases:
     - **ARIA attributes**: Accessibility attributes like `aria-valuenow`, `aria-label`, etc.
     - **Custom Attributes**: Any non-standard HTML attributes.

3. **Attribute Binding Syntax**:
   - Use `[attr.attribute-name]` to bind a value dynamically:
     ```html
     <div
       role="progressbar"
       [attr.aria-valuenow]="currentValue"
       [attr.aria-valuemax]="maxValue"
     ></div>
     ```

---

### Steps for Using Attribute Binding

1. **Define Data in the Component Class** (`user.component.ts`):

   - Add properties to manage dynamic values:

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
     }
     ```

2. **Bind Attributes in the Template** (`user.component.html`):

   - Use `[attr.attribute-name]` for dynamic attributes:
     ```html
     <div
       role="progressbar"
       [attr.aria-valuenow]="currentValue"
       [attr.aria-valuemax]="maxValue"
       class="progress-bar"
     >
       Progress: {{ currentValue }} / {{ maxValue }}
     </div>
     ```

3. **Style the Progress Bar** (`user.component.css`):

   - Add styles to visually represent the progress bar:

     ```css
     .progress-bar {
       width: 100%;
       height: 20px;
       background-color: #f3f3f3;
       border: 1px solid #ccc;
       position: relative;
     }

     .progress-bar::before {
       content: "";
       position: absolute;
       height: 100%;
       width: calc(50%);
       background-color: #4caf50;
     }
     ```

4. **Serve the Application**:
   - Start the development server and verify that the ARIA attributes are dynamically bound:
     ```bash
     ng serve
     ```
   - Open `http://localhost:4200` and inspect the element to confirm that `aria-valuenow` and `aria-valuemax` are dynamically updated.

---

### Key Takeaways:

- **Property Binding** targets DOM properties, while **Attribute Binding** targets element attributes directly.
- Use `[attr.attribute-name]` for attributes without corresponding DOM properties, like ARIA or custom attributes.
- Attribute binding is crucial for improving accessibility (e.g., screen readers rely on ARIA attributes).

---
