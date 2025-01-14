# # Section 2 : Angular Essentials - Components, Templates, Services & More

## **Chapter 13: (Optional) JavaScript Refresher - Classes, Properties & More**

- [udemy](https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/43797674#overview)

---

### **Objective**:

This chapter provides a quick refresher on JavaScript concepts that are essential for Angular development, especially for working with components, services, and data binding.

---

#### **Key Concepts to Review**:

1. **Classes**:

   - Angular relies heavily on classes to define components, services, and modules.
   - Example:

     ```typescript
     class Task {
       title: string;
       description: string;

       constructor(title: string, description: string) {
         this.title = title;
         this.description = description;
       }

       displayTask() {
         return `${this.title}: ${this.description}`;
       }
     }

     const myTask = new Task("Master Angular", "Learn all Angular features.");
     console.log(myTask.displayTask()); // Output: Master Angular: Learn all Angular features.
     ```

2. **Properties**:

   - Properties are variables attached to a class that store data.
   - In Angular, component properties are often used to pass data between components.
   - Example:
     ```typescript
     class User {
       name: string = "Jasmine Washington";
     }
     ```

3. **Methods**:

   - Functions defined inside a class are called methods.
   - Example:

     ```typescript
     class User {
       name: string;

       constructor(name: string) {
         this.name = name;
       }

       greet() {
         return `Hello, ${this.name}!`;
       }
     }

     const user = new User("Jasmine");
     console.log(user.greet()); // Output: Hello, Jasmine!
     ```

4. **Modules**:

   - JavaScript uses modules (e.g., `import` and `export`) to organize code.
   - Example:

     ```typescript
     export class Task {
       title: string;
       description: string;
     }

     import { Task } from "./task.model";
     ```

---

#### **Angular Relevance**:

- **Classes** are used for components, services, and models in Angular.
- **Properties and Methods** help manage data and logic in components and services.
- **Modules** structure an Angular application for better maintainability.

---

#### **Hands-On Practice**:

To solidify this refresher:

1. Create a simple `Task` class in your project:

   ```typescript
   export class Task {
     constructor(
       public title: string,
       public description: string,
       public dueDate: string
     ) {}
   }
   ```

2. Use this class in the `TaskService`:

   ```typescript
   import { Injectable } from "@angular/core";
   import { Task } from "../models/task.model";

   @Injectable({
     providedIn: "root",
   })
   export class TaskService {
     tasks: Task[] = [
       new Task("Master Angular", "Learn all Angular features.", "2025-12-31"),
       new Task(
         "Build Prototype",
         "Create an e-commerce prototype.",
         "2024-05-31"
       ),
     ];

     getTasks() {
       return this.tasks;
     }
   }
   ```

3. Update your `task-panel` to use this new structure:

   ```typescript
   import { Component, OnInit } from "@angular/core";
   import { TaskService } from "../../services/task.service";
   import { Task } from "../../models/task.model";

   @Component({
     selector: "app-task-panel",
     templateUrl: "./task-panel.component.html",
     styleUrls: ["./task-panel.component.scss"],
   })
   export class TaskPanelComponent implements OnInit {
     tasks: Task[] = [];

     constructor(private taskService: TaskService) {}

     ngOnInit() {
       this.tasks = this.taskService.getTasks();
     }
   }
   ```

---

Once you've completed this, let me know, and we'll move on to **Chapter 14: Configuring the Custom Component**!
