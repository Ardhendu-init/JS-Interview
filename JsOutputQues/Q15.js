let a = 2;
let b = 3;
let c = 2;
console.log(b-- === a);
// In the code you provided, you have two variables a and b initialized with the values 2 and 3 respectively. The statement b-- === a is a comparison expression that checks if the post-decremented value of b is equal to a.

// Here's how the code is evaluated:

// b-- is a post-decrement operation. It means that the current value of b is used for the comparison, and then b is decremented by 1.
// In this case, the current value of b is 3.
// === is the strict equality operator, which checks if the values on both sides are equal and have the same type.
// a has the value 2.
// The comparison 3 === 2 is evaluated.
// Since 3 is not equal to 2, the result of the comparison is false.
// Finally, the console.log() function outputs false to the console.
// So, the output will be:false

// In case of pre-decrement the result will be true as --b will be 2 which is equal to a;

let a1 = 2;
let b1 = 3;
let c1 = 2;
console.log((--b1 === a1) === c1);
// In the code you provided, you have three variables a, b, and c initialized with the values 2, 3, and 2 respectively. The expression (--b === a) === c is a comparison expression that checks if the pre-decremented value of b is equal to a, and then compares the result with c.

// Here's how the code is evaluated:

// --b is a pre-decrement operation. It means that b is decremented by 1 before its value is used for the comparison.
// In this case, the value of b is decremented to 2.
// === is the strict equality operator, which checks if the values on both sides are equal and have the same type.
// a has the value 2.
// The comparison 2 === 2 is evaluated, which is true.
// Now, the expression becomes true === c.
// c has the value 2.
// The comparison true === 2 is evaluated, which is false.
// Finally, the console.log() function outputs false to the console.
// So, the output will be: false
