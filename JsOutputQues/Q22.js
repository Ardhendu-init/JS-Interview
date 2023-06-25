// Q. What is the o/p of the  following expression ?

// In JavaScript, object keys are stored as strings. When you use an object as a key, it gets converted to its string representation. In this case, both b and c are objects, so they are converted to [object Object] (the string representation of an empty object) before being used as keys.

// Let's analyze the code step by step:

const a = {}; //const a = {}; - This creates an empty object `a`.
const b = { key: "b" }; //const b = { key: "b" }; - This creates an object `b` with a property key set to "b".
const c = { key: "c" }; //const c = { key: "c" }; - This creates an object `c` with a property key set to "c".

a[b] = 123;
//a[b] = 123; - Here, `b` is converted to the string `[object Object]`, and it becomes a key of `a`. The value 123 is assigned to a["[object Object]"].
a[c] = 456;
//a[c] = 456; - Similarly, `c` is also converted to the string `[object Object]`, and it becomes another key of `a`. The value 456 is assigned to a["[object Object]"].

// At this point, a contains a single key-value pair: "[object Object]": 456.
console.log(a[b]);
//  - This prints the value associated with the key `[object Object]` in `a`. Since both `b` and `c` are converted to the same string representation,    `a[b]` is equivalent to `a[c]`. Therefore, it will output 456.
