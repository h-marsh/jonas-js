'use strict';
///////////////////////////////////////////                 ///////////////////////////////////////////
//////////////////////////////////////////////// NOTES ////////////////////////////////////////////////
///////////////////////////////////////////                 ///////////////////////////////////////////

///////////////////////////////////////////                 ///////////////////////////////////////////
////////////////////////////// Constructor Functions and the new Operator //////////////////////////////
///////////////////////////////////////////                 ///////////////////////////////////////////

/* constructor functions should always start with a capital letter */
const Person = function (firstName, birthYear) {
  // instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // adding methods to the objects (DONT DO IT THIS WAY, prototypes and prototypal inheritance are leveraged instead)
  this.calcAge = function () {
    console.log(2021 - this.birthYear);
  };
};

const bob = new Person('bob', 1984);
console.log(bob);

const jonas = 'jonas';

console.log(jonas instanceof Person);
