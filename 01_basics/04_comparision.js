
console.log(2 > 1); // true
console.log(2 >= 1); // true
console.log(2 < 1); // false
console.log(2 == 1); // false
console.log(2 != 1); // true


console.log("2" > 1); // true
console.log("02" > 1); // true // "02" is converted to 2
console.log("2" < 1); // false


console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true - null is converted to 0 because of the == operator

// The reason is that an equality check and comparisons >  <  >=  <=  work differently.
// Comparisons convert null to a number, treating it as 0.

console.log(undefined == 0); // false
console.log(undefined > 0); // false
console.log(undefined < 0); // false
console.log(undefined >= 0); // false
// because undefined is not a number, it cannot be compared with 0


// ===  strict equality operator - it will check the value and the type of the variable

console.log("2" === 2); // false


