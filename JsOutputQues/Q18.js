let c = { name: "Rahul" };
let d = c;
c.name = "Rohit";
console.log(d);

// The code snippet you provided creates two variables, c and d, and assigns c a JavaScript object with a property name set to "Rahul". Then, d is assigned the value of c, which means both c and d reference the same object in memory.

// When you change the name property of c to "Rohit", it also affects the object referenced by d. Therefore, if you execute console.log(d), it will output:
// { name: 'Rohit' }

// This behavior is because objects are assigned and passed by reference in JavaScript. Assigning d = c does not create a new object; it simply creates a new reference to the same object that c points to. Modifying the object through either c or d will reflect in both variables.
