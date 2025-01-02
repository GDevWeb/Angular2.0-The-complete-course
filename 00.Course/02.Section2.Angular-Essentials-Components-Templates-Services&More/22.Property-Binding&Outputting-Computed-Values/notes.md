# Section 2 : Angular essentials components, templates, services & more

## 22. Property Binding & Outputting Computed Values

- [Udemy](https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/43788514#overview)

- **Purpose**: Understand how to bind component properties to HTML element attributes and how to output dynamically computed values.

---

### Steps for Property Binding

1. **Define Properties in the Component Class** (`user.component.ts`):

   - Add a property that dynamically updates attributes or computed values:

     ```typescript
     import { Component } from "@angular/core";

     @Component({
       selector: "app-user",
       templateUrl: "./user.component.html",
       styleUrls: ["./user.component.css"],
     })
     export class UserComponent {
       users = [
         { name: "John Doe", age: 30 },
         { name: "Jane Smith", age: 25 },
         { name: "Alice Brown", age: 40 },
       ];
       highlightUser = "John Doe"; // Dynamic property to highlight a specific user
     }
     ```

2. **Bind Properties to HTML Attributes** (`user.component.html`):

   - Use Angular’s property binding syntax `[attribute]` to set dynamic attributes:

     ```html
     <div class="user-list">
       <div
         *ngFor="let user of users"
         class="user-card"
         [class.highlight]="user.name === highlightUser"
       >
         <h3>{{ user.name }}</h3>
         <p>Age: {{ user.age }}</p>
       </div>
     </div>
     ```

   - **Explanation**:
     - `[class.highlight]`: Dynamically applies the `highlight` CSS class if `user.name` matches `highlightUser`.

3. **Output Computed Values**:

   - Add a method in the component class to compute values:

     ```typescript
     getAgeCategory(age: number): string {
       if (age < 30) {
         return 'Young';
       } else if (age < 40) {
         return 'Middle-aged';
       } else {
         return 'Experienced';
       }
     }
     ```

   - Use the computed value in the template:
     ```html
     <p>Category: {{ getAgeCategory(user.age) }}</p>
     ```

4. **Style the Highlighted Element** (`user.component.css`):

   - Add styles for the `highlight` class:
     ```css
     .highlight {
       background-color: #e0ffe0;
       border: 2px solid #4caf50;
     }
     ```

5. **Test the Application**:
   - Run the development server to verify the updates:
     ```bash
     ng serve
     ```
   - Open `http://localhost:4200` to check the dynamic property binding and computed values.

---

### Example Output in the Browser:

```html
<div class="user-card highlight">
  <h3>John Doe</h3>
  <p>Age: 30</p>
  <p>Category: Middle-aged</p>
</div>
<div class="user-card">
  <h3>Jane Smith</h3>
  <p>Age: 25</p>
  <p>Category: Young</p>
</div>
<div class="user-card">
  <h3>Alice Brown</h3>
  <p>Age: 40</p>
  <p>Category: Experienced</p>
</div>
```

---

### Key Takeaways:

- Use property binding `[attribute]` to dynamically set attributes or styles based on component properties.
- Computed values can be dynamically generated using methods within the component class.
- Combine property binding with structural directives like `*ngFor` for dynamic, data-driven UI updates.

---
