// What will be the o/p of the following?
const person = { name: "anil" };

function sayHi(age) {
  console.log(`${this.name} age ${age}`);
}

sayHi.call(person, 23);
sayHi.bind(person, 25);

// In the given code, the `sayHi.call(person, 23);` line correctly uses the `call` method to invoke the `sayHi` function with the `person` object as the execution context (`this`) and `23` as the `age` argument. It will print "anil age 23" to the console.

// However, the `sayHi.bind(person, 25);` line is not used correctly. The `bind` method creates a new function with the specified `this` value and initial arguments, but it does not invoke the function immediately. In order to execute the function, you need to call the resulting bound function separately. Here's the corrected example:

// ```javascript
// const person = { name: "anil" };

// function sayHi(age) {
//   console.log(`${this.name} age ${age}`);
// }

// sayHi.call(person, 23);

// const boundSayHi = sayHi.bind(person, 25);
// boundSayHi();
// ```

// In this modified code, the `bind` method creates a new function `boundSayHi` with the `person` object as the execution context (`this`) and `25` as the `age` argument. Then, calling `boundSayHi()` executes the function and prints "anil age 25" to the console.
