# Section 2 : Angular Essentials - Components, Templates, Services & More

## **Chapter 14: Configuring the Custom Component**

- [udemy](https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/43788468#overview)

---

#### **Objective**:

Learn to configure your custom component by passing data into it via `@Input()` properties and enhancing its dynamic capabilities.

---

#### **Key Concepts**:

1. **`@Input()` Decorator**:

   - Used to pass data from a parent component to a child component.
   - Allows the parent to control the child component's behavior or content dynamically.

   Example:

   ```typescript
   import { Component, Input } from "@angular/core";

   @Component({
     selector: "app-header",
     templateUrl: "./header.component.html",
   })
   export class HeaderComponent {
     @Input() subtitle: string = "Default Subtitle";
   }
   ```

   - The `subtitle` property will now accept values passed by the parent component.

---

#### **Step-by-Step Guide**:

1. **Update the HeaderComponent**:

   - Open `header.component.ts` and add an `@Input()` property for `subtitle`:

     ```typescript
     import { Component, Input } from "@angular/core";

     @Component({
       selector: "app-header",
       templateUrl: "./header.component.html",
       styleUrls: ["./header.component.css"],
     })
     export class HeaderComponent {
       @Input() subtitle: string = "Manage your tasks effortlessly";
       title: string = "EasyTask";
     }
     ```

2. **Update the Template**:

   - Modify `header.component.html` to display the subtitle:
     ```html
     <header>
       <h1>{{ title }}</h1>
       <h2>{{ subtitle }}</h2>
     </header>
     ```

3. **Pass Data from the Parent Component**:

   - Open `app.component.html` and pass a value for the `subtitle` input:

     ```html
     <app-header
       subtitle="Enterprise-level task management without friction"
     ></app-header>
     <router-outlet></router-outlet>
     ```

   - The `subtitle` will now display dynamically in the header component.

4. **Optional: Add More Inputs**:

   - Add another input for customizing the background color:

     ```typescript
     @Input() bgColor: string = '#6200ea';
     ```

   - Update `header.component.css`:

     ```css
     header {
       background-color: {{ bgColor }};
       color: white;
       padding: 1rem;
       text-align: center;
     }
     ```

   - Pass the `bgColor` from the parent component:
     ```html
     <app-header
       subtitle="Manage tasks with ease"
       bgColor="#3b3b3b"
     ></app-header>
     ```

---

#### **Hands-On Practice**:

1. Configure the **HeaderComponent** to:

   - Accept a dynamic subtitle.
   - Optionally accept a background color for styling.

2. Verify that the changes dynamically update the header component.

---

Once you’ve completed this, let me know, and we’ll move on to **Chapter 15: Using the Custom Component**! 😊
