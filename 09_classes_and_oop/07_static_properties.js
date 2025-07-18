// 🔸 Base Class: User
class User {
    constructor(username) {
        this.username = username;
    }

    // ✅ Regular method (accessible via instance)
    logMe() {
        console.log(`Username: ${this.username}`);
    }

    // 🚫 Static method (NOT accessible via instance)
    static createId() {
        return `ID-${Math.floor(Math.random() * 10000)}`;
    }
}

// ✅ Creating an instance of User
const user1 = new User("john");

// user1.logMe();              // Works ✅
// user1.createId();           // ❌ Error: createId is not a function

// Uncommenting this will throw:
// console.log(user1.createId()); // ❌ TypeError

// 🔸 Subclass: Teacher
class Teacher extends User {
    constructor(username, email) {
        super(username);
        this.email = email;
    }
}

const teacher1 = new Teacher("jane", "jane@school.com");

// ❌ Cannot call static method on instance
// console.log(teacher1.createId()); // TypeError

// ✅ Can call static method on class itself (either User or Teacher)
console.log(User.createId());       // e.g. ID-9342
console.log(Teacher.createId());    // Also works because static is inherited


/* 
===============================================
🧠 STATIC PROPERTIES & METHODS — EXPLAINED
===============================================

🔹 static keyword:
    - Used to define methods or properties that belong to the class itself.
    - NOT accessible via instances.
    - Useful for utility functions, IDs, helpers, counters, etc.

🛑 NOT accessible like this:
    const u = new User("john");
    u.createId(); // ❌

✅ Accessible like this:
    User.createId(); // ✅
    Teacher.createId(); // ✅ (if inherited)

🔄 Inheritance Note:
    Static methods are inherited by subclasses.
    That’s why Teacher.createId() works too.

✅ Use Cases:
- Unique ID generators
- Counters across all instances
- Utility or factory methods that don't depend on instance

📦 Example Use Case:

class Product {
    static count = 0;

    constructor(name) {
        this.name = name;
        Product.count++;
    }

    static getTotalProducts() {
        return Product.count;
    }
}

⚙️ Summary:

static	        Method or property tied to the class, not to instances
Inheritance	    Static methods are inherited by subclasses
Call	        Use like ClassName.method() — never on an instance
Use case	    Utility methods, factory methods, ID generators, global counters

*/

