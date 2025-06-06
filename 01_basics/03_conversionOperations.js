let score = "33abc"
let value = null 
let value2 = undefined

// let console.log(typeof score) //string
// let console.log(typeof (score)) //string
// let console.log(typeof value) //object
// let console.log(typeof value2) //undefined


let valueInNumber = Number(score); // convert string to number
let nullinNumber = Number(value); // convert null to number
let undefinedInNumber = Number(value2); // convert undefined to number

// let console.log(typeof valueInNumber); //NaN - even the number/string is 33abc but it will be converted to number
// let console.log(nullinNumber); //0
// let console.log(undefinedInNumber); //NaN
// let console.log(valueInNumber); //NaN - Not a Number

let valueInString = String(valueInNumber); // convert number to string
// let console.log(typeof valueInString); //string
// let console.log(valueInString); //NaN

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

// ************************************* OPERATIONS *************************************

// console.log(2 + 2) // 4
// console.log(2 - 2) // 0
// console.log(2 * 2) // 4
// console.log(2 / 2) // 1
// console.log(2 % 2) // 0
// console.log(2 ** 2) // 4  power


let value3 = 2
let negValue = -value3
//console.log(negValue) // -2

let str1 = "Hello"
let str2 = "World"
let str3 = str1 + str2
// console.log(str3) // HelloWorld


// console.log("1" + 2); // 12
// console.log(1 + "2"); // 12
// console.log("1" + 2 + 2); // 122
// console.log(1 + 2 + "2"); // 32

// console.log( (3 + 4) * 5 % 3); // 2

console.log(+true); // 1 - first it will convert true to 1 and then +1
console.log(+""); // 0 - first it will convert "" to 0 and then +0
// the use of + sign is to convert the value to number

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);// read preix and postix increment and decrement from mdn web docs


console.log(gameCounter++); // 101 - post increment, it will return the value before incrementing
console.log(++gameCounter); // 103 - pre increment, it will return the value after incrementing

// ************************************* TYPE CONVERSION *************************************
// Type conversion is the process of converting a value from one data type to another.  
// JavaScript provides several methods for type conversion, including:
// Number(), String(), Boolean(), and BigInt().
// Type conversion is an important concept in JavaScript, as it allows you to work with different data types and perform operations on them.
// Type conversion can be implicit or explicit.
// Implicit conversion occurs when JavaScript automatically converts a value from one data type to another, such as when you use the + operator with a string and a number. example:
// console.log("2" + 1); // "21" - the number 1 is converted to a string and concatenated with "2"
// Explicit conversion occurs when you use a method to convert a value from one data type to another, such as using the Number() method to convert a string to a number.

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion

