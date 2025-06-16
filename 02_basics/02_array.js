const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

//marvel_heros.push(dc_heros) // this will add the dc_heros array as a single element to the marvel_heros array

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros) // this will concatenate the two arrays and return a new array
console.log(allHeros);
console.log('\n')

const all_new_heros = [...marvel_heros, ...dc_heros] // this will spread the two arrays and return a new array
console.log("all_new_heros " + all_new_heros);
console.log('\n')


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
console.log(another_array);
console.log('\n')

const another_arrayy = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const another_arrayyy = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const final_array = [...another_arrayy, ...another_arrayyy] // this will spread the two arrays and return a new array
console.log(final_array);
console.log('\n')

const real_array = final_array.flat() // this will flatten the array to a single level
console.log(real_array);
console.log('\n')

const real_another_array = real_array.flat(Infinity) // this will flatten the array to a single level, Infinity means it will flatten all levels
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting -> this will create an array with a single element which is the object itself

// Array.from() creates an array from iterable or array-like objects (must have a length or be iterable).

Array.from("abc");              // ['a', 'b', 'c']
Array.from({ length: 3 });      // [undefined, undefined, undefined]
Array.from({ length: 3 }, (_, i) => i); // [0, 1, 2]
console.log(Array.from({length: 5}, (_, i) => i + 1)) // this will create an array with numbers from 1 to 5

// ❌ Invalid use:
Array.from({ name: "hitesh" }); // ❌ Error: object is not iterable

// ✅ To convert object to array:
Object.keys({ name: "hitesh" });    // ['name']
Object.values({ name: "hitesh" });  // ['hitesh']
Object.entries({ name: "hitesh" }); // [['name', 'hitesh']]




console.log('\n')

let score1 = [100, 150, 250]
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3).flat(1)) // this will create an array with the elements of score1, score2, score3 and flatten it to a single level;



