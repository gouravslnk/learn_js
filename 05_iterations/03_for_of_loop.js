// ===============================================
// 🔁 JavaScript - for...of loop
// ===============================================


// ===============================================
// 🔹 What is for...of?
// ===============================================
// ✅ Used to iterate over iterable items: Arrays, Strings, Maps, Sets, etc.
// ❌ Doesn't work directly on plain objects (they are not iterable)


// ===============================================
// 🔹 for...of with Array
// ===============================================

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
    // console.log(num);  // Prints each number
}


// ===============================================
// 🔹 for...of with String
// ===============================================

const greetings = "Hello world!";

for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);  // Prints each character one by one
}


// ===============================================
// 🔹 for...of with Map
// ===============================================

const map = new Map();

// ✅ Maps store key-value pairs and preserve order
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('Fr', "France");
map.set('IN', "India");  // Duplicate key → ignored, won't overwrite value unless different

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
    // Output: IN :- India, USA :- United States of America ...
}


// ===============================================
// ❌ for...of with plain Object (not iterable)
// ===============================================

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
};

// ❌ This will throw an error: myObject is not iterable
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }

// ✅ To loop over object, use for...in or Object.entries + for...of


// ===============================================
// ✅ Summary Cheatsheet
// ===============================================
// ✅ for...of is used for iterables like: arrays, strings, maps, sets
// ❌ for...of doesn't work directly on plain objects
// ✅ To loop over objects: use `for...in` or `Object.entries(obj)` with for...of
// ✅ Destructuring [key, value] inside for...of loop works perfectly with Maps
