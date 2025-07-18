// 🔹 Parent Class
class User {
    constructor(username) {
        this.username = username;
    }

    // Method available to all users
    logMe() {
        console.log(`USERNAME is ${this.username}`);
    }
}

// 🔹 Child Class — Inherits from User
class Teacher extends User {
    constructor(username, email, password) {
        // Call parent constructor using `super`
        super(username);
        this.email = email;
        this.password = password;
    }

    // Method specific to Teacher
    addCourse() {
        console.log(`A new course was added by ${this.username}`);
    }
}

// ✅ Creating an instance of Teacher
const teacher1 = new Teacher("john", "john@teacher.com", "123");

// Inherited method from User class
teacher1.logMe(); // USERNAME is john

// ✅ Creating a plain User instance
const user1 = new User("jane");
user1.logMe(); // USERNAME is jane

// ✅ Checking instance relationship
console.log(teacher1 instanceof Teacher); // true
console.log(teacher1 instanceof User);    // true
console.log(user1 instanceof Teacher);    // false


/* 
===============================================
🧠 CLASS INHERITANCE — EXPLAINED
===============================================

🧱 class:
    A template/blueprint for creating objects with shared properties and methods.

🧬 extends:
    Allows one class to inherit properties and methods from another.
    `Teacher extends User` → now Teacher gets access to everything in User.

🔑 super():
    Calls the parent class’s constructor.
    Must be called **before** accessing `this` in the child constructor.

🧪 instanceof:
    Used to check whether an object belongs to a class (including inherited classes).

Example:
    teacher1 instanceof Teacher  -> true
    teacher1 instanceof User     -> true
    user1 instanceof Teacher     -> false

⚙️ Summary Table:

| Concept             | Description                                                                 |
|---------------------|-----------------------------------------------------------------------------|
| `class`             | Blueprint for creating objects                                              |
| `extends`           | Allows a class to inherit from another                                     |
| `super()`           | Calls the parent class constructor (must be called before `this`)          |
| `instanceof`        | Checks if an object is an instance of a class or its parent                |
| Inheritance         | Lets child classes reuse and extend functionality of parent classes        |

✨ Benefits of inheritance:
- Code reuse (don’t repeat shared logic)
- Clear structure and relationship
- Easier maintenance

*/
