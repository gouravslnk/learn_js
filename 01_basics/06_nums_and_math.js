const score = 400 // one way to define a number
console.log(score);

const balance = new Number(100) // another way to define a number, it creates a Number object
console.log(balance);

console.log(balance.toString().length); // This will return the length of the number as a string, which is 3 for 100

console.log(balance.toFixed(2)); // This will return the number as a string with 2 decimal places

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(3)); // This will return the number as a string with 4 significant digits, which is "123.9"

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); // This will return the number as a string formatted according to the Indian locale, which is "10,00,000"
console.log(hundreds.toLocaleString('en-US')); // This will return the number as a string formatted according to the US locale, which is "1,000,000"

// +++++++++++++ Maths +++++++++++++++++++++++++++++
console.log("We Start Math From Here \n\n");


console.log(Math); // This will log the Math object, which contains various mathematical constants and functions
console.log(Math.abs(-4)); // This will return the absolute value of -4, which is 4
console.log(Math.round(4.6));  // This will round 4.6 to the nearest integer, which is 5
console.log(Math.ceil(4.2)); // This will round 4.2 up to the nearest integer, which is 5
console.log(Math.floor(4.9)); // This will round 4.9 down to the nearest integer, which is 4
console.log(Math.min(4, 3, 6, 8));  // This will return the minimum value among the given numbers, which is 3
console.log(Math.max(4, 3, 6, 8));  // This will return the maximum value among the given numbers, which is 8
console.log(Math.random()); // This will return a random number between 0 (inclusive) and 1 (exclusive) 



// if we need to play with power like 2^3 = 8, we can use Math.pow(base, exponent)
console.log(Math.pow(2, 3)); // This will return 2 raised to the power of 3, which is 8

// square root of a number can be calculated using Math.sqrt(number)
console.log(Math.sqrt(16)); // This will return the square root of 16, which is 4

// Math.random() generates a random number between 0 and 1, so we can scale it to a desired range
// For example, to get a random number between 1 and 10, we can multiply the result by 10 and add 1
// To get a random integer between 1 and 10, we can use Math.floor to round down the result
// and add 1 to ensure the minimum value is 1
// To get a random integer between a specific range, we can use the formula:
// Math.floor(Math.random() * (max - min + 1)) + min
// This will generate a random integer between min and max (inclusive)


console.log(Math.random());  // This will return a random number between 0 (inclusive) and 1 (exclusive)
console.log((Math.random()*10) + 1);   // This will return a random number between 1 (inclusive) and 11 (exclusive)
console.log(Math.floor(Math.random()*10) + 1);  // This will return a random integer between 1 (inclusive) and 10 (inclusive)

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)