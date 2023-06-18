let a = 3;

let b = new Number(3);

console.log(a == b);
console.log(a === b);

// In JavaScript, the == operator checks for equality between two values, performing type coercion if necessary. The === operator checks for strict equality without performing type coercion.

// The first console.log(a == b) will output true because the == operator performs type coercion and converts the Number object b to its primitive value before comparing. In this case, the Number object b is converted to the primitive value 3, which is equal to the primitive value of a, so the comparison returns true.

// However, the second console.log(a === b) will output false because the === operator does not perform type coercion. It compares both the value and the type of the operands. In this case, a is a primitive number, while b is an instance of the Number object. Since they have different types, the strict equality comparison returns false.

// To summarize:

// a == b returns true because the == operator performs type coercion and compares the values.
// a === b returns false because the === operator does not perform type coercion and compares both the values and the types.
