//// This version is from the lecture.  It uses a variable to track the current player instead of using a bunch of if-statements like you did on your own (script.js) ////

'use strict';

// Selecting the buttons/dice image
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const diceElement = document.querySelector('.dice');

// Selecting the two player panels.  To manipulate via switching the focused panel and showing who wins
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

// Selecting the element displays of the current and total scores of both players
const score0Element = document.querySelector('#score--0');
const score1Element = document.querySelector('#score--1');

// Starting conditions
let currentScore = 0;
diceElement.classList.add('hidden');
let activePlayer = 0;
const totalScores = [0, 0];
let playing = true;

const switchPlayer = function () {
  currentScore = 0;
  document.querySelector(`#current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

const roll = function () {
  if (playing) {
    // Create random number, display dice image, set source according to number rolled.
    const numberRolled = Math.trunc(Math.random() * 6) + 1;
    diceElement.classList.remove('hidden');
    diceElement.src = `dice-${numberRolled}.png`;
    // Checking if a 1 is rolled
    if (numberRolled !== 1) {
      currentScore += numberRolled;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Switch to other player
      switchPlayer();
    }
  }
};

const hold = function () {
  // Add current score to total score (for the current player), check if the score is >=100.  If so, Current player wins, otherwise switch player.
  if (playing) {
    totalScores[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      totalScores[activePlayer];
    if (totalScores[activePlayer] >= 20) {
      playing = false;
      diceElement.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.toggle('active--player');
    } else {
      switchPlayer();
    }
  }
};

const newGame = function () {
  current0 = 0;
  score0 = 0;
  current1 = 0;
  score1 = 0;
  current0Element.textContent = current0;
  score0Element.textContent = score0;
  current1Element.textContent = current1;
  score1Element.textContent = score1;
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  if (!player0.classList.contains('player--active')) {
    player0.classList.add('player--active');
    player1.classList.remove('player--active');
  }
};

btnNew.addEventListener('click', newGame);
btnRoll.addEventListener('click', roll);
btnHold.addEventListener('click', hold);
