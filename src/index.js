console.log("Hello, world!");

import data from "./data.json";
import mifuncion, { HELLO } from "./modules/modulo.js";

const userlist = document.querySelector("#user");
const button = document.querySelector("#add");

const nameInput = document.querySelector("#name");
const ageInput = document.querySelector("#age");

function mostarUser(){
    data.users.forEach((user) => {
    console.log(user.name);
    userlist?.insertAdjacentHTML("beforeend", `<li>${user.name } tiene ${user.age} años</li>`);
});
}
mostarUser();
button.addEventListener("click", () => {
  userlist.innerHTML = "";
  data.users.push({ name: nameInput.value, age: ageInput.value });
  
  mostarUser();

  nameInput.value = "";
  ageInput.value = "";
});