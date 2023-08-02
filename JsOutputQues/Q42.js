const { List } = require("immutable");

const originalList = List([1, 2, 3, 4, 5]);
const modifiedList = originalList.push(6);

console.log(originalList); // Output: [1, 2, 3, 4, 5]
console.log(modifiedList.toJS()); // Output: [1, 2, 3, 4, 5, 6]
