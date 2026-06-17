let player = {
  firstName: "john",
  lastName: "sally",
};

function fullName(greet) {
  return `${greet} ${this.firstName} ${this.lastName}`;
}

console.log(fullName.call(player, "Hello"));

Function.prototype.myCall = function (thisArg, ...args) {
  if (typeof this !== "function") {
    throw new TypeError("myCall must be called on a function");
  }
  thisArg = thisArg || globalThis;

  thisArg.fn = this; // attach original function to object
  //             👆
  //          'this' here = the function (fullName)
  const result = thisArg.fn(...args);
  delete thisArg.fn;
  return result;
};
