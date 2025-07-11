// ================================
// 💡 Immediately Invoked Function Expressions (IIFE)
// ================================

// 👉 IIFE = A function that runs immediately after it is defined
// 👉 Syntax: (function(){ ... })()
// 👉 Why use IIFE?
// ✅ To avoid polluting the global scope
// ✅ To create private/local scope

// ================================
// 🔹 Named IIFE
// ================================

(function chai() {
    // named IIFE
    console.log(`DB CONNECTED`);
})();  
// 🔸 This function runs immediately when the file is loaded
// 🔸 chai is the name of the function, but it's not accessible outside
// to end this always use ;

// ================================
// 🔹 Arrow Function IIFE with parameter
// ================================

((name) => {
    // anonymous arrow function IIFE
    // You can pass parameters like a regular function
    console.log(`DB CONNECTED TWO ${name}`);
})("John");

// 🔸 This is an anonymous arrow function that runs immediately
// 🔸 You can pass arguments like regular functions


// ================================
// ✅ Summary Cheatsheet
// ================================
// - IIFE stands for Immediately Invoked Function Expression
// - Runs immediately after it's defined
// - Wrap the function in ( ) and call it using ( )
// - Useful for creating isolated scope and avoiding global pollution
// - Can be named or anonymous
// - Works with normal functions and arrow functions
