// In JavaScript, both `forEach` and `map` are array methods used to iterate over elements in an array. However, they serve different purposes and have some key differences:

// 1. Purpose:
//    - `forEach`: The `forEach` method is used for iterating through each element of an array and performing some operation on each element. It doesn't return a new array; instead, it is mainly used for executing side effects or actions on each element, such as printing values, modifying elements, or triggering other functions.

//    - `map`: The `map` method is used for iterating through each element of an array and creating a new array with the results of applying a given function to each element. It returns a new array of the same length as the original array, containing the transformed elements.

// 2. Return value:
//    - `forEach`: It doesn't return anything. The return value is `undefined`.

//    - `map`: It returns a new array containing the values returned by the provided function for each element.

// 3. Usage:
//    - `forEach`: Use `forEach` when you want to iterate through an array and perform some action on each element without creating a new array.

const numbers = [1, 2, 3];
numbers.forEach((num) => console.log(num * 2)); // Output: 2, 4, 6

//  - `map`: Use `map` when you want to transform each element in the array and create a new array based on the transformation.

const numbers2 = [1, 2, 3];
const doubledNumbers = numbers2.map((num) => num * 2);
console.log(doubledNumbers); // Output: [2, 4, 6]

// 4. Mutation:
//    - `forEach`: It doesn't modify the original array.

//    - `map`: It doesn't modify the original array either; instead, it creates a new array based on the transformation.

// Keep in mind that since `map` returns a new array, you can use it to generate a new array with transformed elements while keeping the original array unchanged. On the other hand, `forEach` is more suitable when you want to perform side effects or actions on each element but don't need to create a new array.
