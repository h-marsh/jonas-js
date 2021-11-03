'use strict';
///////////////////////////////////////////                 ///////////////////////////////////////////
//////////////////////////////////////////////// NOTES ////////////////////////////////////////////////
///////////////////////////////////////////                 ///////////////////////////////////////////

///////////////////////////////////////////                 ///////////////////////////////////////////
////////////////////////////// Constructor Functions and the new Operator //////////////////////////////
///////////////////////////////////////////                 ///////////////////////////////////////////

/* constructor functions should always start with a capital letter */
// const Person = function (firstName, birthYear) {
//   // instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;

// adding methods to the objects (DONT DO IT THIS WAY, prototypes and prototypal inheritance are leveraged instead)
// this.calcAge = function () {
//   console.log(2021 - this.birthYear);
// };
// };

// const bob = new Person('bob', 1984);
// console.log(bob);

// const jonas = 'jonas';

// console.log(jonas instanceof Person);

///////////////////////////////////////////                 ///////////////////////////////////////////
////////////////////////////////////////////// Prototypes //////////////////////////////////////////////
///////////////////////////////////////////                 ///////////////////////////////////////////
// Person.prototype.calcAge = function () {
//   console.log(2021 - this.birthYear);
// };

// console.log(Person.prototype);

// console.log(bob.__proto__ === Person.prototype);
// bob.calcAge();
// console.log(Person.__proto__);
// console.log(Person.prototype.isPrototypeOf(bob));

// Person.prototype.species = 'Homo Sapien';
// console.log(bob);
// console.log(bob.species);
// console.log(bob.hasOwnProperty('firstName'));
// console.log(bob.hasOwnProperty('species'));

///////////////////////////////////////////                 ///////////////////////////////////////////
////////////////////////////// Prototypal Inheritance on Built-in Objects //////////////////////////////
///////////////////////////////////////////                 ///////////////////////////////////////////

const Person = function (firstName, birthYear) {
  // instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2021 - this.birthYear);
};

const bob = new Person('bob', 1984);
const jonas = new Person('jonas', 1988);

Person.prototype.species = 'Homo Sapien';

console.log(jonas.__proto__ === Person.prototype);

const arrPrototype = [3, 3, 3, 4, 5, 1, 1, 1, 4, 4, 6, 3, 6, 1];

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arrPrototype.unique());

// console.log(arrPrototype.__proto__);
// console.log(arrPrototype.__proto__ === Array.prototype);
