let data = { name: "Jui", age: 24 };
Object.seal(data); //this will seal the object meaning no new properties can be added here . Exsiting property can be modified.
data.city = "Durgapur";
console.log(data);
let keys = Object.keys(data).map((item) => data.item);

console.log(keys);
