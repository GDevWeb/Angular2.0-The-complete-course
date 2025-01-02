# Section 2 : Angular essentials components, templates, services & more

## 17. Managing & Creating Components with the Angular CLI

- [Udemy](https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/43788484#overview)

- **Purpose**: Learn how to efficiently create components using the Angular CLI and understand the benefits of CLI-generated components.

---

### Steps to Create a User Component Using Angular CLI

1. **Generate the Component**:

   - Run the following command to create a `user` component:
     ```bash
     ng generate component user
     ```
   - Or use the shorthand command:
     ```bash
     ng g c user
     ```

2. **Result**:

   - Angular CLI automatically generates the following files in the `src/app/user/` folder:
     - `user.component.ts`: Contains the component logic.
     - `user.component.html`: Contains the component’s template.
     - `user.component.css` (or `.scss`): Contains the styles for the component.
     - `user.component.spec.ts`: Used for unit testing (optional).

3. **Registering the Component**:

   - The CLI automatically adds the `UserComponent` to the `declarations` array in the `app.module.ts` file:
     ```typescript
     @NgModule({
       declarations: [
         AppComponent,
         UserComponent, // Automatically added
       ],
       imports: [BrowserModule],
       providers: [],
       bootstrap: [AppComponent],
     })
     export class AppModule {}
     ```

4. **Edit the Component Logic** (`user.component.ts`):

   - Add properties or logic to the `UserComponent`:

     ```typescript
     import { Component } from "@angular/core";

     @Component({
       selector: "app-user",
       templateUrl: "./user.component.html",
       styleUrls: ["./user.component.css"],
     })
     export class UserComponent {
       userName: string = "John Doe";
       userAge: number = 30;
     }
     ```

5. **Update the Template** (`user.component.html`):

   - Use the properties in the HTML:
     ```html
     <div class="user-card">
       <h3>{{ userName }}</h3>
       <p>Age: {{ userAge }}</p>
     </div>
     ```

6. **Style the Component** (`user.component.css`):

   - Add styles for the user card:

     ```css
     .user-card {
       border: 1px solid #ccc;
       padding: 1rem;
       border-radius: 5px;
       background-color: #f9f9f9;
       width: 200px;
       text-align: center;
       margin: 1rem auto;
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

7. **Use the Component** in the Main Template (`app.component.html`):

   - Add the `app-user` selector to display the component:
     ```html
     <app-user></app-user>
     ```

8. **Run the Application**:
   - Serve the app to see the user component in action:
     ```bash
     ng serve
     ```

---

### Key Takeaways:

- The Angular CLI simplifies component creation by automatically generating boilerplate files and registering the component.
- CLI commands like `ng g c component-name` save time and ensure consistency.
- Generated components can be immediately used by referencing their selector in templates.

---
