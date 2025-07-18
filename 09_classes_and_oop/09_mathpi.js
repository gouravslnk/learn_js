// 🚩 Inspecting a built-in property descriptor
const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");

// Output: {value: 3.141592..., writable: false, enumerable: false, configurable: false}
console.log(descriptor);

console.log(Math.PI);     // ➝ 3.141592653589793
Math.PI = 5;              // Won't change because PI is not writable
console.log(Math.PI);     // ➝ Still the same

// 🧪 Custom object example
const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function() {
        console.log("chai nhi bni");
    }
};

// 🔍 Get property descriptor of 'name' before defining anything
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// 🔧 Let's modify the descriptor using defineProperty
Object.defineProperty(chai, 'name', {
    value: 'ginger chai',    // The current value of the property
    writable: true,          // Allow the value to be changed
    enumerable: true,        // Now 'name' will show up in for...in or Object.entries()
    configurable: true       // Allow the descriptor to be changed or property to be deleted
});

// 🔍 Get descriptor after modification
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// 🔁 Loop over chai's entries and log only data properties (ignore functions)
for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
}

/*
📘 Summary: Object.getOwnPropertyDescriptor() and defineProperty()

┌─────────────────────────────────────────┬──────────────────────────────────────────────────────────────────────────────────┐
│ Feature                                 │ Explanation                                                                      │
├─────────────────────────────────────────┼──────────────────────────────────────────────────────────────────────────────────┤
│ getOwnPropertyDescriptor(obj, prop)     │ Returns descriptor info of a specific property                                   │
│ Descriptor Fields                       │ value, writable, enumerable, configurable                                        │
│ defineProperty(obj, prop, descriptor)   │ Allows redefining property behavior (make non-writable, hidden from loops, etc.) │
│ writable: false                         │ Prevents value from being changed                                                │
│ enumerable: false                       │ Prevents it from showing in loops (for...in, Object.entries())                   │
│ configurable: false                     │ Locks the descriptor itself (can't change it again or delete the property)       │
└─────────────────────────────────────────┴──────────────────────────────────────────────────────────────────────────────────┘

🧠 Why use this?
Great when you're building libraries, secure APIs, or want to control how properties behave in objects.
*/

