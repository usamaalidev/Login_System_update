import { logOut } from "./utils/functions.js";

const welcomeMessage = document.querySelector(".welcome");
const logOutBtn = document.querySelector(".btn-logout");
const loggedUser = JSON.parse(localStorage.getItem("loggedUser"))
if (!loggedUser) {
  location.assign("./index.html")
}
welcomeMessage.innerHTML = `Welcome ${loggedUser.firstName} ${loggedUser.lastName}`

logOutBtn.addEventListener("click", logOut)