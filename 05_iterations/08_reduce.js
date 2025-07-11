// ===============================================
// 🔁 JavaScript - Array.reduce()
// ===============================================


// ===============================================
// 🔹 What is .reduce()?
// ===============================================
// ✅ Used to reduce all array values to a single value (sum, product, etc.)
// ✅ It takes a callback function with 2 parameters:
//    1. accumulator (acc)
//    2. current value/item (curr)
// ✅ You can also pass an initial value (optional but useful)


// ===============================================
// 🔹 Example 1: Summing numbers in an array
// ===============================================

const myNums = [1, 2, 3];

// Method 1: Using function
// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval;
// }, 0);  // Start with 0 as initial value

// Method 2: Using arrow function (shorter)
const myTotal = myNums.reduce((acc, curr) => acc + curr, 0);

console.log(myTotal);  // Output: 6


// ===============================================
// 🔹 Example 2: Total price in shopping cart
// ===============================================

const shoppingCart = [
    {
        itemName: "JS Course",
        price: 2999
    },
    {
        itemName: "Python Course",
        price: 999
    },
    {
        itemName: "Mobile Dev Course",
        price: 5999
    },
    {
        itemName: "Data Science Course",
        price: 12999
    },
];

// ✅ Reduce to calculate total price of all items
const priceToPay = shoppingCart.reduce((acc, item) => {
    return acc + item.price;
}, 0);

console.log(priceToPay);  // Output: 22996


// ===============================================
// ✅ Summary Cheatsheet
// ===============================================
// .reduce((accumulator, currentValue) => { return ... }, initialValue)
// - Useful for summing numbers
// - Can be used for finding averages, max, min, totals, etc.
// - Especially helpful when working with arrays of objects (like a cart)
// - Does not modify the original array
