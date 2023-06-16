//1. What will be the Output ?

let a = [];
let b = [];

// console.log(a === b);
// console.log(a == b);

// Ans:- Both the cases answer will be false because when we compared array , we don't comapre array we compare there memory loctaion which will never be same that's why ans will be false ;

//2. What will be the Output ?

let a1 = [];
let b1 = a1;

// console.log(a1 === b1);
// console.log(a1 == b1);
// Ans:- Both the cases answer will be true , because here the memory location of a1 and b1 is same, here b1 is storing a1 / or b1 is pointing to the location of a1.

//3. What will be the Output ?

let a3 = [20];
let b3 = [20];

console.log(a3[0] === b3[0]);
console.log(a3[0] == b3[0]);

// Ans:- Both the cases answer will be true , here we are not checking memory but comapring elements as we specifically target one elements in the array . And there value are same that's why they are giving true .

//4. What will be the Output ?

let a4 = [20];
let b4 = ["20"];

console.log(a4[0] === b4[0]); // false because the type of the value is not same one is number and other is string;
console.log(a4[0] == b4[0]); // true , because it don not check type
