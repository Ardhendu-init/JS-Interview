Function.prototype.myApply = function (thisArg, argsArray) {
  if (typeof this !== "function") {
    throw new TypeError("myApply must be called on a function");
  }
  thisArg = thisArg || globalThis;

  // edge case: if no args passed, default to empty array
  argsArray = argsArray || [];

  // edge case: argsArray must be an array

  if (!Array.isArray(argsArray)) {
    throw new TypeError("The argument should be an array ");
  }

  thisArg.fn = this;
  const result = thisArg.fn(...argsArray);

  delete thisArg.fn;
  return result;
};
let player = {
  firstName: "john",
  lastName: "sally",
};

function fullName(greet) {
  return `${greet} ${this.firstName} ${this.lastName}`;
}

console.log(fullName.myApply(player, ["hello"]));
