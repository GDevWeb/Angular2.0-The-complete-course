# Section 2 : Angular Essentials - Components, Templates, Services & More

## Chapter 10: A New Starting Project & Analyzing The Project Structure

- [udemy](https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/43788456#overview)
- [udemy - starting project](code/01-starting-project.zip)

---

### **Objective**:

To set up a new Angular project and understand the key files and structure that Angular provides by default.

---

#### **Step 1: Create a New Angular Project**

1. Open your terminal or command line.
2. Run the following command to scaffold a new Angular project:

   ```bash
   ng new EasyTask
   ```

   - **Options to Select**:
     - Add **Angular routing**: Yes.
     - Choose **CSS** for styling (or another preprocessor as needed).

3. Navigate to your project directory:
   ```bash
   cd EasyTask
   ```
4. Start the development server:
   ```bash
   ng serve
   ```
   - Open `http://localhost:4200/` to view your default Angular app.

---

#### **Step 2: Analyzing Angular’s Default Project Structure**

When you generate a new project, Angular creates a default structure. Key folders and files:

1. **`src/`**:

   - The main source code for the Angular application.

2. **`src/app/`**:

   - Contains the main application logic and components.
   - Default files:
     - **`app.component.ts`**: Defines the root component.
     - **`app.module.ts`**: The root module that declares and imports other modules/components.

3. **`angular.json`**:

   - Configuration file for the Angular CLI.
   - Manages project-wide settings like file structure and build configurations.

4. **`package.json`**:

   - Lists project dependencies and scripts.
   - Use `npm install` to ensure all dependencies are installed.

5. **`tsconfig.json`**:

   - Configures TypeScript compiler options.
   - Example: strict typing settings.

6. **`main.ts`**:

   - The entry point for the application.
   - Boots the `AppModule` to start the Angular app.

7. **`index.html`**:
   - The main HTML file.
   - The Angular app is injected here via the `<app-root>` tag.

---

#### **Modern Angular Practices**

- Always use TypeScript features like type annotations for maintainable and error-free code.
- Avoid directly editing the `main.ts` unless absolutely necessary.
- Organize additional components and modules into their respective folders to maintain scalability.

---

#### **Exercise**:

1. Open the project in your preferred IDE (e.g., Visual Studio Code).
2. Explore and make notes on the following:
   - **What does the `app.component.html` file display by default?**
     - This is the HMTL has rendered for the global structure project
   - **Where is the `<app-root>` defined and used?**
     - At the root of the project
   - **How does the `main.ts` bootstrap the application?**
     - Boots the `AppModule` to start the Angular app.
3. Run the app and edit `app.component.html` to display a custom message (e.g., "Welcome to EasyTask!").
   1. message = 'Hello, welcome in this fabulous Journey is Angular';

---

#### **Next Step**:

Move on to creating your first custom component in the next chapter.
