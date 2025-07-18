// ================================
// 🌟 PROMISES in JavaScript (Master File)
// ================================
// A Promise is an object representing the eventual completion (or failure) of an async operation.


// ================================
// 1️⃣ Basic Promise Creation and Consumption
// ================================
const promiseOne = new Promise(function(resolve, reject){
    // Simulate async task (e.g., network, DB)
    setTimeout(function(){
        console.log('✅ Async task 1 complete');
        resolve(); // Resolves the promise
    }, 1000)
})

promiseOne.then(function(){
    console.log("👉 Promise 1 consumed");
})


// ================================
// 2️⃣ Direct Promise without storing in variable
// ================================
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("✅ Async task 2 complete");
        resolve();
    }, 1000)
}).then(function(){
    console.log("👉 Promise 2 consumed");
})


// ================================
// 3️⃣ Promise resolved with data
// ================================
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({ username: "Chai", email: "chai@example.com" })
    }, 1000)
})

promiseThree.then(function(user){
    console.log("🧾 Received:", user);
})


// ================================
// 4️⃣ Promise with conditional rejection
// ================================
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({ username: "hitesh", password: "123" });
        } else {
            reject("❌ ERROR: Something went wrong");
        }
    }, 1000)
})

// Promise chaining with .then + .catch + .finally
promiseFour
    .then((user) => {
        console.log("👤 User:", user);
        return user.username;
    })
    .then((username) => {
        console.log("🆔 Username:", username);
    })
    .catch(function(error){
        console.log(error);
    })
    .finally(() => console.log("📌 Finished (resolved or rejected)"));


// ================================
// 5️⃣ Consuming promise using async/await
// ================================
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if (!error) {
            resolve({ username: "javascript", password: "123" });
        } else {
            reject("❌ ERROR: JS went wrong");
        }
    }, 1000);
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive;
        console.log("✅ Response from async:", response);
    } catch (error) {
        console.log("🚫 Caught in async/await:", error);
    }
}

consumePromiseFive();


// ================================
// 6️⃣ Using Fetch API with async/await (commented)
// ================================
/*
async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        console.log("👥 Users:", data);
    } catch (error) {
        console.log("🚫 Fetch Error:", error);
    }
}
getAllUsers();
*/


// ================================
// 7️⃣ Fetch API using then/catch (promise style)
// ================================
fetch('https://api.github.com/users/gouravslnk')
    .then((response) => response.json())
    .then((data) => console.log("🐙 GitHub Data:", data)) // its called thanable
    .catch((error) => console.log("❌ Fetch Error:", error))


// ================================
// 8️⃣ Promise Combinators
// ================================

// ✅ Promise.all - resolves when all promises resolve (fails if any fail)
const p1 = Promise.resolve('🌟 Fast');
const p2 = new Promise((res) => setTimeout(() => res('🐢 Slow'), 1000));
const p3 = Promise.resolve('⚡ Instant');

Promise.all([p1, p2, p3])
    .then((results) => console.log("✅ Promise.all:", results))
    .catch((e) => console.log("❌ One failed in Promise.all:", e));

// ✅ Promise.allSettled - waits for all, no matter success/failure
Promise.allSettled([p1, p2, Promise.reject('🔴 Error here')])
    .then((results) => console.log("📊 allSettled:", results))

// ✅ Promise.race - returns first settled (resolve or reject)
Promise.race([p2, p3])
    .then((result) => console.log("🏁 Race Winner:", result))
    .catch((e) => console.log("❌ Race Error:", e))

// ✅ Promise.any - returns first resolved (ignores rejections)
Promise.any([Promise.reject("💥 Fail 1"), p2])
    .then((res) => console.log("🎯 Promise.any Winner:", res))
    .catch((e) => console.log("❌ All failed in Promise.any:", e))


// ================================
// 📌 Microtasks vs Macrotasks (Quick Note)
// ================================
/*
setTimeout(() => console.log("🕐 setTimeout"), 0);
Promise.resolve().then(() => console.log("✅ Promise"));
console.log("📦 Sync Log");

// Output Order:
→ 📦 Sync Log
→ ✅ Promise         (microtask queue)
→ 🕐 setTimeout      (macrotask queue)
*/


// ================================
// 🔚 FINAL SUMMARY (Never forget this!)
// ================================
/*
A fetch() promise only rejects when a network error is encountered
(which is usually when there's a permissions issue or similar). A fetch()
promise does not reject on HTTP errors ( 404 , etc.). Instead, a then()
handler must check the and/or Response.ok and/or Response.status properties. 

🔹 A Promise has 3 states: Pending → Fulfilled or Rejected
🔹 Use .then/.catch/.finally for traditional chaining
🔹 Use async/await for cleaner, modern syntax
🔹 Use Promise.all if ALL must succeed
🔹 Use Promise.allSettled if you want results of ALL regardless
🔹 Use Promise.race to get the first response
🔹 Use Promise.any to ignore errors and get first success

💡 Promises are just wrappers around async behavior
💡 All fetch/API calls return promises
💡 Always handle errors (try/catch or .catch)

🔥 Practice is key — chain, reject, resolve, await.
*/

