# JavaScript Iterations (Loops) - 05_iterations

This folder covers **Loops and Iterations** - essential for repeating code execution and working with collections of data efficiently.

## Topics Covered

### 1. **For Loops** (`01_for_loop.js`)

**Basic For Loop:**
```javascript
for (let i = 0; i < 10; i++) {
    // code to repeat
}
```

**Key Concepts:**
- **Initialization** - Set starting value
- **Condition** - When to continue looping
- **Increment/Decrement** - How to change the counter
- **Block scope** - Variables declared inside loops

**Nested Loops:**
- Loops inside other loops
- Creating multiplication tables
- Working with 2D data structures
- Performance considerations

**Loop Control:**
- `break` - Exit loop completely
- `continue` - Skip current iteration, move to next
- When and how to use each

**Looping Through Arrays:**
- Accessing array elements by index
- Safe array iteration with length property
- Common patterns and best practices

### 2. **While Loops** (`02_while_loop.js`)

**While Loop Syntax:**
```javascript
while (condition) {
    // code to repeat
}
```

**Key Features:**
- Condition checked before each iteration
- Useful when number of iterations is unknown
- Risk of infinite loops if condition never becomes false

**Do-While Loop:**
```javascript
do {
    // code to repeat
} while (condition);
```

- Executes at least once (condition checked after)
- Less commonly used but important to understand

**Best Practices:**
- Always ensure the condition will eventually become false
- Initialize variables before the loop
- Update variables inside the loop to avoid infinite loops

### 3. **For-Of Loops** (`03_for_of_loop.js`)

**For-Of Syntax:**
```javascript
for (const element of iterable) {
    // work with element
}
```

**Use Cases:**
- **Arrays** - Iterate through values directly
- **Strings** - Loop through characters
- **Maps and Sets** - Modern data structures
- **NodeLists** - DOM elements

**Benefits:**
- Cleaner syntax than traditional for loops
- Direct access to values (not indexes)
- Works with any iterable object
- No need to manage counter variables

**Array Iteration:**
- Getting values directly without indexing
- Safer than index-based loops
- Preferred for simple array processing

### 4. **For-In Loops** (`04_for_in_loop.js`)

**For-In Syntax:**
```javascript
for (const key in object) {
    // work with key and object[key]
}
```

**Primary Use:**
- **Objects** - Iterate through property names (keys)
- Accessing both keys and values
- Enumerating object properties

**With Arrays (Not Recommended):**
- Returns indexes as strings
- Can include inherited properties
- for-of is better for arrays

**Important Notes:**
- Only iterates enumerable properties
- Order is not guaranteed in all JavaScript engines
- Use `hasOwnProperty()` to filter inherited properties

### 5. **forEach Method** (`05_forEach_loop.js`)

**forEach Syntax:**
```javascript
array.forEach((element, index, array) => {
    // process each element
});
```

**Key Features:**
- **Higher-order function** - Takes a function as argument
- Designed specifically for arrays
- Cannot be stopped with break/continue
- Always returns `undefined`

**Callback Parameters:**
- **element** - Current array item
- **index** - Current position (optional)
- **array** - The entire array (optional)

**Advantages:**
- More functional programming style
- Cleaner than traditional for loops
- Built-in array method

### 6. **Filter Method** (`06_filter.js`)

**Filter Purpose:**
- Creates a new array with elements that pass a test
- Does not modify the original array
- Returns a new array (can be empty)

**Filter Syntax:**
```javascript
const newArray = array.filter((element) => {
    return condition; // true/false
});
```

**Real-world Examples:**
- Filtering products by price range
- Finding users by role
- Getting books by genre
- Selecting items based on criteria

**Comparison with forEach:**
- **forEach** - Just loops, returns undefined
- **filter** - Returns new array based on conditions

### 7. **Map Method** (`07_map.js`)

**Map Purpose:**
- Creates a new array by transforming each element
- One-to-one transformation (same length as original)
- Does not modify the original array

**Map Syntax:**
```javascript
const newArray = array.map((element) => {
    return transformedElement;
});
```

**Common Use Cases:**
- Converting data formats
- Extracting specific properties from objects
- Mathematical transformations
- Creating JSX elements in React

**Method Chaining:**
- Combining map with other array methods
- Building data processing pipelines
- Functional programming patterns

### 8. **Reduce Method** (`08_reduce.js`)

**Reduce Purpose:**
- Reduces an array to a single value
- Most powerful but complex array method
- Can implement other methods (map, filter) using reduce

**Reduce Syntax:**
```javascript
const result = array.reduce((accumulator, current) => {
    return newAccumulator;
}, initialValue);
```

**Common Applications:**
- Summing numbers in an array
- Finding maximum/minimum values
- Counting occurrences
- Flattening nested arrays
- Building objects from arrays

**Advanced Patterns:**
- Shopping cart total calculation
- Grouping data by categories
- Creating lookup objects
- Complex data transformations

##  Best Practices

**Choosing the Right Loop:**
- **for** - When you need index control or complex conditions
- **for-of** - When you need values from arrays/iterables
- **for-in** - When you need object property names
- **forEach** - When you want functional style without return value
- **map** - When transforming data to new array
- **filter** - When selecting subset based on conditions
- **reduce** - When combining/accumulating values

**Performance Considerations:**
- Traditional for loops are fastest for simple operations
- Array methods are more readable but slightly slower
- Avoid nested loops when possible
- Consider algorithmic complexity (O(n), O(n²), etc.)

##  Real-world Applications

**Loops are essential for:**
- Processing user data and form inputs
- Rendering lists in user interfaces
- Data analysis and calculations
- API response processing
- Search and filtering functionality
- Creating dynamic content

