// ================================
// 💡 Scope in JavaScript
// ================================

// 👉 Scope defines where variables are accessible (visible/usable) in code.
// Types of scopes:
// 1. Global Scope
// 2. Block Scope (let, const)
// 3. Function Scope

// ================================
// 🧱 Block Scope (inside { })
// ================================

// var c = 300       // 'var' is function-scoped (not block scoped)
let a = 300         // Global scope

if (true) {
    let a = 10      // Block scoped (only inside this if block)
    const b = 20    // Block scoped
    // console.log("INNER: ", a);  // Output: 10
}

// console.log(a);  // Output: 300 (outer 'a')
// console.log(b);  // ❌ Error: b is not defined
// console.log(c);  // ❌ Error if 'var c' is commented above


// ================================
// 🔄 Function Scope
// ================================

function one() {
    const username = "John";

    function two() {
        const website = "YouTube";
        console.log(username);   // ✅ Can access parent scope
    }

    // console.log(website);    // ❌ Error: website is not defined here

    two();  // Call inner function
}

// one();  // Uncomment to run


// ================================
// 🔁 Nested if blocks with scope
// ================================

if (true) {
    const username = "John";
    
    if (username === "John") {
        const website = " YouTube";
        console.log(username + website);  // ✅ Works
    }

    // console.log(website);  // ❌ Error: website is not accessible outside inner if
}

// console.log(username);  // ❌ Error: username is block scoped


// ================================
// ⚠️ Hoisting in Functions
// ================================

console.log(addOne(5));   // ✅ Works due to hoisting

function addOne(num) {
    return num + 1;
}


// ❌ Will throw error: Cannot access 'addTwo' before initialization
addTwo(5);

const addTwo = function(num) {
    return num + 2;
};

// ✅ Why?
// - Function declarations are hoisted (moved to top)
// - Function expressions (assigned to variables like const/let) are **not hoisted**
//   So calling them before definition causes an error.


// ================================
// ✅ Summary Cheatsheet
// ================================
// - let & const are block scoped
// - var is function scoped (not recommended)
// - Inner functions/blocks can access outer variables (lexical scope)
// - Function declarations are hoisted
// - Function expressions (like const func = () => {}) are NOT hoisted
// - Avoid using var — prefer let/const
// - Global scope is different in inspect in browser and run through node 

// - If you open a scope (like in if, for, function), you must return a value to get it outside that scope
// if we open scope than we have to write return statement to return the value from that scope otherwise it will return undefined 
