
import { initBtns } from "./functions/quiz.js";

export const stateContainer = document.querySelector("#stateContainer");

//if (stateContainer.getAttribute("reloading") === "true"){
	
//	initBtns();
//	stateContainer.setAttribute("reloading", "false");
	
//}

initBtns(document.querySelectorAll(".answer"));