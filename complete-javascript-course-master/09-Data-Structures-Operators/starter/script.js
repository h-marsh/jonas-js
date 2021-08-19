'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurantOriginal = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // Returns an array that contains the items that were specified by their index positions in their respective menu arrays

  // openingHours: {
  //   thu: {
  //     open: 12,
  //     close: 22,
  //   },
  //   fri: {
  //     open: 11,
  //     close: 23,
  //   },
  //   sat: {
  //     open: 0, // Open 24 hours
  //     close: 24,
  //   },
  // },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order: ${this.starterMenu[starterIndex]} and  ${this.mainMenu[mainIndex]} at ${time} to ${address}`
    );
  },

  orderPasta: function (ingredient1, ingredient2, ingredient3) {
    console.log(
      `Here is the pasta order including ${ingredient1}, ${ingredient2}, and ${ingredient3}.`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// ////////////////////////////// Destructuring Objects //////////////////////////////

// // // This call was used to show object destructuring in the parameters of a function
// // restaurant.orderDelivery({
// //   time: '12:00',
// //   address: '123 Cherry Street',
// //   mainIndex: 2,
// //   starterIndex: 2,
// // });

// // const { name, categories, openingHours } = restaurant;

// // Destructuring but with custom variable names different from property names
// // const {
// //   name: restaurantName,
// //   openingHours: hours,
// //   categories: tags,
// // } = restaurant;

// // Default values
// // const { menu = restaurant.name, starterMenu: starters = [] } = restaurant;

// // Mutating variables
// // let a = 111;
// // let b = 999;
// // const object = { a: 23, b: 7, c: 14 };
// // ({ a, b } = object); // The parens are needed for mutating variables

// // Nested Object Destructuring
// // In two steps:
// // const { fri } = openingHours;
// // // console.log(fri);
// // const { open: fridayOpen, close: fridayClose } = fri;
// // console.log(fridayOpen, fridayClose);

// // In one step:
// const {
//   fri: { open: fridayOpen, close: fridayClose },
// } = openingHours;
// // console.log(fridayOpen, fridayClose);

// ////////////////////////////// Destructuring Arrays //////////////////////////////
// // Recieve 2 return values from a function, even though the function only returned one item (an array).  This is a good way to immediately creating two variables out of one fcuntion call.
// // const [starterItem, mainItem] = restaurant.order(2, 0);
// // console.log(starterItem, mainItem);

// // // Nested array destructuring
// // const nested = [2, 4, [5, 6]];
// // // const [i, , j] = nested;  This one returns a number and an array.

// // // This will return individual items isntead of having one remain the nested array.
// // const [i, , [j, k]] = nested;
// // console.log(i, j, k);

// // // Default values for unknown array lengths
// // const [p, q, r] = [8, 9];

// ////////////////////////////// The Spread Operator //////////////////////////////

// // const arr = [7, 8, 9];
// // const badNewArray = [1, 2, arr[0], arr[1], arr[2]];

// // const goodNewArray = [1, 2, ...arr];

// // console.log(badNewArray);
// // console.log(goodNewArray);
// // console.log(...goodNewArray);

// // console.log(restaurant.mainMenu);
// // restaurant.mainMenu = [...restaurant.mainMenu, 'Gnocci'];
// // console.log(restaurant.mainMenu);

// // Calling the orderPasta method to practice passing a spread operator into a function.  It will get the ingedients from a prompt window and then pass those into the method.
// // const ingredients = [
// //   prompt("Let's make pasta!  Ingredient 1?"),
// //   prompt('Ingredient 2?'),
// //   prompt('Ingredient 3?'),
// // ];

// // restaurant.orderPasta(...ingredients);

// // Using the spread operator on the restaurant object.
// // const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
// // console.log(newRestaurant);
// // newRestaurant.locations = 3;
// // console.log(newRestaurant);

// ////////////////////////////// Rest Pattern and Parameters //////////////////////////////
// // Rest pattern does the opposite of the spread operator.  It takes individual elements and creates an array

// ///// Destructuring

// // Spread operator since the (...) is on the right side of the assignment operator (=)
// const array = [1, 2, 3, 4];
// const newArray = [...array, 5, 6];

// // Rest, because the (...) is on the left side of the assignment operator(=)
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// // console.log(a, b, others);
// // console.log(others);

// // Using (...) on both sides of the assignment operator.  Working with the menus.
// const [pizza, , Risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// // console.log(pizza, Risotto, otherFood);

// // This time with objects instead of arrays.  Working with the business hours.  Selecting only Saturday, the rest going into another object for just weekdays.
// // const { sat: Saturday, ...weekdays } = restaurant.openingHours;
// // console.log(Saturday, weekdays);

// ///// Functions

// // The second use of the spread operator is to pass multiple arguments into a function at once, like with the ingredients on pasta array above
// // The rest operator does the opposite.  A simple example is a function that takes an arbitrary number of numbers and adds them together.

// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// };
// // add(2, 3);
// // add(5, 3, 7, 2);
// // add(8, 2, 5, 3, 2, 1);

// // Passing an array into the above function
// const x = [23, 5, 7];
// // add(...x);
// // restaurant.orderPizza('cheese', 'pepperoni', 'olives', 'sausage');

// ////////////////////////////// Short Circuiting (&& and ||) //////////////////////////////

// // console.log(3 || 'Jonas');
// // console.log('' || 'jonas');
// // console.log(true || 0);
// // console.log(undefined || null);
// // console.log(undefined || 0 || '' || 'hello' || 23 || null);

// // Using a ternary to create a new variable without knowing if a property exists
// // restaurant.numGuests = 23;
// // const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// // // console.log(guests1);

// // // Using or operator short circuiting to create a new variable without knowing if a property exists
// // const guests2 = restaurant.numGuests || 10;

// // // && and operator short circuiting
// // console.log(0 && 'jonas');
// // console.log(7 && 'Jonas');

// // console.log('Hello' && 23 && null && 'jonas');

// // if (restaurant.orderPizza) {
// //   restaurant.orderPizza('sausage', 'cheese');
// // }

// // restaurant.orderPizza && restaurant.orderPizza('sausage', 'cheese');

// /////////////////////// The Nullish Coalescing Operator (??) //////////////////////////

// // The number of guests is intended to be 0, however this will return a falsy value which then causes an incorrect default value to be assigned below
// restaurant.numGuests = 0;

// // We want it to be 0, but this will cause guests1 to be 10 since 0 is falsy.  But that is incorrect.
// const guests1 = restaurant.numGuests || 10;
// // console.log(guests1);

// // The nullish coalescing operator being used to fix this
// const guestsCorrect = restaurant.numGuests ?? 10;
// // console.log(guestsCorrect);

// ///////////////////////////////////////// Looping Arrays: The for-of Loop //////////////////////////////////////////

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// // for (const item of menu) console.log(item);

// // Getting the index instead of just the element
// for (const item of menu.entries()) {
//   // console.log(`${item[0] + 1}: ${item[1]}`);
// }

// for (const [i, element] of menu.entries()) {
//   console.log(`${i + 1}: ${element}`);
// }

// /////////////////////////////////////////// Enhanced Object Literals ///////////////////////////////////////////

// // const weekdays = ['mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sun'];

// // ES6 enhanced object literal: using expressions to name properties
// // const openingHours = {
// //   [weekdays[3]]: {
// //     open: 12,
// //     close: 22,
// //   },
// //   [weekdays[4]]: {
// //     open: 11,
// //     close: 23,
// //   },
// //   [`day-${2 + 4}`]: {
// //     open: 0, // Open 24 hours
// //     close: 24,
// //   },
// // };

const restaurant2 = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literal: simply typing a variable name(that contains an object) to bring that object inside.
  // openingHours,

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order: ${this.starterMenu[starterIndex]} and  ${this.mainMenu[mainIndex]} at ${time} to ${address}`
    );
  },

  // ES6 enhanced object literal: not needing function keyword or colon when defining methods.
  orderPasta(ingredient1, ingredient2, ingredient3) {
    console.log(
      `Here is the pasta order including ${ingredient1}, ${ingredient2}, and ${ingredient3}.`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

/////////////////////////////////////////// Optional Chaining (?.) ///////////////////////////////////////////

// const weekdays = ['mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sun'];

// const openingHours = {
//   [weekdays[3]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekdays[4]]: {
//     open: 11,
//     close: 23,
//   },
//   sat: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   // ES6 enhanced object literal: simply typing a variable name(that contains an object) to bring that object inside.
//   openingHours,

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
//     console.log(
//       `Order: ${this.starterMenu[starterIndex]} and  ${this.mainMenu[mainIndex]} at ${time} to ${address}`
//     );
//   },

//   // ES6 enhanced object literal: not needing function keyword or colon when defining methods.
//   orderPasta(ingredient1, ingredient2, ingredient3) {
//     console.log(
//       `Here is the pasta order including ${ingredient1}, ${ingredient2}, and ${ingredient3}.`
//     );
//   },

//   orderPizza: function (mainIngredient, ...otherIngredients) {
//     console.log(mainIngredient);
//     console.log(otherIngredients);
//   },
// };

// if (restaurant.openingHours && restaurant.openingHours.mon) {
//   console.log(restaurant.openingHours.mon.open);
// }

// With Optional Chaining.  Checks if the property before the ? exists, and if so it then the following property will be read.  If not, it returns 'undefined'
// console.log(restaurant.openingHours.mon?.open);
// // Multiple optional chaining
// console.log(restaurant.openingHours?.mon?.open);

// Remember, short circuiting with && means it will only short circuit when it gets to a falsy value (or the end).
// So here, the first value is truthy (since openingHours.fri exists) and it gets to the second, which is also truthy, but it is also the end.
// This is because every value has to be true for && to be true.
// restaurant.openingHours.fri && console.log(restaurant.openingHours.fri.open);

// And when short circuiting with || it will short circuit only when it gets to a truthy value (or the end).
// Here, the first value is true so it just returns that.
// This is because only one value has to be true
// console.log(restaurant.openingHours.fri.open) || restaurant.openingHours.fri;

// Loop over this array and log if the restaurant is open on that day or not
// const days = ['mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we open at ${open}`);
// }

// // Optional chaining with methods.
// console.log(restaurant.order?.(0, 1) ?? "Method doesn't exist");
// console.log(restaurant.orderNope?.(0, 1) ?? "Method doesn't exist");

// // Optional chaining with arrays.
// const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];
// console.log(users[0]?.name ?? 'User array empty');
// console.log(users[1]?.name ?? 'User does not exist');

///////////////////////////////////////////
/////////////////////////////////////////// Looping Objects: Object Keys, Values, and Entries ///////////////////////////////////////////
///////////////////////////////////////////

const weekdays = ['mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sun'];

const openingHours = {
  thurs: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literal: simply typing a variable name(that contains an object) to bring that object inside.
  openingHours,

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order: ${this.starterMenu[starterIndex]} and  ${this.mainMenu[mainIndex]} at ${time} to ${address}`
    );
  },

  // ES6 enhanced object literal: not needing function keyword or colon when defining methods.
  orderPasta(ingredient1, ingredient2, ingredient3) {
    console.log(
      `Here is the pasta order including ${ingredient1}, ${ingredient2}, and ${ingredient3}.`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// // Property names (aka keys)
// for (const day of Object.keys(openingHours)) {
//   console.log(day);
// }

// console.log(
//   `The restaurant is open ${
//     Object.keys(openingHours).length
//   } days: ${Object.keys(openingHours).join(', ')}.`
// );

// const properties = Object.keys(openingHours);
// for (const day of properties) console.log(day);

// // Property values
// const values = Object.values(openingHours);
// // console.log(values);

// // Entire Object
// const entr = Object.entries(openingHours);
// // console.log(entr);
// // console.log('==========');

// // [key, value] destructuring in the condition.  Value is an object itself, so it can be destructured further {open, close}
// for (const [key, { open, close }] of entr) {
//   console.log(`On ${key} the hours are: Open-${open} and Close-${close}`);
// }

///////////////////////////////////////////
/////////////////////////////////////////// Sets ///////////////////////////////////////////
///////////////////////////////////////////

// Sets contain iterables.  I.e. an array
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
// console.log(ordersSet); // Note the duplicates being removed.

// // Or a string
// console.log(new Set('Jonas'));

// // Get the size of a set
// console.log(ordersSet.size);

// // Checking if a certain element is in the set
// console.log(ordersSet.has('Pizza'));
// console.log(ordersSet.has('Bread'));

// // Adding new elements to a set
// ordersSet.add('Garlic Bread');
// ordersSet.add('Garlic Bread');
// console.log(ordersSet);

// // Deleting elements from a set
// ordersSet.delete('Garlic Bread');
// console.log(ordersSet);

// // Clearing a set entirely
// // ordersSet.clear();

// // Looping over the set
// for (const order of ordersSet) {
//   console.log(order);
// }

// // Use-case example: removing duplicate values from arrays
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// console.log(staff);
// // This makes a set out of the 'staff' array, then using the spread operator it turns the set (containing only unique elements, duplicates removed) back into an array.
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);

// console.log(
//   new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
// );

// // How many different letters in a string
// console.log(new Set('jonasschmedtmann').size);

///////////////////////////////////////////
/////////////////////////////////////////// Maps: Fundamentals ///////////////////////////////////////////
///////////////////////////////////////////

// Easiest way to create a new map is to create an empty one
const rest = new Map();

// Adding an element to the map
rest.set('name', 'Classico Italiano');
// console.log(rest);

// Remember, keys in maps can be any data type.  Here, a number is used as the key (whereas with objects, the keys are strings).
rest.set(1, 'Location One');
rest.set(2, 'Location Two');
// The set() method also returns the updated map.
// console.log(rest.set(3, 'Location Three'));

// The set() method also allows for chaining to add multiple key-value pairs to the map.
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed');
// console.log(rest);

// console.log(rest.get('categories'));
// console.log(rest.get(true));
// console.log(rest.get(false));

// Using conditionals to get a boolean which is then passed in get(), since the map has boolean keys.  Though this isn't the best thing since it's tricky to read and follow.
const time = 8;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// Checking if a map contains a certain key
// console.log(rest.has('categories'));

// Deleting elements from the map
// console.log(rest);
// rest.delete(2);
rest.clear();

// Using an array as a key.  But this can't be used with get() since the map array would be an entirely different object than the get() array.
rest.set([1, 2, 3], 'This is an array');
// console.log(rest);

// To be able to use the get() method with an array key, the array first needs to be create and stored in a variable
const arr = [1, 2, 3, 4];

// Then that variable is used as the key
rest.set(arr, 'This is the variable array');
// console.log(rest);
// console.log(rest.get(arr));

// Objects as map keys is useful when using DOM elements
// rest.set(document.querySelector('h1'), 'Heading');

///////////////////////////////////////////                 ///////////////////////////////////////////
/////////////////////////////////////////// Maps: Iteration ///////////////////////////////////////////
///////////////////////////////////////////                 ///////////////////////////////////////////

// Instead of populating a new map with set(), which is cumbersome with multiple values to set, this is a different way
// An array of smaller arrays.  The smaller arrays first position will be the key and the second position will be the value.
const question = new Map([
  ['question', 'What is the best programming language?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Javascript'],
  ['correct', 3],
  [true, 'Correct guess :D'],
  [false, 'Incorrect guess :('],
]);

// console.log(question);
// console.log(Object.entries(openingHours));

// Convert object to map
const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// Iterating over a map, note the destructuring right in the condition
// for (const [key, value] of question) {
//   if (typeof key === 'number') {
//     console.log(value);
//   }
// }

// A quick little mockup of the 'quiz'
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') {
//     console.log(`Option ${key}: ${value}`);
//   }
// }

// // Get an answer from the user
// const answer = Number(prompt('Answer?'));
// console.log(answer);

// Logic to compare 'answer' to the 'correct' key in the map, and give the appropriate response based on the two boolean keys.
// if (answer === question.get('correct')) {
//   console.log(question.get(true));
// } else {
//   console.log(question.get(false));
// }

// A shorter way of doing it
// console.log(question.get(question.get('correct') === answer));

// Converting map to array (using spread operator)
// const backToArray = [...question];
// console.log(backToArray);

// Entries, keys, and values methods used on the map
// console.log([...question.entries()]);
// console.log([...question.keys()]);
// console.log([...question.values()]);

///////////////////////////////////////////                 ///////////////////////////////////////////
///////////////////////////////////// Working with Strings - pt 1 /////////////////////////////////////
///////////////////////////////////////////                 ///////////////////////////////////////////

const airline = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(airline.length);
// console.log('String'.length);

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log(plane[3]);
// console.log('B737'[0]);

// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('Air'));
// console.log(airline.lastIndexOf('Portugal'));
// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));

// Slice() without hardcoding parameters
airline.slice(airline.lastIndexOf(' ') + 1);

// Slice() with negative parameters.  Starts extracting from the end first.
// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats.
  const letter = seat.slice(-1);
  if (letter === 'B' || letter === 'E') {
    console.log(`${seat} is a middle seat.`);
  } else {
    console.log(`${seat} is NOT a middle seat.`);
  }
};
// checkMiddleSeat('11B');
// checkMiddleSeat('1A');
// checkMiddleSeat('13E');
// checkMiddleSeat('16C');

airline.toUpperCase();
airline.toLowerCase();

'String'.toUpperCase();
'String'.toLowerCase();

// Fix capitalization in a name
const passenger = 'jOnAs'; // Should be 'Jonas'

// Put it all to lowercase the take the first letter off, lowercase, and access just the first letter to capitalize.
const passengerLower = passenger.toLowerCase().slice(1);

// This connects the first element, that was captialized, with the remaining string, that was lowercase()
const passengerCorrect = passenger[0].toUpperCase() + passengerLower;

// Comparing emails
const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io \n'; // Remember, \n is a new line character (aka pressing enter)

// Inefficient since it can be done in one step, seen below
// const lowerLogin = loginEmail.toLowerCase();
// const trimmedLogin = lowerLogin.trim();

// In one step.
const oneStepEmail = loginEmail.toLowerCase().trim();

// Replacing parts of strings
const priceGB = `£288,97`; // The comma is used in Europe instead of period.

// Convert the price to USD, along with replacing the comma with a period and the pound with $
// const priceUS = priceGB.replace('£', '$').replace(',', '.');
// console.log(priceUS);

// // Replacing full words
// const announcement =
//   'All passengers come to boarding door 23.  Boarding door 23.';

// console.log(announcement.replace('door', 'gate'));

// // Replacing all with a very simple regex
// console.log(announcement.replace(/door/g, 'gate'));

// Boolean string methods
const plane = 'A320neo';
// console.log(plane.includes('A320'));
// console.log(plane.includes('Boeing'));
// Starts with
// console.log(plane.startsWith('A'));
// console.log(plane.startsWith('A3'));
// console.log(plane.startsWith('Air'));

// if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
//   console.log('It is part of the new Airbus fleet');
// } else {
//   console.log('It is NOT part of the new Airbus fleet');
// }

const checkBags = function (items) {
  const bags = items.toLowerCase();
  if (bags.includes('knife') || bags.includes('gun')) {
    console.log('They are NOT allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};

// checkBags('I have a laptop, some Food, and a pocket Knife.');
// checkBags('Socks and camera');
// checkBags('Got some snacks and a gun for protection');

// Using the split() method.  Splits a string into multiple parts based on a divider string
// console.log('A+very+nice+string'.split('+'));

// console.log('Jonas Schmedtmann'.split(' '));

// Destructuring at the same time as split()
const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');
// console.log(firstName, lastName);

// Make the lastName toUpperCase() and add ‘Mr.’ to the beginning using join().
const fullName = ['Mr.', firstName, lastName.toUpperCase()].join('-');

// Capitalizing a name (using a custom function)

const capitalizeName = function (name) {
  // Splits the string up and puts the elements into an array.
  const names = name.split(' ');
  const namesUpper = [];
  // This loop will capitalize the first letter of each name.
  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase())); // Using replace() to achieve the same result
  }
  console.log(namesUpper.join(' '));
};

// capitalizeName('jessica ann smith davis');

// Padding a string
const message = 'Go to gate 23!';
// console.log(message.padStart(25, '+'));
// console.log('Jonas'.padStart(25, '+'));

// Using padding to 'mask' a credit card, except the last 4 digits
const maskCard = function (number) {
  const cardString = String(number);
  const lastFour = cardString.slice(-4);
  return lastFour.padStart(cardString.length, '*');
};

// console.log(maskCard(123456));
// console.log(maskCard(1234567890123456));

// Repeat()
const messageWarn = 'Bad weather... All Departures Delayed... ';
// console.log(messageWarn.repeat(3));

///////////////////////////////////////////                 ///////////////////////////////////////////
/////////////////////////////////////// String Methods Practice ///////////////////////////////////////
///////////////////////////////////////////                 ///////////////////////////////////////////

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

//  * Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//     * Delayed Arrive from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

// const flightsArray = flights.replace(/;/g, ' ').replace(/_/g, ' ').split('+');
// console.log(flightsArray);

// for (const flights of flightsArray) {
//   const flight = flights.split('_');
//   // console.log(flight);
//   for (const entry of flight) {
//     const individualFlight = entry.trim().split(' ');
//     // console.log(individualFlight);
//     for (const data of individualFlight) {
//       console.log(data);
//     }
//   }
// }

//  * Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//     * Delayed Arrive from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

// Jonas' solution //

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '*' : ''}${type.replace(
    /_/g,
    ' '
  )} from ${getCode(from)} to ${getCode(to)} (${time.replace(
    ':',
    'h'
  )})`.padStart(45);
  console.log(output);
}
