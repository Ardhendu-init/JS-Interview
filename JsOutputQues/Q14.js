// Q . Remove the first element of the Array arr.
let arr = [2, 9, 0, 10];
arr.shift();
// or
// arr.splice(0, 1);
console.log(arr);

// Q . Add a element 15 in the 0 index of the  arr.
let arr2 = [2, 9, 0, 10];
arr2.unshift(15);
console.log(arr2);

// Q . Add an array of Element starting from index 2;
let arr3 = [1, 2, 3, 4, 5];
let index = 2; // Index to add elements
let newElements = ["a", "b", "c"]; // Elements to add

arr3.splice(index, 0, ...newElements);

console.log(arr3);

// const data = [1, 2, 3, 4, 5];
// const data2 = [1, 2, 2, 3, 3, 6, 8];

// const ans = [...new Set([...data, ...data2])];
// console.log("first", ans);
