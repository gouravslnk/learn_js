// ✅ JavaScript — Getters and Setters directly on an Object Literal

// This example uses a plain object to define getters and setters
const User = {
    _email: 'john@doe.com',
    _password: "securepass",

    // Getter for email
    get email() {
        // Automatically format email to uppercase
        return this._email.toUpperCase();
    },

    // Setter for email
    set email(value) {
        this._email = value;
    }
};

// ✅ Creating a new object using `Object.create()`
// This creates a new object (`profile`) that inherits from `User`
const profile = Object.create(User);

// Accessing email triggers the getter
console.log(profile.email);  // Output: JOHN@DOE.COM

// You can also assign a new email
profile.email = "new@update.com";
console.log(profile.email);  // Output: NEW@UPDATE.COM

/*
===================================================
📘 SUMMARY — Getters & Setters via Object Literal
===================================================

🧩 What it does:
- Uses the `get` and `set` keywords directly inside an object to define behavior when accessing or updating properties.

🔧 Syntax:
const obj = {
    _prop: 'value',

    get prop() {
        return this._prop;
    },
    set prop(val) {
        this._prop = val;
    }
};

📌 Key Points:
- Internally stores data in `_email` and `_password`
- `get` lets you return a formatted version or computed value
- `set` lets you control how a value is assigned (e.g., sanitize/validate)

👨‍🏫 Real-World Use:
- Formatting or masking sensitive info
- Adding validation logic
- Hiding internal implementation

🧠 Extra:
- Inherited objects using `Object.create()` can access the original getters/setters
- This is a lightweight alternative to class-based encapsulation

*/
