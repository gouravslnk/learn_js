// ===============================================
// 📌 How JavaScript Executes Code + Call Stack
// ===============================================


// ===============================================
// 🔁 1. Global Execution Context (GEC)
// ===============================================

// When JS code starts running, it enters the global execution context.
// This context creates two main things:
// - 'this' (in browser → refers to 'window')
// - Memory space for variables and functions

// Code example:
let val1 = 10;
let val2 = 5;

function addNum(num1, num2) {
    let total = num1 + num2;
    return total;
}

let result1 = addNum(val1, val2);
let result2 = addNum(10, 2);


// ===============================================
// 🧠 2. Memory Creation Phase (also called Variable Environment)
// ===============================================

// In the first phase, JavaScript sets up memory for variables & functions:

// val1     → undefined
// val2     → undefined
// addNum  → function definition
// result1  → undefined
// result2  → undefined

// Note: Function code is not executed yet — only stored in memory


// ===============================================
// ⚙️ 3. Execution Phase
// ===============================================

// Now JS runs the actual code line by line:

// val1 = 10
// val2 = 5
// addNum is still just a reference to the function

// When result1 = addNum(val1, val2) is called:
// - A new **Function Execution Context** is created for addNum
// - JS creates a new memory space (its own "mini" world)
// - Memory Phase inside function:
//     num1 → undefined
//     num2 → undefined
//     total → undefined
// - Execution Phase inside function:
//     num1 = 10
//     num2 = 5
//     total = 15 → returned and assigned to result1

// Same happens again when result2 = addNum(10, 2)


// ===============================================
// 🔁 Call Stack Visualization
// ===============================================

// Call Stack is a stack (LIFO) structure where:
// - Global Execution Context is pushed first
// - Every function call creates a new Execution Context (pushed on top)
// - When a function finishes, it is popped off

// Example Flow:

// Call Stack:
// 1. GEC created → pushed
// 2. addNum() called → pushed
// 3. addNum() finishes → popped
// 4. addNum() called again → pushed
// 5. addNum() finishes again → popped
// ✅ End of program → GEC also popped (program ends)


// ===============================================
// ✅ Summary
// ===============================================
// 1. JS code runs in two phases: Memory Phase + Execution Phase
// 2. All code runs inside Execution Contexts (Global or Function)
// 3. 'this', memory space, and execution thread are created per context
// 4. Call Stack manages the order of execution
// 5. JS is single-threaded and synchronous — it runs one thing at a time
