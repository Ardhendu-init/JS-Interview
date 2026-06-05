Array.prototype.myMap = function (callback, thisArg) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      // Handle sparse arrays — skip holes
      result[i] = callback.call(thisArg, this[i], i, this);
    }
  }
  return result;
};

// Test
[1, 2, 3].myMap((x) => console.log(x * 2)); // [2, 4, 6]
[1, , 3].myMap((x) => x * 2); // [2, empty, 6] — preserves holes
