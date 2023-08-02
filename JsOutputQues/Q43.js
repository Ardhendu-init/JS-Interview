// Q. Flatten the following array.

const arr = [1, [2, 3], [4, [5, 6]]];

//----One Level Flatten --------//
// const falttenArrayOneLevel = (arr) => {
//   let res = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       res.push(...arr[i]);
//     } else {
//       res.push(arr[i]);
//     }
//   }
//   return res;
// };

const falttenArray = (arr) => {
  let res = []; //[1,func([2,3])]

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      res.push(...falttenArray(arr[i]));
    } else {
      res.push(arr[i]);
    }
  }
  return res;
};

console.log(falttenArray(arr));

// Using flat() method
const nestedArray = [1, [2, 3], [4, [5, 6, [7, 8]]]];
const flattenedArray = nestedArray.flat(Infinity);
console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6]
