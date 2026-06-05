Array.prototype.myFilter = function (callback, thisArg) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (i in this && callback.call(thisArg, this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};

[1, 2, 3, 4, 5].myFilter((x) => x % 2 === 0); // [2, 4]
[1, , 3, 4].myFilter((x) => x % 2 === 0); // [4] — preserves holes, but only includes valid elements
