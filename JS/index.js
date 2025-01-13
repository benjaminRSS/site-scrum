
import { initBtns, changeStateQuiz } from "./functions/quiz.js";
import {changeStateCours,  updateActiveStep} from "./functions/cours.js";

//====== Init des boutons du quiz ======

initBtns(document.querySelectorAll(".answer"));
const currentPage = window.location.pathname;

if (currentPage.includes('quiz')) {

	let startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {

	changeStateQuiz(document.querySelector("h1"), document.querySelector("main"), "question1");

})
}



//====== Cours ======


else if (currentPage.includes('cours')) {
const title = document.querySelector("h1");
let state = 1;
const contentContainer = document.getElementById("cours");
//listener du boutton
document.addEventListener("click", function(event) {
	if (event.target && event.target.id === "next") {
		state++;
		changeStateCours(title, contentContainer, state);
		updateActiveStep();
	}
});

}
