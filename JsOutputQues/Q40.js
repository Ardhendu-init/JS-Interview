function getInfo(person) {
  return (person.name = "Anil");
}

const Members = { name: "Sarah" };

console.log(getInfo(Members));

console.log(Members);

// Let's analyze the code step by step:

// 1. `function getInfo(person) { ... }`: This function takes an object `person` as a parameter.

// 2. `return (person.name = "Anil");`: Inside the `getInfo` function, you are assigning the value `"Anil"` to the `name` property of the `person` object. Then, you are returning the value `"Anil"`. It's important to note that the assignment operation `=` also returns the assigned value.

// 3. `const Members = { name: "Sarah" };`: You declare a constant variable `Members` and initialize it with an object containing a `name` property set to `"Sarah"`.

// 4. `console.log(getInfo(Members));`: You call the `getInfo` function and pass the `Members` object as an argument. The function modifies the `name` property of the `Members` object to `"Anil"` and returns `"Anil"`. So, `"Anil"` is printed to the console.

// 5. `console.log(Members);`: After calling `getInfo`, you log the `Members` object to the console. Since the `getInfo` function modified the `name` property of the `Members` object, the output will show the updated object.

// Output:

// ```
// Anil
// { name: 'Anil' }
// ```

// The `getInfo` function modifies the `name` property of the `Members` object to `"Anil"` and returns `"Anil"`. As objects are reference types in JavaScript, modifying the property inside the function affects the original object referenced by `Members`. As a result, the `name` property of `Members` is updated to `"Anil"`.
