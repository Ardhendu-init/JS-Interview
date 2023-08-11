let namam = {
  firstName: "john",
  lastName: "sally",
};
const printFullName = function (country) {
  console.log(this.firstName + " " + this.lastName + " " + country);
};
printFullName.call(namam, "india");

const arr = Array(1, 2, 3, 4);

Array.prototype.mySquare = function () {
  console.log("Hey  I am  here to square ");
};

// let a = 32;

// setTimeout(() => {
//   console.log(a);
// }, 0);
// a = 100;

console.log(namam["firstName"]);
