# Section 2 : Angular essentials components, templates, services & more

## 35. Using the `output()` Function (8 min)

- [Udemy](https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/43788578#overview)

- **Purpose**: Explore the `output()` function in Angular’s Signals API, a modern way to create reactive outputs that notify consumers about state changes.

---

### Key Concepts

1. **What is `output()` in Angular Signals?**:

   - The `output()` function creates reactive outputs from signals, allowing components to notify other parts of the application about changes.
   - Similar to `EventEmitter`, but designed for use with Angular’s Signals.

2. **Why Use `output()`?**:
   - Provides a seamless integration with Signals, leveraging Angular’s reactivity.
   - Simplifies state management and event handling in signal-driven applications.

---

### Steps for Using `output()` in Angular

1. **Set Up Signals and Outputs in the Child Component**:

   - Use `output()` to create a reactive output for state changes:

     ```typescript
     import {
       Component,
       Input,
       signal,
       output,
       WritableSignal,
     } from "@angular/core";

     @Component({
       selector: "app-user-card",
       templateUrl: "./user-card.component.html",
       styleUrls: ["./user-card.component.css"],
     })
     export class UserCardComponent {
       @Input() user!: { name: string; age: number };
       private selected = signal(false); // Signal for selection state

       @output() isSelected = output(() => this.selected()); // Reactive output

       toggleSelection(): void {
         this.selected.set(!this.selected()); // Toggle the selection state
       }
     }
     ```

2. **Update the Child Component Template** (`user-card.component.html`):

   - Add a button to toggle selection:
     ```html
     <div class="user-card">
       <h3>{{ user.name }}</h3>
       <p>Age: {{ user.age }}</p>
       <button (click)="toggleSelection()">
         {{ selected() ? 'Deselect' : 'Select' }}
       </button>
     </div>
     ```

3. **Handle the Output in the Parent Component**:

   - Bind the `isSelected` output in the parent template:

     ```html
     <div class="user-list">
       <app-user-card
         *ngFor="let user of users"
         [user]="user"
         (isSelected)="onSelectionChange($event)"
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

       onSelectionChange(isSelected: boolean): void {
         console.log("Selection state changed:", isSelected);
       }
     }
     ```

4. **Style the User Card Based on Selection** (`user-card.component.css`):

   - Add conditional styling for the selection state:

     ```css
     .user-card {
       border: 1px solid #ccc;
       padding: 1rem;
       border-radius: 5px;
       background-color: #f9f9f9;
       text-align: center;
       transition: background-color 0.3s;
     }

     .user-card.selected {
       background-color: #d1e7dd;
       border-color: #0f5132;
     }
     ```

   - Update the template to apply the `selected` class dynamically:
     ```html
     <div [class.selected]="selected()" class="user-card">
       <h3>{{ user.name }}</h3>
       <p>Age: {{ user.age }}</p>
       <button (click)="toggleSelection()">
         {{ selected() ? 'Deselect' : 'Select' }}
       </button>
     </div>
     ```

5. **Test the Application**:
   - Serve the app to verify the output and reactive updates:
     ```bash
     ng serve
     ```
   - Observe the console log and visual changes when toggling selection.

---

### Key Takeaways:

- **Reactive Outputs**:
  - The `output()` function integrates seamlessly with Angular Signals to create reactive outputs.
- **Simplified Communication**:

  - `output()` reduces boilerplate compared to `EventEmitter`, as it directly binds signal state to outputs.

- **Dynamic Styling**:
  - Combine Signals and reactive outputs for real-time UI updates based on state changes.

---

Let me know if you’re ready for Chapter 36! 🚀
