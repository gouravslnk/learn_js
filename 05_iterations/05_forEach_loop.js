// ===============================================
// 🔁 JavaScript - Array.forEach() Loop
// ===============================================


// ===============================================
// 🔹 What is forEach?
// ===============================================
// ✅ Built-in array method used to loop through each item in an array
// ✅ Takes a callback function and runs it once for each element
// ✅ It does NOT return a new array (unlike map/filter)


// ===============================================
// 🔹 Example 1: Basic usage with anonymous function
// ===============================================

const coding = ["js", "ruby", "java", "python", "cpp"];

// Method 1: using function keyword
// coding.forEach(function (val) {
//     console.log(val);
// });

// Method 2: using arrow function
// coding.forEach((item) => {
//     console.log(item);
// });

// Method 3: using a separate function
// function printMe(item) {
//     console.log(item);
// }
// coding.forEach(printMe);


// ===============================================
// 🔹 forEach with index and full array
// ===============================================
// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// });


// ===============================================
// 🔹 Example 2: Array of objects
// ===============================================

const myCoding = [
    {
        languageName: "JavaScript",
        languageFileName: "js"
    },
    {
        languageName: "Java",
        languageFileName: "java"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    },
];

myCoding.forEach((item) => {
    console.log(item.languageName);  // Output: JavaScript, Java, Python
    // You can also access: item.languageFileName
});


// ===============================================
// ✅ Summary Cheatsheet
// ===============================================
// array.forEach((item, index, array) => { ... })
// - item → current element
// - index → index of current element
// - array → the full array itself
//
// 🔸 Best when you just want to *do something* with each item (like print or update UI)
// 🔸 Does NOT return anything (returns undefined)
// 🔸 Use map/filter/reduce when you want to return or transform
