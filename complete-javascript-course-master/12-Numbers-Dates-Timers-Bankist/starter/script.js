'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

///////////////////////////////////////////                 ///////////////////////////////////////////
/////////////////////////////////// Converting and Checking Numbers ////////////////////////////////////
///////////////////////////////////////////                 ///////////////////////////////////////////

// console.log(23 === 23.0);

/* 0.1 being a pain */
// console.log(0.1 + 0.2);
// console.log(0.1 + 0.2 === 0.3);

/* converting strings to numbers */
// console.log(Number('33'));
// console.log(+'33');

/* parsing with Number.parseInt() */
// console.log(Number.parseInt('30p!x', 10));
// console.log(Number.parseInt('3gdfbrth24163460px', 10));
// console.log(Number.parseInt('ab30px', 10));

/* parsing with Number.parseFloat() */
// console.log(Number.parseFloat('2.5rem'));

/* using Number.isNaN() */
// console.log(Number.isNaN(123));
// console.log(Number.isNaN('123'));
// console.log(Number.isNaN(Number('123x')));

/* Number.isFinite() is better for checking if a value is a number or not*/
// console.log(Number.isFinite(123));
// console.log(Number.isFinite(Number('20c')));
// console.log(Number.isFinite(33 / 0));

///////////////////////////////////////////                 ///////////////////////////////////////////
///////////////////////////////////////// Math and Rounding //////////////////////////////////////////
///////////////////////////////////////////                 ///////////////////////////////////////////

Math.sqrt(25);
25 ** (1 / 2);
8 ** (1 / 3);

Math.min(1, 67, 9, 20, 4);
Math.max(1, '67', 9, 20, 4);
Math.max(1, '67a', 9, 20, 4);

/* Math namespace constants */
Math.PI * Number.parseFloat('10px') ** 2;
Math.trunc(Math.random() * 6);

/* random number function */
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;

/* rounding integers */
// console.log(Math.trunc(23.2));
// console.log(Math.trunc(23.7));

// console.log(Math.round(23.4));
// console.log(Math.round(23.7));

// console.log(Math.ceil(23.1));
// console.log(Math.ceil(23.7));

// console.log(Math.floor(23.1));
// console.log(Math.floor(23.7));

/* floor vs trunc */
// console.log(Math.trunc(-23.7));
// console.log(Math.floor(-23.7));

// console.log(Math.trunc(-23.1));
// console.log(Math.floor(-23.1));

/* rounding floats */
// console.log((2.7).toFixed(0));
// console.log((2.7).toFixed(3));
// console.log((2.1).toFixed(0));
// console.log((2.1126).toFixed(3));

///////////////////////////////////////////                 ///////////////////////////////////////////
/////////////////////////////////////// The Remainder Operator ////////////////////////////////////////
///////////////////////////////////////////                 ///////////////////////////////////////////
