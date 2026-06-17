[1, 2, 3, 4].find((x) => x > 2); // 3
//                                    ↑
//                          returns FIRST matching element

[1, 2, 3, 4].find((x) => x > 10); // undefined  (no match)
// find does 2 things:

// Returns the first element that satisfies the condition
// Returns undefined if nothing matches

Array.prototype.myFind = function (callback, thisArg) {
  if (typeof callback !== "function") {
    throw new Error("Callback should be a function ");
  }
  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      if (callback.call(thisArg, this[i], i, this)) {
        return this[i];
      }
    }
  }
  return undefined;
};

//Mental Model:-
// loop through each element
//   ↓
// does callback return true?
//   YES → return that element immediately 🛑
//   NO  → keep going
//   ↓
// nothing matched → return undefined

//Test:

// basic
console.log([1, 2, 3, 4].myFind((x) => x > 2));
// 3  (first match)

// no match
console.log([1, 2, 3].myFind((x) => x > 10)); // undefined

// objects
const users = [
  { name: "John", age: 20 },
  { name: "Jane", age: 25 },
];
console.log(users.myFind((user) => user.age === 25)); // { name: 'Jane', age: 25 }

// empty array
console.log([].myFind((x) => x > 2)); // undefined

// first match only
console.log([5, 6, 7].myFind((x) => x > 4)); // 5  (not 6 or 7)
