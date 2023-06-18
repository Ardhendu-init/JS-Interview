// In JavaScript, the "use strict" directive is used to enable strict mode, which enforces stricter parsing and error handling rules. It helps to avoid common mistakes and makes JavaScript code more reliable and maintainable. Here's how you can use strict mode in JavaScript:

// 1.Global strict mode:
// To enable strict mode globally in your JavaScript file, simply add the "use strict" directive at the beginning (outside of any functions) of the file:
// "use strict";

// // Your JavaScript code goes here
// This will enforce strict mode for the entire file, including all functions and statements.

// 2.Function-level strict mode:
// If you only want to enable strict mode within a specific function, you can place the "use strict" directive at the beginning of that function:
// function myFunction() {
//   "use strict";

//   // Your code here
// }
// In this case, strict mode will only apply to the function in which it is declared.

// Strict mode introduces several changes to JavaScript's behavior, including:

// Disallows the use of undeclared variables.
// Prevents accidental global variable creation.
// Assigning values to read-only global variables and properties throws an error.
// Prevents duplicate parameter names in function declarations.
// this value is undefined in functions that are not methods or constructors.
// Octal literals (e.g., 0123) are not allowed.
// Deleting variables, functions, or function arguments is not allowed.
// Etc.
// By enabling strict mode, you can catch potential errors, improve code quality, and ensure better compatibility with future versions of JavaScript.a
