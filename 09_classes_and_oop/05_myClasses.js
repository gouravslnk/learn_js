// 🔹 ES6 Classes — A cleaner way to create reusable objects

// ✅ Class syntax (introduced in ES6)
class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    // Method to simulate password encryption
    encryptPassword() {
        return `${this.password}abc`;
    }

    // Method to change username (simulate transformation)
    changeUsername() {
        return `${this.username.toUpperCase()}`;
    }
}

// Creating a new user using the class
const user1 = new User("john", "john@example.com", "123");
console.log(user1.encryptPassword());    // Output: 123abc
console.log(user1.changeUsername());    // Output: JOHN

//----------------------------------------------------------//

// 🔧 Behind the Scenes: What the class is actually doing under the hood

function UserOld(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

// Add shared methods via the prototype
UserOld.prototype.encryptPassword = function () {
    return `${this.password}abc`;
};

UserOld.prototype.changeUsername = function () {
    return `${this.username.toUpperCase()}`;
};

// Create a new user using constructor function
const user2 = new UserOld("jane", "jane@example.com", "456");
console.log(user2.encryptPassword());     // Output: 456abc
console.log(user2.changeUsername());     // Output: JANE

//----------------------------------------------------------//

// 🧾 SUMMARY:

/*
✅ Both class and constructor function approaches achieve the same result.

🔹 ES6 `class` syntax:
   - Cleaner, more readable
   - Better suited for modern JavaScript development
   - Internally still uses prototypes (just syntactic sugar)

🔹 Constructor function + prototype:
   - The traditional way (before ES6)
   - Manually attaches methods using `prototype`

✅ Key Concepts Demonstrated:
- `this` refers to the specific instance of the object.
- Methods are shared across instances using `prototype` (no duplication).
- ES6 classes make object-oriented code easier to write and maintain.

📌 Best Practice: Use **ES6 classes** for clarity and consistency in modern JS projects.
*/
