let name = "Rahul";

function getName() {
  console.log(name);
  let name = "Anil";
}

getName();

// The code you provided demonstrates a situation where a variable with the same name is declared both globally and within a function. This creates a scenario known as variable shadowing.

// In the getName() function, there is a console.log(name) statement that attempts to access the value of name. However, before that, a new local variable name is declared within the function using the let keyword, which creates a new block-scoped variable with the same name.

// In JavaScript, variables declared with let and const are not hoisted to the top of their scope like variables declared with var. Therefore, when the console.log(name) statement is executed, the local variable name is in a "temporal dead zone" and cannot be accessed yet. This will result in a ReferenceError.

// let name = "Rahul";

// function getName() {
//   console.log(name);
//
// }

// getName();// Rahul
// The code snippet you provided is related to variable scoping in JavaScript.In the code you provided, there is a global variable name with the value "Rahul", and a function getName() is defined that attempts to log the value of name using console.log(name).

// When you call getName(), it will attempt to access the value of name. Since there is no local variable with the same name declared within the getName() function, it will look for a variable named name in the scope chain. In this case, it will find the global variable name and print its value.

// This behavior is due to the concept of variable scoping in JavaScript. Variables declared with the let keyword have block scope, meaning they are only accessible within the block of code where they are defined. In this case, the name variable is accessible within the outer scope and can be accessed by the getName() function.

// It's important to note that if there was a variable with the same name declared inside the getName() function, it would shadow the outer variable, and the function would log the value of the local variable instead.
