const container = document.querySelector(".container");
const addQuestionCard = document.getElementById("add-question-card");
const cardButton = document.getElementById("save-btn");
const question = document.getElementById("question");
const answer = document.getElementById("answer");
const errorMessage = document.getElementById("error");
const addQuestion = document.getElementById("add-flashcard");
const closeBtn = document.getElementById("close-btn");
let editBool = false;
let editId = null;

document.getElementById('goBack').addEventListener('click', function() {
  window.location.href = '../html/interface.html'; // Navigate back to the main page
});

// Function to get flashcards from local storage
function getFlashcardsFromStorage() {
  const flashcardsJSON = localStorage.getItem('flashcards');
  try {
    return flashcardsJSON ? JSON.parse(flashcardsJSON) : [];
  } catch (error) {
    return [];
  }
}

// Function to save flashcards to local storage
function saveFlashcardsToStorage(flashcards) {
  localStorage.setItem('flashcards', JSON.stringify(flashcards));
}

// Function to load flashcards on startup
function loadFlashcards() {
  const flashcards = getFlashcardsFromStorage();
  flashcards.forEach((flashcard, index) => {
    createFlashcardElement(flashcard.question, flashcard.answer, index);
  });
}

// Function to create flashcard DOM elements
function createFlashcardElement(questionText, answerText, id) {
  var listCard = document.getElementsByClassName("card-list-container")[0];
  var div = document.createElement("div");
  div.classList.add("card");
  div.dataset.id = id;
  // Question
  div.innerHTML += `<p class="question-div">${questionText}</p>`;
  // Answer
  var displayAnswer = document.createElement("p");
  displayAnswer.classList.add("answer-div", "hide");
  displayAnswer.innerText = answerText;
  // Link to show/hide answer
  var link = document.createElement("a");
  link.setAttribute("href", "#");
  link.setAttribute("class", "show-hide-btn");
  link.innerHTML = "Show/Hide";
  link.addEventListener("click", () => {
    displayAnswer.classList.toggle("hide");
  });
  div.appendChild(link);
  div.appendChild(displayAnswer);
  addButtonsToFlashcard(div, id);
  listCard.appendChild(div);
}

// Add question when user clicks 'Add Flashcard' button
addQuestion.addEventListener("click", () => {
  editBool = false;
  container.classList.add("hide");
  question.value = "";
  answer.value = "";
  addQuestionCard.classList.remove("hide");
});

// Hide Create flashcard Card
closeBtn.addEventListener("click", () => {
  container.classList.remove("hide");
  addQuestionCard.classList.add("hide");
  if (editBool) {
    editBool = false;
  }
});

// Submit Question
cardButton.addEventListener("click", () => {
  const tempQuestion = question.value.trim();
  const tempAnswer = answer.value.trim();
  if (!tempQuestion || !tempAnswer) {
    errorMessage.classList.remove("hide");
  } else {
    errorMessage.classList.add("hide");
    container.classList.remove("hide");
    if (editBool) {
      // Update flashcard
      const flashcards = getFlashcardsFromStorage();
      flashcards[editId] = { question: tempQuestion, answer: tempAnswer };
      saveFlashcardsToStorage(flashcards);
      document.location.reload(); // Reload to refresh the list
    } else {
      // Add new flashcard
      const flashcards = getFlashcardsFromStorage();
      flashcards.push({ question: tempQuestion, answer: tempAnswer });
      saveFlashcardsToStorage(flashcards);
      createFlashcardElement(tempQuestion, tempAnswer, flashcards.length - 1);
    }
    question.value = "";
    answer.value = "";
    addQuestionCard.classList.add("hide");
  }
});

// Add edit and delete buttons to flashcard
function addButtonsToFlashcard(flashcardDiv, id) {
  let buttonsCon = document.createElement("div");
  buttonsCon.classList.add("buttons-con");
  
  // Edit button
  var editButton = document.createElement("button");
  editButton.setAttribute("class", "edit");
  editButton.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;
  editButton.addEventListener("click", () => {
    const flashcard = getFlashcardsFromStorage()[id];
    question.value = flashcard.question;
    answer.value = flashcard.answer;
    editBool = true;
    editId = id;
    addQuestionCard.classList.remove("hide");
    container.classList.add("hide");
  });
  buttonsCon.appendChild(editButton);

  // Delete Button
  var deleteButton = document.createElement("button");
  deleteButton.setAttribute("class", "delete");
  deleteButton.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
  deleteButton.addEventListener("click", () => {
    const flashcards = getFlashcardsFromStorage();
    flashcards.splice(id, 1); // Remove the flashcard from the array
    saveFlashcardsToStorage(flashcards); // Save the updated array to local storage
    flashcardDiv.remove(); // Remove the flashcard element from the DOM
  });
  buttonsCon.appendChild(deleteButton);

  flashcardDiv.appendChild(buttonsCon); // Append the container of buttons to the flashcard element
}

// Call loadFlashcards when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', loadFlashcards);