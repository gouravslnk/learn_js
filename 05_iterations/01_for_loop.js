// ===============================================
// 🔁 JavaScript Loops - for loop, nested loop, break & continue
// ===============================================


// ===============================================
// 🔹 Basic for loop
// ===============================================

for (let i = 0; i <= 10; i++) {
    const element = i;

    if (element == 5) {
        // console.log("5 is the best number");
    }

    // console.log(element);
}

// console.log(element);  // ❌ Error: element is block-scoped (defined inside for block)


// ===============================================
// 🔹 Nested loop
// ===============================================

for (let i = 1; i <= 10; i++) {
    // console.log(`📦 Outer loop value: ${i}`);

    for (let j = 1; j <= 10; j++) {
        // console.log(`🔁 Inner loop value ${j} and outer loop ${i}`);
        // console.log(`${i} * ${j} = ${i * j}`);
    }
}


// ===============================================
// 🔹 Looping through an array
// ===============================================

let myArray = ["flash", "batman", "superman"];

// console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}


// ===============================================
// 🔹 break and continue
// ===============================================

// ✅ break → exits the loop completely
// ✅ continue → skips the current iteration and moves to the next one

// Break example:
/*
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log("❌ Detected 5 - breaking the loop");
        break;
    }
    console.log(`Value of i is ${index}`);
}
*/

// Continue example:
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log("⚠️ Detected 5 - skipping this iteration");
        continue;
    }
    console.log(`✅ Value of i is ${index}`);
}


// ===============================================
// ✅ Summary Cheatsheet
// ===============================================
// for (init; condition; update) { ... }  → basic loop
// Nested loops = loop inside another loop
// Arrays can be looped with index
// break → completely stops the loop
// continue → skips only current loop cycle
// let → block-scoped, safer than var
