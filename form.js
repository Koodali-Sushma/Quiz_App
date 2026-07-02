// prettier-ignore
const textarea_question = document.querySelector('[data-js="questionText_input"]');
// prettier-ignore
const textarea_answer = document.querySelector('[data-js="answerText_input"]');
// prettier-ignore
const charactersLeftQuestion = document.querySelector('[data-js="remainingCharacters_question"]');
// prettier-ignore
const charactersLeftAnswer = document.querySelector('[data-js="remainingCharacters_answer"]');

const form = document.querySelector('[data-js="form"]');
const cardContainer = document.querySelector('[data-js="card-list"]');

const submitButton = document.querySelector('[data-js="add-new_CardButton"]');

const maxLength_Question = textarea_question.getAttribute("maxlength");
const maxLength_Answer = textarea_answer.getAttribute("maxlength");

textarea_question.addEventListener("input", (event) => {
  console.log("input length= ", event.target.value.length);
  charactersLeftQuestion.textContent =
    maxLength_Question - event.target.value.length;
});

textarea_answer.addEventListener("input", (event) => {
  charactersLeftAnswer.textContent =
    maxLength_Answer - event.target.value.length;
});
let cardCount = 4;

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formElement = event.target;
  const formData = new FormData(formElement);
  const data = Object.fromEntries(formData);

  console.log(data);
  //prettier-ignore
  console.log(`Data received:    Question: ${data.questionTextarea}      Answer:${data.answerTextarea}     Tag:${data.tags}`);

  const newCard = document.createElement("li");
  newCard.classList.add("card-list__item");
  cardCount += 1;
  newCard.innerHTML = `<article class="card">
  <h1 class="cardCount">${cardCount}</h1>
            <h2 class="card__question">
              ${data.questionTextarea}
            </h2>
            <button
              class="card__button-answer"
              type="button"
              data-js="answerButton"
            >
              Show Answer
            </button>
            <p class="card__answer" data-js="answerDisplay" hidden>
              ${data.answerTextarea}
            </p>
            <ul class="card__tag-list">
              <li class="card__tag-list-item">#Internet</li>
              <li class="card__tag-list-item">#WWW</li>
              <li class="card__tag-list-item">#${data.tags}</li>
            </ul>
            <div class="card__button-bookmark">
              <button
                class="bookmark"
                aria-label="bookmark"
                type="button"
                data-js="bookmarkButton"
              >
                <svg
                  class="bookmark__icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewbox="0 0 24 24"
                >
                  <path
                    d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"
                  />
                </svg>
              </button>
            </div>
          </article>`;
  cardContainer.append(newCard);
  formElement.reset();
  formElement.elements.questionTextarea.focus();
});
//prettier-ignore
bookmarkButton = newCard.querySelector(
  '[data-js="bookmarkButton"]'
);
bookmarkActive = true;
newCard.addEventListener("click", () => {
  bookmarkToggleButton(newCardbookmarkButton, bookmarkActive);
});
