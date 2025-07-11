// ===============================================
// 💡 Truthy & Falsy Values + Nullish Coalescing + Ternary
// ===============================================


// ===============================================
// 🔹 Truthy & Falsy Concepts
// ===============================================

const userEmail = [];

if (userEmail) {
    console.log("✅ Got user email");  // Runs because empty array is truthy
} else {
    console.log("❌ Don't have user email");
}


// ===============================
// ⚠️ Falsy values in JavaScript
// ===============================
// These always behave as false in conditions:

// false
// 0
// -0
// 0n  (BigInt 0)
// ""  (empty string)
// null
// undefined
// NaN

// ===============================
// ✅ Truthy values in JavaScript
// ===============================
// These behave as true in conditions, even if they look false-ish:

// "0"         → string with value
// "false"     → string, not boolean false
// " "         → space is still a string
// []          → empty array is truthy
// {}          → empty object is truthy
// function(){}→ functions are truthy


// ===============================
// 🔹 Check if array is empty
// ===============================

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }


// ===============================
// 🔹 Check if object is empty
// ===============================

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
    console.log("✅ Object is empty");
}


// ===============================================
// 🔹 Nullish Coalescing Operator (??)
// ===============================================
// Use when you want to fallback ONLY if the value is null or undefined

let val1;

// val1 = 5 ?? 10           // 5
// val1 = null ?? 10        // 10
// val1 = undefined ?? 15   // 15

// val1 = null ?? 10 ?? 20;    // 10 — picks first non-null/undefined value

// val1 = undefined ?? null  // got the last value as further is no value to check (here null is answer as null is last)

 val1 =  null  ?? undefined  ?? "" ?? NaN   // got the first non null or non undefined value - here is "" so o/p -> "" if NaN is written before undefined then it will be NaN as NaN is falsy value but not null or undefined



console.log("value",val1);


// ===============================================
// 🔹 Ternary Operator (Short if/else)
// ===============================================

// Syntax: condition ? doIfTrue : doIfFalse

const iceTeaPrice = 100;

iceTeaPrice <= 80
    ? console.log("✅ Less than or equal to 80")
    : console.log("❌ More than 80");


// ===============================================
// ✅ Summary Cheatsheet
// ===============================================
// - Truthy: Anything that is not falsy
// - Falsy: false, 0, "", null, undefined, NaN
// - [] and {} are truthy — check length or keys to verify emptiness
// - Nullish Coalescing (??) is safer than || for null/undefined fallback
// - Ternary operator is shorthand for simple if-else conditions
