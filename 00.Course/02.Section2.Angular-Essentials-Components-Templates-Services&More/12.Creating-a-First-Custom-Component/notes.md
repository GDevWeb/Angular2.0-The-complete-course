# Section 2 : Angular essentials components, templates, services & more

## 12. Creating a First Custom Component

- [Udemy](https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/43788462#overview)

---

- **Purpose**: Understand how to manually create a component to gain insight into Angular's inner workings.

#### **Steps to Create a Header Component**:

1. **Manually Create the Files**:

   - Inside the `src/app` directory, create a new folder named `header`.
   - Inside the `header` folder, manually create the following files:
     - `header.component.ts`: For the component logic.
     - `header.component.html`: For the component’s template.
     - `header.component.css` (or `.scss`): For the component’s styles.

2. **Add Component Logic** (`header.component.ts`):

   - Define the component using the `@Component` decorator:

     ```typescript
     import { Component } from "@angular/core";

     @Component({
       selector: "app-header", // The component's selector for use in templates.
       templateUrl: "./header.component.html", // Path to the template file.
       styleUrls: ["./header.component.css"], // Path to the styles file.
     })
     export class HeaderComponent {
       title: string = "Welcome to My Angular App";
     }
     ```

3. **Create the Template** (`header.component.html`):

   - Add some basic HTML:
     ```html
     <header>
       <h1>{{ title }}</h1>
     </header>
     ```

4. **Style the Component** (`header.component.css`):

   - Add some simple CSS for the header:

     ```css
     header {
       background-color: #f8f9fa;
       padding: 1rem;
       text-align: center;
     }

     h1 {
       margin: 0;
       color: #333;
     }
     ```

5. **Register the Component**:

   - Open the `app.module.ts` file and add the new component to the `declarations` array:

     ```typescript
     import { HeaderComponent } from "./header/header.component";

     @NgModule({
       declarations: [
         AppComponent,
         HeaderComponent, // Add the HeaderComponent here.
       ],
       imports: [BrowserModule],
       providers: [],
       bootstrap: [AppComponent],
     })
     export class AppModule {}
     ```

6. **Use the Component in the App Template**:

   - Open `app.component.html` and add the `app-header` selector:
     ```html
     <app-header></app-header>
     ```

7. **Serve the Application**:
   - Run the development server:
     ```bash
     ng serve
     ```
   - Check the application at `http://localhost:4200` to see your new header!

---

### **Key Takeaways**:

- Manually creating components helps understand how Angular ties together templates, logic, and styles.
- Always register custom components in the `AppModule` to make them available in your application.

---

Let me know how this matches your current progress or if you'd like further refinements!
