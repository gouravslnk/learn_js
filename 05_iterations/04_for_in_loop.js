// ===============================================
// 🔁 JavaScript - for...in loop
// ===============================================


// ===============================================
// 🔹 What is for...in?
// ===============================================
// ✅ Used to loop over the keys (property names) of objects
// ✅ Also works on arrays (loops over index numbers)
// ❌ Does NOT work properly with Map (use for...of for that)


// ===============================================
// 🔹 for...in with Object
// ===============================================

const myObject = {
    js: 'JavaScript',
    cpp: 'C++',
    rb: 'Ruby',
    swift: 'Swift by Apple'
};

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
    // Example: js shortcut is for JavaScript
}


// ===============================================
// 🔹 for...in with Array
// ===============================================

const programming = ["js", "rb", "py", "java", "cpp"];

for (const key in programming) {
    // console.log(programming[key]);
    // Loops over indexes: 0, 1, 2, ...
}


// ===============================================
// ❌ for...in with Map (Not Recommended)
// ===============================================

// Maps are not enumerable like objects or arrays

const map = new Map();
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('Fr', "France");

// ❌ This will NOT work — no output or incorrect behavior
// for (const key in map) {
//     console.log(key);
// }

// ✅ Instead, use for...of with destructuring:
// for (const [key, value] of map) {
//     console.log(key, ':-', value);
// }


// ===============================================
// ✅ Summary Cheatsheet
// ===============================================
// for...in → loops over keys/indexes (Object, Array)
// for...of → loops over values (Array, Map, String, etc.)
// ❌ Don’t use for...in on Map
// ✅ Use Object.keys() if you want to turn object into an array of keys
