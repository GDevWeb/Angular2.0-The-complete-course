# Section 2 : Angular essentials components, templates, services & more

## **28. Introducing Signals**

- [Udemy](https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/43788538#overview)
- [angular - documentation - signals](https://angular.dev/guide/signals)

- **Purpose**: Learn about Angular Signals, a new feature for reactive state management, which simplifies change detection and makes state updates more predictable.

---

### Key Concepts

1. **What Are Signals?**:

   - Signals are a reactive programming feature in Angular designed to track state changes.
   - They provide a declarative way to manage data updates and automatically notify dependent components when the state changes.

2. **Why Use Signals?**:

   - Simplifies state management and eliminates manual subscriptions.
   - Enhances performance by targeting specific state updates.
   - Makes data flow more predictable and easier to debug.

3. **How Signals Work**:
   - Signals hold a value and notify all consumers whenever that value changes.
   - Similar to RxJS Observables but without the need for subscriptions and complex operators.

---

### Steps to Use Signals in Angular

1. **Install Angular Signals (Optional)**:

   - Signals are a new feature; ensure your Angular version supports them. Update Angular if necessary:
     ```bash
     ng update @angular/core @angular/cli
     ```

2. **Define a Signal in the Component Class**:

   - Use Angular’s `signal` function to define a reactive state:

     ```typescript
     import { Component, signal } from "@angular/core";

     @Component({
       selector: "app-user",
       templateUrl: "./user.component.html",
       styleUrls: ["./user.component.css"],
     })
     export class UserComponent {
       currentValue = signal(50); // Define a signal with an initial value
       maxValue = signal(100); // Define another signal

       incrementValue() {
         if (this.currentValue() < this.maxValue()) {
           this.currentValue.set(this.currentValue() + 10); // Update the signal value
         }
       }

       decrementValue() {
         if (this.currentValue() > 0) {
           this.currentValue.set(this.currentValue() - 10); // Update the signal value
         }
       }
     }
     ```

3. **Bind Signals in the Template**:

   - Access the signal value in the template using its callable function:
     ```html
     <div class="progress-bar">
       <div
         class="progress-fill"
         [style.width]="(currentValue() / maxValue()) * 100 + '%'"
       ></div>
       <p>
         Progress: {{ (currentValue() / maxValue()) * 100 | number:'1.0-0' }}%
       </p>
     </div>
     <div class="controls">
       <button (click)="decrementValue()">Decrease</button>
       <button (click)="incrementValue()">Increase</button>
     </div>
     ```

4. **Test Signal Behavior**:
   - Serve the application and verify that the UI updates dynamically when the state changes:
     ```bash
     ng serve
     ```
   - Observe how the `Progress` dynamically reflects changes without manually triggering change detection.

---

### Key Takeaways:

1. **Declarative State Management**:

   - Signals provide a simple, readable approach to managing state and updating the UI.

2. **Automatic Change Detection**:

   - When a signal value changes, Angular automatically updates all dependent templates or computations.

3. **Performance Benefits**:
   - Signals optimize rendering by targeting specific updates rather than triggering full change detection cycles.

---

### Example Use Case:

- **Progress Tracker**:
  - Signals are ideal for dynamic data like progress tracking, user input, or real-time data updates in dashboards.
