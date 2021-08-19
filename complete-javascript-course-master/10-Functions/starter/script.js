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
checkIn(flight, jonas);
newPassport(jonas);
checkIn(flight, jonas);
