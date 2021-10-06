'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

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
    '2021-09-23T17:01:17.194Z',
    '2021-09-25T10:51:36.790Z',
    '2021-09-26T23:36:17.929Z',
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

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

///////////////////////////////////////////////// Functions
// Function for formatting dates
const formatMovementDate = function (date, locale) {
  const calcDaysPassed = function (date1, date2) {
    return Math.round(Math.abs((date2 - date1) / (1000 * 60 * 60 * 24)));
  };
  const daysPassed = calcDaysPassed(new Date(), date);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago.`;
  else {
    return new Intl.DateTimeFormat(locale).format(date);
  }
};

// for formatting currencies
const formatCurrency = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

// Creates the HTML via a template string in order to then insert that HTML into the transactions list in the UI
const displayMovements = function (account, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? account.movements.slice().sort((a, b) => a - b)
    : account.movements;

  movs.forEach(function (movement, index) {
    const type = movement > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(account.movementsDates[index]);
    const displayDate = formatMovementDate(date, account.locale);

    const formattedMov = formatCurrency(
      movement,
      account.locale,
      account.currency
    );

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      index + 1
    } ${type}</div> <div class='movements__date'>${displayDate}</div>
      <div class="movements__value">${formattedMov}</div>
    </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

// Applies the reduce() method to an account's transactions (its 'movements' array) in order to then display it as the account's balance in the UI
const calcDisplayBalance = function (account) {
  account.balance = account.movements.reduce(
    (account, movement) => account + movement,
    0
  );

  labelBalance.textContent = formatCurrency(
    account.balance,
    account.locale,
    account.currency
  );
};

// Used to calculate and display the three values at the bottom of the app: 'In', 'Out', and 'Interest'
const calcDisplaySummary = function (account) {
  const incomes = account.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCurrency(
    incomes,
    account.locale,
    account.currency
  );

  const outgoing = account.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumOut.textContent = formatCurrency(
    outgoing,
    account.locale,
    account.currency
  );

  const interest = account.movements
    .filter(mov => mov > 0)
    .map(deposit => deposit * account.interestRate)
    .filter(interest => interest >= 1)
    .reduce((acc, interest) => acc + interest, 0);

  labelSumInterest.textContent = formatCurrency(
    interest,
    account.locale,
    account.currency
  );
};

// This takes the 'accounts' array, accesses the individual accounts to then access each 'owner' property, in order to create a new property of that account's username (owner's initials)
const createUsernames = function (accounts) {
  accounts.forEach(function (account) {
    account.username = account.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUsernames(accounts);

const updateUI = function (account) {
  displayMovements(account);
  calcDisplayBalance(account);
  calcDisplaySummary(account);
};

const startLogoutTimer = function () {
  /* countdown functionality on its own */
  const tick = function () {
    /* convert seconds to minutes: seconds */
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);

    /* in each callback call, print the remaining time to the UI */
    labelTimer.textContent = `${min}:${sec}`;

    /* when the time is at 0 seconds, stop timer and log the user out */
    if (time === 0) {
      /* stop timer */
      clearInterval(timer);

      /* log user 'out' i.e. change opacity and change the welcome message lol */
      containerApp.style.opacity = 0;
      labelWelcome.textContent = 'Log in to get started';
    }
    /* decrease 1 sec */
    time--;
  };

  /* set the time to 2 min */
  let time = 120;

  /* call the timer every second */
  tick();
  const timer = setInterval(tick, 1000);
  return timer;
};

////////////////////  EVENT HANDLERS /////////////////////
let currentAccount, timer;

///// Login button functionality. /////
btnLogin.addEventListener('click', function (event) {
  event.preventDefault(); // Prevent form from submitting right away
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    /* Display UI and Welcome Message */
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }.`;
    containerApp.style.opacity = 100;

    /* adding the current date/learning internationalization api */
    const now = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
    };

    const locale = navigator.language;
    console.log(locale);

    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);

    /* Clear input fields and drop their focus */
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    /* start logout timer, checks if there already is one */
    if (timer) clearInterval(timer);
    timer = startLogoutTimer();

    /* Calculate and display the movements list, the balance, and the summary (at the bottom) */
    updateUI(currentAccount);
  }
});

///// Transfer Funds button functionality. /////
btnTransfer.addEventListener('click', function (event) {
  event.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const targetAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  /* Cleaning the input fields out regardless if the transfer worked or not */
  inputTransferAmount.value = inputTransferTo.value = '';
  inputTransferAmount.blur();

  if (
    amount > 0 &&
    targetAcc &&
    currentAccount.balance >= amount &&
    targetAcc.username !== currentAccount.username
  ) {
    /* Adjusting both accounts' movement arrays */
    currentAccount.movements.push(-amount);
    targetAcc.movements.push(amount);

    /* add transfer date */
    currentAccount.movementsDates.push(new Date().toISOString());
    targetAcc.movementsDates.push(new Date().toISOString());

    /* Update the UI */
    updateUI(currentAccount);

    /* reset the timer */
    clearInterval(timer);
    timer = startLogoutTimer();
  }
});

///// Request Loan button functionality.  The bank will only grant a loan if there is at least one deposit that is at least 10% of the requested loan amount. /////
btnLoan.addEventListener('click', function (event) {
  event.preventDefault();
  const amount = Math.floor(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    setTimeout(function () {
      /* add movement to list */
      currentAccount.movements.push(amount);

      /* add loan date */
      currentAccount.movementsDates.push(new Date().toISOString());

      /* update ui */
      updateUI(currentAccount);
    }, 4000);
  }
  inputLoanAmount.value = '';
  inputLoanAmount.blur();

  /* reset the timer */
  clearInterval(timer);
  timer = startLogoutTimer();
});

///// Close Account button functionality. /////
btnClose.addEventListener('click', function (event) {
  event.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    accounts.splice(index, 1);

    /* Log out the currentAccount by hiding the UI */
    containerApp.style.opacity = 0;
  }

  /* Clear input field values and remove focus. */
  inputCloseUsername.value = inputClosePin.value = '';
  inputClosePin.blur();
});

///// Sort button functionality /////
let sorted = false;
btnSort.addEventListener('click', function (event) {
  event.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});
