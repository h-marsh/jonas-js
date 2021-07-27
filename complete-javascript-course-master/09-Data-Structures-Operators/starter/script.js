'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // Returns an array that contains the items that were specified by their index positions in their respective menu arrays

  openingHours: {
    thu: {
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
  },

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

////////////////////////////// Destructuring Objects //////////////////////////////

// // This call was used to show object destructuring in the parameters of a function
// restaurant.orderDelivery({
//   time: '12:00',
//   address: '123 Cherry Street',
//   mainIndex: 2,
//   starterIndex: 2,
// });

const { name, categories, openingHours } = restaurant;

// Destructuring but with custom variable names different from property names
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

// Default values
const { menu = restaurant.name, starterMenu: starters = [] } = restaurant;

// Mutating variables
// let a = 111;
// let b = 999;
// const object = { a: 23, b: 7, c: 14 };
// ({ a, b } = object); // The parens are needed for mutating variables

// Nested Object Destructuring
// In two steps:
// const { fri } = openingHours;
// // console.log(fri);
// const { open: fridayOpen, close: fridayClose } = fri;
// console.log(fridayOpen, fridayClose);

// In one step:
const {
  fri: { open: fridayOpen, close: fridayClose },
} = openingHours;
// console.log(fridayOpen, fridayClose);

////////////////////////////// Destructuring Arrays //////////////////////////////
// Recieve 2 return values from a function, even though the function only returned one item (an array).  This is a good way to immediately creating two variables out of one fcuntion call.
// const [starterItem, mainItem] = restaurant.order(2, 0);
// console.log(starterItem, mainItem);

// // Nested array destructuring
// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;  This one returns a number and an array.

// // This will return individual items isntead of having one remain the nested array.
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // Default values for unknown array lengths
// const [p, q, r] = [8, 9];

////////////////////////////// The Spread Operator //////////////////////////////

// const arr = [7, 8, 9];
// const badNewArray = [1, 2, arr[0], arr[1], arr[2]];

// const goodNewArray = [1, 2, ...arr];

// console.log(badNewArray);
// console.log(goodNewArray);
// console.log(...goodNewArray);

// console.log(restaurant.mainMenu);
// restaurant.mainMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(restaurant.mainMenu);

// Calling the orderPasta method to practice passing a spread operator into a function.  It will get the ingedients from a prompt window and then pass those into the method.
// const ingredients = [
//   prompt("Let's make pasta!  Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];

// restaurant.orderPasta(...ingredients);

// Using the spread operator on the restaurant object.
// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
// console.log(newRestaurant);
// newRestaurant.locations = 3;
// console.log(newRestaurant);

////////////////////////////// Rest Pattern and Parameters //////////////////////////////
// Rest pattern does the opposite of the spread operator.  It takes individual elements and creates an array

///// Destructuring

// Spread operator since the (...) is on the right side of the assignment operator (=)
const array = [1, 2, 3, 4];
const newArray = [...array, 5, 6];

// Rest, because the (...) is on the left side of the assignment operator(=)
const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);
// console.log(others);

// Using (...) on both sides of the assignment operator.  Working with the menus.
const [pizza, , Risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
// console.log(pizza, Risotto, otherFood);

// This time with objects instead of arrays.  Working with the business hours.  Selecting only Saturday, the rest going into another object for just weekdays.
const { sat: Saturday, ...weekdays } = restaurant.openingHours;
// console.log(Saturday, weekdays);

///// Functions

// The second use of the spread operator is to pass multiple arguments into a function at once, like with the ingredients on pasta array above
// The rest operator does the opposite.  A simple example is a function that takes an arbitrary number of numbers and adds them together.

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};
// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1);

// Passing an array into the above function
const x = [23, 5, 7];
// add(...x);
restaurant.orderPizza('cheese', 'pepperoni', 'olives', 'sausage');
