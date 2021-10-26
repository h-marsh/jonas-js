'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

/* Modal window */
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
  section1.scrollIntoView({ behavior: 'smooth' });
});

/* page navigation bar/smooth scrolling */
document
  .querySelector('.nav__links')
  .addEventListener('click', function (event) {
    event.preventDefault();
    if (event.target.classList.contains('nav__link')) {
      const id = event.target.getAttribute('href');
      document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    }
  });

/* tabbed component */
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (event) {
  const clicked = event.target.closest('.operations__tab');
  /* guard clause */
  if (!clicked) return;

  /* active tab */
  tabs.forEach(tab => tab.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');

  /* active content area */
  tabsContent.forEach(content =>
    content.classList.remove('operations__content--active')
  );
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

/* menu link fade animation */
const nav = document.querySelector('.nav');

const handleHover = function (event) {
  if (event.target.classList.contains('nav__link')) {
    const link = event.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(element => {
      if (element !== link) element.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

/* bind() is used to pass a psuedo-argument into a handler callback function */
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

const initialCoords = section1.getBoundingClientRect();

/* sticky navigation */
// this is the if/else way
// window.addEventListener('scroll', function () {
//   if (window.scrollY >= initialCoords.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// });

/* sticky navigation with the intersection observer API */
/* the options object and callback to be passed */
const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

/* create a new intersection observer, passing in a callback and object of options */
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

/* revealing sections on scroll */
const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  sectionObserver.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.1,
});

/* having the observer object watch each section and makes them hidden */
allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

/* lazy loading images */
const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  // replace src with data-src
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });

  sectionObserver.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

imgTargets.forEach(img => imgObserver.observe(img));

/* slider component */
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');

let currentSlide = 0;
const maxSlide = slides.length;

const goToSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};

// set the initial condition where they're side by side
goToSlide(0);

// Next slide
const nextSlide = function () {
  if (currentSlide === maxSlide - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }

  goToSlide(currentSlide);
};

btnRight.addEventListener('click', nextSlide);

// previous slide
const prevSlide = function () {
  if (currentSlide === 0) {
    currentSlide = maxSlide - 1;
  } else {
    currentSlide--;
  }
  goToSlide(currentSlide);
};

btnLeft.addEventListener('click', prevSlide);

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

// const allSections = document.querySelectorAll('.section');
// // console.log(allSections);

// document.getElementById('section--1');

// const allButtons = document.getElementsByTagName('button');
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
// document
//   .querySelector('.nav__link')
//   .addEventListener('click', function (event) {
//     this.style.backgroundColor = randomColor();
//     console.log('LINK', event.target, event.currentTarget);

//     /* stop propagation */
//     // event.stopPropagation();
//   });

// document
//   .querySelector('.nav__links')
//   .addEventListener('click', function (event) {
//     this.style.backgroundColor = randomColor();
//     console.log('LINK CONTAINER', event.target, event.currentTarget);
//   });

// document.querySelector('.nav').addEventListener('click', function (event) {
//   this.style.backgroundColor = randomColor();
//   console.log('NAVBAR', event.target, event.currentTarget);
// });

///////////////////////////////////////////                 ///////////////////////////////////////////
/////////////////////////// Event Delegation: Implementing Page Navigation ///////////////////////////
///////////////////////////////////////////                 ///////////////////////////////////////////

/* note, most, if not all, of the implementation will be done at the top of the file */

///////////////////////////////////////////                 ///////////////////////////////////////////
/////////////////////////////////////////// DOM Traversing ///////////////////////////////////////////
///////////////////////////////////////////                 ///////////////////////////////////////////

/* Note, going up and down aren’t necessarily the direction. Going downwards means selecting child elements, going upwards is selecting parent elements, and going to the side is selecting sibling elements. */

/* going downwards (child) via DOM traversing */
// const highlight = h1.querySelectorAll('.highlight');
// console.log(h1.children);
// h1.firstElementChild.style.color = 'red';
// h1.lastElementChild.style.color = 'blue';

/* going upwards (parent) via DOM traversing */
// console.log(h1.parentNode);
// h1.closest('h1').style.background = 'var(--gradient-secondary)';

/* going sideways (sibling) via DOM traversing */
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);
// console.log(h1.previousSibling);
// console.log(h1.nextSibling);
// console.log(h1.parentElement.children);

// const h1 = document.querySelector('h1');
// const h1Siblings = [...h1.parentElement.children];

// h1Siblings.forEach(function (element) {
//   if (element !== h1) {
//     element.style.transform = 'scale(0.5)';
//   }
// });

///////////////////////////////////////////                 ///////////////////////////////////////////
//////////////////////////////////// The Intersection Observer API ////////////////////////////////////
///////////////////////////////////////////                 ///////////////////////////////////////////

/* the options object and callback to be passed */
// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => console.log(entry));
// };

// const obsOptions = {
//   root: null,
//   threshold: [0, 0.2],
// };

// /* create a new intersection observer, passing in a callback and object of options */
// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);
