// Q. How to get name property without . operator ?
let data = { name: "jui", age: "24", skill: "Loving people " };

console.log(data["name"]);

// To retrieve the value of the name property from the data object without using the dot operator, you can use the square bracket notation. Here is the example :
// let data = { name: "jui", age: "24", skill: "Loving people" };
// let propertyName = "name";
// let nameValue = data[propertyName];
// console.log(nameValue);

// Q. What will be the output?
let data2 = { name: "jui", age: "24", skill: "Loving people ", name: "rohan" };

console.log(data2["name"]); //rohan

// In JavaScript, an object cannot have duplicate property names. If you define multiple properties with the same name in an object literal, only the last occurrence will be stored in the object. In your example, the name property is defined twice with different values: first as "jui" and then as "rohan".

// When you access data2["name"], it will return the value of the last occurrence of the name property in the data2 object, which is "rohan".
