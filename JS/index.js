
import { initBtns, changeState } from "./functions/quiz.js";

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