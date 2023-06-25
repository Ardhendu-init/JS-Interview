// .................Rest Vs Spred Operator....................//

// In JavaScript, the rest and spread syntax are both denoted by the ellipsis (`...`) operator, but they have different behaviors and are used in different contexts. Here are the key differences between rest and spread:

// Rest Syntax:
// The rest syntax allows you to represent an indefinite number of function arguments or the remaining elements of an array or iterable as an array. It collects multiple values and packs them into a single array. The rest syntax is used in function parameter lists or array destructuring.

// Example 1: Function Rest Parameters
// ```javascript
// function sum(...numbers) {
//   return numbers.reduce((total, num) => total + num, 0);
// }

// console.log(sum(1, 2, 3, 4, 5)); // Output: 15
// ```

// In the above example, the rest parameter `...numbers` collects all the function arguments and packs them into an array called `numbers`. It allows you to pass any number of arguments to the `sum` function.

// Example 2: Array Destructuring with Rest
// ```javascript
// const [first, second, ...rest] = [1, 2, 3, 4, 5];

// console.log(first);  // Output: 1
// console.log(second); // Output: 2
// console.log(rest);   // Output: [3, 4, 5]
// ```

// In this case, the rest operator `...rest` collects the remaining elements of the array after extracting the first two elements into `first` and `second` variables.

// Spread Syntax:
// The spread syntax allows you to expand elements from an array, object, or iterable into individual elements. It spreads the values of an array or object into separate elements. The spread syntax is used in function calls, array literals, object literals, and array/object destructuring.

// Example 1: Spread in Function Call
// ```javascript
// function multiply(a, b, c) {
//   return a * b * c;
// }

// const numbers = [2, 3, 4];
// console.log(multiply(...numbers)); // Output: 24
// ```

// In the above example, the spread syntax `...numbers` spreads the array elements as individual arguments when calling the `multiply` function.

// Example 2: Array Spread
// ```javascript
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// const mergedArray = [...arr1, ...arr2];
// console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]
// ```

// Here, the spread syntax `...arr1` and `...arr2` spreads the elements of `arr1` and `arr2` arrays, respectively, and combines them into a new array `mergedArray`.

// Example 3: Object Spread
// ```javascript
// const obj1 = { x: 1, y: 2 };
// const obj2 = { z: 3 };

// const mergedObject = { ...obj1, ...obj2 };
// console.log(mergedObject); // Output: { x: 1, y: 2, z: 3 }
// ```

// In this case, the spread syntax `...obj1` and `...obj2` spreads the properties of `obj1` and `obj2` objects, respectively, and merges them into a new object `mergedObject`.

// To summarize, the rest syntax collects multiple values into an array, while the spread syntax spreads elements from an array, object, or iterable into separate elements. The rest syntax is typically used in function parameters or array destructuring, while the spread syntax is used in function calls, array/object literals, or array/object destructuring.
