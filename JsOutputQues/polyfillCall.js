const person = {
  firstName: "John",
  lastName: "Doe",
  //   getFullName: function () {
  //     return this.firstName + " " + this.lastName;
  //   },
};

function getFullName() {
  //   console.log(this);
  return this.firstName + " " + this.lastName;
}

const fullName = getFullName.call(person); // using call method to change the context of the function
console.log(fullName);

function myCall(obj) {
  return obj;
}

const array = ["a", "b"];
const elements = [0, 1, 2];
array.push.apply(array, elements);
console.log(array);
