
export function changeStateCours(title, contentContainer, state) {
	if (title && contentContainer) {
		switch (state) {
			case 1:
				title.textContent =
					"Chapitre 1 : Lancement du Projet - Préparation et Vision";
				contentContainer.innerHTML = ` 
			<div class="bloc-reverse">
			<img src="../images/ch1-img3.png" alt="Schéma vision produit" width=350px>
			<p>La première étape de la méthode SCRUM consiste à lancer le projet en clarifiant sa vision et en posant les bases de l’organisation. Cela commence par la définition d’une <b>vision claire du produit</b>, qui décrit simplement les objectifs à atteindre et la valeur apportée aux utilisateurs finaux. Cette vision constitue une sorte de boussole pour guider toutes les décisions du projet. Le <b>Product Owner</b>, acteur central de cette phase, est responsable de recueillir les besoins des parties prenantes et de synthétiser une vision partagée par l’équipe.</p>
			</div>
			
			<p>Ensuite, l’équipe SCRUM est constituée. Trois rôles clés y coexistent : le <b>Product Owner</b>, le <b>SCRUM Master</b> et l’équipe de développement. Le SCRUM Master veille à ce que la méthodologie SCRUM soit respectée comme une sorte de coach qui cherche aussi l’équipe à améliorer son workflow. L’équipe de développement, composée de professionnels multidisciplinaires, se charge de créer les livrables du projet. Une collaboration claire entre ces acteurs est essentielle pour poser des bases solides.</p><br>
			
			<p>Enfin, un <b>backlog produit initial</b> est élaboré. Ce document, structurant pour le projet, liste et priorise les fonctionnalités sous forme de <b>user stories</b>. Ces user stories traduisent les besoins des utilisateurs en éléments concrets que l’équipe devra développer. En tant qu’outil dynamique, le backlog produit est appelé à évoluer tout au long du projet. Cette étape initiale est fondamentale pour garantir une vision partagée et aligner les efforts de l’équipe.</p><br>
			<footer>
                    <a href="#top"><button id="next">Suivant -></button></a>
                </footer>
			`;
				break;

			case 2:

				title.textContent =
					"Chapitre 2 : Planification - Organisation et Structuration";
				contentContainer.innerHTML = `
			<p>La phase de planification est déterminante pour organiser et structurer le travail du projet SCRUM. Elle commence par la <b>priorisation des éléments du backlog produit</b>, effectuée par le Product Owner. Les user stories sont classées selon leur importance pour l’utilisateur final et leur faisabilité technique. Cette priorité aide l’équipe à se concentrer sur ce qui apporte le plus de valeur.</p>
			
			<div class="bloc">
			<img src="../images/ch2-img1.png" alt="Illustration organisation" width=350px>
			<p>Une fois les priorités définies, l’équipe décide de la <b>durée des sprints</b>, généralement comprise entre une et quatre semaines. Cette durée fixe un rythme pour le projet et définit un cadre temporel clair pour atteindre des objectifs intermédiaires. Un <b>calendrier SCRUM</b> est établi pour planifier les différentes itérations. Ce calendrier inclut toutes les réunions importantes, comme les planifications de sprint, les daily stand-ups, et les rétrospectives.</p><br>
			</div>
			
			<div class="bloc-reverse">
			<p>La <b>réunion de planification du sprint</b> marque le début de chaque cycle. Lors de cette session, l’équipe identifie les user stories à réaliser dans le sprint et décompose ces histoires en tâches concrètes. L’objectif est que chaque membre comprenne les priorités et les attentes. Cette étape renforce la responsabilité collective et assure que tout le monde travaille vers un but commun.</p><br>
			<img src="../images/ch2-img2.png" alt="Illustration structuration" width=350px>
			</div>
			<footer>
                    <a href="#top"><button id="next">Suivant -></button></a>
                </footer>`;
				break;

			case 3:
				title.textContent =
					"Chapitre 3 : Exécution - Sprint et Développement Itératif";
				contentContainer.innerHTML = `
			<p>La phase d’exécution correspond au cœur du travail opérationnel dans SCRUM. Durant chaque sprint, l’équipe se concentre sur la <b>réalisation des tâches</b> définies lors de la planification. Chaque membre de l’équipe travaille de manière autonome tout en restant coordonné avec les autres grâce à des outils comme Kanban, Jira ou Git.</p>
			
			<img src="../images/ch3-img1.png" alt="Schéma sprint" width=650px>
			
			<p>Les <b>daily stand-ups</b>, réunions courtes tenues chaque jour, permettent de maintenir une synchronisation constante. Pendant ces meetings, chaque membre partage ce qu’il a accompli, ce qu’il prévoit de faire, et mentionne les obstacles rencontrés. Ces points de synchronisation permettent d’identifier rapidement les problèmes et de les résoudre.</p><br> <p>Le <b>backlog sprint</b>, qui contient les tâches planifiées pour le cycle, est mis à jour régulièrement pour refléter l’avancement. Les <b>burndown charts</b>, graphiques illustrant le travail restant par rapport au temps disponible, aident l’équipe à suivre sa progression et à anticiper les délais potentiels. Cette phase est caractérisée par une grande discipline et une collaboration constante. </p><br>
			
			<p>C’est cette répétition continue de cycles ponctués de réunions servant autant à dresser un bilan du cycle terminé qu’à préparer le suivant qui permet de faire progresser le projet, on parle alors de <b>développement itératif</b>.</p>
			<footer>
                    <a href="#top"><button id="next">Suivant -></button></a>
                </footer>`;

				break;

			case 4:
				title.textContent =
					"Chapitre 4 : Revue - Contrôle de Qualité et Feedback";
				contentContainer.innerHTML = `<div class="bloc">
			<img src="../images/ch4-img2.jpg" alt="Illustration feedback" width=450px>
			<p>La revue de sprint constitue une étape essentielle pour valider les résultats et récolter du feedback. Elle se tient à la fin de chaque sprint et permet de présenter les livrables aux parties prenantes. Ces livrables doivent répondre aux <b>critères d’acceptation</b> préalablement définis. Cela garantit que les fonctionnalités livrées sont conformes aux attentes et prêtes à l’emploi.</p>
			</div>
			
			<div class="bloc-reverse">
			<p>Pendant la session, l’équipe démontre les fonctionnalités réalisées. Les parties prenantes ont alors l’opportunité de poser des questions, de tester le produit, et de fournir des commentaires. Ces <b>retours</b> d’information sont cruciaux pour ajuster le backlog produit et orienter les prochaines itérations. La revue est un espace d’échange transparent qui favorise l’amélioration continue.</p>
			<img src="../images/ch3-img2.png" alt="Schéma tests" width=450px>
			</div>

			<p>La validation rapide des livrables et l’ajustement immédiat des priorités assurent une progression constante et alignée avec les besoins du client.</p>
			<footer>
                    <a href="#top"><button id="next">Suivant -></button></a>
                </footer>`;
				break;

			case 5:
				title.textContent =
					"Chapitre 5 : Rétrospective - Amélioration Continue";
				contentContainer.innerHTML =
					`<img class="bloc" src="../images/ch5-img1.png" alt="Illustration retrospective" width=600px>
			<p>La rétrospective de sprint est une réunion interne consacrée à l’analyse des performances de l’équipe. Elle se concentre sur les <b>succès</b>, les <b>axes d’amélioration</b>, et les <b>actions à entreprendre</b> pour optimiser les processus. Tous les membres participent activement pour exprimer leur ressenti et proposer des idées d’amélioration.</p>
			
			
			
			<p>Cette réunion aborde trois questions principales : qu’est-ce qui a bien fonctionné ? Qu’est-ce qui pourrait être amélioré ? Quelles actions concrètes devons-nous mettre en place pour le prochain sprint ? Le SCRUM Master joue un rôle clé en facilitant cette discussion et en s’assurant que les points soulevés se traduisent par des améliorations tangibles.</p><br>
			
			<p>La rétrospective renforce la dynamique d’équipe et favorise une approche proactive des problèmes. En itérant sur les méthodes de travail, l’équipe devient plus efficace et mieux préparée à relever les défis futurs.</p>
			<footer>
                    <a href="#top"><button id="next">Suivant -></button></a>
                </footer>`;
				break;

			case 6:
				title.textContent =
					"Chapitre 6 : Livraison - Validation et Mise en Production";
				contentContainer.innerHTML = `<img class="bloc" src="../images/ch6-img1.jpg" alt="Illustration réussite" width=600px>
			
			<p>La livraison est l’étape finale d’un projet SCRUM. Une fois les sprints complétés et les fonctionnalités validées, l’équipe procède à la <b>mise en production</b>. Avant cela, il est essentiel de s’assurer que tous les <b>critères d’acceptation</b> ont été respectés. Cela inclut la validation technique, les tests de qualité, et des vérifications complémentaires sur la performance et la sécurité.</p>
			
			<p>Le produit final est ensuite <b>livré aux utilisateurs finaux</b>, avec parfois une documentation détaillée ou des sessions de formation pour accompagner son adoption. Cette livraison marque l’aboutissement du travail collectif et la concrétisation des objectifs initiaux. Si besoin, une phase de support post-livraison peut être organisée pour traiter les potentiels retours des utilisateurs.</p><br>
			
			<p>En SCRUM, la livraison est une conséquence logique d’un processus itératif bien mené. Elle valorise la transparence, l’efficacité, et la collaboration, garantissant que le produit final répond aux attentes des parties prenantes.</p>
			<footer>
                    <a href="../HTML/quizz/Quizz_accueil.html"><button id="next">Suivant -></button></a>
                </footer>`;
				break;
		}
	}
}






// Mise à jour du fil d'ariane
export function updateActiveStep() {
	const activeStep = document.querySelector(".actif");
	if (activeStep) {
		activeStep.classList.remove("actif");

		// pour faire en sorte que le trait du fil d'ariane ne soit pas selectionner
		const nextChap = activeStep.nextElementSibling;
		if (nextChap) nextChap.classList.add("actif");
	}
}










