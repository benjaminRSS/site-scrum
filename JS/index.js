
import { initBtns, changeState } from "./functions/quiz.js";
import {changeState,  updateActiveStep} from "./functions/cours.js";
export const stateContainer = document.querySelector("#stateContainer");

//if (stateContainer.getAttribute("reloading") === "true"){
	
//	initBtns();
//	stateContainer.setAttribute("reloading", "false");
	
//}

initBtns(document.querySelectorAll(".answer"));

let startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {

	changeState(document.querySelector("h1"), document.getElementById("stateContainer"), "question1");

})

//====== Cours ======

//récup le boutton
const nextButton = document.getElementById("#next");
const title = document.querySelector("h1");
let state = 1;
const contentContainer = document.getElementById("cours");
//listener du boutton
document.addEventListener("click", function(event) {
	if (event.target && event.target.id === "next") {
		state++;
		changeState(title, contentContainer, state);
		updateActiveStep();
	}
});
