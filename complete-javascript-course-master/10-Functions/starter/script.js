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
greetArrow('Hello')('Jonas Schmarrow');
