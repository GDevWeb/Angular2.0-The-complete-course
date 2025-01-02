# Section 2 : Angular essentials components, templates, services & more

## **26. Managing State & Changing Data**

- [Udemy](https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/43788528#overview)

- **Purpose**: Learn how to manage state in a component and dynamically update the UI when data changes.

---

### Key Concepts

1. **What is State in Angular?**:

   - State refers to the data maintained within a component that determines its appearance or behavior.
   - Managing state involves updating the data and ensuring the UI reflects the changes.

2. **Dynamic Data Updates**:
   - Angular automatically updates the DOM when state changes in the component class due to its **two-way data binding** and change detection.

---

### Steps for Managing State and Changing Data

1. **Define State Variables in the Component Class** (`user.component.ts`):

   - Create properties to hold the state and methods to update the state:

     ```typescript
     import { Component } from "@angular/core";

     @Component({
       selector: "app-user",
       templateUrl: "./user.component.html",
       styleUrls: ["./user.component.css"],
     })
     export class UserComponent {
       currentValue: number = 50;
       maxValue: number = 100;

       updateValue(amount: number): void {
         const newValue = this.currentValue + amount;
         if (newValue >= 0 && newValue <= this.maxValue) {
           this.currentValue = newValue;
         }
       }
     }
     ```

2. **Bind State Variables to the Template** (`user.component.html`):

   - Use **string interpolation** and **event binding** to display and modify state:
     ```html
     <div class="progress-bar">
       <div
         class="progress-fill"
         [style.width]="(currentValue / maxValue) * 100 + '%'"
       ></div>
       <p>Progress: {{ (currentValue / maxValue) * 100 | number:'1.0-0' }}%</p>
     </div>
     <div class="controls">
       <button (click)="updateValue(-10)" [disabled]="currentValue <= 0">
         Decrease
       </button>
       <button (click)="updateValue(10)" [disabled]="currentValue >= maxValue">
         Increase
       </button>
     </div>
     ```

3. **Style the Progress Bar and Buttons** (`user.component.css`):

   - Add styles to reflect the dynamic state:

     ```css
     .progress-bar {
       width: 100%;
       height: 20px;
       background-color: #f3f3f3;
       border: 1px solid #ccc;
       margin-bottom: 1rem;
       position: relative;
     }

     .progress-fill {
       height: 100%;
       background-color: #4caf50;
     }

     .controls {
       display: flex;
       gap: 1rem;
       justify-content: center;
     }

     button {
       padding: 0.5rem 1rem;
       border: none;
       border-radius: 5px;
       background-color: #4caf50;
       color: white;
       cursor: pointer;
       font-size: 1rem;
     }

     button:hover {
       background-color: #45a049;
     }

     button:disabled {
       background-color: #ccc;
       cursor: not-allowed;
     }
     ```

4. **Test the State Updates**:
   - Serve the application and test the dynamic updates:
     ```bash
     ng serve
     ```
   - Open `http://localhost:4200` to interact with the progress bar and buttons.

---

### Example Output in the Browser:

```html
<div class="progress-bar">
  <div style="width: 60%;"></div>
  <p>Progress: 60%</p>
</div>
<div class="controls">
  <button>Decrease</button>
  <button>Increase</button>
</div>
```

---

### Key Takeaways:

- State management involves defining properties and methods in the component class.
- Use Angular’s data-binding features to synchronize state between the component and the template.
- Dynamic updates ensure the UI stays responsive to user interactions.

---

Let me know when you’re ready for Chapter 27!
