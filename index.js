function bookmarkToggleButton() {
  console.log("You clicked me!!!!!");
  event.preventDefault();
  if (bookmarkActive) {
    bookmarkButton.style.color = "var(--black)";
    console.log("I am here");
  } else {
    bookmarkButton.style.color = "var(--white)";
  }
  bookmarkActive = !bookmarkActive;
}

function ShowHideAnswerToggleButton() {
  if (answerDisplay.hasAttribute("hidden")) {
    console.log("Showing answer!!!!");
    answerButton.textContent = "Hide Answer";
    answerDisplay.removeAttribute("hidden");
    buttonCurrentText = "Hide Answer";
  } else {
    console.log("Hiding answer!!!!");
    answerDisplay.setAttribute("hidden", "");
    answerButton.textContent = "Show Answer";
    buttonCurrentText = "Show Answer";
  }
}

/////Task 1

const bookmarkButton = document.querySelector('[data-js="bookmarkButton"]');

let bookmarkActive = true;
bookmarkButton.addEventListener("click", () => {
  bookmarkToggleButton(bookmarkButton, bookmarkActive);
});

/////Task 2

const answerButton = document.querySelector('[data-js="answerButton"]');
const answerDisplay = document.querySelector('[data-js="answerDisplay"]');

let buttonCurrentText = answerButton.textContent;

console.log("buttonCurrentText = ", buttonCurrentText);

answerButton.addEventListener("click", () => {
  ShowHideAnswerToggleButton(answerButton, answerDisplay, buttonCurrentText);
});
