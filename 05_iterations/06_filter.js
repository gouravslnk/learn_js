// ===============================================
// 🔁 JavaScript - .forEach() vs .filter()
// ===============================================


// ===============================================
// 🔹 forEach vs filter - Core Idea
// ===============================================
// ✅ forEach → just loops through items, does NOT return anything
// ✅ filter → returns a new array based on condition


// ===============================================
// 🔹 Example 1: .forEach() returns undefined
// ===============================================

// const coding = ["js", "ruby", "java", "python", "cpp"];

// const values = coding.forEach((item) => {
//     // console.log(item);
//     return item;  // 🔸 Return is ignored here
// });

// console.log(values); // ❌ undefined (forEach returns nothing)


// ===============================================
// 🔹 Example 2: .filter() to create new array
// ===============================================

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// ✅ Using .filter()
const newNums = myNums.filter((num) => {
    return num > 4;  // Only numbers > 4 will be added to new array
});


// ===============================================
// 🔸 Alternative using .forEach() (not recommended)
const altNums = [];

myNums.forEach((num) => {
    if (num > 4) {
        altNums.push(num);
    }
});

// console.log(newNums);
// console.log(altNums);


// ===============================================
// 🔹 Real-world example: Filtering Books
// ===============================================

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];


// ✅ Example 1: Filter only 'History' books
let userBooks = books.filter((bk) => bk.genre === 'History');

// ✅ Example 2: History books published after 1995
userBooks = books.filter((bk) => {
    return bk.publish >= 1995 && bk.genre === 'History';
});

console.log(userBooks);


// ===============================================
// ✅ Summary Cheatsheet
// ===============================================
// 🔹 forEach() → performs actions for each item (side-effects only)
// 🔹 filter()  → returns a NEW array of items that meet a condition
// 🔸 Use filter when you want to extract a subset of data from an array
// 🔸 Use forEach for things like logging, UI updates, etc.
