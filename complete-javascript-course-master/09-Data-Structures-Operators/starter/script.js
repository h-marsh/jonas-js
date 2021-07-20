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
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

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
};

// Recieve 2 return values from a function, even though the function only returned one item (an array).  This is a good way to immediately creating two variables out of one fcuntion call.
const [starterItem, mainItem] = restaurant.order(2, 0);
console.log(starterItem, mainItem);

// Nested array destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;  This one returns a number and an array.

// This will return individual items isntead of having one remain the nested array.
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values for unknown array lengths
const [p, q, r] = [8, 9];
