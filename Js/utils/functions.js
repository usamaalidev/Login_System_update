import { users, firstNameRegex, lastNameRegex, emailRegex, passwordRegex } from "../main.js"

export function signUp() {
  if (
    validate(firstNameRegex, firstNameInput) &
    validate(lastNameRegex, lastNameInput) &
    validate(emailRegex, emailInput) &
    validate(passwordRegex, passwordInput)
  ) {
    let user = {
      firstName: firstNameInput.value,
      lastName: lastNameInput.value,
      email: emailInput.value,
      password: passwordInput.value,
    };

    users.push(user);
    console.log(users);
    localStorage.setItem("users", JSON.stringify(users));
    location.assign("./index.html");
  }
}

export function validate(regex, element) {
  if (regex.test(element.value)) {
    element.classList.add("is-valid")
    element.classList.remove("is-invalid")
    element.parentElement.nextElementSibling.classList.add("invisible");
  } else {
    element.classList.add("is-invalid")
    element.classList.remove("is-valid")
    element.parentElement.nextElementSibling.classList.remove("invisible");
  }

  return regex.test(element.value);
}

export function logOut() {
  localStorage.removeItem("loggedUser");
  location.assign("./index.html")
}