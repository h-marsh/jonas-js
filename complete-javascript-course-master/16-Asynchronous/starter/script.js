'use strict';

// const btn = document.querySelector('.btn-country');
// const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

///////////////////////////////////////////                 ///////////////////////////////////////////
///////////////////////////////////////////////  NOTES  ///////////////////////////////////////////////
///////////////////////////////////////////                 ///////////////////////////////////////////

// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();
//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);

//     const html = `
//     <article class="country">
//         <img class="country__img" src="${data.flag}" />
//         <div class="country__data">
//             <h3 class="country__name">${data.name}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(
//               Number(data.population) / 1000000
//             ).toFixed(1)} million people</p>
//             <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//             <p class="country__row"><span>💰</span>${
//               data.currencies[0].code
//             }</p>
//         </div>
//     </article>
//     `;

//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };

// getCountryData('spain');
// getCountryData('canada');
// getCountryData('japan');

///////////////////////////////////////////                 ///////////////////////////////////////////
///////////////////////////////////////////  Callback Hell  ///////////////////////////////////////////
///////////////////////////////////////////                 ///////////////////////////////////////////

// const renderCountry = function (data, className = '') {
//   const html = `
//     <article class="country ${className}">
//         <img class="country__img" src="${data.flag}" />
//         <div class="country__data">
//             <h3 class="country__name">${data.name}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(
//               Number(data.population) / 1000000
//             ).toFixed(1)} million people</p>
//             <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//             <p class="country__row"><span>💰</span>${
//               data.currencies[0].code
//             }</p>
//         </div>
//     </article>
//     `;

//   countriesContainer.insertAdjacentHTML('beforeend', html);
// };

// const getCountryDataAndNeighbor = function (country) {
//   /* ajax call country 1 */
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);

//     /* render country 1 */
//     renderCountry(data);

//     /* neighboring country (2) */
//     if (!data.borders) return; /* in case the country is an island */
//     const [neighbor] = data.borders;

//     /* ajax call country 2 */
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v2/alpha/${neighbor}`);
//     request2.send();

//     request2.addEventListener('load', function () {
//       const data2 = JSON.parse(this.responseText);
//       renderCountry(data2, 'neighbour');
//     });
//   });
// };

// getCountryDataAndNeighbor('saudi arabia');

///////////////////////////////////////////                 ///////////////////////////////////////////
////////////////////////////////////  Promises and the Fetch API  ////////////////////////////////////
///////////////////////////////////////////                 ///////////////////////////////////////////

/* old way of AJAX calls */
// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v2/name/${country}`);
// request.send();

/* AJAX calls with Fetch API */
// const request = fetch('https://restcountries.com/v2/name/portugal');

///////////////////////////////////////////                 ///////////////////////////////////////////
////////////////////////////////////////  Consuming Promises  ////////////////////////////////////////
///////////////////////////////////////////                 ///////////////////////////////////////////

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       renderCountry(data[0]);
//     });
// };

/* a cleaner version */
// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(response => response.json())
//     .then(data => renderCountry(data[0]));
// };

// getCountryData('spain');

///////////////////////////////////////////                 ///////////////////////////////////////////
/////////////////////////////////////////  Chaining Promises  /////////////////////////////////////////
///////////////////////////////////////////                 ///////////////////////////////////////////

// const getCountryData = function (country) {
//   /* country 1 (original) */
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(response => response.json())
//     .then(data => {
//       renderCountry(data[0]);

//       /* country 2 (neighbor) */
//       const neighbor = data[0].borders[0];
//       return fetch(`https://restcountries.com/v2/alpha/${neighbor}`);
//     })
//     .then(response => response.json())
//     .then(data => {
//       renderCountry(data, 'neighbour');

//       /* country 3 (neighbor) */
//       const neighbor2 = data.borders[0];
//       return fetch(`https://restcountries.com/v2/alpha/${neighbor2}`);
//     })
//     .then(response => response.json())
//     .then(data => renderCountry(data, 'neighbour'));
// };

// const getCountryDataChaining = function (country) {
//   /* country 1 (original) */
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(response => response.json())
//     .then(data => {
//       renderCountry(data[0]);

//       /* country 2 (neighbor) */
//       const neighbor = data[0].borders[0];
//       return fetch(`https://restcountries.com/v2/alpha/${neighbor}`);
//     })
//     .then(response => response.json())
//     .then(data => renderCountry(data, 'neighbour'));
// };

// getCountryData('spain');

///////////////////////////////////////////                 ///////////////////////////////////////////
////////////////////////////////////  Handling Rejected Promises  ////////////////////////////////////
///////////////////////////////////////////                 ///////////////////////////////////////////

// const displayError = function (message) {
//   countriesContainer.insertAdjacentText('beforeend', message);
// };

// const getCountryDataRejected = function (country) {
//   /* country 1 (original) */
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(response => response.json())
//     .then(data => {
//       renderCountry(data[0]);

//       /* country 2 (neighbor) */
//       const neighbor = data[0].borders[0];
//       return fetch(`https://restcountries.com/v2/alpha/${neighbor}`);
//     })
//     .then(response => response.json())
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(error => {
//       console.error(`${error} 💥💥💥`);
//       displayError(`Something went wrong 😢 ${error.message}`);
//     })
//     .finally(() => (countriesContainer.style.opacity = 1));
// };

// btn.addEventListener('click', function () {
//   getCountryDataRejected('spain');
// });

///////////////////////////////////////////                 ///////////////////////////////////////////
/////////////////////////////////////  Throwing Errors Manually   /////////////////////////////////////
///////////////////////////////////////////                 ///////////////////////////////////////////

// const getJSON = function (url, errorMsg = 'Something went wrong.') {
//   return fetch(url).then(response => {
//     if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
//     return response.json();
//   });
// };

// const getCountryDataManually = function (country) {
//   /* country 1 (original) */
//   getJSON(`https://restcountries.com/v2/name/${country}`, 'Country not found')
//     .then(data => {
//       renderCountry(data[0]);

//       /* country 2 (neighbor) */

//       if (!data[0].borders) {
//         throw new Error('No neighbors');
//       }

//       const neighbor = data[0].borders[0];

//       return getJSON(
//         `https://restcountries.com/v2/alpha/${neighbor}`,
//         'Neighbor not found'
//       );
//     })
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(error => {
//       console.error(`${error} 💥💥💥`);
//       displayError(`Something went wrong 😢 ${error.message}`);
//     })
//     .finally(() => (countriesContainer.style.opacity = 1));
// };

// btn.addEventListener('click', function () {
//   getCountryDataManually('australia');
// });

///////////////////////////////////////////                 ///////////////////////////////////////////
///////////////////////////////////////  Coding Challenge #1   ///////////////////////////////////////
///////////////////////////////////////////                 ///////////////////////////////////////////

// const renderCountry = function (data, className = '') {
//   const html = `
//     <article class="country ${className}">
//         <img class="country__img" src="${data.flag}" />
//         <div class="country__data">
//             <h3 class="country__name">${data.name}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(
//               Number(data.population) / 1000000
//             ).toFixed(1)} million people</p>
//             <p class="country__row"><span>😃</span>${data.languages[0].name}</p>
//             <p class="country__row"><span>💰</span>${
//               data.currencies[0].code
//             }</p>
//         </div>
//     </article>
//     `;

//   countriesContainer.insertAdjacentHTML('beforeend', html);
// };

// /* this will get the relevant geo-info based on provided coordinates */
// const whereAmI = function (lat, lng) {
//   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Too many requests: (${response.status})`);
//       return response.json();
//     })
//     .then(data => fetch(`https://restcountries.com/v2/name/${data.country}`))
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Country not found: (${response.status})`);
//       return response.json();
//     })
//     .then(data => renderCountry(data[0]))
//     .catch(error => console.error(`${error}😢`))
//     .finally(() => (countriesContainer.style.opacity = 1));
// };

// btn.addEventListener('click', function () {
//   whereAmI(-33.933, 18.474);
// });

// whereAmI(' 52.508', '13.381 ');
// whereAmI(' 19.037', '72.873');
// whereAmI('-33.933', '18.474');

///////////////////////////////////////////                 ///////////////////////////////////////////
////////////////////////////////////  The Event Loop in Practice   ////////////////////////////////////
///////////////////////////////////////////                 ///////////////////////////////////////////

// console.log('Test start');
// setTimeout(() => console.log('0 second timer'), 0);
// Promise.resolve('Resolved promise 1').then(response => console.log(response));

// Promise.resolve('Resolved promise 2').then(response => {
//   for (let i = 0; i < 10000000000; i++) {}
//   console.log(response);
// });

// console.log('Test end');

///////////////////////////////////////////                 ///////////////////////////////////////////
/////////////////////////////////////  Building a Simple Promise  /////////////////////////////////////
///////////////////////////////////////////                 ///////////////////////////////////////////

// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log('RNG soon...🔢');

//   setTimeout(() => {
//     if (Math.random() >= 0.5) {
//       resolve('Resolved!  😊');
//     } else {
//       reject(new Error('Rejected 💔'));
//     }
//   }, 2000);
// });

// lotteryPromise
//   .then(res => console.log(res))
//   .catch(error => console.error(error));

/* promisifying setTimeout, a more real-world example */
// const wait = function (seconds) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// wait(2)
//   .then(() => {
//     console.log('Waited for 2 seconds');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('Waited for 1 seconds');
//   });

// Promise.resolve('Immediately resolved').then(res => console.log(res));
// Promise.reject(new Error('Bad!')).catch(err => console.error(err));

///////////////////////////////////////////                 ///////////////////////////////////////////
/////////////////////////////////  Promisifying the Geolocation API  /////////////////////////////////
///////////////////////////////////////////                 ///////////////////////////////////////////

// navigator.geolocation.getCurrentPosition(
//   position => console.log(position),
//   err => console.error(err)
// );

// console.log('This code is not blocked by the async geolocation call.');

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(
//       position => resolve(position),
//       err => reject(err)
//     );
//   });
// };

// const renderCountry = function (data, className = '') {
//   const html = `
//       <article class="country ${className}">
//           <img class="country__img" src="${data.flag}" />
//           <div class="country__data">
//               <h3 class="country__name">${data.name}</h3>
//               <h4 class="country__region">${data.region}</h4>
//               <p class="country__row"><span>👫</span>${(
//                 Number(data.population) / 1000000
//               ).toFixed(1)} million people</p>
//               <p class="country__row"><span>😃</span>${
//                 data.languages[0].name
//               }</p>
//               <p class="country__row"><span>💰</span>${
//                 data.currencies[0].code
//               }</p>
//           </div>
//       </article>
//       `;

//   countriesContainer.insertAdjacentHTML('beforeend', html);
// };

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// getPosition().then(position => console.log(position));

// const whereAmI = function () {
//   getPosition()
//     .then(position => {
//       console.log(position.coords);
//       const { latitude: lat, longitude: lng } = position.coords;
//       return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     })
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Too many requests: (${response.status})`);
//       return response.json();
//     })
//     .then(data => fetch(`https://restcountries.com/v2/name/${data.country}`))
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Country not found: (${response.status})`);
//       return response.json();
//     })
//     .then(data => renderCountry(data[0]))
//     .catch(error => console.error(`${error}😢`))
//     .finally(() => (countriesContainer.style.opacity = 1));
// };

// btn.addEventListener('click', function () {
//   whereAmI(-33.933, 18.474);
// });

///////////////////////////////////////////                 ///////////////////////////////////////////
////////////////////////////////  Consuming Promises with Async/Await  ////////////////////////////////
///////////////////////////////////////////                 ///////////////////////////////////////////

// import fetch from 'node-fetch';

// const countriesContainer = document.querySelector('.countries');

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// const renderCountry = function (data, className = '') {
//   const html = `
//       <article class="country ${className}">
//           <img class="country__img" src="${data.flag}" />
//           <div class="country__data">
//               <h3 class="country__name">${data.name}</h3>
//               <h4 class="country__region">${data.region}</h4>
//               <p class="country__row"><span>👫</span>${(
//                 Number(data.population) / 1000000
//               ).toFixed(1)} million people</p>
//               <p class="country__row"><span>😃</span>${
//                 data.languages[0].name
//               }</p>
//               <p class="country__row"><span>💰</span>${
//                 data.currencies[0].code
//               }</p>
//           </div>
//       </article>
//       `;

//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   countriesContainer.style.opacity = 1;
// };

// const whereAmI = async function () {
//   // geolocation
//   const pos = await getPosition();
//   const { latitude: lat, longitude: lng } = pos.coords;

//   // reverse geocoding
//   const reverseGeo = await fetch(
//     `https://geocode.xyz/${lat},${lng}?geoit=json`
//   );
//   const dataReverseGeo = await reverseGeo.json();

//   // country data
//   const response = await fetch(
//     `https://restcountries.com/v2/name/${dataReverseGeo.country}`
//   );
//   const data = await response.json();
//   renderCountry(data[0]);
// };

// whereAmI();
// console.log('This comes after the async call...but shows up first!');

///////////////////////////////////////////                 ///////////////////////////////////////////
///////////////////////////////////  Error Handling with Try/Catch  ///////////////////////////////////
///////////////////////////////////////////                 ///////////////////////////////////////////

// try {
//   let y = 1;
//   const x = 2;
//   x = 3;
// } catch (error) {
//   alert(error.message);
// }

const countriesContainer = document.querySelector('.countries');

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const renderCountry = function (data, className = '') {
  const html = `
      <article class="country ${className}">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
              <h3 class="country__name">${data.name}</h3>
              <h4 class="country__region">${data.region}</h4>
              <p class="country__row"><span>👫</span>${(
                Number(data.population) / 1000000
              ).toFixed(1)} million people</p>
              <p class="country__row"><span>😃</span>${
                data.languages[0].name
              }</p>
              <p class="country__row"><span>💰</span>${
                data.currencies[0].code
              }</p>
          </div>
      </article>
      `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const whereAmI = async function () {
  try {
    // geolocation
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    // reverse geocoding
    const reverseGeo = await fetch(
      `https://geocode.xyz/${lat},${lng}?geoit=json`
    );
    if (!reverseGeo.ok) throw new Error('Problem getting location data.');

    const dataReverseGeo = await reverseGeo.json();

    // country data
    const response = await fetch(
      `https://restcountries.com/v2/name/${dataReverseGeo.country}`
    );
    if (!response.ok) throw new Error('Problem getting country.');

    const data = await response.json();
    renderCountry(data[0]);
  } catch (error) {
    console.error(`💥${error.message}`);
  }
};

whereAmI();
