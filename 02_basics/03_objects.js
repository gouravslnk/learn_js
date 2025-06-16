// Objects in JavaScript are non

// singleton -> when we declare an object as literal, it is not a singleton object - if declared by constructor function or class, it is a singleton object
// singleton object -> an object that is created only once and is used throughout the application
// singleton pattern -> a design pattern that restricts the instantiation of a class to one object

// singleton means that there is only one instance of the object in memory


// reference data type -> objects are reference data types, they are stored in memory as a reference
// primitive data type -> string, number, boolean, null, undefined, symbol, bigint

// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email) // accessing property using dot notation
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());