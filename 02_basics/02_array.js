// ================================
// 💡 Array Operations - Part 2
// ================================


// ================================
// 🔗 Combining Arrays
// ================================

const marvel_heros = ["Thor", "Ironman", "Spiderman"];
const dc_heros = ["Superman", "Flash", "Batman"];

// 👉 Push an array into another (nested array)
marvel_heros.push(dc_heros);
console.log(marvel_heros);            // ['Thor', 'Ironman', 'Spiderman', ['Superman', 'Flash', 'Batman']]
console.log(marvel_heros[3][1]);      // Access 'Flash'

// 👉 Reset array
marvel_heros.pop();

// 👉 Concatenate arrays (returns new array)
const allHeros = marvel_heros.concat(dc_heros);
console.log(allHeros);

// 👉 Spread operator (preferred modern method)
const all_new_heros = [...marvel_heros, ...dc_heros];
console.log("All New Heros:", all_new_heros);


// ================================
// 🔥 Flatten Nested Arrays
// ================================

const another_array = [1, 2, 3, [4, 5, 6], 7, [8, 9, [10, 11]]];

console.log("Original Array:", another_array);

// 👉 flat() — Flattens nested array one level deep
const flat_array = another_array.flat();
console.log("Flat Array (1 level):", flat_array);

// 👉 flat(Infinity) — Fully flattens any depth
const fully_flat_array = another_array.flat(Infinity);
console.log("Fully Flat Array:", fully_flat_array);


// ================================
// 🔍 Array Check & Conversion
// ================================

// 👉 Check if it is an array
console.log(Array.isArray("John"));      // false

// 👉 Convert string to array
console.log(Array.from("John"));         // ['J', 'o', 'h', 'n']

// 👉 Convert object to array (invalid)
console.log(Array.from({ name: "John" }));  // [] — because it's not iterable

// ✅ Correct way to convert object keys/values/entries to array
console.log(Object.keys({ name: "John" }));    // ['name']
console.log(Object.values({ name: "John" }));  // ['John']
console.log(Object.entries({ name: "John" })); // [['name', 'John']]


// ================================
// 🚀 Array.from() Examples
// ================================

// 👉 Create array from length
console.log(Array.from({ length: 3 }));                    // [undefined, undefined, undefined]

// 👉 Create array with values from 0 to 2
console.log(Array.from({ length: 3 }, (_, i) => i));       // [0, 1, 2]

// 👉 Create array with values from 1 to 5
console.log(Array.from({ length: 5 }, (_, i) => i + 1));   // [1, 2, 3, 4, 5]


// ================================
// 🔗 Array.of() Example
// ================================

let score1 = [100, 150, 250];
let score2 = 200;
let score3 = 300;

// 👉 Array.of() creates an array from arguments, NOT like concat
const mixedScores = Array.of(score1, score2, score3);
console.log("Mixed Scores:", mixedScores);        // [[100,150,250], 200, 300]

// 👉 Flatten it (if needed)
console.log("Flattened Mixed Scores:", mixedScores.flat());


// ================================
// ✅ Summary Cheatsheet
// ================================
// - push()       -> Adds to end (can nest an array)
// - concat()     -> Combines arrays, returns new
// - ...spread    -> Combines arrays, modern and clean
// - flat()       -> Flattens nested arrays
// - Array.isArray() -> Checks if value is array
// - Array.from() -> Creates array from iterable or object with length
// - Array.of()   -> Creates array from arguments
// - Object.keys()/values()/entries() -> Convert object to array
