const name = "hitesh" // one way to declare a string
const repoCount = 50

// console.log(name + repoCount + " Value")
// This is a old method of concatenation 

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
// For Nowdays use `` (backticks) for string interpolation
// This is a template literal, it allows for multi-line strings and string interpolation

// This is a better way to concatenate strings because it is more readable and maintainable and also we can use methods inside it
// console.log(`Hello my name is ${name.toUpperCase()} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com') // This is an another way to declare a string, it creates a String object and it is not an array (it is a key - value pair object) like 0 key and h pair, 1 key and i pair, etc.

// console.log(gameName[0]); // h
// console.log(gameName.__proto__); to access the prototype of the String object


// console.log(gameName.length);
// console.log(gameName.toUpperCase());  // here because string is a primitive data type, it will return a new string and not modify the original string





console.log(gameName.charAt(2)); // This will return the character at index 2, which is 't'
console.log(gameName.charCodeAt(2)); // This will return the ASCII value of the character at index 2, which is 116 for 't'
console.log(gameName.indexOf('t')); // This will return the index of the first occurrence of 't', which is 2
console.log(gameName.lastIndexOf('h')); // This will return the index of the last occurrence of 'h', which is 9
console.log(gameName.startsWith('h')); // This will return true if the string starts with 'h', otherwise false

const newString = gameName.substring(0, 4) // the last is not included, so it will return 'hite'
console.log("used substring method here " + newString);  // it will ignore negative values and start from 0

const anotherString = gameName.slice(-2, 4) // This will return a substring starting from index -8 to index 4
// If the start index is negative, it will count from the end of the string

console.log("used slice method here " + anotherString); 

// gameName is 'hitesh-hc-com' (length 13).
// slice(-2, 4) means:
// -2 becomes 13 - 2 = 11
// So, slice(11, 4)
// Since 11 > 4, you get an empty string.

// If the start index is greater than the end index, it will return an empty string

// If you want to get the last 2 characters, use only one argument:
const anotherStringg = gameName.slice(-2);
console.log("used slice method here " + anotherStringg); // Output: "om"

// If you want a substring from index 2 to 4:
const anotherStringgg = gameName.slice(2, 4);
console.log("used slice method here " + anotherStringgg); // Output: "te"

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim()); // This will remove the whitespace from both ends of the string

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-')) // This will replace the first occurrence of '%20' with '-'

console.log(url.includes('sundar'))  // This will return true if the string contains 'sundar', otherwise false

console.log(gameName.split('-'));  // This will split the string into an array of substrings using '-' as the separator

console.log(gameName.split(''));  // This will split the string into an array of characters

// in split we need a separator and limit for example
const splitString = gameName.split('-', 2); // This will split the string into an array of substrings using '-' as the separator and limit the result to 2 elements
console.log(splitString); // Output: ['hitesh', 'hc']