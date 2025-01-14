# Section 2 : Angular Essentials - Components, Templates, Services & More

## \*\*\*\*

- [udemy]()

---

### Step 1: **Initial Setup**

#### Goal:

Set up the Angular project with a clean structure for components, services, and data handling.

---

#### Task 1: Create a New Angular Project

1. Open your terminal and run:
   ```bash
   ng new EasyTask
   ```
2. Choose **SCSS** as the default stylesheet format (optional, based on preference).
3. Navigate to the project folder:
   ```bash
   cd EasyTask
   ```

---

#### Task 2: Create the Basic Component Structure

1. Create the following components:
   ```bash
   ng generate component components/user-list
   ng generate component components/task-panel
   ng generate component components/add-task-modal
   ```
2. These components will handle:
   - **User List**: Displays the list of users (sidebar).
   - **Task Panel**: Displays tasks for the selected user.
   - **Add Task Modal**: Allows adding new tasks.

---

#### Task 3: Create a Mock Data Service

1. Generate a service for managing data:
   ```bash
   ng generate service services/task
   ```
2. Add mock data for users and tasks in `task.service.ts`:

   ```typescript
   import { Injectable } from "@angular/core";

   @Injectable({
     providedIn: "root",
   })
   export class TaskService {
     users = [
       { id: 1, name: "Jasmine Washington" },
       { id: 2, name: "Marcus Johnson" },
       { id: 3, name: "Emily Thompson" },
     ];

     tasks = [
       {
         id: 1,
         userId: 1,
         title: "Master Angular",
         dueDate: "2025-12-31",
         summary: "Learn all the basic and advanced features of Angular.",
       },
       {
         id: 2,
         userId: 2,
         title: "Build First Prototype",
         dueDate: "2024-05-31",
         summary: "Build a first prototype of the online shop website.",
       },
     ];

     getUsers() {
       return this.users;
     }

     getTasksByUserId(userId: number) {
       return this.tasks.filter((task) => task.userId === userId);
     }
   }
   ```

---

#### Task 4: Display the User List

1. Update `user-list.component.ts`:

   ```typescript
   import { Component, OnInit } from "@angular/core";
   import { TaskService } from "../../services/task.service";

   @Component({
     selector: "app-user-list",
     templateUrl: "./user-list.component.html",
     styleUrls: ["./user-list.component.scss"],
   })
   export class UserListComponent implements OnInit {
     users: any[] = [];

     constructor(private taskService: TaskService) {}

     ngOnInit() {
       this.users = this.taskService.getUsers();
     }
   }
   ```

2. Update `user-list.component.html`:
   ```html
   <ul>
     <li *ngFor="let user of users">{{ user.name }}</li>
   </ul>
   ```

---

#### Task 5: Link User Selection to the Task Panel

1. Update `task-panel.component.ts` to receive the selected user ID (mock initially):

   ```typescript
   import { Component, Input, OnInit } from "@angular/core";
   import { TaskService } from "../../services/task.service";

   @Component({
     selector: "app-task-panel",
     templateUrl: "./task-panel.component.html",
     styleUrls: ["./task-panel.component.scss"],
   })
   export class TaskPanelComponent implements OnInit {
     @Input() userId!: number;
     tasks: any[] = [];

     constructor(private taskService: TaskService) {}

     ngOnInit() {
       this.tasks = this.taskService.getTasksByUserId(this.userId);
     }
   }
   ```

2. Update `task-panel.component.html` to display tasks:
   ```html
   <div *ngFor="let task of tasks">
     <h3>{{ task.title }}</h3>
     <p>{{ task.summary }}</p>
     <small>Due: {{ task.dueDate }}</small>
   </div>
   ```

---

#### End of Session Goals:

- Ensure the **user list** is displayed dynamically.
- Tasks update dynamically based on a hardcoded `userId` (e.g., `userId = 1`).

---

Let me know once you’ve completed these steps, or if you need further clarification or code snippets!
