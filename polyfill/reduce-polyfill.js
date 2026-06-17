let arr = [2, 3, 5, 6];

// In built reduce
const res = arr.reduce((acc, curr) => {
  return acc + curr;
}, 0);
console.log(res);

// My Implementation

Array.prototype.myReduce = function (callback, initialvalue) {
  if (typeof callback !== "function") {
    throw new Error(callback + "is not a function ");
  }

  if (this.length === 0 && initialvalue === undefined) {
    throw new Error("Reduce of empty array with no initial value");
  }
  let acc;
  let startIndex;

  if (initialvalue !== undefined) {
    acc = initialvalue;
    startIndex = 0;
  } else {
    acc = this[0];
    startIndex = 1;
  }

  for (let i = startIndex; i < this.length; i++) {
    acc = callback(acc, this[i], i, this);
  }
  return acc;
};

//Test myReduce
console.log(arr.myReduce((acc, curr) => acc + curr, 0));
console.log(arr.myReduce((acc, curr) => acc + curr));
console.log([].myReduce((acc, curr) => acc + curr));

// initialValue given?
//    YES → acc = initialValue, loop from index 0
//    NO  → acc = arr[0],       loop from index 1

// each iteration:
//    acc = callback(acc, currentElement, index, array)

// return acc at the end
