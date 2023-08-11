// ^=========> App Variables
export let users = JSON.parse(localStorage.getItem("users")) || [];
export const firstNameRegex = /^[A-Za-z]{3,}$/;
export const lastNameRegex = /^[A-Za-z]{3,}$/;
export const emailRegex = /^[a-z0-9]{3,}@gmail\.com$/;
export const passwordRegex = /^[A-Za-z0-9]{8,}$/;
