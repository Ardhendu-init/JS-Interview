Array.prototype.myMap = function (callback, thisArg) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      // Handle sparse arrays — skip holes
      // thisArg controls what this refers to inside your callback
      result[i] = callback.call(thisArg, this[i], i, this);
    }
  }
  return result;
};

// Test
[1, 2, 3].myMap((x) => console.log(x * 2)); // [2, 4, 6]
[1, , 3].myMap((x) => x * 2); // [2, empty, 6] — preserves holes

// thisArg is the object we use in call method , here also callback.call taking thisArg as the first argument and the rest are the arguments passed to the callback function. And the map function take two arguments, the first one is the callback function and the second one is thisArg. The thisArg is optional, if you don't pass it, it will be undefined in strict mode or the global object in non-strict mode. And the callback inside map take three arguments, the first one is the current element, the second one is the index of the current element, and the third one is the array itself. So when you call callback.call(thisArg, this[i], i, this), you are calling the callback function with thisArg as the value of this inside the callback, and passing the current element, index, and array as arguments to the callback. This allows you to control what this refers to inside your callback function, which can be useful in certain situations.

// thisArg controls what this refers to inside your callback. It mirrors the native Array.prototype.map signature:

// array.map(callback, thisArg)
// When it matters:

// const multiplier = {
//   factor: 3,
//   multiply(x) { return x * this.factor; }
// };

// [1, 2, 3].myMap(multiplier.multiply, multiplier);
// // → [3, 6, 9]  ✅  'this' inside multiply = multiplier object
// Without thisArg, callback.call(undefined, ...) would be called, and this inside the callback would be undefined (strict mode) or the global object — so this.factor would break.
