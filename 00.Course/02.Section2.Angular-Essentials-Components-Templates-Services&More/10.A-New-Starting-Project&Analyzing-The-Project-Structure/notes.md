# Section 2 : Angular essentials components, templates, services & more

## 10. A New Starting Project & Analyzing The Project Structure

- [Udemy](https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/43788456#overview)
- [Udemy - starting project - github](https://github.com/mschwarzmueller/angular-complete-guide-course-resources/blob/main/attachments/02-essentials/01-starting-project.zip)

- **Purpose**: Understand the structure of an Angular project and get familiar with its components and configuration files.
- **Key Steps**:

  1. **Creating a New Project**: Start with a fresh Angular project using Angular CLI:
     ```bash
     ng new project-name
     cd project-name
     ```
  2. **Serving the Project**: Use `ng serve` to launch the app on `http://localhost:4200/`.

- **Analyzing the Project Structure**:

  - **src/app**: Main folder containing application logic, components, and styles.
  - **angular.json**: Configures Angular CLI settings and build options.
  - **package.json**: Lists dependencies and npm scripts.
  - **node_modules**: Holds all installed dependencies.
  - **src/environments**: Environment-specific configurations for development and production.

- **Key Takeaways**:
  - Each file and folder has a specific role in the Angular ecosystem.
  - Use the CLI-generated structure to keep projects organized and scalable.
