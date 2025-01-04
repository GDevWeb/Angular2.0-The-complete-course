# Section 2 : Angular essentials components, templates, services & more

## 37. Exercise: Create a Configurable Component

- [Udemy](https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/43788584#overview)
- [Udemy - screen - exercise](https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/43788584#overview)

---

### Objective:

Create a `Tasks` component (`app-tasks`) that dynamically receives and outputs the name of a selected user. The component will leverage Angular’s `@Input` and `@Output` decorators to make it configurable and reactive.

---

### Key Features:

1. **Input**:
   - Receive an array of users from the parent component.
2. **Output**:
   - Emit the name of the selected user when a task is clicked.
3. **Dynamic Styling**:
   - Highlight the selected task with conditional classes.
4. **User Search**:
   - Use the provided `DUMMY_USERS.find(user => user.id === selectedUserId)` logic to find a user by their ID.

---

### Steps to Create the `Tasks` Component

#### 1. Generate the Component:

Create the `Tasks` component:

```bash
ng generate component tasks
```

---

#### 2. Define Inputs and Outputs (`tasks.component.ts`):

Add `@Input` to accept the `users` array and `@Output` to emit the selected user name:

```typescript
import { Component, Input, Output, EventEmitter } from "@angular/core";

interface User {
  id: number;
  name: string;
}

@Component({
  selector: "app-tasks",
  templateUrl: "./tasks.component.html",
  styleUrls: ["./tasks.component.css"],
})
export class TasksComponent {
  @Input() users: User[] = [];
  @Output() userSelected = new EventEmitter<string>();

  selectedUserId: number | null = null;

  selectUser(userId: number) {
    this.selectedUserId = userId;
    const user = this.users.find((user) => user.id === userId);
    if (user) {
      this.userSelected.emit(user.name);
    }
  }
}
```

---

#### 3. Create the Template (`tasks.component.html`):

Display the user list and highlight the selected user:

```html
<div class="tasks">
  <ul>
    <li
      *ngFor="let user of users"
      [class.selected]="user.id === selectedUserId"
      (click)="selectUser(user.id)"
    >
      {{ user.name }}
    </li>
  </ul>
  <div *ngIf="selectedUserId !== null" class="selected-user">
    Selected User: {{ users.find(user => user.id === selectedUserId)?.name }}
  </div>
</div>
```

---

#### 4. Style the Component (`tasks.component.css`):

Add styles for the list and selected user:

```css
.tasks ul {
  list-style: none;
  padding: 0;
}

.tasks li {
  padding: 10px;
  cursor: pointer;
  background-color: #f4f4f9;
  border: 1px solid #ddd;
  margin-bottom: 5px;
  border-radius: 4px;
}

.tasks li.selected {
  background-color: #6200ea;
  color: white;
}

.selected-user {
  margin-top: 20px;
  font-size: 1.2rem;
  color: #333;
}
```

---

#### 5. Use the Component in the Parent (`app.component.ts`):

Provide the user data (`DUMMY_USERS`) and handle the `userSelected` event:

```typescript
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  dummyUsers = [
    { id: 1, name: "Jasmine Washington" },
    { id: 2, name: "Emily Thompson" },
    { id: 3, name: "Marcus Johnson" },
    { id: 4, name: "David Miller" },
  ];

  selectedUserName: string | null = null;

  onUserSelected(userName: string) {
    this.selectedUserName = userName;
  }
}
```

---

#### 6. Update the Parent Template (`app.component.html`):

Pass the `users` array and handle the `userSelected` event:

```html
<app-tasks [users]="dummyUsers" (userSelected)="onUserSelected($event)">
</app-tasks>
<div *ngIf="selectedUserName" class="output">
  <p>You selected: {{ selectedUserName }}</p>
</div>
```

---

### 7. Test the Application:

Run the app to verify functionality:

```bash
ng serve
```

- Ensure that clicking a user in the list highlights it and displays the selected user’s name.

---

### Expected Behavior:

- The list of users appears dynamically.
- Clicking a user highlights it and emits their name to the parent.
- The parent component displays the selected user’s name.

---

Let me know if you need additional assistance or refinements! 🚀
