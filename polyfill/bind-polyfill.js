function greet(greeting, punctuation) {
  return `${greeting}, ${this.name}${punctuation}`;
}
const user = { name: "John" };

const boundFn = greet.bind(user, "Hello"); // binds 'this' + partial args
boundFn("!"); // "Hello, John!"

Function.prototype.myBind = function (thisArg, ...boundArgs) {
  // boundArgs passed at bind time

  if (typeof this !== "function") {
    throw new Error("myBind must be called on a function");
  }

  const fn = this;

  return function (...calledArgs) {
    // callArgs - args passed when calling the bind function
    return fn.call(thisArg, ...boundArgs, ...calledArgs);
  };
};
const testBoundfn = greet.myBind(user, "Hello"); // binds 'this' + partial args
console.log(testBoundfn("!")); // "Hello, John!"

// greet.myBind(user, 'Hello')
//   ↓
// fn        = greet          (original function)
// thisArg   = user           (this to bind)
// boundArgs = ['Hello']      (args at bind time)
//   ↓
// returns a new function that when called with ('!')
//   ↓
// fn.call(user, 'Hello', '!')
