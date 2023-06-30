// In JavaScript, functions are considered first-class objects. This means that functions can be treated like any other value in the language, such as numbers, strings, or objects. Here are some characteristics of first-class objects in JavaScript:

// 1. Functions can be assigned to variables or stored in data structures:
// ```javascript
const myFunction = function () {
  console.log("Hello, world!");
};

const myArray = [myFunction, 42, "some string"];
// ```

// 2. Functions can be passed as arguments to other functions:
// ```javascript
function sayHello() {
  console.log("Hello!");
}

function executeFunction(func) {
  func();
}

executeFunction(sayHello);
// ```

// 3. Functions can be returned as values from other functions:
// ```javascript
function createMultiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = createMultiplier(2);
console.log(double(5)); // Output: 10
// ```

// 4. Functions can be defined anonymously (without a name):
// ```javascript
const greet = function (name) {
  console.log("Hello, " + name + "!");
};
// ```

// 5. Functions can have properties and methods:
// ```javascript
function myFunction() {
  console.log("Hello!");
}

myFunction.customProperty = "some value";
console.log(myFunction.customProperty); // Output: some value
// ```

// These characteristics make functions in JavaScript flexible and powerful, allowing them to be used in various ways, such as callbacks, higher-order functions, and closures.
