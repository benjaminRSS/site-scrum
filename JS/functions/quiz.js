
import { stateContainer } from "../index.js";


export function initBtns(buttons){
	
	buttons.forEach(button => {

		button.addEventListener("click", btnListenerConf);
	
	});

}

//Il faut référencer l'élément html qui sert de titre + celui du conteneur du cours, enfin il suffit de mettre le nom de l'état qui va le remplacer.
export function changeState(title, contentContainer, state){

	if (title instanceof HTMLElement && contentContainer instanceof HTMLElement){

		switch(state){


			//====== Etat des cours ======
		
				//case "chapitre1":
		
				//	title.textContent = "Chapitre 1: Lancement du Projet: Préparation et Vision";
				//	contentContainer.innerHTML = `
				
				//		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam sit vitae quibusdam repellendus, eius, doloremque obcaecati tempora adipisci alias, dicta similique corporis nesciunt. Voluptatibus cumque aliquam soluta ducimus est tempora.</p>
						
				//		<img src="" alt="">
						
				//		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, enim. Voluptate, temporibus sequi quam vero distinctio veritatis aspernatur voluptas ab error laborum, ipsam quod nam unde nostrum accusantium cum aut.</p>

				//		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, enim. Voluptate, temporibus sequi quam vero distinctio veritatis aspernatur voluptas ab error laborum, ipsam quod nam unde nostrum accusantium cum aut.</p>
				
				
				//	`;
		
				//	break;
		
				//case "chapitre2":

				//	title.textContent = "Chapitre 2: Planification: Organisation et Structuration";
				//	contentContainer.innerHTML = `
				
				//		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam sit vitae quibusdam repellendus, eius, doloremque obcaecati tempora adipisci alias, dicta similique corporis nesciunt. Voluptatibus cumque aliquam soluta ducimus est tempora.</p>
						
				//		<img src="" alt="">
						
				//		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, enim. Voluptate, temporibus sequi quam vero distinctio veritatis aspernatur voluptas ab error laborum, ipsam quod nam unde nostrum accusantium cum aut.</p>

				//		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, enim. Voluptate, temporibus sequi quam vero distinctio veritatis aspernatur voluptas ab error laborum, ipsam quod nam unde nostrum accusantium cum aut.</p>
				
				
				//	`;
		
				//	break;
		
				//case "chapitre3":

				//	title.textContent = "Chapitre 3: Exécution: Sprint et Développement Itératif";
				//	contentContainer.innerHTML = `
				
				//		<div>
						
				//			<img src="" alt="">

				//			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam sit vitae quibusdam repellendus, eius, doloremque obcaecati tempora adipisci alias, dicta similique corporis nesciunt. Voluptatibus cumque aliquam soluta ducimus est tempora.</p>
						
				//		</div>
												
				//		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, enim. Voluptate, temporibus sequi quam vero distinctio veritatis aspernatur voluptas ab error laborum, ipsam quod nam unde nostrum accusantium cum aut.</p>

				//		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, enim. Voluptate, temporibus sequi quam vero distinctio veritatis aspernatur voluptas ab error laborum, ipsam quod nam unde nostrum accusantium cum aut.</p>
				
				
				//	`;
		
				//	break;
		
				//case "chapitre4":

				//	title.textContent = "Chapitre 4: Revue: Contrôle de Qualité et Feedback";
				//	contentContainer.innerHTML = `
				
				//		<img src="" alt="">
						
				//		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, enim. Voluptate, temporibus sequi quam vero distinctio veritatis aspernatur voluptas ab error laborum, ipsam quod nam unde nostrum accusantium cum aut.</p>

				//		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, enim. Voluptate, temporibus sequi quam vero distinctio veritatis aspernatur voluptas ab error laborum, ipsam quod nam unde nostrum accusantium cum aut.</p>
				
				
				//	`;
		
				//	break;
		
				//case "chapitre5":

				//	title.textContent = "Chapitre 5: Rétrospective: Amélioration Continue";
				//	contentContainer.innerHTML = `
				
				//		<img src="" alt="">
						
				//		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, enim. Voluptate, temporibus sequi quam vero distinctio veritatis aspernatur voluptas ab error laborum, ipsam quod nam unde nostrum accusantium cum aut.</p>

				//		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, enim. Voluptate, temporibus sequi quam vero distinctio veritatis aspernatur voluptas ab error laborum, ipsam quod nam unde nostrum accusantium cum aut.</p>
				
				
				//	`;
		
				//	break;
		
				//case "chapitre6":

				//	title.textContent = "Chapitre 6: Livraison: Validation et Mise en Production";
				//	contentContainer.innerHTML = `
				
				//		<img src="" alt="">
						
				//		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, enim. Voluptate, temporibus sequi quam vero distinctio veritatis aspernatur voluptas ab error laborum, ipsam quod nam unde nostrum accusantium cum aut.</p>

				//		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, enim. Voluptate, temporibus sequi quam vero distinctio veritatis aspernatur voluptas ab error laborum, ipsam quod nam unde nostrum accusantium cum aut.</p>
				
				
				//	`;
		
				//	break;
		
		
			//====== Etats du Quiz ======
		
				case "question1":
		
					title.textContent = "1. Quelle est la première étape de la méthode SCRUM ?";
					contentContainer.innerHTML = `
				
						<img src="" alt="">
						
						<div>
						
							<ol>
							
								<li>
								
									<button>Mise en production du produit</button>
								
								</li>
								<li>
								
									<button>Constitution de l’équipe SCRUM</button>
								
								</li>
								<li>
								
									<button>Clarification de la vision du produit</button>
								
								</li>
								<li>
								
									<button>Réunion de planification du sprint</button>
								
								</li>
							
							</ol>
						
						</div>				
				
					`;

					break;
		 
				case "question2":
					
					title.textContent = "2. Qui veille à ce que la méthode SCRUM soit respectée pendant le projet?";
					contentContainer.innerHTML = `
				
						<li>

							<button class="answer" response = "false">Réponse A : <br>Le Product Owner</button>
							
						</li>
						<li>

							<button class="answer" response = "false">Réponse B : <br>Le Commanditaire</button>
							
						</li>
						<li>

							<button class="answer" response = "false">Réponse C : <br>Le Tuteur de stage</button>
							
						</li>
						<li>

							<button class="answer" response = "true">Réponse D : <br>Le SCRUM Master</button>
							
						</li>			
				
					`;

					initBtns(document.querySelectorAll(".answer"));

					break;
		 
				case "question3":
		
					title.textContent = "3. Quelle est la durée moyenne d’un sprint en méthode SCRUM ?";
					contentContainer.innerHTML = `
				
						<li>

							<button class="answer" response="true">Réponse A : <br>1 à 4 semaines</button>
							
						</li>
						<li>
							
							<button class="answer" response="false">Réponse B : <br>2 à 6 jours</button>
							
						</li>
						<li>
	
                			<button class="answer" response="false">Réponse C : <br>3 à 7 semaines</button>
							
						</li>
						<li>

               				 <button class="answer" response="false">Réponse D : <br>2 à 3 mois</button>
							
						</li>			
				
					`;

					initBtns(document.querySelectorAll(".answer"));

					break;
		 
				case "question4":

					title.textContent = "4. Par quel événement est marqué le début de chaque cycle de sprint ?";
					contentContainer.innerHTML = `
				
						<li>

							<button class="answer" response="true">Réponse A : <br>Une réunion de planification de sprint</button>
							
						</li>
						<li>

                			<button class="answer" response="false">Réponse B : <br>La nomination d’un nouveau SCRUM Master</button>
							
						</li>
						<li>

                			<button class="answer" response="false">Réponse C : <br>L’analyse des feedback utilisateurs</button>
							
						</li>
						<li>

                			<button class="answer" response="false">Réponse D : <br>Il n’y a pas d’évènement spécifique</button>
							
						</li>			
				
					`;

					initBtns(document.querySelectorAll(".answer"));
		
					break;
		 
				case "question5":

					title.textContent = "5. En période de sprint, l’équipe SCRUM organise une réunion quotidienne ?";
					contentContainer.innerHTML = `
				
						<li>

							<button class="answer" response="true">Réponse A : <br>VRAI</button>
							
						</li>
						<li>

                			<button class="answer" response="false">Réponse B : <br>FAUX</button>
							
						</li>		
				
					`;

					initBtns(document.querySelectorAll(".answer"));
		
					break;
		 
				case "question6":
		
					title.textContent = "6. A quoi sert un burndown chart dans un projet SCRUM ?";
					contentContainer.innerHTML = `
				
						<li>

							<button class="answer" response="false">Réponse A : <br>A permettre à l’équipe de se reposer en période de sprint</button>
							
						</li>
						<li>

                			<button class="answer" response="true">Réponse B : <br>Aider l’équipe à suivre sa progression</button>
							
						</li>		
				
					`;

					initBtns(document.querySelectorAll(".answer"));

					break;

				case "question7":
		
					title.textContent = "7. Quel est l’objectif principal de la revue de sprint ?";
					contentContainer.innerHTML = `
				
						<li>

							<button class="answer" response="false">Réponse A : <br>Assigner les tâches restantes entre les membres de l’équipe</button>
							
						</li>
						<li>

                			<button class="answer" response="false">Réponse B : <br>Écouter l’avis du SCRUM Master</button>
							
						</li>
						<li>

                			<button class="answer" response="false">Réponse C : <br>Conclure le projet par la validation du produit final</button>
							
						</li>
						<li>

                			<button class="answer" response="true">Réponse D : <br>Valider les résultats et récolter du feedback</button>
							
						</li>			
				
					`;

					initBtns(document.querySelectorAll(".answer"));

					break;
		 
				case "question8":
		
					title.textContent = "8. Que présente l’équipe pendant la revue de sprint ?";
					contentContainer.innerHTML = `
				
						<li>

							<button class="answer" data-correct="false">Réponse A : <br>Le calendrier SCRUM</button>
							
						</li>
						<li>

                			<button class="answer" data-correct="true">Réponse B : <br>Les fonctionnalités réalisés</button>
							
						</li>
						<li>

                			<button class="answer" data-correct="false">Réponse C : <br>Les interrogations du commanditaire</button>
							
						</li>
						<li>

                			<button class="answer" data-correct="false">Réponse D : <br>L’avis de la presse sur le produit</button>
							
						</li>			
				
					`;

					initBtns(document.querySelectorAll(".answer"));

					break;
		 
				case "question9":
		
					title.textContent = "9. Quel est le rôle du SCRUM Master lors de la rétrospective ?";
					contentContainer.innerHTML = `
				
						<li>

							<button class="answer" data-correct="true">Réponse A : <br>Que la réunion aboutisse sur des améliorations</button>
							
						</li>
						<li>

                			<button class="answer" data-correct="false">Réponse B : <br>De nommer un nouveau SCRUM Master</button>
							
						</li>
						<li>

                			<button class="answer" data-correct="false">Réponse C : <br>Il n’y participe pas</button>
							
						</li>
						<li>

                			<button class="answer" data-correct="false">Réponse D : <br>Il y assiste mais ne doit pas intervenir</button>
							
						</li>			
				
					`;

					initBtns(document.querySelectorAll(".answer"));

					break;
		 
				case "question10":
		
					title.textContent = "10. La Rétrospective aide l’équipe à être plus efficace ?";
					contentContainer.innerHTML = `
				
						<li>

							<button class="answer" data-correct="true">Réponse A : <br>VRAI</button>
							
						</li>
						<li>

                			<button class="answer" data-correct="false">Réponse B : <br>FAUX</button>
							
						</li>
				
					`;

					initBtns(document.querySelectorAll(".answer"));

					break;
		 
				case "question11":
		
					title.textContent = "11. Après la validation et la mise en production du produit, le projet est définitivement clôt ?";
					contentContainer.innerHTML = `
				
						<li>

							<button class="answer" data-correct="false">Réponse A : <br>VRAI</button>
							
						</li>
						<li>

                			<button class="answer" data-correct="true">Réponse B : <br>FAUX</button>
							
						</li>		
				
					`;

					initBtns(document.querySelectorAll(".answer"));

					break;
		 
				case "question12":
		
					title.textContent = "12. Qui procède à la mise en production du produit ?";
					contentContainer.innerHTML = `
				
						<li>

							<button class="answer" data-correct="false">Réponse A : <br>Le commanditaire</button>
							
						</li>
						<li>

                			<button class="answer" data-correct="false">Réponse B : <br>Le Product Owner</button>
							
						</li>
						<li>

                			<button class="answer" data-correct="false">Réponse C : <br>Le SCRUM Master</button>
							
						</li>
						<li>

                			<button class="answer" data-correct="true">Réponse D : <br>L’équipe projet</button>
							
						</li>			
				
					`;

					initBtns(document.querySelectorAll(".answer"));

					break;
		 
				case "question13":
		
					title.textContent = "13. Quelle est l’étape suivante après la revue dans un cycle SCRUM classique ?";
					contentContainer.innerHTML = `
				
						<li>

							<button class="answer" data-correct="true">Réponse A : <br>La rétrospective</button>
							
						</li>
						<li>

                			<button class="answer" data-correct="false">Réponse B : <br>La validation du produit</button>
							
						</li>
						<li>

                			<button class="answer" data-correct="false">Réponse C : <br>L’élaboration du calendrier SCRUM</button>
							
						</li>
						<li>

                			<button class="answer" data-correct="false">Réponse D : <br>La constitution de l’équipe SCRUM</button>
							
						</li>			
				
					`;

					initBtns(document.querySelectorAll(".answer"));

					break;
		 
				case "question14":
		
					title.textContent = "14. Des feedbacks sur le produit ne peuvent être obtenus qu’après livraison et mise en production du produit ?";
					contentContainer.innerHTML = `
				
						<li>

							<button class="answer" data-correct="false">Réponse A : <br>Vrai</button>
							
						</li>
						<li>

                			<button class="answer" data-correct="true">Réponse B : <br>Faux</button>
							
						</li>	
				
					`;

					initBtns(document.querySelectorAll(".answer"));

					break;
		 
				case "question15":
		
					title.textContent = "15. Quel est l’acteur principal de la première phase du projet ?";
					contentContainer.innerHTML = `
				
						<li>

							<button class="answer" data-correct="false">Réponse A : <br>Le commanditaire</button>
							
						</li>
						<li>

                			<button class="answer" data-correct="true">Réponse B : <br>Le Product Owner</button>
							
						</li>
						<li>

                			<button class="answer" data-correct="false">Réponse C : <br>Le SCRUM Master</button>
							
						</li>
						<li>

                			<button class="answer" data-correct="false">Réponse D : <br>L’équipe projet</button>
							
						</li>			
				
					`;

					initBtns(document.querySelectorAll(".answer"));

					break;
		 
		}

	}else{

		return "Le titre et le conteneur des états doivent être du type HTMLElement..";
	}

}

let nbQuiz = 2;

//====== Config de listener de bouttons ======

function remListeners(buttons){

	//Une fois la réponse donné de l'utilisateur -> on enlève tout les listeners => on enlève les interactions avec les boutons
	buttons.forEach(buttonToRem => {
		
		buttonToRem.removeEventListener("click", btnListenerConf); //Après avoir cliqué sur le boutton on fait en sorte qu'il ne soit plus cliquable.
	
	})

}

//J'ai pas le choix que de faire une fonction simple => j'ai besoin de la retrouver pour l'enlever
function btnListenerConf(event){

	const buttons = document.querySelectorAll(".answer");

	//Une fois le click -> on interdit les interactions pour valider la réponse visuellement
	remListeners(buttons);
	
	//On pointe le boutton actuel via la target du listener plutôt qu'avec un forEach pour éviter les récursivités dû aux autres forEach
	const button = event.target;

	//Faire vérifier si la réponse est bonne => pouvoir déterminer le style de la mauvaise réponse

	let nextBtn = document.createElement("button");
	let divBtn = document.createElement("div");

	divBtn.id = "divBtn";

	nextBtn.textContent = "Suivant ->";
	nextBtn.onclick = () => {
		
		changeState(document.querySelector("h1"), document.querySelector("ol"), `question${nbQuiz}`);
		nbQuiz += 1;
		divBtn.remove();
	};

	divBtn.appendChild(nextBtn);
	stateContainer.appendChild(divBtn);

	//Vérifier -> l'attribut "response" => tu ajoute la classe "wrong" si c'est faux + on va faire en sorte que le CSS de "Wrong" est prioritaire sur le CSS de actif de base
	const response = button.getAttribute("response");

	//On vérif si c'est la bonne réponse ou pas	
	if (response === "false"){

		button.classList.add("wrong");
		buttons.forEach(buttonToReveal => {			

			if (buttonToReveal.getAttribute("response") === "true"){

				buttonToReveal.classList.add("correct");

			}

		})
		

	}else if (response === "true"){

		button.classList.add("correct");

	}

}
