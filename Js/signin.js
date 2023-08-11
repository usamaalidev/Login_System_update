// &=========> HTMl ELEMENTS
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");
const signInBtn = document.querySelector(".btn-sign-in");
const signUpBtn = document.querySelector(".btn-new-account");

// ?=========> App Variables
import { emailRegex, passwordRegex, users } from "./main.js";
import { validate } from "./utils/functions.js";

signInBtn.addEventListener("click", function () {
  if (
    validate(emailRegex, emailInput) & validate(passwordRegex, passwordInput)
  ) {
    const loggedUser = users.find(
      (user) =>
        user.email == emailInput.value && user.password == passwordInput.value
    );

    localStorage.setItem("loggedUser", JSON.stringify(loggedUser))
    if (loggedUser) {
      location.assign("./home.html");
    }
  }
});

signUpBtn.addEventListener("click", function () {
  location.assign("./sign-up.html");
});
