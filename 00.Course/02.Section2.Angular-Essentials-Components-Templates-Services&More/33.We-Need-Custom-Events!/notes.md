# Section 2 : Angular essentials components, templates, services & more

## 33. We Need Custom Events! (8 min)

- [Udemy](https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/43788568#overview)

- **Purpose**: Learn how to create and use custom events in Angular by leveraging the `@Output` decorator and `EventEmitter`, allowing child components to communicate with parent components.

---

### Key Concepts

1. **Why Use Custom Events?**:

   - Enables child components to notify parent components about changes or user interactions.
   - Promotes a unidirectional data flow in Angular applications.

2. **What is `@Output` and `EventEmitter`?**:
   - **`@Output`**: Marks a property in the child component that emits custom events.
   - **`EventEmitter`**: Used to emit events from the child to the parent.

---

### Steps for Using Custom Events

1. **Define an Event in the Child Component**:

   - Add an `@Output` property with an `EventEmitter`:

     ```typescript
     import { Component, Input, Output, EventEmitter } from "@angular/core";

     @Component({
       selector: "app-user-card",
       templateUrl: "./user-card.component.html",
       styleUrls: ["./user-card.component.css"],
     })
     export class UserCardComponent {
       @Input() user!: { name: string; age: number };
       @Output() userSelected = new EventEmitter<string>();

       selectUser() {
         this.userSelected.emit(this.user.name);
       }
     }
     ```

2. **Update the Child Component Template** (`user-card.component.html`):

   - Add a button or clickable element that triggers the custom event:
     ```html
     <div class="user-card">
       <h3>{{ user.name }}</h3>
       <p>Age: {{ user.age }}</p>
       <button (click)="selectUser()">Select User</button>
     </div>
     ```

3. **Handle the Event in the Parent Component**:

   - Bind the child component’s custom event in the parent template:

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

   - Add an event handler method in the parent component:

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

       onUserSelected(userName: string): void {
         alert(`User selected: ${userName}`);
       }
     }
     ```

4. **Test the Application**:
   - Serve the application and click the "Select User" button for any user:
     ```bash
     ng serve
     ```
   - Verify that the custom event emits the user’s name and triggers the `onUserSelected` method in the parent.

---

### Key Takeaways:

- **Custom Events with `@Output`**:

  - Use `EventEmitter` to send data from child to parent components.
  - The parent listens to custom events using `(eventName)="handler($event)"`.

- **Event Payload**:

  - The `emit()` method can pass data (e.g., the user’s name) to the parent.

- **Clear Communication**:
  - Custom events maintain a clean, unidirectional flow of data from parent to child and back.

---

Let me know if you’re ready for Chapter 34! 🚀
