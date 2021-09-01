'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
// const labelWelcome = document.querySelector('.welcome');
// const labelDate = document.querySelector('.date');
// const labelBalance = document.querySelector('.balance__value');
// const labelSumIn = document.querySelector('.summary__value--in');
// const labelSumOut = document.querySelector('.summary__value--out');
// const labelSumInterest = document.querySelector('.summary__value--interest');
// const labelTimer = document.querySelector('.timer');

// const containerApp = document.querySelector('.app');
// const containerMovements = document.querySelector('.movements');

// const btnLogin = document.querySelector('.login__btn');
// const btnTransfer = document.querySelector('.form__btn--transfer');
// const btnLoan = document.querySelector('.form__btn--loan');
// const btnClose = document.querySelector('.form__btn--close');
// const btnSort = document.querySelector('.btn--sort');

// const inputLoginUsername = document.querySelector('.login__input--user');
// const inputLoginPin = document.querySelector('.login__input--pin');
// const inputTransferTo = document.querySelector('.form__input--to');
// const inputTransferAmount = document.querySelector('.form__input--amount');
// const inputLoanAmount = document.querySelector('.form__input--loan-amount');
// const inputCloseUsername = document.querySelector('.form__input--user');
// const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

///////////////////////////////////////////                 ///////////////////////////////////////////
//////////////////////////////////////// Simple Array Methods /////////////////////////////////////////
///////////////////////////////////////////                 ///////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e'];

// The slice() method.
// arr.slice();
// console.log(arr);
// console.log(arr.slice(1, 3));
// console.log(arr.slice(-3, -1));
// console.log(arr.slice());

// The splice() method.
// console.log(arr.splice(2));
// console.log(arr.splice(-1));
// console.log(arr.splice(1, 3));
// console.log(arr);

// The reverse() method.
// let arr2 = ['j', 'i', 'h', 'g', 'e'];
// console.log(arr2);
// arr2.reverse();
// console.log(arr2);

// The concat() method.
// console.log(arr.concat(arr2));
// console.log(arr);
// console.log(arr2);
// const arrays = arr.concat(arr2);
// console.log(arrays);

// The join() method.
// console.log(arrays.join(' - '));

///////////////////////////////////////////                 ///////////////////////////////////////////
////////////////////////////////////// Looping Arrays: forEach ////////////////////////////////////////
///////////////////////////////////////////                 ///////////////////////////////////////////

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Using a forOf loop first.
// for (const movement of movements) {
// for (const movement of movements.entries()) {
//   movement > 0
//     ? console.log(`This was a DEPOSIT of ${movement}`)
//     : console.log(`This was a WITHDRAWAL of ${movement}`);
// }

// Using the forEach() method
// movements.forEach(function (movement) {
//   movement > 0
//     ? console.log(`This was a DEPOSIT of ${movement} using forEach()`)
//     : console.log(`This was a WITHDRAWAL of ${movement} using forEach()`);
// });

// Accessing the counter variable (i.e the current index) with the forOf loop
// for (const [i, value] of movements.entries()) {
//   value > 0
//     ? console.log(`Transaction ${i + 1} was a DEPOSIT of ${value}`)
//     : console.log(`Transaction ${i + 1} was a WITHDRAWAL of ${value}`);
// }

// Accessing the counter variable (i.e the current index) with forEach()
// forEach() passes in the current element, its index, and the entire array being looped over.
// movements.forEach(function (movement, index, array) {
//   movement > 0
//     ? console.log(
//         `Transaction ${index + 1} was a DEPOSIT of ${movement} using forEach()`
//       )
//     : console.log(
//         `Transaction ${
//           index + 1
//         } was a WITHDRAWAL of ${movement} using forEach()`
//       );
// });

///////////////////////////////////////////                 ///////////////////////////////////////////
//////////////////////////////////// forEach with Maps and Sets ///////////////////////////////////////
///////////////////////////////////////////                 ///////////////////////////////////////////
