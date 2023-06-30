console.log(typeof typeof 1); //string

// type of 1 is "number" . And type of "number" is string

const num = [1, 2, 3];

num[5] = 89;
console.log(num); //[ 1, 2, 3, <2 empty items>, 89 ]

const numbers = [82, 7, 12];
numbers[8] = numbers;
console.log(numbers);
// The code initializes an array called numbers with three elements: 82, 7, and 12.
// It then assigns the numbers array itself as the value at index 8 of the numbers array. This means that the numbers array now has a length of 9, with an additional element that references the entire array.
// Finally, it logs the numbers array to the console.
// The output of this code will be:

// [82, 7, 12, <6 empty items>, Array(9)]

// Here's a breakdown of what each part of the code does:

// const numbers = [82, 7, 12];: This line declares a constant variable named numbers and assigns it an array containing the values 82, 7, and 12.
// numbers[8] = numbers;: This line assigns the numbers array itself as the value at index 8 of the numbers array. This creates a circular reference where the numbers array contains a reference to itself.
// console.log(numbers);: This line logs the numbers array to the console. Since the numbers array contains a circular reference, the console output will show the circular reference as [82, 7, 12, <6 empty items>, Array(9)].
