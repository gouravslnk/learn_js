// 🧠 Object-Oriented Programming in JavaScript — Essentials

// ✅ 1. Object Literal
// - Used to define a single object quickly

const user = {
    username: "John",
    loginCount: 8,
    signedIn: true,

    // Method inside object (function tied to this object)
    getUserDetails: function(){
        console.log(this); // 'this' refers to the current object (user)
    }
};

// How to use:
// user.getUserDetails(); // Logs the entire user object

//----------------------------------------------------------//

// ✅ 2. Constructor Function (OLD way before ES6 classes)
// - Used to create multiple similar objects
// - 'this' is used to attach properties/methods to each object

function User(username, loginCount, isLoggedIn){
    // these properties will be added to every object created using 'new'
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    // adding a method to the object
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    // NOTE: return this is not needed in constructor — it's done automatically
    return this;  // optional, doesn't harm
}

// ✅ Creating instances using the constructor and 'new' keyword
const userOne = new User("John", 12, true);
const userTwo = new User("Jane", 11, false);

// Checking the constructor of userOne
console.log(userOne.constructor); // [Function: User]

// Check object data
// console.log(userOne); 
// userOne.greeting(); // Welcome John

// Use of instance properties
console.log(userOne.username); // John
console.log(userTwo.username); // Jane

// Checking if userOne is an instance of User
console.log(userOne instanceof User); // true
console.log(userTwo instanceof User); // true

//----------------------------------------------------------//

// ✅ 3. Checking Prototype
// Every object created using a constructor has access to its prototype

// Add method to the prototype — better memory usage (shared between instances)
User.prototype.sayHello = function(){
    console.log(`Hello, I am ${this.username}`);
};

// Now all users can use this method
userOne.sayHello();  // Hello, I am John
userTwo.sayHello();  // Hello, I am Jane

//----------------------------------------------------------//

// ✅ 4. Understanding `this` in global vs object vs constructor

console.log(this); 
// In Node.js: logs an empty object {}
// In browser: refers to window object

//----------------------------------------------------------//

// 🧾 SUMMARY:

/*
✔ Object Literal:
   - Quick way to create one object
   - Useful for static/simple use

✔ Constructor Function:
   - Function used with 'new' to create multiple objects (instances)
   - Each instance gets its own properties/methods

✔ `this` keyword:
   - Inside object => refers to that object
   - Inside constructor => refers to the instance being created
   - In global => refers to global object (window in browser, {} in Node)

✔ `new` keyword:
   - Creates empty object {}
   - Sets 'this' inside constructor to that object
   - Links object to constructor's prototype
   - Returns the object

✔ Prototypes:
   - A way to share methods/properties across all instances
   - Saves memory compared to defining methods inside constructor

✔ constructor property:
   - Shows which function was used to create the object

📌 Use prototype for shared methods (e.g. sayHello)
📌 Use constructor function when you want to create many similar objects
📌 Remember: `return this` is optional in constructors

*/