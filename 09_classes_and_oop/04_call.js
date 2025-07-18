// 🔹 call.js — Understanding `call()` and Function Context in JavaScript

// ✅ Function to set a username
function SetUsername(username){
    // Let's assume this function has some complex DB calls or validations
    this.username = username;
    console.log("SetUsername called");
}

// ✅ Function to create a user object
function createUser(username, email, password){
    // Here, instead of rewriting the logic inside createUser,
    // we "borrow" the SetUsername function using `.call()`

    SetUsername.call(this, username); // binds `this` to the current createUser context

    this.email = email;
    this.password = password;
}

// ✅ Create a new user instance
const user1 = new createUser("john", "john@example.com", "123456");
console.log(user1);

//-------------------------------------------//
// 🤔 What if we DO NOT use `SetUsername.call(this, username)`?

/*
If you just write:

    SetUsername(username);

It will set `this.username` in the global context (in browsers: `window` object),
NOT on the object being constructed by `createUser`.

So `user1.username` will be `undefined`.

In contrast, `SetUsername.call(this, username)` ensures that:
- `this` inside SetUsername refers to the same `this` used in createUser.
- So, `this.username = username` works properly on the new object.
*/

// Example without `call` (to compare):

function SetUsername2(username){
    this.username = username;
}

function createUserWithoutCall(username, email, password){
    SetUsername2(username); // ❌ this.username goes to global object
    this.email = email;
    this.password = password;
}

const user2 = new createUserWithoutCall("jane", "jane@example.com", "abc123");
console.log(user2); // username is undefined
//-----------------------------------------------------//

// 🧾 SUMMARY:

/*
✔ `Function.call(thisArg, ...)` allows you to call a function with a specific `this` value.

✔ This is useful when:
   - You want to reuse a function’s logic in another context.
   - You're composing functions or using constructor chaining.

✔ In the example:
   - `SetUsername.call(this, username)` ensures `this.username` gets set on the object being created by `createUser`.
   - Without `.call(this, ...)`, `this` inside SetUsername would not point to the user instance.

✔ This pattern is especially common in constructor functions before ES6 classes.

✅ Use `.call(this, ...)` to inherit or borrow constructor behavior.
*/
