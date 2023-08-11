// &=========> HTMl ELEMENTS
const firstNameInput = document.getElementById("firstNameInput");
const lastNameInput = document.getElementById("lastNameInput");
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");
const registerBtn = document.getElementById("registerBtn");
const haveAccountBtn = document.getElementById("haveAccount");

// ^=========> App Variables
import { firstNameRegex, lastNameRegex, emailRegex, passwordRegex } from "./main.js"
// ?=========> functions
import { signUp, validate } from "./utils/functions.js"
// *=========> Events

registerBtn.addEventListener("click", signUp);
firstNameInput.addEventListener("input", function () {
  validate(firstNameRegex, firstNameInput)
})
lastNameInput.addEventListener("input", function () {
  validate(lastNameRegex, lastNameInput)
})
emailInput.addEventListener("input", function () {
  validate(emailRegex, emailInput)
})
passwordInput.addEventListener("input", function () {
  validate(passwordRegex, passwordInput)
})
