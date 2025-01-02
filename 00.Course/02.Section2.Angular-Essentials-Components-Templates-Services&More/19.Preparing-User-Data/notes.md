# Section 2 : Angular essentials components, templates, services & more

## 19. Preparing User Data

- [Udemy](https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/43788498#overview)
- [Udemy - dummy user data](code/dummy-users.ts)
- [Udemy - dummy user images](code/users.zip)

- **Purpose**: Learn how to prepare and manage data within a component to make it dynamic and reusable.

---

### Steps to Prepare User Data in the User Component

1. **Modify the Component Logic** (`user.component.ts`):

   - Add an array to store multiple users with properties like name and age:

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
     }
     ```

2. **Update the Template to Display User Data** (`user.component.html`):

   - Use Angular's **structural directive** (`*ngFor`) to iterate through the `users` array and display user details:
     ```html
     <div class="user-list">
       <div *ngFor="let user of users" class="user-card">
         <h3>{{ user.name }}</h3>
         <p>Age: {{ user.age }}</p>
       </div>
     </div>
     ```

3. **Style the Component** (`user.component.css`):

   - Add styles to structure the user list:

     ```css
     .user-list {
       display: flex;
       flex-wrap: wrap;
       justify-content: center;
       gap: 1rem;
     }

     .user-card {
       border: 1px solid #ccc;
       padding: 1rem;
       border-radius: 5px;
       background-color: #f9f9f9;
       width: 200px;
       text-align: center;
     }

     h3 {
       margin: 0 0 0.5rem 0;
       color: #333;
     }

     p {
       margin: 0;
       color: #666;
     }
     ```

4. **Serve the Application**:
   - Run the development server to see the dynamically generated user list:
     ```bash
     ng serve
     ```
   - Navigate to `http://localhost:4200` to view the component.

---

### Key Takeaways:

- Use Angular's **`*ngFor` directive** to dynamically display data in templates.
- Managing data in arrays makes components more flexible and scalable.
- Keep the logic in the TypeScript class and handle data presentation in the template.

---

Let me know when you’re ready to proceed to the next chapter!
