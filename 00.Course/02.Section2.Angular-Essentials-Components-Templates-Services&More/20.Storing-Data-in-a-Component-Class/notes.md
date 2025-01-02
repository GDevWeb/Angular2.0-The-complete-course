# Section 2 : Angular essentials components, templates, services & more

- [Udemy](https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/43788504#overview)

### 20. Storing Data in a Component Class (5 min)

- **Purpose**: Understand how to use component classes to define and manage data that can be displayed in templates.

---

### Steps to Store Data in the User Component Class

1. **Update the Component Class** (`user.component.ts`):

   - Define properties and initialize them with data. For example:

     ```typescript
     import { Component } from "@angular/core";

     @Component({
       selector: "app-user",
       templateUrl: "./user.component.html",
       styleUrls: ["./user.component.css"],
     })
     export class UserComponent {
       title: string = "User List";
       description: string = "This is a list of all registered users.";
       users = [
         { name: "John Doe", age: 30 },
         { name: "Jane Smith", age: 25 },
         { name: "Alice Brown", age: 40 },
       ];
     }
     ```

2. **Use the Stored Data in the Template** (`user.component.html`):

   - Display the title and description using Angular’s string interpolation:
     ```html
     <div class="header">
       <h1>{{ title }}</h1>
       <p>{{ description }}</p>
     </div>
     <div class="user-list">
       <div *ngFor="let user of users" class="user-card">
         <h3>{{ user.name }}</h3>
         <p>Age: {{ user.age }}</p>
       </div>
     </div>
     ```

3. **Style the Component** (`user.component.css`):

   - Add styles for the title and description:

     ```css
     .header {
       text-align: center;
       margin-bottom: 1rem;
     }

     .header h1 {
       margin: 0;
       font-size: 2rem;
       color: #333;
     }

     .header p {
       margin: 0.5rem 0;
       font-size: 1rem;
       color: #555;
     }
     ```

4. **Serve the Application**:
   - Start the development server to verify the data is being rendered correctly:
     ```bash
     ng serve
     ```
   - Visit `http://localhost:4200` to see the updated component.

---

### Key Takeaways:

- The component class serves as the **controller**, where you define and manage data.
- Data stored in the class can be accessed and displayed in the template using **string interpolation** and **directives** like `*ngFor`.
- Keeping the data in the component class ensures separation of concerns between logic and presentation.

---
