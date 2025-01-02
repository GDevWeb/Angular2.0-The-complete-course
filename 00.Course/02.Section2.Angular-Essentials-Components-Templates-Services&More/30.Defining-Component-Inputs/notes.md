# Section 2 : Angular essentials components, templates, services & more

## **30. Defining Component Inputs**

- [Udemy](https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/43788552#overview)

- **Purpose**: Learn how to use Angular’s **`@Input` decorator** to make components reusable by dynamically passing data from parent to child components.

---

### Key Concepts

1. **What Are Inputs?**:

   - Inputs allow parent components to pass data to child components.
   - Defined using the `@Input` decorator in the child component class.

2. **Why Use Inputs?**:
   - Enables reusability by making components adaptable to different data.
   - Simplifies the communication of data in a component hierarchy.

---

### Steps for Defining Component Inputs

1. **Set Up the Child Component**:

   - If not already created, generate a child component (`user-card`):
     ```bash
     ng generate component user-card
     ```

2. **Define Input Properties in the Child Component Class** (`user-card.component.ts`):

   - Add an `@Input` decorator to specify the property that will receive data:

     ```typescript
     import { Component, Input } from "@angular/core";

     @Component({
       selector: "app-user-card",
       templateUrl: "./user-card.component.html",
       styleUrls: ["./user-card.component.css"],
     })
     export class UserCardComponent {
       @Input() user: { name: string; age: number } | undefined;
     }
     ```

3. **Use the Input Property in the Child Component Template** (`user-card.component.html`):

   - Bind the `user` property to dynamically display data:
     ```html
     <div class="user-card">
       <h3>{{ user?.name }}</h3>
       <p>Age: {{ user?.age }}</p>
     </div>
     ```

4. **Pass Data from the Parent Component** (`user.component.html`):

   - Use property binding to pass data from the parent:
     ```html
     <div class="user-list">
       <app-user-card *ngFor="let user of users" [user]="user"></app-user-card>
     </div>
     ```

5. **Update the Parent Component Logic** (`user.component.ts`):

   - Provide the data for the child component:

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

6. **Style the Child Component** (`user-card.component.css`):

   - Add some basic styles for clarity:

     ```css
     .user-card {
       border: 1px solid #ccc;
       padding: 1rem;
       border-radius: 5px;
       background-color: #f9f9f9;
       width: 200px;
       text-align: center;
       margin: 1rem;
     }

     h3 {
       margin: 0;
       font-size: 1.2rem;
     }

     p {
       margin: 0.5rem 0 0;
       font-size: 1rem;
     }
     ```

7. **Test the Application**:
   - Serve the application and verify the child components display the passed data:
     ```bash
     ng serve
     ```
   - Check `http://localhost:4200` for the dynamic user cards.

---

### Key Takeaways:

- **`@Input`** makes child components flexible and reusable by allowing them to accept data dynamically.
- Property binding (`[property]="value"`) is used to pass data from parent to child components.
- Angular automatically updates the child component when the parent’s data changes.

---

Let me know if you’re ready to continue with Chapter 31!
