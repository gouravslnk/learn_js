// ================================
// 💡 Objects in JavaScript
// ================================

// 👉 What is an Object?
// Object is a collection of key-value pairs.
// Used to store multiple pieces of related information together.


// ================================
// 🔥 Singleton Concept
// ================================
// Singleton = Only one instance (object) in memory
// - Object created using object literals -> ❌ Not singleton
// - Object created using constructor or class -> ✅ Singleton

// Example of constructor-based singleton
const obj = Object.create({});  // ✅ Singleton

// Example of object literal
const obj2 = {
    name: "Test"
};  // ❌ Not singleton


// ================================
// 🔗 Data Types
// ================================

// 👉 Primitive Data Types (Copied by value)
// String, Number, Boolean, Null, Undefined, Symbol, BigInt

// 👉 Reference Data Types (Stored by reference in memory)
// Objects, Arrays, Functions


// ================================
// 🏗️ Object Creation (Object Literal)
// ================================

// Symbol declaration
const mySym = Symbol("key1");  // Unique key


// 👉 Object literal example
const JsUser = {
    name: "Hitesh",                         // Normal key
    "full name": "Hitesh Choudhary",         // Key with space (use quotes)
    [mySym]: "mykey1",                       // Symbol as key
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
};


// ================================
// 📦 Access Values from Object
// ================================

// Dot notation (when key has no space)
console.log(JsUser.email);  

// Bracket notation (works with keys with spaces or special types)
console.log(JsUser["email"]);       
console.log(JsUser["full name"]);   

// Access Symbol key
console.log(JsUser[mySym]);         


// ================================
// ✍️ Update Values in Object
// ================================

JsUser.email = "hitesh@chatgpt.com";   // Update email

// 🔒 Freeze the object to prevent further changes
// Object.freeze(JsUser);

JsUser.email = "hitesh@microsoft.com";  // This won't change if freeze is applied


// ================================
// 🚀 Adding Functions (Methods) to Object
// ================================

// Simple function in object
JsUser.greeting = function(){
    console.log("Hello JS user");
};

// Function using 'this' keyword to access object property
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
};


// ================================
// ✅ Calling Object Methods
// ================================

console.log(JsUser.greeting());         // Output: Hello JS user
console.log(JsUser.greetingTwo());      // Output: Hello JS user, Hitesh


// ================================
// ⚡ Cheatsheet Summary
// ================================
// Access -> obj.key  OR  obj["key"]
// Symbol Key -> obj[symbol]
// Update -> obj.key = value
// Freeze -> Object.freeze(obj)
// Add function -> obj.func = function(){}
// 'this' keyword -> refers to current object inside functions
