// Dates

// All Dates in JavaScript are stored as milliseconds since January 1, 1970, 00:00:00 UTC

let myDate = new Date()
console.log(myDate); // This will log the current date and time
console.log(myDate.toString()); // This will log the current date and time as a string
console.log(myDate.toDateString()); // This will log the current date in a human-readable format
console.log(myDate.toLocaleString()); // This will log the current date and time in the local format
console.log(typeof myDate); // This will log the type of myDate, which is "object"
console.log(myDate.getFullYear()); // This will log the current year
console.log(myDate.getMonth()); // This will log the current month (0-11, where 0 is January and 11 is December)
console.log(myDate.getDate()); // This will log the current day of the month (1-31)
console.log(myDate.getHours()); // This will log the current hour (0-23)
console.log(myDate.getMinutes()); // This will log the current minutes (0-59)


console.log(myDate.toJSON()); // This will log the current date in JSON format
console.log(myDate.toISOString()); // This will log the current date in ISO format
console.log(myDate.toUTCString()); // This will log the current date in UTC format
console.log(myDate.toLocaleDateString()); // This will log the current date in the local date format
console.log(myDate.toLocaleTimeString()); // This will log the current time in the local time format


// ***********************************************************************************************************************************
// Creating a date object with a specific date
// let myCreatedDate = new Date(2023, 0, 23, 5, 3, 0) // year, month (0-11), day, hours, minutes, seconds

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
console.log(myCreatedDate.toLocaleString()); 

// ***********************************************************************************************************************************
// Getting the current timestamp in milliseconds
// This will return the number of milliseconds since January 1, 1970, 00:00:00 UTC
// let myTimeStamp = myCreatedDate.getTime() // This will return the timestamp of the created date
// let myTimeStamp = myCreatedDate.valueOf() // This will also return the timestamp of the created date



let myTimeStamp = Date.now()

console.log(myTimeStamp); 
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000)); // This will return the current timestamp in seconds since January 1, 1970, 00:00:00 UTC

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})


// It we want the current time in hh:mm:ss format, we can use the following code
let currentTime = new Date();
currentTime = currentTime.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
});
console.log(`This is the time  ${currentTime}`); // This will log the current time in hh:mm:ss format
