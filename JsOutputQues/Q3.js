let x = NaN;
console.log(typeof x); // "number"
console.log(isNaN(x)); // true

// In JavaScript, NaN stands for "Not-a-Number" and it is a special value that represents an unrepresentable or undefined value resulting from an invalid mathematical operation. NaN is of the type number.

// To check if a value is NaN, you can use the isNaN() function, which returns true if the value is NaN, and false otherwise.

// It's important to note that NaN is considered a number type because it is a specific value within the JavaScript number type. However, it behaves differently from other numbers when used in mathematical operations, as any arithmetic operation involving NaN will also result in NaN.
