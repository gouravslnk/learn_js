# JavaScript Basics - 01_basics

This folder covers the **fundamental concepts** of JavaScript programming language. These are the building blocks you need to understand before moving to advanced topics.

##  Topics Covered

### 1. **Variables and Constants** (`01_variables.js`)
- Variable declaration with `let`, `var`, and `const`
- Understanding the differences between them
- Scope issues with `var` vs `let`/`const`
- Best practices for variable naming
- Console methods: `console.log()`, `console.table()`

### 2. **Data Types** (`02_dataTypes.js`)
- **Primitive Data Types:**
  - String (text data)
  - Number (integers and floating-point numbers)
  - Boolean (true/false)
  - Null (intentional empty value)
  - Undefined (unassigned value)
  - Symbol (unique identifiers)
  - BigInt (large integers)
- **Non-Primitive Data Types:**
  - Objects, Arrays, Functions
- Using `typeof` operator
- Understanding `"use strict"` mode

### 3. **Type Conversion & Operations** (`03_conversionOperations.js`)
- **Type Conversion:**
  - Converting strings to numbers with `Number()`
  - Converting numbers to strings with `String()`
  - Boolean conversions
  - Understanding `NaN` (Not a Number)
- **Arithmetic Operations:**
  - Basic math operators (+, -, *, /, %, **)
  - String concatenation
  - Operator precedence
  - Prefix and postfix increment/decrement

### 4. **Comparison Operators** (`04_comparision.js`)
- Basic comparison operators (>, <, >=, <=, ==, !=)
- **Equality vs Strict Equality:**
  - `==` (loose equality) - performs type conversion
  - `===` (strict equality) - checks both value and type
- Comparing different data types
- Special cases with `null` and `undefined`
- Best practices for comparisons

### 5. **Strings** (`05_strings.js`)
- String declaration methods
- **Template literals** (backticks) for string interpolation
- **String methods:**
  - `charAt()`, `charCodeAt()`, `indexOf()`, `lastIndexOf()`
  - `substring()` vs `slice()` - extracting parts of strings
  - `trim()` - removing whitespace
  - `toUpperCase()`, `toLowerCase()`
  - `startsWith()`, `endsWith()`
- String objects vs primitive strings

### 6. **Numbers and Math** (`06_nums_and_math.js`)
- Number declaration and Number object
- **Number methods:**
  - `toString()` - convert to string
  - `toFixed()` - decimal places
  - `toPrecision()` - significant digits
  - `toLocaleString()` - locale formatting
- **Math object:**
  - `Math.abs()`, `Math.round()`, `Math.ceil()`, `Math.floor()`
  - `Math.min()`, `Math.max()`
  - `Math.pow()`, `Math.sqrt()`
  - `Math.random()` - generating random numbers
  - Creating random numbers in specific ranges

### 7. **Dates** (`07_dates_in_JS.js`)
- Understanding JavaScript Date object
- Creating dates with `new Date()`
- **Date methods:**
  - `getFullYear()`, `getMonth()`, `getDate()`
  - `getHours()`, `getMinutes()`, `getSeconds()`
  - `toString()`, `toDateString()`, `toLocaleString()`
  - `toJSON()`, `toISOString()`, `toUTCString()`
- Working with timestamps
- Date formatting and locale-specific formatting

### 8. **Data Types Summary** (`datatypes-summary.js`)
- **Comprehensive overview of all data types**
- **Primitive vs Non-Primitive (Reference) types**
- Memory allocation differences
- **Symbol** data type and its uniqueness
- **BigInt** for large numbers
- Type checking with `typeof`
