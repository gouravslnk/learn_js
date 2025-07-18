# JavaScript Control Flow - 04_control_flow

This folder covers **Control Flow** - the fundamental concepts for making decisions and controlling program execution in JavaScript.

## 📚 Topics Covered

### 1. **Conditional Statements** (`one.js`)

**Basic if/else Statements:**
- Making decisions in code based on conditions
- Single if statements
- if-else statements
- if-else if-else chains

**Comparison Operators:**
- `<` Less than
- `>` Greater than  
- `<=` Less than or equal to
- `>=` Greater than or equal to
- `==` Equality (with type conversion)
- `===` Strict equality (no type conversion)
- `!=` Not equal
- `!==` Strict not equal

**Block Scope in Conditionals:**
- Variables declared inside if blocks
- Scope rules with `let`, `const`, and `var`
- Best practices for variable declarations

**Logical Operators:**
- `&&` AND operator - both conditions must be true
- `||` OR operator - at least one condition must be true
- `!` NOT operator - reverses the boolean value

**Short-circuit Evaluation:**
- How `&&` and `||` operators work
- Practical uses in conditional assignments
- Guard clauses and default values

### 2. **Switch Statements** (`switch.js`)

**Switch Statement Syntax:**
```javascript
switch (variable) {
    case value1:
        // code
        break;
    case value2:
        // code
        break;
    default:
        // default code
}
```

**Key Features:**
- Alternative to multiple if-else statements
- Uses strict equality (`===`) for comparison
- `break` statement to prevent fall-through
- `default` case for unmatched values

**When to Use Switch:**
- Multiple specific value comparisons
- Cleaner than long if-else chains
- String or number value matching

**Fall-through Behavior:**
- What happens without `break` statements
- Intentional fall-through for multiple cases
- Common mistakes and how to avoid them

### 3. **Truthy and Falsy Values** (`truthy_falsy.js`)

**Understanding Truthiness:**
- How JavaScript evaluates values in boolean contexts
- Implicit type conversion in conditions

**Falsy Values (Always evaluate to false):**
- `false` - Boolean false
- `0` - Number zero
- `-0` - Negative zero
- `0n` - BigInt zero
- `""` - Empty string
- `null` - Null value
- `undefined` - Undefined value
- `NaN` - Not a Number

**Truthy Values (Everything else):**
- `"0"` - String containing zero
- `"false"` - String containing "false"
- `" "` - String with space
- `[]` - Empty array
- `{}` - Empty object
- `function(){}` - Functions

**Practical Applications:**
- Checking if arrays/objects are empty
- Default value assignments
- Form validation
- API response validation

**Nullish Coalescing Operator (`??`):**
- Difference from OR operator (`||`)
- Only considers `null` and `undefined` as falsy
- Better for default value assignment

**Ternary Operator (`? :`):**
- Shorthand for simple if-else statements
- Conditional assignment
- Inline conditional rendering

## 🎯 Key Learning Outcomes

After completing this folder, you will understand:

- ✅ **Decision making** - Using conditions to control code flow
- ✅ **Comparison operators** - Different ways to compare values
- ✅ **Logical operators** - Combining multiple conditions
- ✅ **Switch statements** - Clean alternative to multiple if-else
- ✅ **Truthiness** - How JavaScript evaluates values as true/false
- ✅ **Best practices** - When to use each control flow structure

## 💡 Best Practices

**Conditional Statements:**
- Use `===` instead of `==` for comparisons
- Keep conditions simple and readable
- Use early returns to reduce nesting
- Group related conditions with logical operators

**Switch Statements:**
- Always include `break` statements
- Use `default` case for error handling
- Consider switch for 3+ specific value comparisons
- Group cases when they should execute same code

**Truthiness Checks:**
- Be explicit about what you're checking
- Use `Array.length === 0` instead of just `!array`
- Use `Object.keys(obj).length === 0` for empty objects
- Understand the difference between `null`, `undefined`, and empty values

## 🔗 Real-world Applications

**Control flow is essential for:**
- User authentication (logged in/out states)
- Form validation (checking input values)
- API error handling (success/failure responses)
- Feature flags and conditional rendering
- Game logic and scoring systems
- Shopping cart calculations

