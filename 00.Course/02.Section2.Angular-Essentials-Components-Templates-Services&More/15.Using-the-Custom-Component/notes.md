# Section 2 : Angular Essentials - Components, Templates, Services & More

## **Chapter 15: Using the Custom Component**

- [udemy](https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/43788472#overview)

---

### **Objective**:

Learn how to integrate and reuse your custom component in different parts of your Angular application.

---

#### **Key Concepts**:

1. **Reusability of Components**:

   - Angular components can be reused in multiple places by using their selectors.
   - This reduces duplication and improves maintainability.

2. **Dynamic Inputs**:

   - Inputs allow you to make the component adaptable by passing different data each time it's used.

3. **Encapsulation**:
   - Each component operates independently with its own template, styles, and logic.

---

#### **Step-by-Step Guide**:

1. **Use the Header Component**:

   - Open `app.component.html` and integrate the `HeaderComponent`:
     ```html
     <app-header subtitle="Welcome to EasyTask" bgColor="#3b3b3b"></app-header>
     ```

2. **Reuse the Header Component Elsewhere**:

   - You can include the `HeaderComponent` in other components. For example:
     - Generate a new component:
       ```bash
       ng generate component components/dashboard
       ```
     - Use the `HeaderComponent` in `dashboard.component.html`:
       ```html
       <app-header subtitle="Dashboard Overview" bgColor="#6200ea"></app-header>
       ```

3. **Customize Each Usage**:

   - Each instance of `HeaderComponent` can have different `subtitle` and `bgColor` values, making it reusable in various parts of the app.

4. **Refactor App Layout**:
   - Create placeholders for other components:
     ```html
     <app-header subtitle="Manage Your Tasks"></app-header>
     <div class="main-content">
       <router-outlet></router-outlet>
     </div>
     ```

---

#### **Modern Angular Practices**:

1. **Keep Components Modular**:

   - Avoid embedding unrelated logic in the `HeaderComponent`. Keep it focused on rendering the header.

2. **Use Strong Typing**:

   - Ensure `@Input()` properties have explicit types. For example:
     ```typescript
     @Input() subtitle: string = '';
     @Input() bgColor: string = '#ffffff';
     ```

3. **Encapsulation**:
   - Encapsulate styles using Angular’s default `ViewEncapsulation` to avoid conflicts with other components.

---

#### **Hands-On Practice**:

1. Use the **HeaderComponent** in at least two places in your app:

   - The `AppComponent` (main entry).
   - A new `DashboardComponent`.

2. Pass different `subtitle` and `bgColor` inputs for each usage.

---

Once you're done with this, let me know, and we’ll move on to **Chapter 16: Styling the Header Component & Adding an Image**! 😊
