// ================================
// 💡 Objects in JavaScript - Part 2
// ================================


// ================================
// 🏗️ Create Objects
// ================================

// 👉 Singleton object
const tinderUser = new Object();  // ✅ Singleton object

// 👉 Non-singleton object (Object Literal)
const tinderUser2 = {};           // ❌ Non-singleton object


// ================================
// 🔗 Add Properties to Object
// ================================

tinderUser.id = "123abc";
tinderUser.name = "John Doe";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);


// ================================
// 🎯 Nested Objects
// ================================

const regularUser = {
    email: "johndoe@gmail.com",
    fullname: {
        userfullname: {
            firstname: "John",
            lastname: "Doe"
        }
    }
};

// 👉 Access nested values
console.log(regularUser.fullname.userfullname.firstname);


// ================================
// 🔥 Combine Objects
// ================================

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
const obj3 = { 5: "e", 6: "f" };

// 👉 Method 1: Using Object.assign()
// Syntax: Object.assign(target, source1, source2, ...)
const combined1 = Object.assign({}, obj1, obj2, obj3);

// 👉 Method 2: Using Spread Operator (modern and preferred)
const combined2 = { ...obj1, ...obj2, ...obj3 };

console.log(combined1);
console.log(combined2);


// ================================
// 📦 Array of Objects (Common in APIs)
// ================================

const users = [
    {
        id: 1,
        email: "john@gmail.com"
    },
    {
        id: 2,
        email: "jane@gmail.com"
    },
    {
        id: 3,
        email: "doe@gmail.com"
    },
];

// 👉 Access email of second user
console.log(users[1].email);


// ================================
// 🔍 Useful Object Methods
// ================================

// 👉 Get all keys as an array
console.log(Object.keys(tinderUser));

// 👉 Get all values as an array
console.log(Object.values(tinderUser));

// 👉 Get all key-value pairs as nested arrays
console.log(Object.entries(tinderUser));

// 👉 Check if a property exists in object
console.log(tinderUser.hasOwnProperty('isLoggedIn'));  // true


// ================================
// 🚀 Destructuring Objects
// ================================

const course = {
    coursename: "JavaScript in Hindi",
    price: "999",
    courseInstructor: "Jane Doe"
};

course.courseInstructor  // one method

// 👉 Destructure
const { courseInstructor: instructor } = course;

// console.log(course.courseInstructor);
console.log(instructor);  // Output: Jane Doe


// ================================
// 🔥 JSON Structure Examples
// ================================

// 👉 JSON Object Example
// {
//     "name": "John Doe",
//     "coursename": "JavaScript in Hindi",
//     "price": "free"
// }

// 👉 JSON Array (API) of Objects Example
// [
//     {},
//     {},
//     {}
// ]


// ================================
// ✅ Extra Tips:
// ================================
// - Spread (...) is preferred over Object.assign() because it's shorter and cleaner.
// - hasOwnProperty() checks if property exists directly on object (not inherited).
// - Object.keys(), Object.values(), Object.entries() are super useful for loops or data manipulation.
// - JSON data looks like object but is always a string when coming from an API.
//   Use JSON.parse() to convert JSON string to object.
//   Use JSON.stringify() to convert object to JSON string.
