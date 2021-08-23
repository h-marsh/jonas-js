'use strict';

///////////////////////////////////////////                 ///////////////////////////////////////////
///////////////////////////////////////// Default Parameters /////////////////////////////////////////
///////////////////////////////////////////                 ///////////////////////////////////////////

const bookingArray = [];

const createBooking = function (
  flightNum,
  numPassengers = 2,
  price = 299 * numPassengers
) {
  //   ES5 way of setting default values.
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookingArray.push(booking);
};

// createBooking('LH123');
// createBooking('LH123', 1);
// createBooking('LH123', 5);

// createBooking('LH123', undefined, 1000);

///////////////////////////////////////////                 ///////////////////////////////////////////
////////////////////////// How Passing Arguments Works: Value vs. Reference ///////////////////////////
///////////////////////////////////////////                 ///////////////////////////////////////////

const flight = 'LH234';
const jonas = {
  name: 'Jonas',
  passport: 2354235,
};

const checkIn = function (flightNum, passenger) {
  // Changing the primitive only changes the variable in here.  Changing the object changes both the one in here and the one defined earler.
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 2354235) {
    console.log('Checked In');
  } else {
    console.log('Wrong passport!');
  }
};

// checkIn(flight, jonas);
// Notice 'flight' is not changed even though it was changed in the function.  'jonas' was changed because it was changed in the function.
// console.log(flight);
// console.log(jonas);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000);
};

// This will change the passport number on the original 'jonas' object, causing the checkIn passport comparison to pass the first time, but fail this second call.
// checkIn(flight, jonas);
// newPassport(jonas);
// checkIn(flight, jonas);

///////////////////////////////////////////                 ///////////////////////////////////////////
/////////////////////////////// Functions Accepting Callback Functions ////////////////////////////////
///////////////////////////////////////////                 ///////////////////////////////////////////

// These first two functions are the callback functions (the functions called back when needed).
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Time for the higher-order function!  Higher-order function because it accepts a function as an argument
const transformer = function (str, func) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${func(str)}`);
  console.log(`Transformed by: ${func.name}`);
};

// How it would be called
// transformer('JavaScript is the best!', oneWord);

// forEach() method also deals with callback functions
// ['jonas', 'martha', 'adam'].forEach(upperFirstWord);

///////////////////////////////////////////                 ///////////////////////////////////////////
//////////////////////////////////// Functions Returning Functions ////////////////////////////////////
///////////////////////////////////////////                 ///////////////////////////////////////////

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

// const greetHey = greet('Hey');
// greetHey('jonas');

// All in one go
// greet('Hello')('Jonas Schm');

// With arrow functions
const greetArrow = greeting => name => console.log(`${greeting} ${name}`);
// greetArrow('Hello')('Jonas Schmarrow');

///////////////////////////////////////////                 ///////////////////////////////////////////
/////////////////////////////////// The call() and apply() Methods ////////////////////////////////////
///////////////////////////////////////////                 ///////////////////////////////////////////

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

// lufthansa.book(239, 'Jonas');
// lufthansa.book(635, 'Smith');
// console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// Does NOT work because the 'this' keyword within the function points to undefined.
// book(23, 'sarah');

// Using the call() method
// book.call(eurowings, 23, 'sarah');

// book.call(lufthansa, 110, 'Mary Cooper');

// Using the apply() method.  No list of args, only array.
const flightData = [555, 'Joe'];
// book.apply(eurowings, flightData);

// apply() isn't used much.  instead, call() and the spread operator is used.
// book.call(eurowings, ...flightData);

///////////////////////////////////////////                 ///////////////////////////////////////////
////////////////////////////////////////// The bind Method ////////////////////////////////////////////
///////////////////////////////////////////                 ///////////////////////////////////////////

const bookEW = book.bind(eurowings);
// bookEW(145, 'Steven');

const bookLH = book.bind(lufthansa);
// bookLH(999, 'roger');

// Passing more arguments with bind() that will set them in stone
const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Jonas');

// Using bind() with event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = function (rate, value) {
  return value + value * rate;
};

// console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);

// console.log(addVAT(100));

///////////////////////////////////////////                 ///////////////////////////////////////////
////////////////////////// Immediately Invoked Function Expressions (IIFE) ////////////////////////////
///////////////////////////////////////////                 ///////////////////////////////////////////

// This won't work since it is possible to call it over and over, even if it is only called once.
const runOnce = function () {
  console.log("This could 'should' never run again but...");
};
// runOnce();
// runOnce();

// IIFE
(function () {
  const isPrivate = 23;
  const isEncapsulated = 30;
  console.log("This could 'should' never run again but...");
})();

// IIFE with an arrow function
(() => console.log('This will never run again...arrow style'))();

{
  const isPrivate = 245;
  let isEncapsulated = 2455;
}
