# Section 2 : Angular essentials components, templates, services & more

## **29. We Need More Flexible Components!**

- [Udemy](https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/43788548#overview)

- **Purpose**: Learn how to make Angular components more flexible by using **inputs** to pass data into components and **outputs** to emit events from them.

---

### Key Concepts

1. **Why Flexibility Matters**:

   - Components need to adapt to different use cases by accepting external data and notifying parent components about state changes.
   - Angular achieves this with:
     - **`@Input` Decorator**: Allows parent components to pass data to child components.
     - **`@Output` Decorator**: Allows child components to emit events to parent components.

2. **What We’ll Build**:
   - A reusable `UserCardComponent` that dynamically receives user data and emits a notification when a user is selected.

---

### Steps to Create a Flexible Component

1. **Generate the Child Component**:

   - Create a `UserCardComponent` using Angular CLI:
     ```bash
     ng generate component user-card
     ```

2. **Define Input Properties** (`user-card.component.ts`):

   - Use the `@Input` decorator to accept user data:

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

3. **Create the Child Component Template** (`user-card.component.html`):

   - Bind the `user` property to the template:
     ```html
     <div class="user-card">
       <h3>{{ user?.name }}</h3>
       <p>Age: {{ user?.age }}</p>
       <button (click)="onSelect()">Select</button>
     </div>
     ```

4. **Emit Events from the Child Component** (`user-card.component.ts`):

   - Use the `@Output` decorator and an Angular `EventEmitter` to notify the parent when a user is selected:

     ```typescript
     import { Component, Input, Output, EventEmitter } from "@angular/core";

     @Component({
       selector: "app-user-card",
       templateUrl: "./user-card.component.html",
       styleUrls: ["./user-card.component.css"],
     })
     export class UserCardComponent {
       @Input() user: { name: string; age: number } | undefined;
       @Output() userSelected = new EventEmitter<string>();

       onSelect() {
         if (this.user) {
           this.userSelected.emit(this.user.name);
         }
       }
     }
     ```

5. **Use the Child Component in the Parent Component** (`user.component.html`):

   - Pass data to the `UserCardComponent` and handle the emitted event:
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

6. **Update the Parent Component Logic** (`user.component.ts`):

   - Add the method to handle the event:

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

---

### Key Takeaways:

- **`@Input`** makes components reusable by allowing them to accept dynamic data from the parent component.
- **`@Output`** provides a way for child components to communicate with their parent by emitting events.
- Flexible components make your application modular, reusable, and easier to maintain.
