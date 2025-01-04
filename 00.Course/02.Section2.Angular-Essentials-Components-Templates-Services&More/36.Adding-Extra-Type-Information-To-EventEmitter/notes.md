# Section 2 : Angular essentials components, templates, services & more

## 36. Adding Extra Type Information to EventEmitter (7 min)

- [Udemy](https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/43788582#overview)

- **Purpose**: Learn how to enhance the type safety of your custom events in Angular by adding explicit type information to `EventEmitter`.

---

### Key Concepts

1. **Why Add Type Information to `EventEmitter`?**:

   - Ensures that emitted events and their payloads have predictable structures.
   - Reduces runtime errors by catching type mismatches during development.
   - Improves code readability and maintainability.

2. **How to Add Type Information**:
   - Use TypeScript’s generics to specify the type of data that the `EventEmitter` will emit.

---

### Steps for Adding Type Information

1. **Set Up the Child Component**:

   - Define the `EventEmitter` with a specific type:

     ```typescript
     import { Component, Input, Output, EventEmitter } from "@angular/core";

     interface User {
       name: string;
       age: number;
     }

     @Component({
       selector: "app-user-card",
       templateUrl: "./user-card.component.html",
       styleUrls: ["./user-card.component.css"],
     })
     export class UserCardComponent {
       @Input() user!: User; // Strongly typed input
       @Output() userSelected = new EventEmitter<User>(); // Strongly typed EventEmitter

       selectUser() {
         this.userSelected.emit(this.user); // Emit the user object
       }
     }
     ```

2. **Update the Child Component Template** (`user-card.component.html`):

   - Trigger the `userSelected` event with a button:
     ```html
     <div class="user-card">
       <h3>{{ user.name }}</h3>
       <p>Age: {{ user.age }}</p>
       <button (click)="selectUser()">Select User</button>
     </div>
     ```

3. **Handle the Event in the Parent Component**:

   - Bind the event in the parent template and provide a handler:

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

   - Update the parent component class with a strongly typed handler:

     ```typescript
     import { Component } from "@angular/core";

     interface User {
       name: string;
       age: number;
     }

     @Component({
       selector: "app-user",
       templateUrl: "./user.component.html",
       styleUrls: ["./user.component.css"],
     })
     export class UserComponent {
       users: User[] = [
         { name: "John Doe", age: 30 },
         { name: "Jane Smith", age: 25 },
         { name: "Alice Brown", age: 40 },
       ];

       onUserSelected(user: User): void {
         console.log(`Selected user: ${user.name}, Age: ${user.age}`);
       }
     }
     ```

4. **Test the Application**:
   - Serve the application and verify that the event emits correctly:
     ```bash
     ng serve
     ```
   - Open the console and check the output when clicking the "Select User" button.

---

### Key Takeaways:

- **Type-Safe `EventEmitter`**:

  - Generics ensure the emitted data conforms to a specified structure.
  - Example: `EventEmitter<User>` emits only objects of the `User` type.

- **Benefits**:

  - Improves developer confidence with better type checking.
  - Makes code more self-documenting by explicitly defining event payloads.

- **Clean and Predictable Events**:
  - Typed events ensure consistency between child and parent components.

---

Let me know if you’re ready for Chapter 37! 🚀
