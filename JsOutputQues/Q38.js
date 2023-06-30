let person = { name: "jui" };
const members = [person];
person = null;
console.log(members);

// In your code, you have an object `person` with a property `name` set to "jui". Then, you create an array `members` and assign `person` as its only element. After that, you set `person` to `null`. Finally, you log the `members` array to the console.

// Here's what happens step by step:

// 1. `let person = { name: "jui" };`: You declare a variable `person` and assign it an object with a property `name` set to "jui".

// 2. `const members = [person];`: You create an array called `members` and assign `person` as its only element. This means `members` contains a reference to the same object that `person` is pointing to.

// 3. `person = null;`: You assign `null` to the `person` variable. This doesn't affect the `members` array because `members` holds a reference to the object, not the `person` variable itself.

// 4. `console.log(members);`: You log the `members` array to the console. Since `members` still holds the reference to the object, you'll see the object itself as the output.

// The output will be:

// ```
// [{ name: "jui" }]
// ```

// Even though you set `person` to `null`, the `members` array still contains the reference to the original object, which retains the property `name: "jui"`. Setting `person` to `null` only affects the `person` variable itself, not the object that was previously assigned to it.

// In summary, the `members` array will still have the object with the `name` property intact, regardless of whether `person` is set to `null`.
