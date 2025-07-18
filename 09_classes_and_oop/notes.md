# 🧠 JavaScript & Classes — OOP Essentials

JavaScript **does have classes**, a feature added in **ES6 (ECMAScript 2015)**.

---

### **Key Insight:**

* JavaScript is **fundamentally prototype-based**, not class-based like Java or C++.
* Its **classes are just syntactic sugar** — meaning:

  * They **look like** traditional classes to developers.
  * But **internally**, they still use JavaScript’s **prototype-based inheritance**.

---

### **Why It Matters:**

* This provides a **familiar syntax** for developers from class-based languages.
* But you should understand that **JavaScript’s behavior is different** under the surface.

---

## 🔹 What is Object-Oriented Programming (OOP)?

OOP is a programming paradigm based on the concept of **objects** — which bundle **data (properties)** and **functions (methods)** together.

In JavaScript, almost everything is an object (functions, arrays, even DOM nodes).

---

## 🔹 What is an Object?

An **object** is a collection of:

* **Properties** (key-value pairs)
* **Methods** (functions inside an object)

```js
const user = {
  name: "Gaurav",
  age: 21,
  greet: function () {
    console.log(`Hello, I'm ${this.name}`);
  }
};

user.greet(); // Hello, I'm Gaurav
```

Built-in object methods:

* `"hello".toUpperCase()`
* `[1, 2, 3].push(4)`
* `Math.random()`

---

## 🔹 Why Use OOP?

* Organizes code better with **reusability**
* Makes code **scalable**, **modular**, and **easier to debug**
* Helps **model real-world entities**
* Reduces duplication via **inheritance**

---

## 🔹 Ways to Create Objects

### 1. Object Literal ✅

```js
const car = {
  brand: "Toyota",
  start: function () {
    console.log("Engine started");
  }
};
```

### 2. Constructor Function (pre-ES6)

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const user1 = new Person("Gaurav", 21);
```

### 3. Prototypes

To add shared methods:

```js
Person.prototype.sayHi = function () {
  console.log(`Hi, I'm ${this.name}`);
};
```

### 4. ES6 Classes (syntactic sugar over prototypes)

```js
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound`);
  }
}

const dog = new Animal("Dog");
dog.speak(); // Dog makes a sound
```

---

## 🔹 Keywords: `new`, `this`, `instance`

* `new` creates a new object
* `this` refers to the object on which method was called
* An **instance** is an object created from a class or constructor

---

## 🔹 4 Pillars of OOP

### 1. 🧼 Abstraction

> Hiding internal details and showing only the essential parts.

**Example:**
You use `map()` or `fetch()` without knowing their inner implementation.

```js
class Car {
  startEngine() {
    this.#injectFuel();
    console.log("Engine started");
  }

  #injectFuel() {
    console.log("Fuel injected internally (private method)");
  }
}
```

### 2. 🛡️ Encapsulation

> Keeping data **private** and secure inside a class and exposing only what's necessary.

**Example:**

```js
class BankAccount {
  #balance = 1000; // private field

  deposit(amount) {
    if (amount > 0) this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}
```

### 3. 🧬 Inheritance

> A class can inherit properties and methods from another class.

```js
class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log(`${this.name} is eating`);
  }
}

class Dog extends Animal {
  bark() {
    console.log(`${this.name} says Woof`);
  }
}

const pet = new Dog("Rocky");
pet.eat(); // inherited
pet.bark(); // own method
```

### 4. 🔁 Polymorphism

> Same method name behaves differently based on the object.

```js
class Shape {
  draw() {
    console.log("Drawing shape");
  }
}

class Circle extends Shape {
  draw() {
    console.log("Drawing circle 🎯");
  }
}

class Square extends Shape {
  draw() {
    console.log("Drawing square 🔳");
  }
}

const shapes = [new Circle(), new Square()];
shapes.forEach(shape => shape.draw());
```

---

## 🔚 Summary

| Concept       | Meaning                            | JS Example                          |
| ------------- | ---------------------------------- | ----------------------------------- |
| Object        | Collection of key-value pairs      | `{ name: "JS", version: 6 }`        |
| Constructor   | Function to create similar objects | `function Car() { ... }`            |
| Prototype     | Share methods without duplicating  | `Class.prototype.method = ...`      |
| Class         | Blueprint for objects              | `class User { ... }`                |
| Abstraction   | Hide complex logic                 | Using `.fetch()` or `.map()`        |
| Encapsulation | Restrict direct access             | Private fields `#secret`            |
| Inheritance   | Reuse parent class                 | `class Dog extends Animal`          |
| Polymorphism  | Same method, different output      | `draw()` in `Shape`, `Circle`, etc. |
