# Section 2 : Angular essentials components, templates, services & more

## 25. Listening to Events with Event Binding (7 min)

- [Udemy](https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/43788526#overview)

- **Purpose**: Learn how to use Angular’s **event binding** to handle user interactions like button clicks, form submissions, or other DOM events.

---

### Key Concepts

1. **What Is Event Binding?**:

   - Event binding allows you to bind a DOM event (e.g., `click`, `input`, `submit`) to a method in your component class.
   - Syntax: `(event)="method($event)"`

2. **How It Works**:
   - The event is triggered in the template and calls the specified method in the component class.
   - Optionally, `$event` can be passed to the method to access event-specific data.

---

### Steps for Using Event Binding

1. **Define an Event Handler in the Component Class** (`user.component.ts`):

   - Add a method to handle the event:

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

       incrementValue(): void {
         if (this.currentValue < this.maxValue) {
           this.currentValue += 10;
         }
       }

       decrementValue(): void {
         if (this.currentValue > 0) {
           this.currentValue -= 10;
         }
       }
     }
     ```

2. **Bind Events in the Template** (`user.component.html`):

   - Use `(event)` syntax to call the event handler methods:
     ```html
     <div class="progress-bar">
       <div
         class="progress-fill"
         [style.width]="(currentValue / maxValue) * 100 + '%'"
       ></div>
       <p>Progress: {{ (currentValue / maxValue) * 100 | number:'1.0-0' }}%</p>
     </div>
     <div class="controls">
       <button (click)="decrementValue()">Decrease</button>
       <button (click)="incrementValue()">Increase</button>
     </div>
     ```

3. **Style the Progress Bar and Buttons** (`user.component.css`):

   - Add some styles for better presentation:

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

4. **Test the Application**:
   - Start the development server and interact with the progress bar:
     ```bash
     ng serve
     ```
   - Visit `http://localhost:4200` to test the increment and decrement buttons.

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

- Use event binding `(event)="method($event)"` to listen for user interactions.
- Keep event handlers simple and delegate logic to the component class.
- Combine event binding with property binding for responsive, interactive UIs.

---
