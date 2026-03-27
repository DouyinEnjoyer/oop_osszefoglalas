import { ViewA } from "./views/ViewA.js";
import { ViewB } from "./views/ViewB.js";

const content = document.getElementById("content");
const btnA = document.getElementById("btnA");
const btnB = document.getElementById("btnB");

function setActive(button) {
  const buttons = document.querySelectorAll(".navbar button");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active");
  }

  button.classList.add("active");
}

function showA() {
  setActive(btnA);
  content.innerText = "";
  new ViewA(content);
}

function showB() {
  setActive(btnB);
  content.innerText = "";
  new ViewB(content);
}

btnA.addEventListener("click", showA);
btnB.addEventListener("click", showB);

// alapértelmezett
showA();