import data from "./data";
const { arrCorrectAnswer, arrCorrectAnswersText, wrongAnswersText } = data;

let correctAnswersValue = [];
let correctAnswersId = [];

const toggleHintBoard = (btnTypeHint, hintBoard) => {
  [...btnTypeHint].forEach((btn) =>
    btn.addEventListener("click", (e) => {
      [...hintBoard].forEach((board) => {
        if (board.classList.contains(e.target.classList[2])) {
          board.classList.toggle("visible");
        }
      });
    })
  );
};
const valueInput = (btnTypeSubmit, inputValue, correctAnswersScore) => {
  [...btnTypeSubmit].forEach((btn) =>
    btn.addEventListener("click", (e) => {
      [...inputValue].forEach((input, index) => {
        if (input.id === e.target.classList[2]) {
          const dataAnswer = arrCorrectAnswer[index + 1];
          const inputAnswer = input.value.trim().toLowerCase();
          if (dataAnswer.includes(inputAnswer)) {
            input.setAttribute("disabled", "disabled");
            correctAnswersValue.push(input.value);
            correctAnswersId.push(input.id);
            correctAnswersId = [...new Set(correctAnswersId)];
            correctAnswersScore.innerHTML = correctAnswersId.length.toString();
            document.querySelector(`.wrong-answer-board.${input.id}`).style.display = "none";
            document.querySelector(`.correct-answer-board.${input.id}`).style.display = "block";
            document.querySelector(`.correct-answer-board__text.${input.id}`).innerHTML = `${arrCorrectAnswersText[correctAnswersId.length - 1]}`;
          } else {
            document.querySelector(`.wrong-answer-board.${input.id}`).style.display = "block";
            document.querySelector(`.wrong-answer-board__text.${input.id}`).innerHTML = wrongAnswersText;
          }
        }
      });
    })
  );
};
// reset btn
const reset = (resetBtn, correctAnswersScore) => {
  resetBtn.addEventListener("click", () => {
    correctAnswersValue = [];
    correctAnswersId = [];
    correctAnswersScore.innerHTML = "0";
    document.querySelectorAll(".correct-answer-board").forEach((e) => (e.style.display = "none"));
  });
};
const gift = (giftBtn, correctAnswersScore, arrQuestion) => {
  giftBtn.addEventListener("click", () => {
    if (correctAnswersScore.innerHTML === Object.keys(arrQuestion).length.toString()) {
      document.querySelector(".popup_description").innerHTML = arrCorrectAnswersText[arrCorrectAnswersText.length - 1];
    } else {
      document.querySelector(".popup_description").innerHTML = wrongAnswersText;
    }
  });
};
export default { toggleHintBoard, valueInput, reset, gift };
