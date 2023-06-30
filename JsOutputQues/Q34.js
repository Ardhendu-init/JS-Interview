// In JavaScript, the `call`, `apply`, and `bind` methods are used to manipulate the execution context and binding of functions. They allow you to specify the value of `this` and pass arguments to a function. Let's explore each method with examples:

// 1. `call` method:
// The `call` method invokes a function with a specified `this` value and individual arguments passed as arguments. It takes the context object as the first argument, followed by the function arguments. Here's an example:

const person = {
  name: "John",
  greet: function (message) {
    console.log(message + ", " + this.name);
  },
};

const otherPerson = {
  name: "Jane",
};

person.greet.call(otherPerson, "Hello"); // Output: Hello, Jane

// In this example, the `greet` function is defined within the `person` object. By using `call`, we can invoke the `greet` function with the `otherPerson` object as the execution context (`this`). The `message` parameter is passed as an argument, and it prints "Hello, Jane".

// 2. `apply` method:
// Similar to `call`, the `apply` method invokes a function with a specified `this` value and an array of arguments. The first argument is the context object, and the second argument is an array or array-like object containing the function arguments. Here's an example:

function sum(a, b, c) {
  return a + b + c;
}

const numbers = [1, 2, 3];

const result = sum.apply(null, numbers);
console.log(result); // Output: 6

// In this example, the `sum` function expects three arguments, but instead of passing them individually, we use `apply` to pass the `numbers` array as arguments. The `null` value is passed as the execution context (since `sum` doesn't depend on any specific object).

// 3. `bind` method:
// The `bind` method creates a new function with a specified `this` value and initial arguments. It allows you to bind a function to a specific execution context and optionally preset arguments.Bind Allow to store the copy of the function call that we are doing in case of `call` method and call the func whenever you want .The bind method creates a new function with the specified this value and initial arguments, but it does not invoke the function immediately. In order to execute the function, you need to call the resulting bound function separately. Here's an example:

const person2 = {
  name: "John",
  greet: function (message) {
    console.log(message + ", " + this.name);
  },
};

const boundGreet = person.greet.bind(person2, "Hello");
boundGreet(); // Output: Hello, John

// In this example, `bind` creates a new function `boundGreet` with the execution context set to `person` and the first argument preset as `'Hello'`. When `boundGreet` is called, it prints "Hello, John". The original `greet` function remains unchanged.

// To summarize, `call` and `apply` allow you to invoke functions with a specific execution context and arguments, while `bind` creates a new function with a preset execution context and optional arguments. These methods provide flexibility in manipulating the `this` value and argument passing in JavaScript functions.
