let obj = { name: "jui" };

const person = [obj];
obj = null;
console.log(person);

// In the code you provided, there are a few steps happening:

// 1. `let obj = { name: "jui" };`: A variable `obj` is declared and initialized with an object containing a `name` property.

// 2. `const person = [obj];`: Another variable `person` is declared and assigned an array containing the `obj` object. The array has a single element, which is a reference to the `obj` object.

// 3. `obj = null;`: The `obj` variable is reassigned with `null`, meaning the `obj` variable no longer holds a reference to the object it previously pointed to.

// 4. `console.log(person);`: The `person` array is logged to the console.

// The output of the `console.log(person)` statement will be an array with a single element, which is the object that was initially assigned to `obj`:

// ```javascript
// [ { name: "jui" } ]
// ```

// Even though the `obj` variable was reassigned to `null`, the `person` array still holds a reference to the original object. Changing the value of `obj` to `null` does not affect the `person` array because the array element holds a separate reference to the object.

// In JavaScript, objects are passed by reference. When you assign an object to a variable or store it in an array, you are storing a reference to the object. Modifying the reference (such as assigning `null` to `obj`) does not affect the original object or other references to it.

// Therefore, even after setting `obj` to `null`, the `person` array still retains the reference to the original object, and the object itself is not modified or removed.
