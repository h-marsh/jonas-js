'use strict';

// Document.querySelector selects the element(s) with the .message class
// .textContent is the property that accesses the text contained within the element.  It is a property so its value can be reassigned like we did with objects earlier.

// const input = Number(prompt('Enter 1 or 2'));
// if (input === 1) {
//   document.querySelector('.message').textContent = 'One was guessed!';
//   document.querySelector('.number').textContent = input;
// } else {
//   document.querySelector('.message').textContent = 'One was not guessed!';
//   document.querySelector('.number').textContent = input;
// }

// console.log(document.querySelector('.message').textContent);

// // Retrieving data from an element, i.e. an input field.
// document.querySelector('.guess').value;
// // Input fields don't have textContent, they have value properties.
// document.querySelector('.guess').value = 17;

// let count = 1;

// document.querySelector('.check').addEventListener('click', function () {
//   console.log('Hello #' + count);
//   count++;
// });

// The reason the above works is because the counter variable is initiated outside of the function, making it so it remains persistent even when the function itself isn't being executed.

// This takes the value manually entered into the input field and logs it to the console.  It does so by selecting the input field element and then accessing the value property.

// document.querySelector('.check').addEventListener('click', function () {
//   console.log(document.querySelector('.guess').value);
//   document.querySelector('.message').textContent = 'Yes!';
// });

// ++++++++++++++ACTUAL GAME LOGIC STARTS HERE++++++++++++++ //

// Initalizes the first random number on page load.  New random numbers are generated via 'Again!' button.
let numberCorrect = Math.floor(Math.random() * 10) + 1;
console.log(numberCorrect);

// Function that is the main game logic.  Checks if a guess was entered.  Compares the .guess.value to the RNG number.  Wrong guesses decrement score.  Correct guesses change message text and compares to highscore.
const numberGuess = function () {
  const score = document.querySelector('.score');
  const highscore = document.querySelector('.highscore');
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = 'No number given...';
  } else if (guess === numberCorrect) {
    document.querySelector('.message').textContent = 'Yes!';
    document.querySelector('.number').textContent = numberCorrect;
    if (highscore.textContent < score.textContent) {
      highscore.textContent = score.textContent;
    }
  } else {
    document.querySelector('.message').textContent = 'Wrong, try again!';
    score.textContent--;
  }
};

// Function to reset the message, reset the score, sets the big number back to '?', resets input field, and re-create the RNG number
const resetButton = function () {
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = 0;
  numberCorrect = Math.floor(Math.random() * 11);
  console.log(numberCorrect);
};

// Adds numberGuess functionality to the 'Check!' button
document.querySelector('.check').addEventListener('click', numberGuess);

// Adds resetButton functionality to the 'Again!' button
document.querySelector('.again').addEventListener('click', resetButton);

// ++++++++++++++++END OF ACTUAL GAME LOGIC++++++++++++++++ //
