"use strict";

// Selecting elements
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

// Setting the current score
let currentScore = 0;

// Rolling dice functionality
btnRoll.addEventListener("click", function () {
  // 1. Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  // 2. Display the dice
  diceElement.classList.remove("hidden");
  // Using a template literal (string) with the const variable "dice" to grab the random number in the "dice" variable and use it in correlation with the image title to display the random dice number (image).
  diceElement.src = `dice-${dice}.png`;

  // 3. Check for a rolled one, and if true, switch to next player
  if (dice !== 1) {
    // Add dice to the current score
    currentScore = currentScore + dice;
    current0Element.textContent = currentScore; // Change later
  } else {
    // switch to next player
  }
});
