# Section 2 : Angular Essentials - Components, Templates, Services & More

## 13. [Optional] JavaScript Refresher: Classes, Properties & More

- **Key Focus**: Angular extensively uses classes, a feature supported by JavaScript and enhanced by TypeScript. This chapter serves as a refresher for understanding and using classes effectively.

### What Are Classes in JavaScript?

- **Definition**: A class is a blueprint for creating objects. It encapsulates properties (data) and methods (behavior).
- **Basic Syntax**:

  ```javascript
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    greet() {
      console.log("Hi, I am " + this.name);
    }
  }
  ```

- **Instantiating Classes**:

  ```javascript
  const person1 = new Person("Max", 35);
  const person2 = new Person("Anna", 32);

  console.log(person1.age); // Output: 35
  person2.greet(); // Output: Hi, I am Anna
  ```

### Classes in Angular

- **Angular Context**:
  - Angular components are defined as classes, but you **never instantiate them manually**.
  - Example:
    ```typescript
    @Component({})
    class SomeComponent {}
    ```
  - Angular uses decorators like `@Component` to add metadata and configuration to classes.

### TypeScript Enhancements

- **Decorators**:

  - Angular uses decorators like `@Component` to attach metadata to classes.
    ```typescript
    @Component({
      selector: "app-header",
      templateUrl: "./header.component.html",
    })
    class HeaderComponent {}
    ```

- **Access Modifiers**:

  - TypeScript introduces keywords like `private`, `public`, and `protected` to control access:

    ```typescript
    class Example {
      public name: string; // Accessible anywhere
      private age: number; // Accessible only within the class
      protected gender: string; // Accessible within the class and subclasses

      constructor(name: string, age: number, gender: string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
      }
    }
    ```

### Key Takeaways

- Classes create reusable blueprints for objects.
- Angular uses classes to define components, but instantiation is handled by Angular itself.
- TypeScript enhances JavaScript classes by adding features like access modifiers and decorators.

### Resources for Further Learning

- **JavaScript Classes**: [MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- **TypeScript Classes**: [TypeScript Documentation](https://www.typescriptlang.org/docs/handbook/classes.html)
