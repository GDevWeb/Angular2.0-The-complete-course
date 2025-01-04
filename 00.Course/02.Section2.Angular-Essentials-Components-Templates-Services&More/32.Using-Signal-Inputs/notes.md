# Section 2 : Angular essentials components, templates, services & more

## 32. Using Signal Inputs (8 min)

- [Udemy](https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/43788566#overview)

- **Purpose**: Learn how to use Angular Signals as inputs for child components, enabling reactive and seamless data flow between components.

---

### Key Concepts

1. **What Are Signal Inputs?**:

   - Signals are a reactive programming feature that automatically tracks state changes.
   - Signal inputs allow child components to receive reactive data from parent components.

2. **Why Use Signal Inputs?**:
   - Eliminates the need for manual subscriptions.
   - Provides automatic UI updates whenever the signal changes.
   - Simplifies state management by leveraging Angular's reactivity.

---

### Steps to Use Signal Inputs

1. **Set Up the Parent Component with Signals**:

   - Define a signal in the parent component:

     ```typescript
     import { Component, signal } from "@angular/core";

     @Component({
       selector: "app-user",
       templateUrl: "./user.component.html",
       styleUrls: ["./user.component.css"],
     })
     export class UserComponent {
       userList = signal([
         { name: "John Doe", age: 30 },
         { name: "Jane Smith", age: 25 },
         { name: "Alice Brown", age: 40 },
       ]);
     }
     ```

2. **Define Signal Inputs in the Child Component**:

   - Use the `@Input` decorator to accept signals as inputs:

     ```typescript
     import { Component, Input, computed, Signal } from "@angular/core";

     @Component({
       selector: "app-user-card",
       templateUrl: "./user-card.component.html",
       styleUrls: ["./user-card.component.css"],
     })
     export class UserCardComponent {
       @Input() user!: Signal<{ name: string; age: number }>;

       // Optional: Use `computed` to derive additional reactive data
       userNameLength = computed(() => this.user().name.length);
     }
     ```

3. **Update the Child Component Template** (`user-card.component.html`):

   - Display reactive data from the signal input:
     ```html
     <div class="user-card">
       <h3>{{ user().name }}</h3>
       <p>Age: {{ user().age }}</p>
       <p>Name Length: {{ userNameLength() }}</p>
     </div>
     ```

4. **Use the Child Component in the Parent Template** (`user.component.html`):

   - Pass signal values as inputs using property binding:
     ```html
     <div class="user-list">
       <app-user-card *ngFor="let user of userList()" [user]="signal(user)">
       </app-user-card>
     </div>
     ```

5. **Test Reactive Updates**:

   - Modify the signal data dynamically in the parent component:
     ```typescript
     updateUserName() {
       const updatedUsers = this.userList().map(user =>
         user.name === 'John Doe' ? { ...user, name: 'John Updated' } : user
       );
       this.userList.set(updatedUsers);
     }
     ```
   - Add a button in the parent template to trigger the update:

     ```html
     <button (click)="updateUserName()">Update John's Name</button>
     ```

   - Observe that the UI updates automatically without additional change detection logic.

---

### Key Takeaways:

- **Signal Inputs**:
  - Use `@Input` to pass signals from parent to child components.
  - Signal inputs allow reactive and dynamic UI updates.
- **Computed Properties**:

  - Use `computed` for derived or additional reactive data in child components.

- **Simplified Reactivity**:
  - No need for manual subscriptions or change detection; signals handle updates seamlessly.

---

Let me know if you’re ready to continue to Chapter 33! 🚀
