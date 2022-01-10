// 'use strict';
///////////////////////////////////////////                 ///////////////////////////////////////////
///////////////////////////////  Exporting and Importing in ES6 Modules  ///////////////////////////////
///////////////////////////////////////////                 ///////////////////////////////////////////

/* importing a module without importing a value */

// this is the importing module.

// import { addToCart, totalPrice as price, totalQuantity } from './shoppingCart.js';
// console.log(price, totalQuantity);
// addToCart('eggs', 12);

console.log('++Importing Module++');

// import * as ShoppingCart from './shoppingCart.js';
// console.log(ShoppingCart.totalQuantity);
// console.log(ShoppingCart.totalPrice);
// ShoppingCart.addToCart('eggs', 12);

import add from './shoppingCart.js';
add('bread', 2);
