# JavaScript Data Structures - 02_basics

This folder focuses on **JavaScript's core data structures** - Arrays and Objects. These are essential for storing and organizing data in your applications.

## 📚 Topics Covered

### 1. **Arrays - Part 1** (`01_arrays.js`)

**What are Arrays?**
- Non-primitive reference data types
- Store multiple values in a single variable
- Can contain any data type (numbers, strings, objects, other arrays)

**Array Creation:**
- Array literal: `[1, 2, 3]`
- Array constructor: `new Array(1, 2, 3)`

**Array Methods (Manipulation):**
- `push()` - Add items to the end
- `pop()` - Remove item from the end  
- `unshift()` - Add item at the start
- `shift()` - Remove item from the start
- `includes()` - Check if element exists
- `indexOf()` - Get index of element
- `join()` - Convert array to string

**Slice vs Splice:**
- `slice()` - Returns copy without modifying original
- `splice()` - Modifies original array

### 2. **Arrays - Part 2** (`02_array.js`)

**Combining Arrays:**
- `push()` - Creates nested arrays (not recommended)
- `concat()` - Properly combines arrays
- **Spread operator** `...` - Modern and preferred method

**Flattening Nested Arrays:**
- `flat()` - Flattens one level deep
- `flat(Infinity)` - Completely flattens any depth

**Array Utilities:**
- `Array.isArray()` - Check if something is an array
- `Array.from()` - Convert strings/iterables to arrays
- `Array.of()` - Create array from arguments

### 3. **Objects - Part 1** (`03_objects.js`)

**Object Fundamentals:**
- Collection of key-value pairs
- Store related data together
- Reference data type

**Object Creation:**
- **Object Literal** `{}` - Not singleton
- **Constructor** `Object.create()` - Singleton

**Object Features:**
- **Symbol as keys** - Unique identifiers
- **Different key types** - strings, symbols
- **Accessing values:**
  - Dot notation: `obj.property`
  - Bracket notation: `obj["property"]`

**Object Methods:**
- Adding methods (functions) to objects
- Using `this` keyword in object methods
- `Object.freeze()` - Prevent modifications

### 4. **Objects - Part 2** (`04_objects.js`)

**Advanced Object Operations:**

**Nested Objects:**
- Objects within objects
- Accessing deeply nested properties
- Optional chaining for safe access

**Combining Objects:**
- `Object.assign()` - Traditional method
- **Spread operator** `{...obj1, ...obj2}` - Modern approach

**Object Utilities:**
- `Object.keys()` - Get all property names
- `Object.values()` - Get all property values  
- `Object.entries()` - Get key-value pairs as arrays
- `hasOwnProperty()` - Check if property exists

**Real-world Patterns:**
- Array of objects (common in APIs)
- Object destructuring
- Working with JSON-like data structures

## 🎯 Key Learning Outcomes

After completing this folder, you will understand:

- ✅ **Array manipulation** - Adding, removing, finding elements
- ✅ **Array methods** - When to use each method appropriately
- ✅ **Object creation** - Different ways to create and structure objects
- ✅ **Object property access** - Dot vs bracket notation
- ✅ **Nested data structures** - Working with complex data
- ✅ **Modern syntax** - Spread operator, destructuring
- ✅ **Real-world patterns** - How arrays and objects are used in applications

## 💡 Common Use Cases

**Arrays are perfect for:**
- Lists of items (shopping cart, todo items)
- Storing multiple values of same type
- Data that needs ordering/indexing

**Objects are perfect for:**
- User profiles, product details
- Configuration settings
- Grouping related properties
- Creating structured data

## 🔍 Important Concepts

**Memory Management:**
- **Primitive types** - Stored by value
- **Reference types** - Stored by reference
- Understanding shallow vs deep copying

**Best Practices:**
- Use `const` for arrays/objects (prevents reassignment)
- Prefer spread operator over older methods
- Use meaningful property names
- Consider object destructuring for cleaner code


