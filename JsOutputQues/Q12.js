const value = "Let's start coding";

console.log(!typeof value === "object");
console.log(!typeof value === "string");

// In the code snippet console.log(!typeof value === "object");, the typeof operator is used to determine the type of the value variable. The ! operator is then used to negate the result of the typeof operator. Finally, the negated result is compared to the string "object" using the strict equality operator ===.

// Here's how the code is evaluated step by step:

// The typeof operator is applied to the value variable. Since value is a string, the typeof value expression evaluates to "string".
// The ! operator is then applied to the result of the typeof operator. The ! operator negates the truthiness of its operand. In this case, it negates the truthiness of "string". Since "string" is truthy, the negation evaluates to false.
// Finally, the false value is compared to the string "object" using the strict equality operator ===. Since false and "object" are of different types, the comparison evaluates to false.
// Therefore, the output of the first console.log() statement will be false.

// Similarly, in the second console.log(!typeof value === "string");, the result will also be false. This is because the typeof operator evaluates to "string", the ! operator negates it to false, and then the comparison with "string" using === evaluates to false.

// To summarize, both console.log() statements will output false.
