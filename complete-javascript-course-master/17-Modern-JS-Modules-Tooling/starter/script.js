// 'use strict';
// import fetch from 'node-fetch';
///////////////////////////////////////////                 ///////////////////////////////////////////
///////////////////////////////  Exporting and Importing in ES6 Modules  ///////////////////////////////
///////////////////////////////////////////                 ///////////////////////////////////////////

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
// console.log(data);

const getLastPost = async function () {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();

  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost();

// Not clean
// lastPost.then(last => console.log(last));

const lastPostAwait = await getLastPost();
console.log(lastPostAwait);
