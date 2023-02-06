"use strict";

// Selecting elements
const player0Element = document.querySelector(".player--0");
const player1Element = document.querySelector(".player--1");
const score0Element = document.querySelector("#score--0");
const score1Element = document.querySelector("#score--1");
const current0Element = document.querySelector("#current--0");
const current1Element = document.querySelector("#current--1");
const diceElement = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

score0Element.textContent = 0;
score1Element.textContent = 0;

// Hiding the dice in the middle of the screen initially
diceElement.classList.add("hidden");

const scores = [0, 0];

// Setting the current score
let currentScore = 0;

// Figuring out who the active player is
let activePlayer = 0;

// Ending the game
let playing = true;

const switchPlayer = function () {
  // Switching the score back to 0
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  // Switch to next player using a terniary operator. This says that when activePlayer is equal to 0, it should switch to 1, else it should be equal to 0
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;

  // Using the toggle method to see if the class is active, and if it's not, change it to active. The .toggle method removes the class if it is present and adds it if it is not present. This changes the color white from player 0 to player 1.
  player0Element.classList.toggle("player--active");
  player1Element.classList.toggle("player--active");
};

// Rolling dice functionality
btnRoll.addEventListener("click", function () {
  // No need to set playing === true, because playing by default is a boolean and it's equal to true. Which is why we don't need to set an else to equal false.
  if (playing) {
    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display the dice
    diceElement.classList.remove("hidden");
    // Using a template literal (string) with the const variable "dice" to grab the random number in the "dice" variable and use it in correlation with the image title to display the random dice number (image).
    diceElement.src = `dice-${dice}.png`;

    // 3. Check for a rolled one, and if true, switch to next player
    if (dice !== 1) {
      // Add dice to the current score
      currentScore += dice;

      // We are selecting the current player dynamically through the variable "activePlayer used by a let because it will change. Then we are settting the textContent in the HTML document to equal the variable currentScore"
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore; // This is the same thing as writing "scores[1] = scores[1] + currentScore" or in this instance to be exact, "scores[activePlayer] = scores[activePlayer] + currentScore"
    document.querySelector(`#score--${activePlayer}`).textContent =
      scores[activePlayer];
    // 2. Check if player's score is >= 100
    if (scores[activePlayer] >= 20) {
      // This ends the game
      playing = false;
      diceElement.classList.add("hidden");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      // Switch to the next player
      switchPlayer();
    }
  }
});
