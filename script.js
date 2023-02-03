"use strict";

// Selecting elements
const score0Element = document.querySelector("#score--0");
const score1Element = document.querySelector("#score--1");
const diceElement = document.querySelector(".dice");

score0Element.textContent = 0;
score1Element.textContent = 0;

// Hiding the dice in the middle of the screen initially
diceElement.classList.add("hidden");
