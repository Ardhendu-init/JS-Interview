let namam = {
  firstName: "john",
  lastName: "sally",
};
const printFullName = function (country) {
  console.log(this.firstName + " " + this.lastName + " " + country);
};
printFullName.call(namam, "india");
