let player = {
  firstName: "john",
  lastName: "sally",
};
let player2 = {
  firstName: "james",
  lastName: "dev",
};

// Why in case of Arrow functions Call/Apply & Bind doesn’t work as expected? Answer:https://dev.to/alexantoniades/call-apply-bind-the-basic-usages-5gpl
// const printFullName = () => {
//   console.log(this.firstName + " " + this.lastName);
// };

const fullName = function (country, state) {
  console.log(
    this.firstName +
      " " +
      this.lastName +
      " lives in " +
      country +
      " in " +
      state
  );
};

fullName.call(player, "England"); // ist argument is pointed to the this object and 2nd argument is the country.

fullName.apply(player2, ["Australia", "Sydeny"]); //in apply method we pass the second argument in array.

const printFullName = fullName.bind(player2, "India", "pune");
console.log(printFullName); //retrun a bound function exactly same as fullname, not invoke directly
printFullName();
