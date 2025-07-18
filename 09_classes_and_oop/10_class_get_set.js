// 📌 JavaScript Getters and Setters — OOP Concept

class User {
    constructor(email, password){
        // These lines call the setter methods below
        this.email = email;
        this.password = password;
    }

    // 📧 Getter for email — returns email in uppercase
    get email(){
        return this._email.toUpperCase();  // _email is a backing property
    }

    // 📧 Setter for email — stores it internally
    set email(value){
        this._email = value;
    }

    // 🔒 Getter for password — returns a masked version
    get password(){
        return `${this._password}xyz`;  // Example: adds suffix
    }

    // 🔒 Setter for password — stores password securely
    set password(value){
        this._password = value;
    }
}

// ✅ Creating a user instance
const john = new User("john@example.com", "abc123");

// ✅ Accessing properties (these trigger the getters)
console.log(john.email);     // Output: JOHN@EXAMPLE.COM
console.log(john.password);  // Output: abc123xyz

/*
=====================================
📘 SUMMARY — GETTERS & SETTERS in JS
=====================================

🧠 What are they?
- Special methods to get and set property values in a class.

🧩 Syntax:
    get propertyName() { ... }
    set propertyName(value) { ... }

🔍 Why use them?
- Add custom logic when reading/writing properties.
- Format/transform data on the fly.
- Validate input (e.g., check password strength).
- Avoid direct access to internal properties.
- Useful for data hiding and encapsulation in OOP.

📝 Common Convention:
- Use underscore (_) before internal variable name to avoid infinite recursion.
    Example: this._email = value;

🚫 Notes:
- Do not use `get` and `set` on the same property without using backing variables.
- Works only in objects or classes (not outside).

🛠 Example Use Cases:
- Format email to uppercase
- Mask password
- Validate age or username length

🔐 Tip:
Add validation inside setters if needed, e.g.
    set email(value) {
        if (!value.includes("@")) throw new Error("Invalid email");
        this._email = value;
    }

*/
