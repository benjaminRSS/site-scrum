
let buttons = document.querySelectorAll("button");

buttons.forEach(button => {

	//J'ai pas le choix que de faire une fonction simple => j'ai besoin de la retrouver pour l'enlever
	function btnListenerConf(){

		//Faire vérifier si la réponse est bonne => pouvoir déterminer le style de la mauvaise réponse

		let nextBtn = document.createElement("button");

		nextBtn.textContent = "Suivant ->";
		nextBtn.style = "color: var(--secondary_blue);";

		button.parentElement.appendChild(nextBtn);

		button.removeEventListener("click", btnListenerConf()); //Après avoir cliqué sur le boutton on fait en sorte qu'il ne soit plus cliquable.

	}

	button.addEventListener("click", btnListenerConf());

});