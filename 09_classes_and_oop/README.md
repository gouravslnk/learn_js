# Object-Oriented Programming - 09_classes_and_oop

This folder covers **Object-Oriented Programming (OOP)** in JavaScript, including classes, inheritance, prototypes, and design patterns.


### 1. **OOP Fundamentals** (`01_oops.js`)

**Object-Oriented Programming Concepts:**
- **Encapsulation** - Bundling data and methods together
- **Inheritance** - Creating new classes based on existing ones
- **Polymorphism** - Same interface, different implementations
- **Abstraction** - Hiding complex implementation details

**Object Creation Methods:**

**1. Object Literal:**
```javascript
const user = {
    name: "John",
    login: function() { /* method */ }
};
```

**2. Constructor Function (Pre-ES6):**
```javascript
function User(name, email) {
    this.name = name;
    this.email = email;
    this.login = function() { /* method */ };
}

const user1 = new User("John", "john@example.com");
```

**Key Concepts:**
- `this` keyword in constructor functions
- `new` keyword for creating instances
- Constructor vs regular function behavior
- `instanceof` operator for type checking

### 2. **Object Methods and Prototypes** (`02_Object.js`)

**Object Static Methods:**
- `Object.create()` - Create object with specified prototype
- `Object.keys()` - Get property names
- `Object.values()` - Get property values
- `Object.entries()` - Get key-value pairs
- `Object.assign()` - Copy properties between objects

**Property Descriptors:**
- `Object.getOwnPropertyDescriptor()` - Get property details
- `Object.defineProperty()` - Define property with specific attributes
- **Writable** - Can property value be changed
- **Enumerable** - Does property show in loops
- **Configurable** - Can property be deleted/modified

**Advanced Object Concepts:**
- Property getters and setters
- Non-enumerable properties
- Read-only properties
- Property deletion and configuration

### 3. **Prototypes** (`03_Prototype.js`)

**Prototype Chain:**
- Every object has a prototype (except Object.prototype)
- Prototype chain for property lookup
- `__proto__` vs `prototype` property
- Constructor function prototypes

**Prototype Methods:**
- Adding methods to constructor prototypes
- Shared methods vs instance methods
- Memory efficiency with prototypes
- Prototype inheritance

**Key Concepts:**
```javascript
function User(name) {
    this.name = name;
}

User.prototype.greet = function() {
    return `Hello, ${this.name}`;
};

const user = new User("John");
console.log(user.greet()); // "Hello, John"
```

**Prototype Chain Navigation:**
- `Object.getPrototypeOf()` - Get object's prototype
- `Object.setPrototypeOf()` - Set object's prototype
- `hasOwnProperty()` - Check if property is own (not inherited)

### 4. **Call, Apply, and Bind** (`04_call.js`)

**Function Context Control:**

**call() Method:**
```javascript
function greet() {
    return `Hello, ${this.name}`;
}

const user = { name: "John" };
greet.call(user); // "Hello, John"
```

**apply() Method:**
```javascript
function introduce(age, city) {
    return `${this.name} is ${age} years old from ${city}`;
}

introduce.apply(user, [25, "NYC"]); // Arguments as array
```

**bind() Method:**
```javascript
const boundGreet = greet.bind(user);
boundGreet(); // "Hello, John" - permanently bound context
```

**Use Cases:**
- Borrowing methods from other objects
- Setting `this` context explicitly
- Creating bound functions for event handlers
- Function currying and partial application

### 5. **ES6 Classes** (`05_myClasses.js`)

**Modern Class Syntax:**
```javascript
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    
    greet() {
        return `Hello, ${this.name}`;
    }
    
    static createGuest() {
        return new User("Guest", "guest@example.com");
    }
}
```

**Class Features:**
- **Constructor** - Initialization method
- **Instance methods** - Methods available on instances
- **Static methods** - Methods called on class itself
- **Private fields** - # prefix for private properties

**Class vs Constructor Function:**
- Cleaner, more readable syntax
- Strict mode by default
- Better inheritance with `extends`
- Built-in validation and error handling

### 6. **Inheritance** (`06_inheritance.js`)

**Class Inheritance with extends:**
```javascript
class Animal {
    constructor(name) {
        this.name = name;
    }
    
    speak() {
        return `${this.name} makes a sound`;
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name); // Call parent constructor
        this.breed = breed;
    }
    
    speak() {
        return `${this.name} barks`;
    }
}
```

**Key Concepts:**
- `extends` keyword for inheritance
- `super()` for calling parent constructor
- Method overriding in child classes
- Access to parent methods with `super.methodName()`

**Inheritance Benefits:**
- Code reusability
- Logical hierarchy
- Polymorphism through method overriding
- Shared functionality across related classes

### 7. **Static Properties** (`07_static_properties.js`)

**Static Methods and Properties:**
```javascript
class MathUtils {
    static PI = 3.14159;
    
    static calculateArea(radius) {
        return this.PI * radius * radius;
    }
}

// Usage without creating instance
MathUtils.calculateArea(5);
```

**Use Cases:**
- Utility functions related to class
- Factory methods for object creation
- Constants and configuration
- Helper methods that don't need instances

### 8. **Getters and Setters** (`10_class_get_set.js`, `11_function_get_set.js`, `12_object_get_set.js`)

**Property Accessors:**

**In Classes:**
```javascript
class User {
    constructor(name) {
        this._name = name;
    }
    
    get name() {
        return this._name.toUpperCase();
    }
    
    set name(value) {
        if (value.length > 0) {
            this._name = value;
        }
    }
}
```

**In Objects:**
```javascript
const user = {
    _name: "John",
    
    get name() {
        return this._name;
    },
    
    set name(value) {
        this._name = value;
    }
};
```

**Benefits:**
- Computed properties
- Data validation on assignment
- Encapsulation of internal state
- Backward compatibility when refactoring

### 9. **Advanced Concepts** (`08_bind.html`, `09_mathpi.js`)

**Practical Applications:**
- Event handling with proper `this` binding
- Mathematical constants and utilities
- Real-world class design patterns
- Performance considerations

**Design Patterns:**
- Singleton pattern
- Factory pattern
- Observer pattern
- Module pattern

##  Best Practices

**Class Design:**
- Use meaningful class and method names
- Keep classes focused on single responsibility
- Prefer composition over deep inheritance
- Use private fields for internal state

**Prototype Usage:**
- Add shared methods to prototypes for memory efficiency
- Understand the difference between own and inherited properties
- Use Object.create() for explicit prototype setup

**Inheritance:**
- Keep inheritance hierarchies shallow
- Always call super() in child constructors
- Override methods thoughtfully
- Consider interfaces and abstract concepts

**Context Management:**
- Use arrow functions to preserve `this` context
- Use bind() for event handlers in classes
- Understand when `this` changes context
  
##  Real-world Applications

**OOP is essential for:**
- Large-scale application architecture
- Game development (players, enemies, items)
- UI component libraries (buttons, modals, forms)
- Data modeling (users, products, orders)
- API client libraries
- Framework and library development
