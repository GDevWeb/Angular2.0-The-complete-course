# Section 2 : Angular essentials components, templates, services & more

## 34. Working with Outputs & Emitting Data (8 min)

- [Udemy](https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/43788576#overview)

- **Purpose**: Dive deeper into using **`@Output`** and **`EventEmitter`** to emit data from child components to parent components, ensuring effective communication and data flow.

---

### Key Concepts

1. **What is `@Output`?**:

   - `@Output` allows child components to emit custom events to parent components.
   - Events carry data using Angular’s **`EventEmitter`**.

2. **When to Use Outputs**:
   - When child components need to notify their parent components about state changes or user interactions (e.g., button clicks, form submissions).

---

### Steps for Emitting Data from Child to Parent

1. **Set Up the Child Component**:

   - Define an `@Output` property using `EventEmitter`:

     ```typescript
     import { Component, Input, Output, EventEmitter } from "@angular/core";

     @Component({
       selector: "app-user-card",
       templateUrl: "./user-card.component.html",
       styleUrls: ["./user-card.component.css"],
     })
     export class UserCardComponent {
       @Input() user!: { name: string; age: number };
       @Output() userSelected = new EventEmitter<{
         name: string;
         age: number;
       }>();

       selectUser() {
         this.userSelected.emit(this.user); // Emit the user object
       }
     }
     ```

2. **Update the Child Component Template** (`user-card.component.html`):

   - Add a button or other interactive element to trigger the event:
     ```html
     <div class="user-card">
       <h3>{{ user.name }}</h3>
       <p>Age: {{ user.age }}</p>
       <button (click)="selectUser()">Select User</button>
     </div>
     ```

3. **Handle the Event in the Parent Component**:

   - Bind the custom event `(userSelected)` in the parent template and pass a handler method:

     ```html
     <div class="user-list">
       <app-user-card
         *ngFor="let user of users"
         [user]="user"
         (userSelected)="onUserSelected($event)"
       >
       </app-user-card>
     </div>
     ```

   - Implement the event handler in the parent component class:

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

       selectedUser: { name: string; age: number } | null = null;

       onUserSelected(user: { name: string; age: number }): void {
         this.selectedUser = user;
         alert(`Selected User: ${user.name}, Age: ${user.age}`);
       }
     }
     ```

4. **Update the Parent Template to Show Selected Data** (`user.component.html`):

   - Display the selected user:
     ```html
     <div *ngIf="selectedUser" class="selected-user">
       <h2>Selected User</h2>
       <p>Name: {{ selectedUser.name }}</p>
       <p>Age: {{ selectedUser.age }}</p>
     </div>
     ```

5. **Style the Selected User Section** (`user.component.css`):

   - Add some basic styles for clarity:
     ```css
     .selected-user {
       margin-top: 1rem;
       padding: 1rem;
       border: 1px solid #ccc;
       border-radius: 5px;
       background-color: #f9f9f9;
     }
     ```

6. **Test the Application**:
   - Serve the app and test user selection:
     ```bash
     ng serve
     ```
   - Verify that clicking the "Select User" button triggers the event and displays the selected user.

---

### Key Takeaways:

- **`@Output` with `EventEmitter`**:

  - Enables child-to-parent communication in Angular.
  - Use `emit(data)` to send data to the parent.

- **Dynamic Event Handling**:

  - Pass meaningful data like objects or IDs through the emitted event for effective parent-side handling.

- **Unidirectional Data Flow**:
  - Parent passes data down to child (`@Input`).
  - Child notifies parent about changes (`@Output`).

---

Let me know if you’re ready for Chapter 35! 🚀
