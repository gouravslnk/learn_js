// array in js are not primitive data types
// they are reference data types
// arrays are used to store multiple values in a single variable
// arrays can store any data type
// arrays can store mixed data types

const myArr = [0, 1, 2, 3, 4, 5]
console.log(myArr);
console.log(myArr[0]);

const myHeors = ["shaktiman", "naagraj"]
console.log(myHeors);
console.log(myHeors[0]);

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr2);
console.log(myArr2[0]);     


// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)  // adds element at the beginning of the array
// myArr.shift()  // removes element from the beginning of the array 

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()  // it converts the array to a string
// const newArr = myArr.join(" - ")  // it converts the array to a string with a separator

// console.log(myArr);
// console.log( newArr);


// slice, splice
// slice() - returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included).
// splice() - changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
// myArr = [0, 1, 2, 3, 4, 5]
console.log('\n')

console.log("A ", myArr);

console.log('\n')

// myArr.slice(1, 3) // returns a new array with elements from index 1 to index 3 (not included)
const myn1 = myArr.slice(1, 3)
console.log('myn1 : ' + myn1);
console.log("B ", myArr);

console.log('\n')
// myArr.splice(1, 3) // removes 3 elements from index 1
const myn2 = myArr.splice(1, 3)
console.log('myn2 : ' + myn2);
console.log("C ", myArr);
