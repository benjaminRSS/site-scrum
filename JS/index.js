import { btnListenerConf } from "./fonction.js";

let buttons = document.querySelectorAll("button");

buttons.forEach(button => {

	button.addEventListener("click", btnListenerConf());

});

