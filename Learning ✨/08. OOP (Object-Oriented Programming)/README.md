# Object-Oriented Programming (OOP) 🎰

# Table of Contents

1. [Introduction](#introduction)
2. [Pillars of Object-Oriented Programming](#pillars-of-object-oriented-programming)
   - [Encapsulation](#encapsulation)
   - [Inheritance](#inheritance)
   - [Abstraction](#abstraction)
   - [Polymorphism](#polymorphism)
3. [ES6 Class Syntax](#es6-class-syntax)
   - [Example: Creating and Using a Class](#example-creating-and-using-a-class)
4. [Inheritance](#inheritance-1)
   - [Example: Extending a Class](#example-extending-a-class)
5. [Encapsulation](#encapsulation-1)
   - [Example: Encapsulation in Action](#example-encapsulation-in-action)
6. [Polymorphism](#polymorphism-1)
   - [Example: Polymorphism in Practice](#example-polymorphism-in-practice)
7. [Practice Coding Questions](#practice-coding-questions)
8. [Conclusion](#conclusion)
9. 
## Introduction 📜

Object-Oriented Programming (OOP) organizes code around objects, each containing data (properties) and actions (methods). This approach enhances code structure, promotes reuse, and simplifies maintenance. JavaScript supports OOP through its prototype-based nature and ES6 class syntax.

## Pillars of Object-Oriented Programming:

1. **Encapsulation** 💡: Combines data and methods into objects, ensuring data security and promoting code reuse through well-defined interfaces.

2. **Inheritance** 🏛️: Allows new classes (subclasses) to inherit properties and methods from existing classes (superclasses), facilitating code reuse and establishing hierarchical relationships between classes.

3. **Abstraction** 🌟: Simplifies complex implementation details behind easy-to-use interfaces, enabling developers to work at higher levels of abstraction without needing to understand internal complexities.

4. **Polymorphism** 🎭: Enables objects to be treated as instances of their parent class or their own class, allowing methods to be defined in multiple forms based on the object they operate on, enhancing flexibility in code design.


## ES6 Class Syntax 📝
ES6 introduced a more intuitive syntax for defining classes in JavaScript, making it easier to implement OOP principles.

### Example: Creating and Using a Class 🐾
```javascript
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  displayInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}

// Create an instance of Animal
let animal = new Animal('Leo', 5);
animal.displayInfo(); // Output: Name: Leo, Age: 5
```

### Explanation:
- **Class Definition**: `Animal` is defined using the `class` keyword, with a `constructor` method for initializing `name` and `age` properties.
- **Method**: `displayInfo()` method prints the name and age of the animal.

## Inheritance 🧬
Inheritance allows one class (subclass) to inherit properties and methods from another class (superclass), promoting code reuse and hierarchy.

### Example: Extending a Class 🐶
```javascript
class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age); // Call to superclass constructor
    this.breed = breed;
  }

  displayInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}, Breed: ${this.breed}`);
  }

  bark() {
    console.log('Woof woof! 🐕');
  }
}

// Create an instance of Dog
let dog = new Dog('Buddy', 3, 'Labrador');
dog.displayInfo(); // Output: Name: Buddy, Age: 3, Breed: Labrador
dog.bark();        // Output: Woof woof! 🐕
```

### Explanation:
- **Inheritance**: `Dog` extends `Animal`, inheriting its `name` and `age` properties and `displayInfo()` method.
- **Method Overriding**: `displayInfo()` method is overridden in `Dog` class to include `breed` information.
- **New Method**: `bark()` method is added to `Dog` class for specific behavior.

## Encapsulation 🔒
Encapsulation bundles data (properties) and methods into a single unit (object), protecting data from direct modification and promoting code maintainability.

### Example: Encapsulation in Action 🚗
```javascript
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  get age() {
    return new Date().getFullYear() - this.year;
  }

  displayInfo() {
    console.log(`Car: ${this.make} ${this.model} (${this.age} years old) 🚗`);
  }
}

// Create an instance of Car
let myCar = new Car('Toyota', 'Camry', 2018);
myCar.displayInfo(); // Output: Car: Toyota Camry (6 years old) 🚗
```

### Explanation:
- **Private Properties**: `make`, `model`, and `year` are encapsulated within `Car` class.
- **Getter Method**: `age` computes the age of the car based on the current year.
- **Method**: `displayInfo()` method prints car details including computed age.

## Polymorphism 🎨
Polymorphism allows methods to be overridden in subclasses, enabling different implementations of the same method across different classes.

### Example: Polymorphism in Practice 🌟
```javascript
class Shape {
  constructor(color) {
    this.color = color;
  }

  getArea() {
    throw new Error('Method getArea() must be implemented');
  }
}

class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }

  getArea() {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  constructor(color, width, height) {
    super(color);
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

// Usage of polymorphism
let circle = new Circle('Red', 5);
let rectangle = new Rectangle('Blue', 4, 6);

console.log(circle.getArea());    // Output: ~78.54
console.log(rectangle.getArea()); // Output: 24
```

### Explanation:
- **Abstract Class**: `Shape` defines an abstract class with `getArea()` method that must be implemented by subclasses.
- **Polymorphism**: `Circle` and `Rectangle` implement `getArea()` differently, showing polymorphic behavior based on object type.

## Practice Coding Questions 🏋️‍♂️
To master OOP in JavaScript, practice solving the following coding questions:
- Implement a `Person` class with properties like `name` and `age`, and methods like `greet()`.
- Create a `BankAccount` class with methods for `deposit()` and `withdraw()`, ensuring proper encapsulation.
- Extend the `Shape` hierarchy with additional shapes and implement their respective `getArea()` methods.

## Conclusion 🎉
Mastering OOP in JavaScript through practical examples and coding questions enhances code organization, reusability, and maintainability. Use the provided examples as starting points and practice regularly to solidify your understanding.
