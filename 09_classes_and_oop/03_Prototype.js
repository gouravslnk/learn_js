// 🧠 JavaScript Prototypes, Inheritance, and Extending Built-in Objects

//--------------------------------------------------------//

// ✅ Array of hero names
let heroes = ["thor", "spiderman"];

// ✅ Regular object with hero powers
let heroPower = {
    thor: "hammer",
    spiderman: "web",

    getSpiderPower: function(){
        console.log(`Spiderman's power is ${this.spiderman}`);
    }
};

//--------------------------------------------------------//

// ✅ Custom method added to *ALL* objects (including arrays, functions, etc.)
Object.prototype.sayHello = function(){
    console.log(`👋 Hello from Object.prototype`);
};

// ✅ Custom method added only to arrays
Array.prototype.heyJohn = function(){
    console.log(`👋 Hello from Array.prototype`);
};

// Works on both objects and arrays
heroPower.sayHello();  // ✅
heroes.sayHello();     // ✅

// Only works on arrays
heroes.heyJohn();      // ✅
heroPower.heyJohn?.(); // ❌ Undefined because it's not an array

//--------------------------------------------------------//

// 🧬 Inheritance using prototype chains

const User = {
    name: "john",
    email: "john@example.com"
};

const Teacher = {
    canTeach: true
};

const TeachingSupport = {
    isAvailable: false
};

const Assistant = {
    task: 'grading assignments',
    fullTime: true,

    // ⛔ Deprecated: old way to inherit
    __proto__: TeachingSupport
};

// ✅ Modern way to link prototypes
Object.setPrototypeOf(TeachingSupport, Teacher); // TeachingSupport -> Teacher -> Object
Object.setPrototypeOf(Teacher, User);            // Teacher -> User -> Object

//--------------------------------------------------------//

// 🛠️ Extending Built-in Objects (like String)

let someName = "JohnDoe     "; // includes trailing spaces

// Add custom method to String.prototype
String.prototype.trueLength = function(){
    console.log(`📏 Actual string: '${this}'`);
    console.log(`✅ True trimmed length: ${this.trim().length}`);
};

// Works on all string literals and variables
someName.trueLength();     // Output: 7
"JaneSmith   ".trueLength(); // Output: 9
"coffee".trueLength();     // Output: 6

//--------------------------------------------------------//

/*
📌 NOTES:

1. Prototypes allow you to:
   - Share methods across instances
   - Extend built-in types like String, Array, etc.

2. Object.prototype:
   - Is the top-level prototype
   - All objects (and arrays/functions) inherit from it

3. __proto__:
   - Old way to set prototype chain
   - Avoid using in modern code

4. Object.setPrototypeOf():
   - Preferred modern way to set inheritance chain

5. Extending native prototypes:
   - Use carefully to avoid conflicts
   - Great for custom utilities like `.trueLength()`

6. Array.prototype vs Object.prototype:
   - Methods on Array.prototype are available only to arrays
   - Object.prototype methods are available to *everything*
*/

//--------------------------------------------------------//

// 🧾 SUMMARY:

/*
✔ Prototypes are the backbone of JavaScript's inheritance model.
✔ Every object has an internal [[Prototype]] (accessible via __proto__)
✔ You can define methods on:
   - Object.prototype → applies to all
   - Array.prototype → applies only to arrays
   - String.prototype → applies only to strings

✔ Use `Object.setPrototypeOf(child, parent)` for inheritance.
✔ Avoid modifying native prototypes in libraries (safe for personal utils).

📌 Real-world use case:
   - Adding custom `.trueLength()` to all strings.
   - Building a chain of responsibility with objects.
*/
    