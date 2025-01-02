# Section 2 : Angular essentials components, templates, services & more

## 21. Outputting Dynamic Content with String Interpolation (5 min)

- [Udemy](https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/43788510#overview)

- **Purpose**: Learn how to use Angular's **string interpolation** to dynamically display data in the HTML template.

---

### Steps to Output Dynamic Content

1. **Define Properties in the Component Class** (`user.component.ts`):

   - Add dynamic content in the form of properties:

     ```typescript
     import { Component } from "@angular/core";

     @Component({
       selector: "app-user",
       templateUrl: "./user.component.html",
       styleUrls: ["./user.component.css"],
     })
     export class UserComponent {
       title: string = "Dynamic User List";
       currentDate: Date = new Date();
       users = [
         { name: "John Doe", age: 30 },
         { name: "Jane Smith", age: 25 },
         { name: "Alice Brown", age: 40 },
       ];
     }
     ```

2. **Use String Interpolation in the Template** (`user.component.html`):

   - Bind the properties to the template using `{{ }}`:

     ```html
     <div class="header">
       <h1>{{ title }}</h1>
       <p>Current Date: {{ currentDate | date:'fullDate' }}</p>
     </div>
     <div class="user-list">
       <div *ngFor="let user of users" class="user-card">
         <h3>{{ user.name }}</h3>
         <p>Age: {{ user.age }}</p>
       </div>
     </div>
     ```

   - The **`{{ expression }}`** syntax dynamically evaluates the expression and outputs the result in the DOM.

3. **Format Data (Optional)**:

   - Use Angular **pipes** for formatting, like in the example above where the date is formatted using the `date` pipe.

4. **Test the Dynamic Content**:
   - Start the development server:
     ```bash
     ng serve
     ```
   - Check `http://localhost:4200` to ensure the dynamic content is correctly displayed.

---

### Example Output in the Browser:

```html
<h1>Dynamic User List</h1>
<p>Current Date: Monday, December 30, 2024</p>
<div class="user-list">
  <div>
    <h3>John Doe</h3>
    <p>Age: 30</p>
  </div>
  <div>
    <h3>Jane Smith</h3>
    <p>Age: 25</p>
  </div>
  <div>
    <h3>Alice Brown</h3>
    <p>Age: 40</p>
  </div>
</div>
```

---

### Key Takeaways:

- String interpolation with `{{ }}` is used to display dynamic data in Angular templates.
- Any valid JavaScript expression or component property can be interpolated.
- Angular **pipes** enhance dynamic content by formatting it before display (e.g., dates, numbers).

---

Let me know if you're ready for the next chapter!
