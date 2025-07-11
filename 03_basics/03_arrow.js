// ================================
// 💡 Arrow Functions & "this" in JavaScript
// ================================


// ================================
// 🧠 Object with Method
// ================================

const user = {
    username: "John",
    price: 999,

    welcomeMessage: function () {
        // 'this' refers to the current object (user)
        console.log(`${this.username}, welcome to the website`);
        console.log(this);  // Shows full 'user' object
    }
};

// user.welcomeMessage();

// 👉 Changing username and calling again
// user.username = "Sam";
// user.welcomeMessage();


// ================================
// 🌍 Global Scope and "this"
// ================================

// console.log(this); 
// 👉 In browser, it refers to the 'window' object
// 👉 In Node.js, it's an empty object {}

// ================================
// ⚠️ "this" Inside Regular Function
// ================================

function chai1() {
    let username = "John";
    console.log(this.username); // ❌ undefined — 'this' doesn't work like in object
}

// chai1();


// ================================
// ⚠️ "this" Inside Arrow Function
// ================================

const chai2 = () => {
    let username = "John";
    console.log(this);  // ✅ Arrow functions don't have their own 'this'
                        // it takes 'this' from surrounding (lexical) scope
};

// chai2();


// ================================
// ➕ Arrow Function Syntax Variations
// ================================

// ✅ Normal arrow function with return
// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

// ✅ Implicit return (no need to write return keyword or {} if one line)
// const addTwo = (num1, num2) => num1 + num2;

// ✅ With parentheses
// const addTwo = (num1, num2) => (num1 + num2);

// ✅ Returning an object (must wrap in parentheses)
const addTwo = (num1, num2) => ({ username: "John" });

console.log(addTwo(3, 4));  // Output: { username: "John" }


// ================================
// 🔁 Arrow Function with Array Methods (e.g. forEach)
// ================================

// const myArray = [2, 5, 3, 7, 8];

// 👉 Using forEach with arrow function
// myArray.forEach((item) => {
//     console.log(item);   // Prints each element
// });


// ================================
// ✅ Summary Cheatsheet
// ================================
// - Arrow functions do NOT have their own 'this'.
// - In objects, regular functions are better when using 'this'.
// - Arrow functions are great for short, one-liner functions.
// - To return an object from arrow function, wrap it in () like: () => ({})
// - 'this' in regular functions depends on how the function is called.
// - 'this' in arrow functions depends on where the function is defined (lexical scope).
