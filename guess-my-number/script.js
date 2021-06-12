'use strict';

// Initalizes the first random number on page load.  New random numbers are generated via 'Again!' button.
let numberCorrect = Math.trunc(Math.random() * 10) + 1;

let score = 20;
let highscore = 0;

// Function that is the main game logic.  Checks if a guess was entered.  Compares the .guess.value to the RNG number.  Wrong guesses decrement score.  Correct guesses change message text and compares to highscore.
// Added a score variable above to keep track of the data with code instead of relying on the DOM to keep track of it.  Also added if a guess was too high or too low, and what happens when score reaches 0.  It checks if the score has reached 0 earlier so that it is no longer possible to win after losing.

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const numberGuess = function () {
  const guess = Number(document.querySelector('.guess').value);
  // When there is no guess
  if (!guess) {
    displayMessage('No number given...');
  } // When guess is correct
  else if (guess === numberCorrect) {
    displayMessage('Yes!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = numberCorrect;
    document.querySelector('.number').style.width = '45rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // When guess is wrong
  } else if (guess !== numberCorrect) {
    if (score > 1) {
      displayMessage(
        guess > numberCorrect
          ? 'Too high!  Guess again.'
          : 'Too low!  Try again.'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }
};

// Function to reset the message, reset the score, sets the big number back to '?', resets input field, resets the background color/number width, and re-create the RNG number
const resetButton = function () {
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = 20;
  score = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  numberCorrect = Math.trunc(Math.random() * 10) + 1;
};

// Adds numberGuess functionality to the 'Check!' button
document.querySelector('.check').addEventListener('click', numberGuess);

// Adds resetButton functionality to the 'Again!' button
document.querySelector('.again').addEventListener('click', resetButton);
