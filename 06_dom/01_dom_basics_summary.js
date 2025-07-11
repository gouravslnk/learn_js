// ===============================================
// 📘 JavaScript - DOM Basics
// ===============================================
// DOM = Document Object Model
// It represents the page structure as an object
// Everything in HTML becomes accessible via JS

// console.log(window.document); // The document object represents the entire HTML document
// console.log(document); // The entire document object
// or console.dir(document); // More detailed view


// console.log(document.links); // All links in the document
// console.log(document.links[2]); // Specific link by index
// console.log(document.images); // All images in the document
// console.log(document.forms);  // All forms in the document
// console.log(document.scripts); // All scripts in the document


// The document object contains all elements, attributes, and text in the HTML
// You can access and manipulate these elements using JavaScript

// ===============================================
// 🔹 Document-level selections
// ===============================================

console.log(document.title);          // Title of the page
console.log(document.body);           // Full body tag
console.log(document.body.childNodes); // Includes whitespace/comments
console.log(document.body.children);  // HTML elements only


// ===============================================
// 🔹 Selecting Elements
// ===============================================

// ✅ By ID (returns a single element)
const mainTitle = document.getElementById("title");
console.log(mainTitle);

mainTitle.style.padding = "15px" // Add padding to the title
mainTitle.textContent // gives content of the title
mainTitle.innerHTML // this also gives content of the title
mainTitle.innerText // this also gives same

// eg: mainTitle = LEARN JS <span style="display:none" >text text</span> 

// the main diference between innerText and textContent is that innerText gives what is visible in content 
// and textContent gives all written content including hidden content 

// so here in above example the innerText will return only -> "LEARN JS"
// but the textContent will return "LEARN JS text text"
// innerHTML will return everything as it is ->'LEARN JS <span style="display:none" >text text</span> '

// =============================================================================================================

const mainTitlee = document.getElementById("title").getAttribute("class"); // Get class attribute of the title
document.getElementById("title").setAttribute("class", "new-class"); // Set new class attribute

document.getElementById("title").style.color = "blue"; // Change color of the title
document.getElementById("title").innerText = "New Title"; // Change text of the title

// =======================================================
//  THIS WILL RETURN A HTML COLLECTION
// =======================================================
// HTML Collection is a collection of HTML elements that can be accessed by index
// It is live, meaning it updates automatically when the DOM changes

// ✅ By Class (returns HTMLCollection)
const headings = document.getElementsByClassName("heading");
console.log(headings);
// this will return HTML Collection

// headings.forEach(heading => {
//     heading.style.color = "red"; // Change color of each heading
// });
// Note: HTMLCollection does not have forEach method, so you cannot use it directly
// You can convert it to an array using Array.from() or use a for loop
// Example of converting HTMLCollection to an array
// const headingsArray = Array.from(headings);
// headingsArray.forEach(heading => {
//     heading.style.color = "red"; // Change color of each heading
// });



// ✅ By Tag (returns HTMLCollection)
const h2s = document.getElementsByTagName("h2");
console.log(h2s);
//==============================================================


// ===============================================
// ✅ Modern Queries using querySelector
// ===============================================

// Selects the *FIRST* matching element
const titleTag = document.querySelector("#title"); // by id
const firstH2 = document.querySelector("h2");      // by tag
const inputBox = document.querySelector("input");  // input element
const firstListItem = document.querySelector(".list-item"); // by class
// document.querySelector('input')   --- support all CSS selectors
// document.querySelector('input[type="password"]') --- this will select the first input element with type password
// document.querySelector('ul li') // this will select the first li tag inside ul
// document.querySelector('ul > li') // this will select the first direct child of ul tag
// document.querySelector('ul li:first-child') // this will select the first child of li tag inside ul
// document.querySelector('p:first-child') this will select the first child of p tag
// document.querySelector('ul li:nth-child(2)') // this will select the second child of li tag inside ul

console.log(titleTag);
console.log(firstH2);
console.log(inputBox);
console.log(firstListItem);


const myul = document.querySelector("ul"); // Select the first <ul> element
myul.querySelector(".list-item"); // Select the first .list-item inside that <ul>
myul.querySelectorAll(".list-item"); // Select all .list-item inside that <ul>
console.log(myul);

//=====================================================
// 🔹 Using querySelectorAll
//====================================================
// Selects *all* matching elements (NodeList)
const allListItems = document.querySelectorAll(".list-item");
console.log(allListItems);
// allListItems -> NodeList

// so this will not work here -
// allListItems.style.color = "green"  -- this will not work because this is not an array

// ---->> querySelectorAll returns a NodeList, which is similar to an array but not exactly the same.
// You can loop through it or convert it to an array if needed.
// for example, to change the color of all list items:
allListItems.forEach(item => {
    item.style.color = "green"; // Change color of each list item
});
// or you can convert it to an array
// const allListItemsArray = Array.from(allListItems);
// allListItemsArray.forEach(item => {
//     item.style.color = "green"; // Change color of each list item
// });

// ===============================================
// 🔹 Accessing Element Content
// ===============================================

console.log(titleTag.textContent);   // Shows all text including hidden
console.log(titleTag.innerText);     // Only visible text
console.log(titleTag.innerHTML);     // Full HTML inside the element


// ===============================================
// 🔹 Styling via JS
// ===============================================

// titleTag.style.color = "crimson"
// titleTag.style.backgroundColor = "yellow"
// titleTag.style.padding = "10px"
// titleTag.style.borderRadius = "5px"


// ===============================================
// ✅ Summary
// ===============================================
// document.getElementById("id")
// document.getElementsByClassName("class")
// document.getElementsByTagName("tag")
// document.querySelector("selector")  → first match
// document.querySelectorAll("selector") → all matches
//
// .innerText     → only visible text
// .textContent   → all text (even hidden)
// .innerHTML     → raw HTML inside element
//
// .style         → apply inline styles
