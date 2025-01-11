
//Il faut référencer l'élément html qui sert de titre + celui du conteneur du cours, enfin il suffit de mettre le nom de l'état qui va le remplacer.

export function changeState(title, contentContainer, state){

	if (title instanceof HTMLElement && contentContainer instanceof HTMLElement){

		switch(state){


			//====== Etat des cours ======
		
				case chapitre1:
		
					title.textContent = "Chapitre 1: Lancement du Projet: Préparation et Vision";
					contentContainer.innerHTML = `
				
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam sit vitae quibusdam repellendus, eius, doloremque obcaecati tempora adipisci alias, dicta similique corporis nesciunt. Voluptatibus cumque aliquam soluta ducimus est tempora.</p>
						
						<img src="" alt="">
						
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, enim. Voluptate, temporibus sequi quam vero distinctio veritatis aspernatur voluptas ab error laborum, ipsam quod nam unde nostrum accusantium cum aut.</p>

						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, enim. Voluptate, temporibus sequi quam vero distinctio veritatis aspernatur voluptas ab error laborum, ipsam quod nam unde nostrum accusantium cum aut.</p>
				
				
					`;
		
					break;
		
				case chapitre2:

					title.textContent = "Chapitre 2: Planification: Organisation et Structuration";
					contentContainer.innerHTML = `
				
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam sit vitae quibusdam repellendus, eius, doloremque obcaecati tempora adipisci alias, dicta similique corporis nesciunt. Voluptatibus cumque aliquam soluta ducimus est tempora.</p>
						
						<img src="" alt="">
						
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, enim. Voluptate, temporibus sequi quam vero distinctio veritatis aspernatur voluptas ab error laborum, ipsam quod nam unde nostrum accusantium cum aut.</p>

						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, enim. Voluptate, temporibus sequi quam vero distinctio veritatis aspernatur voluptas ab error laborum, ipsam quod nam unde nostrum accusantium cum aut.</p>
				
				
					`;
		
					break;
		
				case chapitre3:

					title.textContent = "Chapitre 3: Exécution: Sprint et Développement Itératif";
					contentContainer.innerHTML = `
				
						<div>
						
							<img src="" alt="">

							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam sit vitae quibusdam repellendus, eius, doloremque obcaecati tempora adipisci alias, dicta similique corporis nesciunt. Voluptatibus cumque aliquam soluta ducimus est tempora.</p>
						
						</div>
												
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, enim. Voluptate, temporibus sequi quam vero distinctio veritatis aspernatur voluptas ab error laborum, ipsam quod nam unde nostrum accusantium cum aut.</p>

						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, enim. Voluptate, temporibus sequi quam vero distinctio veritatis aspernatur voluptas ab error laborum, ipsam quod nam unde nostrum accusantium cum aut.</p>
				
				
					`;
		
					break;
		
				case chapitre4:

					title.textContent = "Chapitre 4: Revue: Contrôle de Qualité et Feedback";
					contentContainer.innerHTML = `
				
						<img src="" alt="">
						
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, enim. Voluptate, temporibus sequi quam vero distinctio veritatis aspernatur voluptas ab error laborum, ipsam quod nam unde nostrum accusantium cum aut.</p>

						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, enim. Voluptate, temporibus sequi quam vero distinctio veritatis aspernatur voluptas ab error laborum, ipsam quod nam unde nostrum accusantium cum aut.</p>
				
				
					`;
		
					break;
		
				case chapitre5:

					title.textContent = "Chapitre 5: Rétrospective: Amélioration Continue";
					contentContainer.innerHTML = `
				
						<img src="" alt="">
						
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, enim. Voluptate, temporibus sequi quam vero distinctio veritatis aspernatur voluptas ab error laborum, ipsam quod nam unde nostrum accusantium cum aut.</p>

						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, enim. Voluptate, temporibus sequi quam vero distinctio veritatis aspernatur voluptas ab error laborum, ipsam quod nam unde nostrum accusantium cum aut.</p>
				
				
					`;
		
					break;
		
				case chapitre6:

					title.textContent = "Chapitre 6: Livraison: Validation et Mise en Production";
					contentContainer.innerHTML = `
				
						<img src="" alt="">
						
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, enim. Voluptate, temporibus sequi quam vero distinctio veritatis aspernatur voluptas ab error laborum, ipsam quod nam unde nostrum accusantium cum aut.</p>

						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, enim. Voluptate, temporibus sequi quam vero distinctio veritatis aspernatur voluptas ab error laborum, ipsam quod nam unde nostrum accusantium cum aut.</p>
				
				
					`;
		
					break;
		
		
			//====== Etats du Quiz ======
		
				case question1:
		
					title.textContent = "Quelle est la première étape de la méthode SCRUM ?";
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
		 
				case question2:
		
					title.textContent = "Qui veille à ce que la méthode SCRUM soit respectée pendant le projet?";
					contentContainer.innerHTML = `
				
						<img src="" alt="">
						
						<div>
						
							<ol>
							
								<li>
								
									<button>Le Product Owner</button>
								
								</li>
								<li>
								
									<button>Le Commanditaire</button>
								
								</li>
								<li>
								
									<button>Le Tuteur de stage</button>
								
								</li>
								<li>
								
									<button>Le SCRUM Master</button>
								
								</li>
							
							</ol>
						
						</div>				
				
					`;

					break;
		 
				case question3:
		
					title.textContent = "Chapitre 3: Exécution";
					contentContainer.innerHTML = `
				
						<img src="" alt="">
						
						<div>
						
							<ol>
							
								<li>
								
									<button>Quel est le but principal des daily stand-ups ?</button>
								
								</li>
								<li>
								
									<button>Que représente un burndown chart dans un projet SCRUM ?</button>
								
								</li>
							
							</ol>
						
						</div>				
				
					`;

					break;
		 
				case question4:

					title.textContent = "Chapitre 4: Revue";
					contentContainer.innerHTML = `
				
						<img src="" alt="">
						
						<div>
						
							<ol>
							
								<li>
								
									<button>Quel est l’objectif principal de la revue de sprint ?</button>
								
								</li>
								<li>
								
									<button>Qui participe à la revue de sprint pour fournir des retours sur le produit développé ?</button>
								
								</li>
							
							</ol>
						
						</div>				
				
					`;
		
					break;
		 
				case question5:

					title.textContent = "Chapitre 5: Rétrospective";
					contentContainer.innerHTML = `
				
						<img src="" alt="">
						
						<div>
						
							<ol>
							
								<li>
								
									<button>Quel est le rôle du SCRUM Master lors de la rétrospective ?</button>
								
								</li>
								<li>
								
									<button>Quelles sont les trois questions principales abordées pendant une rétrospective ?</button>
								
								</li>
							
							</ol>
						
						</div>				
				
					`;
		
					break;
		 
				case question6:
		
					title.textContent = "Chapitre 6: Livraison";
					contentContainer.innerHTML = `
				
						<img src="" alt="">
						
						<div>
						
							<ol>
							
								<li>
								
									<button>Qu’est-ce qu’un critère d’acceptation en SCRUM ?</button>
								
								</li>
								<li>
								
									<button>Quels sont les éléments à vérifier avant de mettre un produit en production ?</button>
								
								</li>
							
							</ol>
						
						</div>				
				
					`;

					break;

				case questionGlobal:
		
					title.textContent = "Chapitre 6: Livraison";
					contentContainer.innerHTML = `
				
						<img src="" alt="">
						
						<div>
						
							<ol>
							
								<li>
								
									<button>Quelle est l’étape suivante après la revue dans un cycle SCRUM classique ?</button>
								
								</li>
								<li>
								
									<button>Pourquoi le backlog produit est-il décrit comme un outil "dynamique" ?</button>
								
								</li>
								<li>
								
									<button>Quelle est la différence entre une user story et une tâche technique ?</button>
								
								</li>
							
							</ol>
						
						</div>				
				
					`;

					break;
		 
		}

	}else{

		return "Le titre et le conteneur des états doivent être du type HTMLElement..";
	}

}

//J'ai pas le choix que de faire une fonction simple => j'ai besoin de la retrouver pour l'enlever
export function btnListenerConf(){

	//Faire vérifier si la réponse est bonne => pouvoir déterminer le style de la mauvaise réponse

	let nextBtn = document.createElement("button");

	nextBtn.textContent = "Suivant ->";
	nextBtn.style = "color: var(--secondary_blue);";

	button.parentElement.appendChild(nextBtn);

	button.removeEventListener("click", btnListenerConf()); //Après avoir cliqué sur le boutton on fait en sorte qu'il ne soit plus cliquable.



	//Vérifier -> l'attribut "response" => tu ajoute la classe "wrong" si c'est faux + on va faire en sorte que le CSS de "Wrong" est prioritaire sur le CSS de actif de base

	const response = button.getAttribute("response");


	if (response === "false"){

		//On ajoute la classe "Wrong"
		button.classList.add("wrong");

	}
	
	//On révèle la vrai réponse
	if (response === "true"){

		button.classList.add("correct");

	}
}