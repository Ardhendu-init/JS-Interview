// The expression `sum(1)(2)(3)...(n)()` suggests that you want to create a curried function `sum` that takes multiple arguments, one at a time, and returns an intermediate result until all arguments are provided, and finally, calling the function with no arguments will return the sum of all the previously provided arguments.

// Here's an implementation of the `sum` function in JavaScript using currying:

function sum(x) {
  return function innerSum(y) {
    if (y === undefined) {
      return x;
    } else {
      return sum(x + y);
    }
  };
}

console.log(sum(1)(2)(3)(4)()); // Output: 10 (1 + 2 + 3 + 4)
console.log(sum(5)(10)(15)()); // Output: 30 (5 + 10 + 15)

// When sum is called with an argument x, it returns the innerSum function.
// The innerSum function takes another argument y.
// If y is not provided (i.e., y === undefined), it means we want to get the current sum, so the function returns x.
// If y is provided, the function returns a recursive call to sum with the updated value of x + y.
// This process continues as long as we keep providing arguments to innerSum.
// When we call sum(1)(2)(3)(4)(), it follows these steps:

// sum(1) returns innerSum with x set to 1.
// innerSum(2) returns a recursive call to sum(1 + 2), so now x is 3.
// innerSum(3) returns a recursive call to sum(3 + 3), so now x is 6.
// innerSum(4) returns a recursive call to sum(6 + 4), so now x is 10.
// Finally, calling innerSum() with no arguments returns the current sum, which is 10.
// The process is similar when we call sum(5)(10)(15)(), which returns 30 (5 + 10 + 15). This implementation utilizes recursion to keep adding arguments until the final sum is calculated.

// We can aslo simplify the above sum function with arrow function and ternary opertaor

let sum2 = (x) => (y) => y ? sum(x + y) : x;
console.log(sum2(5)(10)(15)(20)()); //50
