'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

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
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${
              data.currencies[0].code
            }</p>
        </div>
    </article>
    `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
};

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

const getCountryDataChaining = function (country) {
  /* country 1 (original) */
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then(response => response.json())
    .then(data => {
      renderCountry(data[0]);

      /* country 2 (neighbor) */
      const neighbor = data[0].borders[0];
      return fetch(`https://restcountries.com/v2/alpha/${neighbor}`);
    })
    .then(response => response.json())
    .then(data => renderCountry(data, 'neighbour'));
};

// getCountryData('spain');

///////////////////////////////////////////                 ///////////////////////////////////////////
////////////////////////////////////  Handling Rejected Promises  ////////////////////////////////////
///////////////////////////////////////////                 ///////////////////////////////////////////

const displayError = function (message) {
  countriesContainer.insertAdjacentText('beforeend', message);
};

const getCountryDataRejected = function (country) {
  /* country 1 (original) */
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then(response => response.json())
    .then(data => {
      renderCountry(data[0]);

      /* country 2 (neighbor) */
      const neighbor = data[0].borders[0];
      return fetch(`https://restcountries.com/v2/alpha/${neighbor}`);
    })
    .then(response => response.json())
    .then(data => renderCountry(data, 'neighbour'))
    .catch(error => {
      console.error(`${error} 💥💥💥`);
      displayError(`Something went wrong 😢 ${error.message}`);
    })
    .finally(() => (countriesContainer.style.opacity = 1));
};

btn.addEventListener('click', function () {
  getCountryDataRejected('spain');
});
