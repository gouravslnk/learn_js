const accountId = 1234567890;
let accountEmail = 'enzzo@gmail.com';  // let is a variable that can be changed
var accountPassword = '123456'; 
// we don't use var anymore because it's an old way to declare variables and due to the scope of the variable
// because of issue in block scope and function scope

accountCity = 'São Paulo'; // we can declare a variable without using let, var or const, but it's not recommended

let accountState; // we can declare a variable without assigning a value, but it's not recommended

// accountId = 2; // Error: Assignment to constant variable. We can't change the value of a constant variable.

console.log(accountId); // 1234567890

// new method to console.log

console.log([accountId, accountEmail, accountPassword, accountCity, accountState]); 

// or

console.table({accountId, accountEmail, accountPassword, accountCity, accountState});

// or

console.log(`Account ID: ${accountId}, Account Email: ${accountEmail}, Account Password: ${accountPassword}, Account City: ${accountCity}, Account State: ${accountState}`);

// or

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

// lets try to change the value of variables

accountEmail = 'gg@gmail.com';
accountPassword = '654321';
accountCity = 'Rio de Janeiro';
accountState = 'RJ';
console.log("After change values");
console.table({accountId, accountEmail, accountPassword, accountCity, accountState});


