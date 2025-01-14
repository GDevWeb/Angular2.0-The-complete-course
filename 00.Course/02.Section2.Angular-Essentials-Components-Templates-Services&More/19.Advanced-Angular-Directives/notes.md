# Section 2 : Angular Essentials - Components, Templates, Services & More

## **Chapter 19: Advanced Angular Directives**

- [udemy](https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/43788498#overview)

---

### **Objective**:

Understand and implement advanced Angular directives to enhance the functionality and interactivity of your components.

---

#### **Key Concepts**:

1. **What Are Directives?**

   - Directives are special markers in Angular that attach custom behavior to elements in the DOM.
   - Three types of directives:
     - **Structural Directives**: Alter the structure of the DOM (e.g., `*ngIf`, `*ngFor`).
     - **Attribute Directives**: Modify the appearance or behavior of an element (e.g., `ngClass`, `ngStyle`).
     - **Custom Directives**: Create your own reusable directive for specific tasks.

2. **Structural Directives**:

   - Built-in directives like `*ngIf` and `*ngFor` are powerful tools to control what gets rendered in the DOM.

3. **Attribute Directives**:

   - These directives modify the styling or behavior of elements without altering the DOM structure.

4. **Custom Directives**:
   - Allow you to create reusable logic and behavior tied to DOM elements.

---

#### **Step-by-Step Guide**:

1. **Using Built-in Structural Directives**:

   - Update the `SidebarComponent` to conditionally display links using `*ngIf`:
     ```html
     <aside>
       <h3>Sidebar Content</h3>
       <ul *ngIf="links && links.length > 0; else noLinks">
         <li *ngFor="let link of links">{{ link }}</li>
       </ul>
       <ng-template #noLinks>
         <p>No links available.</p>
       </ng-template>
     </aside>
     ```

2. **Using Built-in Attribute Directives**:

   - Add styles dynamically using `ngClass` and `ngStyle`:

     ```html
     <li
       *ngFor="let link of links"
       [ngClass]="{ 'active': link === selectedLink }"
       [ngStyle]="{ 'color': link === selectedLink ? 'blue' : 'black' }"
     >
       {{ link }}
     </li>
     ```

   - Update the `SidebarComponent` to handle active link selection:

     ```typescript
     selectedLink: string = '';

     onLinkClick(link: string) {
       this.selectedLink = link;
     }
     ```

3. **Creating a Custom Directive**:

   - Generate a new directive using the Angular CLI:

     ```bash
     ng generate directive directives/highlight
     ```

   - Update the directive to change the background color of an element on hover:

     ```typescript
     import { Directive, ElementRef, HostListener, Input } from "@angular/core";

     @Directive({
       selector: "[appHighlight]",
     })
     export class HighlightDirective {
       @Input("appHighlight") highlightColor: string = "yellow";

       constructor(private el: ElementRef) {}

       @HostListener("mouseenter") onMouseEnter() {
         this.el.nativeElement.style.backgroundColor = this.highlightColor;
       }

       @HostListener("mouseleave") onMouseLeave() {
         this.el.nativeElement.style.backgroundColor = "";
       }
     }
     ```

   - Use the directive in `sidebar.component.html`:
     ```html
     <li
       *ngFor="let link of links"
       appHighlight="lightblue"
       (click)="onLinkClick(link)"
     >
       {{ link }}
     </li>
     ```

---

#### **Hands-On Practice**:

1. Use `*ngIf` and `*ngFor` to dynamically display or hide content in the `SidebarComponent`.
2. Add dynamic styles using `ngClass` and `ngStyle`.
3. Create a custom directive to enhance DOM elements with hover effects.

---

Once you've completed this chapter, let me know, and we’ll move on to the next one!
