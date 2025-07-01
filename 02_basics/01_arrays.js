// ================================
// 💡 Arrays in JavaScript
// ================================

// 👉 Arrays are NOT primitive data types.
// They are reference data types.

// 👉 Arrays are used to store multiple values in a single variable.
// 👉 Arrays can store any data type — numbers, strings, booleans, objects, even other arrays.


// ================================
// 🏗️ Array Creation
// ================================

const myArr = [0, 1, 2, 3, 4, 5];             // Array using literal
const myHeroes = ["Shaktiman", "Naagraj"];    // Array of strings
const myArr2 = new Array(1, 2, 3, 4);         // Array using constructor


// ================================
// 🔍 Access Array Elements
// ================================

console.log(myArr);
console.log(myArr[0]);

console.log(myHeroes);
console.log(myHeroes[0]);

console.log(myArr2);
console.log(myArr2[0]);


// ================================
// 🚀 Array Methods (Manipulation)
// ================================

// 👉 Add items to the end
myArr.push(6);
myArr.push(7);

// 👉 Remove item from the end
myArr.pop();

// 👉 Add item at the start
myArr.unshift(9);

// 👉 Remove item from the start
myArr.shift();

console.log(myArr);


// ================================
// 🔎 Search in Array
// ================================

console.log(myArr.includes(9));   // Check if 9 is in the array (true/false)
console.log(myArr.indexOf(3));    // Get index of 3 (returns -1 if not found)


// ================================
// 🔗 Convert Array to String
// ================================

const newArr = myArr.join(" - ");  // Joins elements into string with ' - ' separator
console.log(newArr);


// ================================
// ✂️ Slice vs Splice
// ================================

console.log('\n--- Slice vs Splice Demo ---\n');

const demoArr = [0, 1, 2, 3, 4, 5];

console.log("Original Array:", demoArr);

// 👉 Slice
// Returns a portion of the array WITHOUT changing the original array.
const myn1 = demoArr.slice(1, 3);   // From index 1 to 3 (3 not included)
console.log("Slice (1,3) -> myn1:", myn1);
console.log("Array after Slice:", demoArr);

// 👉 Splice
// Removes or replaces elements. It CHANGES the original array.
const myn2 = demoArr.splice(1, 3);  // Removes 3 elements starting from index 1
console.log("Splice (1,3) -> myn2:", myn2);
console.log("Array after Splice:", demoArr);


// ================================
// ✅ Extra Tips:
// ================================
// - slice() -> Non-destructive (original array not changed)
// - splice() -> Destructive (original array is changed)
// - join() -> Converts array into a string
// - includes() -> Checks if value exists in array
// - indexOf() -> Returns index of value, or -1 if not found
// - push(), pop() -> Add/remove from end
// - unshift(), shift() -> Add/remove from start
