// prettier-ignore
const textarea_question = document.querySelector('[data-js="questionText_input"]');
// prettier-ignore
const textarea_answer = document.querySelector('[data-js="answerText_input"]');
// prettier-ignore
const charactersLeftQuestion = document.querySelector('[data-js="remainingCharacters_question"]');
// prettier-ignore
const charactersLeftAnswer = document.querySelector('[data-js="remainingCharacters_answer"]');

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
