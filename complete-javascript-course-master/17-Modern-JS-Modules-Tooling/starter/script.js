// 'use strict';
// import fetch from 'node-fetch';
///////////////////////////////////////////                 ///////////////////////////////////////////
///////////////////////////////  Exporting and Importing in ES6 Modules  ///////////////////////////////
///////////////////////////////////////////                 ///////////////////////////////////////////

// import shoppingCart from './shoppingCart.js';

/* importing a module without importing a value */
console.log('++Importing Module++');

// this is the importing module.

// import { addToCart, totalPrice as price, totalQuantity } from './shoppingCart.js';
// console.log(price, totalQuantity);
// addToCart('eggs', 12);

// import * as ShoppingCart from './shoppingCart.js';
// console.log(ShoppingCart.totalQuantity);
// console.log(ShoppingCart.totalPrice);
// ShoppingCart.addToCart('eggs', 12);

// import add from './shoppingCart.js';
// add('bread', 2);

///////////////////////////////////////////                 ///////////////////////////////////////////
/////////////////////////////////////  Top-Level await (ES2022)  /////////////////////////////////////
///////////////////////////////////////////                 ///////////////////////////////////////////

// const response = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await response.json();
// // console.log(data);

// const getLastPost = async function () {
//   const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const data = await response.json();

//   return { title: data.at(-1).title, text: data.at(-1).body };
// };

// const lastPost = getLastPost();

// // Not clean
// lastPost.then(last => console.log(last));

// const lastPostAwait = await getLastPost();
// console.log(lastPostAwait);

///////////////////////////////////////////                 ///////////////////////////////////////////
/////////////////////////////////////////  The Module Pattern  /////////////////////////////////////////
///////////////////////////////////////////                 ///////////////////////////////////////////

// const ShoppingCart2 = (function () {
//   const cart = [];
//   const shippingCost = 10;
//   const totalPrice = 237;
//   const totalQuantity = 23;

//   const addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(`${quantity} ${product} was added to the cart!`);
//   };

//   const orderStock = function (product, quantity) {
//     console.log(`${quantity} ${product} ordered from supplier!`);
//   };

//   return {
//     addToCart,
//     orderStock,
//     cart,
//   };
// })();

// ShoppingCart2.addToCart('apples', 3);
// ShoppingCart2.orderStock('onions', 5);
// console.log(ShoppingCart2.cart);

///////////////////////////////////////////                 ///////////////////////////////////////////
/////////////////////////////////////////  CommonJS Modules  /////////////////////////////////////////
///////////////////////////////////////////                 ///////////////////////////////////////////

/* npm is all about commonJS modules */

// commonJS export
// export.addToCart = function (product, quantity) {
//   cart.push({ product, quantity });
//   console.log(`${quantity} ${product} was added to the cart!`);
// };

// commonJS import
// const { addToCart } = require('./shoppingCart.js');

///////////////////////////////////////////                 ///////////////////////////////////////////
////////////////////////////////////////  Introduction to NPM  ////////////////////////////////////////
///////////////////////////////////////////                 ///////////////////////////////////////////

import { addToCart, cart, totalQuantity, totalPrice } from './shoppingCart.js';

// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
import cloneDeep from 'lodash-es';

console.log(totalQuantity);
console.log(totalPrice);
addToCart('eggs', 12);
addToCart('potato', 2);
addToCart('bread', 1);
addToCart('apples', 4);
console.log(cart);

if (module.hot) {
  module.hot.accept();
}

console.log(cart.find(element => element.quantity >= 2));

// for polyfilling es6 array methods
import 'core-js/stable';

// for polyfilling async functions
import 'regenerator-runtime/runtime';
