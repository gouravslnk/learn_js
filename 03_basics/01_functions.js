// ================================
// 💡 Functions in JavaScript
// ================================


// ================================
// 🔥 Basic Function Declaration
// ================================

function sayMyName() {
    console.log("J");
    console.log("O");
    console.log("H");
    console.log("N");
}

// 👉 Call the function
// sayMyName();


// ================================
// ➕ Function with Parameters
// ================================

// 👉 Function to add two numbers
function addTwoNumbers(number1, number2) {
    // console.log(number1 + number2);  // Just prints

    // let result = number1 + number2; 
    // return result;                    // Best practice

    return number1 + number2;            // Short and clean
}

// 👉 Store result in a variable
const result = addTwoNumbers(3, 5);

// console.log("Result:", result);


// ================================
// ✅ Function with Default Parameters and Validation
// ================================

function loginUserMessage(username = "Sam") {
    // 👉 If username is falsy (null, undefined, empty string), show error
    if (!username) {
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`;
}

// console.log(loginUserMessage("John"));
// console.log(loginUserMessage());


// ================================
// 🚀 Function with Rest Parameters (...)
// ================================

// 👉 When you don't know how many arguments will come

function calculateCartPrice(val1, val2, ...num1) {
    // val1 = 200
    // val2 = 400
    // num1 = [500, 2000]
    return num1;
}

// console.log(calculateCartPrice(200, 400, 500, 2000));


// ================================
// 📦 Passing Objects to Functions
// ================================

const user = {
    username: "John",
    price: 199
};

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// 👉 Pass object directly or via variable
// handleObject(user);

handleObject({
    username: "Sam",
    price: 399
});


// ================================
// 🔗 Passing Arrays to Functions
// ================================

const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
    return getArray[1];   // Returns the second element (index starts from 0)
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));


// ================================
// ✅ Summary Cheatsheet
// ================================
// - function name() { }                 -> Function declaration
// - function name(param1, param2) { }   -> Parameters
// - function name(...rest) { }          -> Rest parameters (collects extra args)
// - function name(param = default) { }  -> Default values
// - return -> Send back data from function
// - Functions can accept arrays, objects, numbers, strings, etc.
// - Functions can return anything: value, string, array, object, etc.
