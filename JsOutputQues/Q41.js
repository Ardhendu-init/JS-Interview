let obj = { name: "aanik", age: 12 };

let { name, age } = obj;

let func = (a, ...b) => {
  console.log(a);
  console.log(b.join(""));
};

func(1, 2, 3, 7, 8);

const items = new Set([1, 2, 3, 2, 4, 4]);

[...items].forEach((i) => console.log(i));
