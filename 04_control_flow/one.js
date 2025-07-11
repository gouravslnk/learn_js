// ===============================================
// 💡 JavaScript Control Flow - if / else / logical operators
// ===============================================


// ===============================
// 🔹 Basic if / else
// ===============================

const isUserLoggedIn = true;
const temperature = 41;

// if (temperature === 40) {
//     console.log("Temperature is exactly 40");
// } else {
//     console.log("Temperature is greater than 40");
// }

// console.log("This line runs regardless of condition");


// ===============================
// 🔹 Comparison Operators
// ===============================

// <  → less than
// >  → greater than
// <= → less than or equal to
// >= → greater than or equal to
// == → equality check (type conversion allowed)
// === → strict equality (no type conversion)
// !=  → not equal
// !== → strict not equal


// ===============================
// 🔹 Block scope demo
// ===============================

// const score = 200;

// if (score > 100) {
//     let power = "fly";
//     console.log(`User power: ${power}`);  // ✅ Accessible here
// }

// console.log(`User power: ${power}`);  // ❌ Error: power is block-scoped


// ===============================
// 🔹 Short-hand if (not recommended for multiple lines)
// ===============================

// const balance = 1000;

// if (balance > 500) console.log("test"), console.log("test2");  
// ✅ Can run multiple statements separated by commas (but not readable)


// ===============================
// 🔹 else if ladder
// ===============================

// if (balance < 500) {
//     console.log("Less than 500");
// } else if (balance < 750) {
//     console.log("Less than 750");
// } else if (balance < 900) {
//     console.log("Less than 900");
// } else {
//     console.log("Less than 1200");
// }


// ===============================
// 🔹 Logical Operators
// ===============================

// && → AND operator: all conditions must be true
// || → OR operator: at least one condition must be true

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard && 2 == 3) {
    console.log("Allow to buy course");  // ❌ Won't run because 2 == 3 is false
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");  // ✅ At least one is true
}


// ===============================
// ✅ Summary Cheatsheet
// ===============================
// if (condition) { ... }        → Runs block if condition is true
// else { ... }                  → Runs if condition is false
// else if (anotherCondition)    → Add more branches
// &&  → All conditions must be true
// ||  → At least one condition must be true
// {}  → Always use braces for clarity (even with single-line ifs)
