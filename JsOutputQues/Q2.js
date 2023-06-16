let a = [1, 2, 3, 4];
console.log(...a); // it will destructure the array to 1 2 3 4

// 1.The three dots operator in JavaScript is one of the significant updates that was shipped with ES6.
// 2.The three dots operator has two different meanings in JavaScript. The syntax is very similar, but you use each one in different contexts. These two different uses of the ... are the spread and rest operators.

// How to Copy an Array With the Spread Operator
// When we want to copy the elements of a particular array into a new array without affecting the original array, we can use the spread operator.
// Here's an example:

let studentNames = ["Daniel", "Jane", "Joe"];
let names = [...studentNames];
console.log(names); // ["Daniel","Jane","Joe"]

// This saves us the time we would use to write a loop statement:

studentNames.map((name) => {
  names.push(name);
});
console.log(names); // ["Daniel","Jane","Joe"]

// How to Pass Array Elements in Function Calls With the Spread Operator
// When you have a function that takes in a number and you have these numbers as elements of an array:

let scores = [12, 33, 6];

const addAll = (a, b, c) => {
  console.log(a + b + c);
};

addAll(...scores); // 51

// How to Split Strings Into Characters Using the Spread Operator
// Suppose we have a string. We can make use of the spread operator to split it into characters:

let myString = "freeCodeCamp";
const splitString = [...myString];
console.log(splitString); // ["f","r","e","e","C","o","d","e","C","a","m","p"]

// This is similar to the split() method:
// let myString = "freeCodeCamp";
// const splitString = myString.split('');
// console.log(splitString); // ["f","r","e","e","C","o","d","e","C","a","m","p"]

// For more Details Read :https://www.freecodecamp.org/news/three-dots-operator-in-javascript/
