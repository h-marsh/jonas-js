'use strict';

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
