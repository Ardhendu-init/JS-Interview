console.log(Promise.resolve(5));

// To understand the code console.log(Promise.resolve(5));, let's break it down step by step:

// The Promise.resolve() method returns a Promise object that is resolved with a given value. It can also resolve with another Promise or a thenable object. The syntax is Promise.resolve(value). [0]
// In this case, Promise.resolve(5) creates a Promise object that is resolved with the value 5. The 5 is the argument passed to Promise.resolve(). [0]
// The console.log() function is then called with the resolved Promise object as its argument. The console.log() function logs the argument to the console. [1]
// When the resolved Promise object is passed to console.log(), it will display the Promise object itself. The output will be something like Promise {<resolved>: 5}. [1]
// To access the resolved value of a Promise, you need to use the .then() method. Here's an example:

// Promise.resolve(5).then((value) => {
//   console.log(value); // Output: 5
// });
