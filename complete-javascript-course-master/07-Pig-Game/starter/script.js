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
const current0Element = document.querySelector('#current--0');
const score0Element = document.querySelector('#score--0');
const current1Element = document.querySelector('#current--1');
const score1Element = document.querySelector('#score--1');

let current0 = 0;
let score0 = 0;
let current1 = 0;
let score1 = 0;

// Hides the dice at the very beginning of the game.
diceElement.classList.add('hidden');

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

const roll = function () {
  let numberRolled = Math.trunc(Math.random() * 6) + 1;
  // Display Dice Roll Here.  Also note at the beginning there is no dice show in the middle //
  // Check if it is a 1 Here.  If yes, switch player.  If no, add to current score and display (already done below) //
  if (player0.classList.contains('player--active')) {
    current0 += numberRolled;
    current0Element.textContent = current0;
  } else if (player1.classList.contains('player--active')) {
    current1 += numberRolled;
    current1Element.textContent = current1;
  }
};

const hold = function () {
  // Look at the flowchart and follow that logic
  if (player0.classList.contains('player--active')) {
    score0 += current0;
    current0 = 0;
    current0Element.textContent = current0;
    score0Element.textContent = score0;
    if (score0 >= 100) {
      player0.classList.add('player--winner');
    }
    player0.classList.remove('player--active');
    player1.classList.add('player--active');
  } else if (player1.classList.contains('player--active')) {
    score1 += current1;
    current1 = 0;
    current1Element.textContent = current1;
    score1Element.textContent = score1;
    if (score1 >= 100) {
      player1.classList.add('player--winner');
    }
    player0.classList.add('player--active');
    player1.classList.remove('player--active');
  }
};

btnNew.addEventListener('click', newGame);
btnRoll.addEventListener('click', roll);
btnHold.addEventListener('click', hold);
