// First, understand what flat does natively
[1, [2, 3], [4, [5, 6]]].flat(); // [1, 2, 3, 4, [5, 6]]  depth=1
[1, [2, 3], [4, [5, 6]]].flat(2); // [1, 2, 3, 4, 5, 6]   depth=2
[1, [2, [3, [4]]]].flat(Infinity); // [1, 2, 3, 4]        fully flat

// flat does 2 things:
// Flattens nested arrays up to given depth (default = 1)
// Removes holes in sparse arrays

Array.prototype.myFlat = function (depth = 1) {
  // edge case 1: depth must be a number
  if (typeof depth !== "number") {
    throw new TypeError("depth must be a number");
  }

  // edge case 2: negative depth → return copy of array
  if (depth < 0) return [...this];

  const result = [];
  function flatten(arr, depth) {
    for (let i = 0; i < arr.length; i++) {
      if (i in arr) {
        if (Array.isArray(arr[i]) && depth > 0) {
          flatten(arr[i], depth);
        } else {
          result.push(arr[i]);
        }
      }
    }
  }
  flatten(this, depth);
  return result;
};

//Mental Model:

// is current element an array AND depth > 0?
//   YES → go inside it with depth - 1  (recurse)
//   NO  → push it to result

// depth runs out → stop flattening, push as is
// Infinity → never runs out → fully flattens

// default depth 1
[1, [2, 3], [4, [5, 6]]].myFlat(); // [1, 2, 3, 4, [5, 6]]

// depth 2
[1, [2, 3], [4, [5, 6]]].myFlat(2); // [1, 2, 3, 4, 5, 6]

// Infinity → fully flatten
console.log([1, [2, [3, [4]]]].myFlat(Infinity)); // [1, 2, 3, 4]

// empty array
[].myFlat(); // []

// sparse array (holes removed)
[1, , 3, [4, , 6]].myFlat(); // [1, 3, 4, 6]

// negative depth → no flattening
[1, [2, 3]].myFlat(-1); // [1, [2, 3]]
