// ===============================================
// 🔁 JavaScript - Array.map() with Chaining
// ===============================================


// ===============================================
// 🔹 What is .map()?
// ===============================================
// ✅ Used to create a new array by transforming each element
// ✅ Does NOT change the original array
// ✅ Always returns a new array (unlike forEach)

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// ===============================================
// 🔹 Example 1: Basic usage
// ===============================================

// const newNums = myNumbers.map((num) => {
//     return num + 10;
// });


// ===============================================
// 🔹 Example 2: Chaining map and filter
// ===============================================

const newNums = myNumbers
    .map((num) => num * 10)       // Multiply each number by 10
    .map((num) => num + 1)        // Then add 1 to each result
    .filter((num) => num >= 40);  // Only keep numbers >= 40

console.log(newNums);


// ===============================================
// ✅ Breakdown:
// Step 1: [10, 20, 30, 40, 50, ...]
// Step 2: [11, 21, 31, 41, 51, ...]
// Step 3: [41, 51, 61, 71, 81, 91, 101]


// ===============================================
// ✅ Summary Cheatsheet
// ===============================================
// .map()   → transform each item and return a new array
// .filter() → filter items based on condition
// .forEach() → just loop, doesn’t return a new array
// 🔁 You can chain map → map → filter → etc.
// ⚠️ map must always return something inside its callback
