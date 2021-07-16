'use strict';

// // This function is defined in the global scope as it is top-level code.  It also creates its own scope.
// function calcAge(birthYear) {
//   const age = 2021 - birthYear;
//   function printAge() {
//     const output = `${firstName}, you are ${age} years old, born in ${birthYear}.`;
//     console.log(output);
//     if (birthYear >= 1981 && birthYear <= 1996) {
//       const str = `Oh and you're a millennial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//     }
//     add(1, 2);
//   }
//   printAge();

//   return age;
// }

// const firstName = 'Jonas';
// calcAge(1991);

// ***************Hoisting in Practice****************** //

// Hoisting variables //
// console.log(firstName);
// console.log(job);
// console.log(year);

// var firstName = 'Jonas';
// let job = 'Teacher';
// const year = 1988;

// Hoisting functions //
// console.log(addDeclaration(1, 1));
// console.log(addExpression(1, 1));
// console.log(addArrow(1, 1));

// // Declaration
// function addDeclaration(a, b) {
//   return a + b;
// }
// // Expression
// const addExpression = function (a, b) {
//   return a + b;
// };
// // Arrow
// const addArrow = (a, b) => a + b;

// // A pitfall of hoisting and declaring a variable with 'var' //
// if (!numberOfProducts) deleteShoppingCart();

// var numberOfProducts = 10;

// function deleteShoppingCart() {
//   console.log('All products deleted');
// }

// ***************The 'this' keyword in Practice****************** //

const jonas = {
  year: 1988,
  calcAge: function () {
    console.log(2021 - this.year);
  },
};

const matilda = {
  year: 2000,
};

// Method borrowing.
matilda.calcAge = jonas.calcAge;

jonas.calcAge();
matilda.calcAge();
