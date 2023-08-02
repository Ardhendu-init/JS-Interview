const print = (...args) => {
  console.log(typeof args);
};

print();

// ----------------------Arrow function Vs Normal Function--------------------------

// 1.Syntax: Arrow functions have a more concise syntax compared to regular functions. They are defined using the => arrow syntax.
// example:-
// Arrow Function
// const sum = (a, b) => a + b;

// Regular Function
// function sum(a, b) {
//   return a + b;
// }

// 2.this binding: Arrow functions do not have their own "this" value. Instead, they inherit the "this" value from the enclosing lexical scope. In contrast, regular functions have their own "this" value, which is determined by how they are called.
// example:-
// Arrow Function
// const person = {
//     name: "John",
//     sayHello: () => {
//       console.log(`Hello, ${this.name}!`);
//     }
//   };
//   person.sayHello(); // Output: Hello, undefined!

// Regular Function
//   const person = {
//     name: "John",
//     sayHello: function() {
//       console.log(`Hello, ${this.name}!`);
//     }
//   };
//   person.sayHello(); // Output: Hello, John!

// 3.Arguments object: Arrow functions do not have their own arguments object. If you need to access the arguments passed to an arrow function, you can use the rest parameter syntax (...) or pass the arguments explicitly as a named parameter. Regular functions, on the other hand, have their own arguments object that allows you to access the arguments passed to the function.
// example:-
// Arrow Function
// const printArguments = (...args) => {
//     console.log(args);
//   };
//   printArguments(1, 2, 3); // Output: [1, 2, 3]

// Regular Function
//   function printArguments() {
//     console.log(arguments);
//   }
//   printArguments(1, 2, 3); // Output: [1, 2, 3]

// 4.Constructor function: Arrow functions cannot be used as constructor functions. They do not have a prototype property and cannot be invoked with the new keyword. Regular functions can be used as constructor functions to create new objects using the new keyword.
// e.g:-
// Arrow Function
// const Person = (name) => {
//     this.name = name; // Error: Cannot use 'this' in arrow function
//   };
//   const john = new Person("John"); // Error: Person is not a constructor

//    Regular Function
//   function Person(name) {
//     this.name = name;
//   }
//   const john = new Person("John"); // Instance of Person created

// 5.Binding of this, arguments, and super: Arrow functions do not have their own bindings for this, arguments, and super. Instead, they inherit these bindings from the surrounding scope. Regular functions, on the other hand, have their own bindings for this, arguments, and super.

// Arrow Function
// class Example {
//     constructor() {
//       this.name = "Example";
//     }
//     printName = () => {
//       console.log(this.name);
//     };
//   }
//   const obj = new Example();
//   obj.printName(); // Output: Example

//   // Regular Function
//   class Example {
//     constructor() {
//       this.name = "Example";
//     }
//     printName() {
//       console.log(this.name);
//     }
//   }
//   const obj = new Example();
//   obj.printName(); // Output: Example
