//A polyfill is a piece of code (usually JavaScript on the Web) used to provide modern functionality on older browsers that do not natively support it.

// For example, a polyfill could be used to mimic the functionality of a text-shadow in IE7 using proprietary IE filters, or mimic rem units or media queries by using JavaScript to dynamically adjust the styling as appropriate, or whatever else you require.
let name1 = {
  firstName: "John",
  lastName: "smith",
};
const fullname = function (country, state) {
  console.log(
    this.firstName + " " + this.lastName + " " + country + " " + state
  );
};
// let printFullname = fullname.bind(name1, country);
// printFullname();
//We have to create the functionality of bind ...
// --------------------------------------------------------------
// Ist stage:- This function works as expected but if we pass second argument it will not work.
Function.prototype.myBind1 = function (...args) {
  let obj = this; //when we call fullname.myBind1 this refers to the fullname function which we are storing in the obj...
  return function () {
    obj.call(args[0]);
  };
};
let printFullname2 = fullname.myBind1(name1, "Ind");
printFullname2(); //will return john smith undefined
// ............................................................
//2nd stage:-
Function.prototype.myBind2 = function (...args) {
  let obj = this;
  params = args.slice(1); //gettin all parameter except the first parameter, so params here is an array, and call method doesn't support array in argument so instead we will use apply method'
  return function () {
    obj.apply(args[0], params);
  };
};
let printFullname3 = fullname.myBind2(name1, "Ind");
printFullname3(); //It will print john smith Ind
// -----------------------------------------------------------
//3rd Stage : If we pass argument to the printFullname3 method, we will get undefined again to solve the problem
Function.prototype.myBind3 = function (...args) {
  let obj = this;
  params = args.slice(1);
  return function (...args2) {
    //receving the argument passed to printFullname.

    obj.apply(args[0], [...params, ...args2]); //with help of spread operator we combine two array params and args2 into one array
  };
};
let printFullname4 = fullname.myBind3(name1, "Ind");
printFullname4("West Bengal");
