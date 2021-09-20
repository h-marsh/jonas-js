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

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

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

// forEach() with a map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// // forEach() with a set
// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function (value, key, set) {
//   console.log(`${key}: ${value}`);
// });

///////////////////////////////////////////                 ///////////////////////////////////////////
//////////////////////////////////////////// The map Method ////////////////////////////////////////////
///////////////////////////////////////////                 ///////////////////////////////////////////

const movementsMapMethod = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const euroToUSD = 1.1;

// const movementsUSD = movements.map(function (movement) {
//   return movement * euroToUSD;
// });

// console.log(movements);
// console.log(movementsUSD);

// The above but as an arrow function to clean things up.
// const movementsUSDArrow = movements.map(movement => movement * euroToUSD);

// const movementDesc = movements.map(function (movement, index, array) {
//   return `Movement ${
//     index + 1
//   }: ${movement > 0 ? 'DEPOSITED' : 'WITHDREW'} ${Math.abs(movement)}`;
// });

// console.log(movementDesc);

// const movementDescArrow = movements.map(
//   (movement, index) =>
//     `Movement ${index + 1}: ${
//       movement > 0 ? 'DEPOSITED' : 'WITHDREW'
//     } ${Math.abs(movement)}`
// );

// console.log(movementDescArrow);

///////////////////////////////////////////                 ///////////////////////////////////////////
///////////////////////////////////////// Computing Usernames /////////////////////////////////////////
///////////////////////////////////////////                 ///////////////////////////////////////////

// Usernames are the initials, which are computed from the user itself.
// Loop over the array, taking the first letter and putting it into a new array to then be joined() later.
const userComputingUsernames = 'Steven Thomas Willaims'; // The computed username should be 'stw'
const username = userComputingUsernames
  .toLowerCase()
  .split(' ')
  .map(function (name) {
    return name[0];
  })
  .join('');

const usernameArrow = userComputingUsernames
  .toLowerCase()
  .split(' ')
  .map(name => name[0])
  .join('');

// console.log(usernameArrow);

///////////////////////////////////////////                 ///////////////////////////////////////////
////////////////////////////////////////// The filter Method //////////////////////////////////////////
///////////////////////////////////////////                 ///////////////////////////////////////////

const movementsFilter = [200, 450, -400, 3000, -650, -130, 70, 1300];

const depositsFilter = movementsFilter.filter(function (movement) {
  return movement > 0;
});

// console.log(movementsFilter);
// console.log(depositsFilter);

// Doing the same thing but with a for-loop, which requires an empty array to be created outside.
const depositsForLoop = [];
for (const mov of movementsFilter) if (mov > 0) depositsForLoop.push(mov);

const withdrawalsFilter = movementsFilter.filter(mov => mov < 0);

// console.log(movementsFilter);
// console.log(withdrawalsFilter);

///////////////////////////////////////////                 ///////////////////////////////////////////
////////////////////////////////////////// The reduce Method //////////////////////////////////////////
///////////////////////////////////////////                 ///////////////////////////////////////////

const movementsReduce = [200, 450, -400, 3000, -650, -130, 70, 1300];
const balance = movementsReduce.reduce(function (acc, element, index, array) {
  return acc + element;
}, 0);

// console.log(balance);

const func = (acc, element) => acc + element;

const balanceArrow = movementsReduce.reduce(func, 0);

// console.log(balanceArrow);

const movementsMax = movementsReduce.reduce(function (acc, element) {
  if (element > acc) {
    acc = element;
  }
  return acc;
}, movementsReduce[0]);

// console.log(movementsMax);

///////////////////////////////////////////                 ///////////////////////////////////////////
////////////////////////////////////////// Chaining Methods //////////////////////////////////////////
///////////////////////////////////////////                 ///////////////////////////////////////////

const movementsChain = [200, 450, -400, 3000, -650, -130, 70, 1300];
const euroToUSD = 1.1;

const depositsUSD = movementsChain
  .filter(mov => mov <= 0)
  .map(mov => mov * euroToUSD)
  .reduce((acc, mov) => acc + mov, 0);

// console.log(depositsUSD);

///////////////////////////////////////////                 ///////////////////////////////////////////
/////////////////////////////////////////// The find Method ///////////////////////////////////////////
///////////////////////////////////////////                 ///////////////////////////////////////////

const movementsFind = [200, 450, -400, 3000, -650, -130, 70, 1300];

const firstWithdrawal = movementsFind.find(function (mov) {
  return mov < 0;
});

const firstWithdrawalArrow = movementsFind.find(mov => mov < 0);

// console.log(firstWithdrawal);
// console.log(firstWithdrawalArrow);

// Using the find() method to find an object in the 'accounts' array based on a property of that object.  This will be used to Implementing Login and Implementing Transfers
// Using find() to get a specific object in the array by looking for a specific property value.  NOTE: This will not work since the 'accounts' array isn't here, I just copied it here so the 'bankist' project file will be cleaner and only contain code specific to that.
// const account = accounts.find(acc => acc.owner === 'Jessica Davis');

// console.log(account);

///////////////////////////////////////////                 ///////////////////////////////////////////
/////////////////////////////////////// some and every Methods ///////////////////////////////////////
///////////////////////////////////////////                 ///////////////////////////////////////////

// the some() method
const movementsSome = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Include only checks for a specific value.  It checks for equality.
// console.log(movementsReduce);
// console.log(movementsSome.includes(-130));

// some() can determine if any of the values match a certain condition.  It checks for a condition.
const anyDeposits = movementsSome.some(mov => mov > 5000);
// console.log(anyDeposits);

// the every() method
const movementsEvery = [200, 450, -400, 3000, -650, -130, 70, 1300];

///////////////////////////////////////////                 ///////////////////////////////////////////
/////////////////////////////////////////// flat and flatMap ///////////////////////////////////////////
///////////////////////////////////////////                 ///////////////////////////////////////////

const arrFlat = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arr);
// console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// console.log(arrDeep.flat(2));

// flat
const overallBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => (acc += mov), 0);
// console.log(overallBalance);

// flatMap
const overallBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => (acc += mov), 0);
// console.log(overallBalance2);

///////////////////////////////////////////                 ///////////////////////////////////////////
/////////////////////////////////////////// Sorting Arrays ///////////////////////////////////////////
///////////////////////////////////////////                 ///////////////////////////////////////////

const owners = ['jonas', 'zach', 'adam', 'martha'];
// console.log(owners.sort());
// console.log(owners);

const movementsSort = [200, 450, -400, 3000, -650, -130, 70, 1300];
// console.log(movementsSort);
// console.log(movementsSort.sort());

// Sorting numbers properly (which requires passing a callback function into sort())

// return is negative, a is before b (remain the same)
// return is positive, b is before a (switch order)
// console.log(movementsSort);
movementsSort.sort((a, b) => {
  if (a > b) return 1;
  if (b > a) return -1;
});
// console.log(movementsSort);

/* A shorter way */
movementsSort.sort((a, b) => a - b);

///////////////////////////////////////////                 ///////////////////////////////////////////
/////////////////////////////// More Ways of Creating and Filling Arrays ///////////////////////////////
///////////////////////////////////////////                 ///////////////////////////////////////////

/* using the Array() constructor function */
// const x = new Array(7);
// console.log(x);

/* using the fill() method to fill the 'x' array */
// x.fill(1);
// x.fill(1, 3, 6);
// console.log(x);

/* fill() on a populated array */
const arrFill = [1, 2, 3, 4, 5, 6, 7];
// console.log(arrFill);

arrFill.fill(2, 2, 5);
// console.log(arrFill);

// Array.from()
const arrayFrom = Array.from({ length: 7 }, () => 1);
// console.log(arrayFrom);

// const z = Array.from({ length: 7 }, (_, index) => index + 1);
// console.log(z);

// using Array.from() on querySelectorAll nodelist
// const movementsUI = Array.from(
//   document.querySelectorAll('.movements__value'),
//   element => Number(element.textContent.replace('€', ''))
// );

// using the spread operator to convert the nodelist to an array
// const movementsUI2 = [...document.querySelectorAll('.movements__value')];

///////////////////////////////////////////                 ///////////////////////////////////////////
/////////////////////////////////////// Array Methods Practice ///////////////////////////////////////
///////////////////////////////////////////                 ///////////////////////////////////////////

const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((sum, mov) => sum + mov, 0);

// console.log(bankDepositSum);

const numDeposits1000Simple = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov >= 1000).length;

/* The same as above but with reduce() */
const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, element) => (element >= 1000 ? ++count : count), 0); // Note the prefixed ++ operator

// console.log(numDeposits1000);

/* Using reduce() to create a new object */
const { deposits, withdrawals } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, element) => {
      sums[element > 0 ? 'deposits' : 'withdrawals'] += element;
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );

console.log(deposits, withdrawals);

/* converting a string to title-case */
const convertTitleCase = function (title) {
  const exceptions = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'with', 'and'];

  const capitalize = str => str[0].toUpperCase() + str.slice(1);

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitalize(word)))
    .join(' ');
  return capitalize(titleCase);
};

console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'));
console.log(convertTitleCase('a an the but or on in with hi'));
