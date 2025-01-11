
import { changeState } from "./fonction.js";

const answers = document.querySelectorAll('.answer');
const validateButton = document.querySelector('.next');
const nextButton = document.querySelector('.next-next');
const messageBox = document.querySelector('.message');

changeState(document.querySelector("h1"), document.getElementById("stateContainer"), "question2");

//console.log("Get ClassName");
//console.log(document.getElementsByClassName("answer"));

//console.log("QuerySelector");
//console.log(document.querySelectorAll(".answer"));

let selectedAnswer = null;

// ce block de code permet de changer la couleur de la réponse sélectionnée par l'utilisateur
answers.forEach((answer) => {
  answer.addEventListener('click', () => {
    // on enlève la classe 'selected' de tous les boutons
    answers.forEach((btn) => btn.classList.remove('selected'));
    
    // on ajoute la classe 'selected' au bouton sélectionné
    answer.classList.add('selected');
    selectedAnswer = answer;
    
    // on active le bouton de validation
    validateButton.disabled = false;
  });
});

// permet de valider la réponse de l'utilisateur
validateButton.addEventListener('click', () => {
  if (!selectedAnswer) return;

  // vérifie si la réponse est correcte
  const isCorrect = selectedAnswer.getAttribute('data-correct') === 'true';

  // ajoute les classes CSS pour indiquer si la réponse est correcte ou incorrecte
  if (isCorrect) {
    selectedAnswer.classList.add('correct');
    messageBox.style.display = 'none'; // cacher le message
  } else {
    selectedAnswer.classList.add('incorrect');

    // surline la bonne réponse
    answers.forEach((answer) => {
      if (answer.getAttribute('data-correct') === 'true') {
        answer.classList.add('correct');
        
        // montre la bonne réponse
        messageBox.textContent = `Mauvaise réponse ! La bonne réponse est : ${answer.textContent}`;
        messageBox.style.display = 'block';
      }
    });
  }

  // Désactive les boutons de réponse lorsqu'une réponse a été validée
  answers.forEach((answer) => answer.disabled = true);
  validateButton.disabled = true;

  // masque le bouton "Valider" et affiche le bouton "Suivant"
  validateButton.style.display = 'none';
  nextButton.style.display = 'inline-block';
});

// // permet de passer à la question suivante
// nextButton.addEventListener('click', () => {
//   // Réinitialise les boutons de réponse
//   answers.forEach((answer) => {
//     answer.classList.remove('selected', 'correct', 'incorrect');
//     answer.disabled = false;
//   });

//   // Hide the "Suivant" button and show "Valider"
//   validateButton.style.display = 'inline-block';
//   nextButton.style.display = 'none';

//   // Reset selection
//   selectedAnswer = null;
//   validateButton.disabled = true;

//   // Hide the message box
//   messageBox.style.display = 'none';
// });