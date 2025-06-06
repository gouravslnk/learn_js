// ********************** Types of Data in JavaScript **********************
// 1. Primitive Data Types
// 2. Reference Data Types
// 3. Special Data Types

// Primitive Data Types
// 1. String
// 2. Number
// 3. Boolean
// 4. Null
// 5. Undefined
// 6. Symbol
// 7. BigInt

// Reference Data Types (Non-Primitive)
// 1. Object
// 2. Array
// 3. Function

// Special Data Types
// 1. NaN (Not a Number)
// 2. Infinity
// 3. -Infinity
// 4. JSON (JavaScript Object Notation)
// 5. RegExp (Regular Expression)
// 6. Date
// 7. Error
// 8. Map
// 9. Set
// 10. WeakMap
// 11. WeakSet



//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);  // false - because symbols are unique
// console.log(typeof id); // symbol
// console.log(typeof anotherId); // symbol

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId); 

// https://262.ecma-international.org/5.1/#sec-11.4.3



//*********************** Stack and Heap Memory In JavaScript *******************************/

// Stack Memory: Stores primitive data types (String, Number, Boolean, null, undefined, Symbol, BigInt) and references to objects.

// Heap Memory: Stores objects, arrays, and functions. It is a larger pool of memory used for dynamic memory allocation.

// Stack (Copy by value):    Heap (Copy by reference):

// Example of Stack Memory
let a = 10; // Primitive data type stored in stack memory
let b = a; // b is a copy of a, stored in stack memory

// Example of Heap Memory
let obj1 = { name: "Alice" }; // Object stored in heap memory
let obj2 = obj1; // obj2 references the same object in heap memory

// Modifying obj2 will affect obj1 since they reference the same object
obj2.name = "Bob"; // Changes the name property of the object
console.log(obj1.name); // "Bob" - obj1 is affected because obj2 references the same object in heap memory


// Modifying a primitive type does not affect the original variable
a = 20; // a is now 20, but b remains 10
console.log(a); // 20
console.log(b); // 10 - b remains unchanged because it is a copy of the original primitive value

