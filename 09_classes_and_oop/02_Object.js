// 🧠 JavaScript Objects, Functions, and Prototypes

// ✅ Functions in JavaScript are also Objects!
function multipleBy5(num){
    return num * 5;
}

// You can add properties to a function like an object
multipleBy5.power = 2;

// ✅ Function works like normal
console.log(multipleBy5(5));        // 25

// ✅ Access custom property
console.log(multipleBy5.power);     // 2

// ✅ Every function in JS has a `prototype` property (used only when you use it as constructor)
console.log(multipleBy5.prototype); // {}


//--------------------------------------------------------//

// ✅ Constructor Function Pattern with `prototype`
// Function used with `new` keyword to create user objects

function createUser(username, score){
    this.username = username;
    this.score = score;
}

// Add methods to the prototype (shared by all instances)
createUser.prototype.increment = function(){
    this.score++;
};

createUser.prototype.printMe = function(){
    console.log(`Score is ${this.score}`);
};


// ✅ Using `new` — this creates a proper object and links prototype
const chai = new createUser("chai", 25);

// ✅ Works because `chai` is an instance
chai.increment(); // increases score to 26
chai.printMe();   // Score is 26


//--------------------------------------------------------//

// ❌ Calling without `new` — behaves differently
const tea = createUser("tea", 250);

// tea.printMe(); ❌ Will throw error because `tea` is `undefined`
// Why? Because `createUser` doesn't return anything — without `new`
// `this` inside the function refers to global scope (or undefined in strict mode)

// So, only `chai` is a proper instance with prototype access


//--------------------------------------------------------//

/*
🔍 Why doesn't `tea.printMe()` work?

Because `createUser("tea", 250)` was called without `new`.

That means:
- No object was created
- `this` was NOT set to a new object
- So `tea` is actually `undefined` (since the function doesn't return anything)
- And undefined doesn't have the prototype methods like `printMe` or `increment`

So only instances created using `new createUser()` will have:
- Their own properties (`username`, `score`)
- Access to shared methods via `.prototype`
*/


//--------------------------------------------------------//

// 🧾 SUMMARY:

/*
✔ Functions in JavaScript are first-class objects:
   - Can have their own properties (`func.power = 2`)
   - Have a `.prototype` property (used with constructor functions)

✔ Constructor Functions:
   - Use the `new` keyword to create instances
   - `this` inside refers to the new object
   - Methods should be added to `.prototype` for memory efficiency

✔ new keyword:
   1. Creates a new empty object
   2. Links the object to the constructor's `.prototype`
   3. Binds `this` to the new object
   4. Returns the new object (implicitly)

❗ Without `new`, constructor functions don’t work correctly.

📌 Always use `new` with constructor functions.
📌 Use `.prototype` to share methods between instances efficiently.
📌 Avoid attaching methods directly inside constructor — leads to copies.

Example:
const user1 = new createUser("Gaurav", 100);
user1.increment(); // score = 101
user1.printMe();   // Score is 101
*/
//------------------------------------------------------------------------------------------
/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/