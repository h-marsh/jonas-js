'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

const openModal = function (event) {
  event.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

/* implementing smooth scrolling */
btnScrollTo.addEventListener('click', function (event) {
  const s1coords = section1.getBoundingClientRect();
  section1.scrollIntoView({ behavior: 'smooth' });
});

///////////////////////////////////////////                 ///////////////////////////////////////////
//////////////////////////////////////////////// NOTES ////////////////////////////////////////////////
///////////////////////////////////////////                 ///////////////////////////////////////////

///////////////////////////////////////////                 ///////////////////////////////////////////
///////////////////////////// Selecting, Creating, and Deleting Elements /////////////////////////////
///////////////////////////////////////////                 ///////////////////////////////////////////

/********** selecting elements **********/
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// const header = document.querySelector('.header');

const allSections = document.querySelectorAll('.section');
// console.log(allSections);

document.getElementById('section--1');

const allButtons = document.getElementsByTagName('button');
// console.log(allButtons);

// document.getElementsByClassName('btn');

// /********** creating and inserting elements **********/
// // from scratch
// const message = document.createElement('div');
// message.classList.add('cookie-message');
// // message.textContent = 'We use cookies for improved functionality and analytics';
// message.innerHTML =
//   'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// header.prepend(message);
// header.append(message);
// header.append(message.cloneNode(true));

// header.before(message);
// header.after(message);

/* deleting elements */
// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function () {
//     message.remove();
//   });

///////////////////////////////////////////                 ///////////////////////////////////////////
/////////////////////////////////// Styles, Attributes, and Classes ///////////////////////////////////
///////////////////////////////////////////                 ///////////////////////////////////////////

/********** creating and inserting cookie message **********/

// note how header is selected since it's already in the html code, while message is using createElement()
// const header = document.querySelector('.header');
// const message = document.createElement('div');

// message.classList.add('cookie-message');

// // message.textContent = 'We use cookies for improved functionality and analytics';  // innerHTML is better since there is a button also being added

// message.innerHTML =
//   'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// header.prepend(message);

// /* deleting message element by adding funtionality to the 'got it' button */
// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function () {
//     message.remove();
//   });

// /* styles */
// message.style.backgroundColor = '#37383d';
// message.style.width = '110%';

// message.style.height =
//   parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';

// document.documentElement.style.setProperty('--color-primary', 'yellow');

// /* attributes */
// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);

// console.log(logo.getAttribute('designer'));

// logo.alt = 'another alt text';
// console.log(logo.alt);

// logo.setAttribute('company', 'bankist');
// console.log(logo.attributes);

// console.log(logo.src); // absolute url

// console.log(logo.getAttribute('src')); // relative url

// /* data attributes */
// console.log(logo.dataset.versionNumber);

// /* classes */
// logo.classList.add('class', 'class2');
// logo.classList.remove('class');
// logo.classList.toggle('class');
// logo.classList.contains('class');

// logo.className = 'class3';

///////////////////////////////////////////                 ///////////////////////////////////////////
//////////////////////////////////// Implementing Smooth Scrolling ////////////////////////////////////
///////////////////////////////////////////                 ///////////////////////////////////////////

// const btnScrollTo = document.querySelector('.btn--scroll-to');
// const section1 = document.querySelector('#section--1');

// btnScrollTo.addEventListener('click', function (event) {
//   const s1coords = section1.getBoundingClientRect();
//   section1.scrollIntoView({ behavior: 'smooth' });
// });

/* scroll positions */
// console.log('current scroll (x/y)', window.pageXOffset, window.pageYOffset);

/* viewport coordinates */
// console.log(
//   'height/width of viewport',
//   document.documentElement.clientHeight,
//   document.documentElement.clientWidth
// );

/* scrolling */
// window.scrollTo();

///////////////////////////////////////////                 ///////////////////////////////////////////
///////////////////////////////// Types of Events and Event Handlers /////////////////////////////////
///////////////////////////////////////////                 ///////////////////////////////////////////

// const h1 = document.querySelector('h1');

// const alertH1 = function (event) {
//   alert('addEventListener triggered: mouse entered heading');
// };

// h1.addEventListener('mouseenter', alertH1);
// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

// h1.onmouseenter = function (event) {
//   alert('onmouseenter (onEvent) triggered: mouse entered heading');
// };

///////////////////////////////////////////                 ///////////////////////////////////////////
//////////////////////////////////// Event Propagation in Practice ////////////////////////////////////
///////////////////////////////////////////                 ///////////////////////////////////////////

/* creating random colors to see event bubbling */
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

/* attaching event handlers to the different parts of the nav */
document
  .querySelector('.nav__link')
  .addEventListener('click', function (event) {
    this.style.backgroundColor = randomColor();
    console.log('LINK', event.target, event.currentTarget);

    /* stop propagation */
    // event.stopPropagation();
  });

document
  .querySelector('.nav__links')
  .addEventListener('click', function (event) {
    this.style.backgroundColor = randomColor();
    console.log('LINK CONTAINER', event.target, event.currentTarget);
  });

document.querySelector('.nav').addEventListener('click', function (event) {
  this.style.backgroundColor = randomColor();
  console.log('NAVBAR', event.target, event.currentTarget);
});
