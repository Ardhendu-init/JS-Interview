// In the context of JavaScript, "function borrowing" might be used to describe a technique where you take a method from one object and use it on another object, even though the method is not originally defined for that second object. This is possible because JavaScript has a flexible and dynamic nature.

// Let me explain this with an example:

const person = {
  firstName: "John",
  lastName: "Doe",
  getFullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const anotherPerson = {
  firstName: "Jane",
  lastName: "Smith",
};

// Function borrowing
// anotherPerson.getFullName = person.getFullName;
person.getFullName.call(anotherPerson);

console.log(anotherPerson.getFullName()); // Output: "Jane Smith"

// In the code above, we have two objects: `person` and `anotherPerson`. Initially, only the `person` object has the `getFullName` method defined. However, we "borrow" this method and assign it to the `anotherPerson` object. Now, even though `getFullName` was not originally defined for `anotherPerson`, we can still call it on that object, and it will work correctly.

// This happens because JavaScript uses the `this` keyword to determine the context of a function call. When we call `anotherPerson.getFullName()`, the `this` inside the `getFullName` function refers to the `anotherPerson` object, even though the function was originally a method of the `person` object.

// It's important to note that this behavior can lead to unexpected results or bugs if not used carefully, as the `this` context can change depending on how the function is called or where it's borrowed. So, it's essential to understand how the `this` keyword works in JavaScript when using this "function borrowing" technique.
