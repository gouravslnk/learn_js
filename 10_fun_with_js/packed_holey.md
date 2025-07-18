# 🐘 Fun with JavaScript: Packed vs Holey Arrays
JavaScript arrays in the V8 engine (used in Chrome & Node.js) are **optimized** in different internal representations based on the content and structure of the array. Two key concepts here are:

* **Packed arrays**
* **Holey arrays**

These representations affect **performance** and **memory usage**, and understanding them helps write faster and more optimized code.

---

## 🔍 Internal Array Types in V8

1. ### 🔸 **SMI Elements**

   * SMI = Small Integer (`int32`)
   * Most efficient form of an array.
   * Example:

     ```js
     const arr = [1, 2, 3, 4, 5]; // Packed SMI Elements
     ```

2. ### 🔸 **Packed Elements**

   * Mixed types (e.g. strings or mixed numbers).
   * Slightly less optimized.
   * Example:

     ```js
     const arr = ['1', '2', '3']; // Packed Elements
     ```

3. ### 🔸 **Double Elements**

   * For floating-point numbers or when a number looks like a float (e.g., `6.0`).
   * Example:

     ```js
     const arr = [1, 2, 3];
     arr.push(6.0); // Now becomes Packed Double Elements
     ```

---

## 🕳️ Packed vs Holey Arrays

### ✅ Packed Arrays

* Arrays with **no holes** (i.e., no undefined or missing indices).
* Fastest access & memory optimized.
* Access is **direct** (indexed lookup).

### ⚠️ Holey Arrays

* Arrays **with missing elements** (i.e., indexes are skipped).
* More expensive to process.
* Requires **extra checks** during element access.

#### Example:

```js
const arr = []
arr[10] = 11 // Creates a hole from index 0 to 9
// Type: HOLEY_ELEMENTS
```

---

## 🔧 Example Transitions

### 🔹 Step-by-step transformations:

```js
const arrTwo = [1, 2, 3, 4, 5] 
// => PACKED_SMI_ELEMENTS

arrTwo.push(6.0)
// => PACKED_DOUBLE_ELEMENTS

arrTwo.push('7')
// => PACKED_ELEMENTS (because of mixed types)

arrTwo[10] = 11
// => HOLEY_ELEMENTS (holes from index 6 to 9)
```

---

## ⚠️ Why Holes Are Expensive?

When an array is **holey**, JavaScript needs to check:

```js
// Bound check:
arr.hasOwnProperty(index)
// If not present, check:
arr.prototype
Object.prototype
```

These **prototype chain lookups** slow down performance.

> **Holes introduce unpredictable behavior & inefficiency.**

---

## 🧠 V8 Optimization Order

V8 prefers the following in performance terms:

#### Packed Arrays:

* SMI > DOUBLE > OBJECT

#### Holey Arrays:

* HOLEY\_SMI > HOLEY\_DOUBLE > HOLEY\_ELEMENTS

---

## 🛠️ Creating Holes Example

```js
const arrFour = new Array(3)
// Just creates 3 holes (undefined)

arrFour[0] = '1'  // HOLEY_ELEMENTS
arrFour[1] = '2'
arrFour[2] = '3'
```

```js
const arrFive = []
arrFive.push('1')  // PACKED_ELEMENTS
arrFive.push('2')
arrFive.push('3')
```

---

## 📸 `%DebugPrint()` in V8

To inspect internal array optimizations, you can use `%DebugPrint()` (available via `d8` or `JSVU` tools):

```js
const myArr = []
%DebugPrint(myArr)
```

This gives you internal flags like:

* PACKED\_SMI\_ELEMENTS
* HOLEY\_ELEMENTS
* PACKED\_DOUBLE\_ELEMENTS

> ✅ Available in V8 shell, not in browsers.

---

### 🔚 Summary

| Array Type        | Description                    | Performance | Example          |
| ----------------- | ------------------------------ | ----------- | ---------------- |
| `PACKED_SMI`      | Small integers only            | 🔥 Fastest  | `[1, 2, 3]`      |
| `PACKED_DOUBLE`   | Floating point numbers         | ⚡ Fast      | `[1, 2.5, 3.6]`  |
| `PACKED_ELEMENTS` | Mixed types (string, obj, etc) | ⚠️ Slower   | `['a', 1, true]` |
| `HOLEY_SMI`       | Integers with gaps             | 🐢 Slow     | `arr[5] = 10`    |
| `HOLEY_DOUBLE`    | Floats with gaps               | 🐌 Slower   | `arr[5] = 5.5`   |
| `HOLEY_ELEMENTS`  | Mixed + gaps                   | 🐢 Slowest  | Sparse arrays    |
