# Section 1 : Getting Started

## 5. Creating A New Angular Project

- [Udemy](https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/43778658#overview)

### Tools and Prerequisites

- **Node.js**: Ensure that Node.js is installed on your system. You can download it from [Node.js Official Website](https://nodejs.org/) and verify the installation using:
  ```bash
  node -v
  npm -v
  ```
- **Angular CLI**: Install Angular’s Command-Line Interface (CLI) globally by running the following command:
  ```bash
  npm install -g @angular/cli
  ```
  Verify the installation with:
  ```bash
  ng version
  ```

### Steps to Create a New Angular Project

1. **Install Angular CLI**

   - Open a terminal or command prompt.
   - Install Angular CLI globally with the command:
     ```bash
     npm install -g @angular/cli
     ```
   - Confirm the installation by running:
     ```bash
     ng version
     ```

2. **Create a New Project**

   - Use the Angular CLI to create a new project:
     ```bash
     ng new project-name
     ```
   - Replace `project-name` with your desired project name.
   - You will be prompted to configure options such as:
     - **Routing**: Choose Yes or No depending on whether your project needs a router.
     - **Style**: Select your preferred stylesheet format (CSS, SCSS, etc.).
   - Angular CLI will generate the project files and install the required dependencies automatically.

3. **Navigate to the Project Folder**

   - Once the project is created, navigate to its directory:
     ```bash
     cd project-name
     ```

4. **Serve the Application**
   - Start the development server with:
     ```bash
     ng serve
     ```
   - By default, the app will be available at `http://localhost:4200/`.
   - Open this URL in a web browser to see the default Angular welcome screen.

### Understanding the Project Structure

- **src/app**: Main folder containing your application’s components, templates, and styles.
- **angular.json**: Configuration file for the Angular CLI.
- **package.json**: Lists dependencies and project-specific scripts.
- **node_modules**: Contains installed dependencies from npm.
- **src/assets**: A directory for static files like images or icons.
- **src/environments**: Configuration files for different environments (e.g., development and production).

### Best Practices

- **Version Control**:

  - Initialize a Git repository for your project using:
    ```bash
    git init
    git add .
    git commit -m "Initial commit"
    ```
  - Regularly commit your changes and push to a remote repository like GitHub.

- **Meaningful Naming**:

  - Use meaningful names for your project and components.

- **Keep Dependencies Updated**:

  - Periodically update project dependencies to their latest stable versions using:
    ```bash
    npm update
    ```

- **Use Angular CLI Commands**:
  - Take advantage of Angular CLI for generating components, services, and modules to maintain consistency and save time. Examples:
    ```bash
    ng generate component component-name
    ng generate service service-name
    ```

### Troubleshooting Tips

- **Port Conflicts**:

  - If the default port 4200 is in use, run the development server on a different port using:
    ```bash
    ng serve --port 4300
    ```

- **CLI Version Mismatch**:
  - If you encounter issues due to mismatched Angular CLI versions, update it globally:
    ```bash
    npm uninstall -g @angular/cli
    npm install -g @angular/cli
    ```

### Next Steps

- Start exploring the default files created by Angular CLI.
- Learn how to create and use components to build dynamic applications.
