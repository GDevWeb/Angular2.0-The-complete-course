# Section 2 : Angular Essentials - Components, Templates, Services & More

## **Chapter 18: Understanding Component Communication**

- [udemy](https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/43788490#overview)

---

### **Objective**:

Learn how Angular components communicate with each other using `@Input()`, `@Output()`, and services to share data and respond to events.

---

#### **Key Concepts**:

1. **Parent-to-Child Communication (`@Input()`)**:

   - Pass data from a parent component to a child component.
   - Example:
     ```typescript
     @Input() data: string = '';
     ```

2. **Child-to-Parent Communication (`@Output()` and EventEmitter)**:

   - Emit events from a child component to inform the parent component of changes or actions.
   - Example:

     ```typescript
     @Output() action = new EventEmitter<string>();

     triggerAction() {
       this.action.emit('Action Triggered');
     }
     ```

3. **Using Services for Communication**:
   - Share data across components by leveraging Angular services.
   - This is especially useful for sibling components or deeply nested components.

---

#### **Step-by-Step Guide**:

1. **Ensure `CommonModule` is Imported**:

   - The `*ngFor` directive requires the `CommonModule` to be imported in the module where the component is declared. If you encounter an error like "`NgFor` directive not found", follow these steps:
     - Open the module file where the `SidebarComponent` is declared (e.g., `app.module.ts`).
     - Import the `CommonModule`:
       ```typescript
       import { CommonModule } from "@angular/common";
       ```
     - Add it to the `imports` array:
       ```typescript
       imports: [
         CommonModule,
         // other modules
       ];
       ```

2. **Parent-to-Child Communication with `@Input()`**:

   - Update the `SidebarComponent` to accept a list of links:

     ```typescript
     import { Component, Input } from "@angular/core";

     @Component({
       selector: "app-sidebar",
       templateUrl: "./sidebar.component.html",
       styleUrls: ["./sidebar.component.css"],
     })
     export class SidebarComponent {
       @Input() links: string[] = [];
     }
     ```

   - Update `sidebar.component.html` to display the links dynamically:

     ```html
     <aside>
       <h3>Sidebar Content</h3>
       <ul>
         <li *ngFor="let link of links">{{ link }}</li>
       </ul>
     </aside>
     ```

   - Pass the links from the `AppComponent`:
     ```html
     <app-sidebar [links]="['Home', 'About', 'Contact']"></app-sidebar>
     ```

3. **Child-to-Parent Communication with `@Output()`**:

   - Add an output property in the `SidebarComponent`:

     ```typescript
     import { Component, EventEmitter, Input, Output } from "@angular/core";

     @Component({
       selector: "app-sidebar",
       templateUrl: "./sidebar.component.html",
       styleUrls: ["./sidebar.component.css"],
     })
     export class SidebarComponent {
       @Input() links: string[] = [];
       @Output() linkSelected = new EventEmitter<string>();

       onLinkClick(link: string) {
         this.linkSelected.emit(link);
       }
     }
     ```

   - Update `sidebar.component.html` to emit an event when a link is clicked:

     ```html
     <aside>
       <h3>Sidebar Content</h3>
       <ul>
         <li *ngFor="let link of links" (click)="onLinkClick(link)">
           {{ link }}
         </li>
       </ul>
     </aside>
     ```

   - Handle the event in `AppComponent`:

     ```html
     <app-sidebar
       [links]="['Home', 'About', 'Contact']"
       (linkSelected)="onLinkSelected($event)"
     ></app-sidebar>
     ```

   - Add the method in `app.component.ts`:
     ```typescript
     onLinkSelected(link: string) {
       console.log('Selected Link:', link);
     }
     ```

4. **Using a Service for Sibling Communication**:

   - Create a service:

     ```bash
     ng generate service services/communication
     ```

   - Update the service to store and share data:

     ```typescript
     import { Injectable } from "@angular/core";
     import { BehaviorSubject } from "rxjs";

     @Injectable({
       providedIn: "root",
     })
     export class CommunicationService {
       private linkSource = new BehaviorSubject<string>("");
       currentLink = this.linkSource.asObservable();

       changeLink(link: string) {
         this.linkSource.next(link);
       }
     }
     ```

   - Inject the service into sibling components and subscribe to the data changes:

     ```typescript
     constructor(private communicationService: CommunicationService) {}

     ngOnInit() {
       this.communicationService.currentLink.subscribe(link => {
         console.log('Received Link:', link);
       });
     }
     ```

---

#### **Hands-On Practice**:

1. Pass dynamic data from the parent to the `SidebarComponent` using `@Input()`.
2. Emit events from the `SidebarComponent` to the parent using `@Output()`.
3. Use a service to share data between sibling components.
4. Ensure the `CommonModule` is imported into the appropriate module.

---

Once you’ve completed this, let me know, and we’ll move on to the next chapter!
