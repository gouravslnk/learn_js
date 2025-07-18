// ✅ JavaScript — Define Getters and Setters using Object.defineProperty

// 🧠 This is another way to create getters and setters (not using class syntax)

function User(email, password){
    // Internal (private-style) variables
    this._email = email;
    this._password = password;

    // Define getter/setter for email property
    Object.defineProperty(this, 'email', {
        get: function(){
            // Called when you do user.email
            return this._email.toUpperCase();  // Format: always returns uppercase
        },
        set: function(value){
            // Called when you assign user.email = "..."
            this._email = value;
        }
    });

    // Define getter/setter for password property
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase();  // Could be used to mask/format
        },
        set: function(value){
            this._password = value;
        }
    });
}

// ✅ Create a user instance
const john = new User("john@example.com", "securepass");

// Accessing email triggers the custom getter
console.log(john.email);  // Output: JOHN@EXAMPLE.COM
console.log(john.password); // Output: SECUREPASS

/*
===================================================
📘 SUMMARY — Object.defineProperty with Getters/Setters
===================================================

🧩 What it does:
- Allows you to define custom behavior when a property is accessed (get) or updated (set).

🔧 Syntax:
Object.defineProperty(obj, 'property', {
    get: function() {...},
    set: function(value) {...}
});

🧠 Why use it?
- Adds flexibility without changing the object's structure.
- Lets you run logic when reading or writing values.
- Helps control property behavior (e.g. formatting, validation).

💡 Notes:
- The internal variable is usually prefixed with `_` to avoid recursion (infinite loop).
- Can be used in constructor functions, objects, or anywhere you need dynamic property behavior.

👨‍🏫 Real-world Use:
- Format/display name or email
- Automatically hash or mask password
- Run validation on assignment
- Set read-only or computed values

🔒 Bonus:
You can also use `enumerable`, `configurable`, and `writable` with `defineProperty` to further control the property behavior.

*/
