'use strict';

//select elemnts
const score0El = document.querySelector('#score--0');
//speed fast
const player1El = document.querySelector('.player--1');
const player0El = document.querySelector('.player--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const btnRoll = document.querySelector('.btn--roll');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const scores = [0, 0];

let currentScore = 0;
let activePlayer = 0;

score0El.textContent = 0;
score1El.textContent = 0;

diceEl.classList.add('hidden');

btnRoll.addEventListener('click', function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  diceEl.classList.remove('hidden');
  diceEl.src = `img/dice-${dice}.png`;
  console.log(dice);
  if (dice !== 1) {
    currentScore += dice;
    // current0El.textContent = currentScore;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active')
    player1El.classList.toggle('player--active')
  }
});
