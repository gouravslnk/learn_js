// ===============================================
// 🔁 while loop & do...while loop in JavaScript
// ===============================================


// ===============================================
// 🔹 while loop
// ===============================================

// ✅ Syntax:
// while (condition) {
//   // code block
// }

let index = 0;

while (index <= 10) {
    // console.log(`Value of index is ${index}`);
    index = index + 2;  // Increase by 2 each time
}


// ===============================
// 🔹 while loop with array
// ===============================

let myArray = ['flash', 'batman', 'superman'];
let arr = 0;

while (arr < myArray.length) {
    // console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1;
}


// ===============================================
// 🔹 do...while loop
// ===============================================

// ✅ Syntax:
// do {
//   // code block
// } while (condition);

// ⚠️ Runs the block at least once, even if condition is false

let score = 11;

do {
    console.log(`Score is ${score}`);
    score++;
} while (score <= 10);  // ✅ This will run only once because 11 > 10


// ===============================================
// ✅ Summary
// ===============================================
// while loop → checks condition first, then runs
// do...while loop → runs once before checking condition
// Great for repeating code when you don’t know how many times in advance
