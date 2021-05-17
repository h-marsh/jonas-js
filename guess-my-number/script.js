'use strict';

// Initalizes the first random number on page load.  New random numbers are generated via 'Again!' button.
let numberCorrect = Math.trunc(Math.random() * 10) + 1;
console.log(numberCorrect);
let score = 20;

// Function that is the main game logic.  Checks if a guess was entered.  Compares the .guess.value to the RNG number.  Wrong guesses decrement score.  Correct guesses change message text and compares to highscore.
// Added a score variable above to keep track of the data with code instead of relying on the DOM to keep track of it.  Also added if a guess was too high or too low, and what happens when score reaches 0.  It checks if the score has reached 0 earlier so that it is no longer possible to win after losing.
const numberGuess = function () {
  const highscore = document.querySelector('.highscore');
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = 'No number given...';
  } else if (score <= 1) {
    document.querySelector('.message').textContent = 'You lost the game';
    document.querySelector('.score').textContent = 0;
  } else if (guess === numberCorrect) {
    document.querySelector('.message').textContent = 'Yes!';
    document.querySelector('.number').textContent = numberCorrect;
    if (highscore.textContent < score) {
      highscore.textContent = score;
    }
    score = 20;
  } else {
    if (guess > numberCorrect) {
      document.querySelector('.message').textContent =
        'Wrong, too high, try again!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'Wrong, too low, try again!';
      score--;
      document.querySelector('.score').textContent = score;
    }
  }
};

// Function to reset the message, reset the score, sets the big number back to '?', resets input field, and re-create the RNG number
const resetButton = function () {
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = 0;
  numberCorrect = Math.trunc(Math.random() * 10) + 1;
  console.log(numberCorrect);
};

// Adds numberGuess functionality to the 'Check!' button
document.querySelector('.check').addEventListener('click', numberGuess);

// Adds resetButton functionality to the 'Again!' button
document.querySelector('.again').addEventListener('click', resetButton);
