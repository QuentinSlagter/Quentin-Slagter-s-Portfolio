'use strict';

// Different ways of selecting elements in the html script
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');


// Starting conditions of the game
score0El.textContent = 0;
score1El.textContent = 0;
// Hidding the dice at the start of the game
diceEl.classList.add('hidden');

let currentScore = 0;
let activePlayer = 0;
// Total scores that are being stored for both players
let scores = [0, 0];
let playing = true;

const switchPlayer = function() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
    // Switch to the next player
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}

btnRoll.addEventListener('click', function() {
  if(playing) {
  // Creating a random number from 1 - 6 which will be displayed on a dice
  const dice = Math.trunc(Math.random() * 6) + 1;

  // Display the dice
  diceEl.classList.remove('hidden');
  // Display the corsponding dice image for the random number being rolled
  diceEl.src = `dice-${dice}.png`;

  // Check for a rolled 1. If true, switch to next player
  if(dice !== 1) {
    // add dice to the current score
    // currentScore = currentScore +dice
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
  } else {
    switchPlayer();
  }
  }
});

btnHold.addEventListener('click', function() {
  if(playing) {
  // Add current score to active player's score
  scores[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
  // Check if player's score is >=100
  if(scores[activePlayer] >= 100) {
    // Finish game
    playing = false;
    diceEl.classList.add('hidden');
    document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');

  } else {
    // Switch to the next player
    switchPlayer();
  }
}
});

// Resetting the Game
btnNew.addEventListener('click', function() {
  document.getElementById(`score--0`).textContent = 0;
  document.getElementById(`score--1`).textContent = 0;
  scores = [0, 0];
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = currentScore;
  playing = true;
  diceEl.classList.add('hidden');
  document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
  document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
});