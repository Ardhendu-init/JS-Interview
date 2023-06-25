const changeAgeAndRef = (person) => {
  person.age = 29;
  person = {
    name: "alex",
    age: 25,
  };
  return person;
};

const obj1 = {
  name: "John",
  age: 32,
};

const obj2 = changeAgeAndRef(obj1);
console.log(obj1);
console.log(obj2);

// In the provided code, there is a function `changeAgeAndRef` that takes an object `person` as a parameter. Inside the function, it modifies the `age` property of the `person` object, then reassigns the `person` parameter to a new object with different `name` and `age` properties. The function returns the new object.

// Let's go through the code step by step:

// 1. `const obj1 = { name: "John", age: 32 };`
//    - The `obj1` variable is declared and assigned an object with `name` "John" and `age` 32.

// 2. `const obj2 = changeAgeAndRef(obj1);`
//    - The `changeAgeAndRef` function is called with `obj1` passed as an argument. The `person` parameter inside the function now references the same object as `obj1`.
//    - Inside the function:
//      - The `age` property of the `person` object is modified to 29.
//      - A new object is created with `name` "alex" and `age` 25.
//      - The `person` parameter is reassigned to reference the new object.
//    - The returned value from the function, which is the new object, is assigned to `obj2`.

// 3. `console.log(obj1);`
//    - The `obj1` object is logged to the console.
//    - Output: `{ name: "John", age: 29 }`
//    - The `age` property of `obj1` has been modified to 29 inside the function.

// 4. `console.log(obj2);`
//    - The `obj2` object is logged to the console.
//    - Output: `{ name: "alex", age: 25 }`
//    - The `obj2` object is the new object created inside the function and returned as the result.

// In summary, the `changeAgeAndRef` function modifies the `age` property of the provided object (`obj1`) and then creates a new object with different `name` and `age` properties. However, the reassignment of the `person` parameter inside the function does not affect the original `obj1` object since it is passed by value (the reference to the object is passed, not the actual object). Therefore, `obj1` retains the modified `age` property, while `obj2` holds the newly created object.
