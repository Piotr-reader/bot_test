import data from "./data";
const { arrQuestion, arrPlaceholder, hintBoard, arrCorrectAnswer } = data;
import logo from "../images/farba_logo_social.jpg";
import img_video_1_mob from "../images/img_video_1_mob.png";

let newLi = [];
const descriptionH2 = "Несколько рекомендаций по&nbsp;прохождению квеста!";
const arrDescriptionLi = [
  `Не&nbsp;бросайтесь проходить квест сразу&nbsp;&mdash; для начала
хотя&nbsp;бы минимально ознакомьтесь с&nbsp;экспозицией.`,
  `Отвечать на&nbsp;задания можно в&nbsp;любом удобном для вас порядке.`,
  `Если совсем не&nbsp;удаётся решить какое-то задание, то&nbsp;смело
переходите к&nbsp;следующему. Пока будете решать следующее задание, можете натолкнуться
на&nbsp;ответ
к&nbsp;предыдущему <span>&#128521;</span>`,
  `Чтобы пройти квест, обращайте внимание на&nbsp;работы всех авторов.`,
  `Если вы&nbsp;правильно ответите на&nbsp;все вопросы квеста,
    то&nbsp;получите приятный бонус от&nbsp;FARBA.`,
];
for (let i = 0; i < arrDescriptionLi.length; i++) {
  newLi.push(`<li class="description__text-item">${arrDescriptionLi[i]}</li>`);
}
const sectionDescription = `<section class="description">
<img class="description__image" src="${logo}">
<h2 class="description__title">${descriptionH2}</h2>
<ul class="description__text">${newLi.join("").toString()}
</ul>
</section>
<div class="questions"></div>`;

const arrWrongAnswer = [
  `К&nbsp;сожалению, это неправильный ответ. Попробуйте еще раз!
Помните, что можно воспользоваться видеоподсказками или нажать на&nbsp;кнопку &laquo;Узнать
ответ&raquo;.`,
];
let newQuestion = [];
for (let i = 0; i < Object.keys(arrQuestion).length; i++) {
  newQuestion.push(`<section class="puzzle number_${[i + 1]}" id="section_${i + 1}">
    <h2 class="puzzle__number number_${[i + 1]}">${i + 1}.</h2>
    <p class="puzzle__text_${[i + 1]}">${arrQuestion[i + 1]}</p>
    <form class="form">
        <label class="form__label" for="number_${[i + 1]}">Ваш ответ:</label>
        <input class="form__field" type="number" min="1800" max="2022" id="number_${[i + 1]}" name="number_${[i + 1]}"
            placeholder="${arrPlaceholder[i + 1]}" autocomplete="off"">
        <div class="form__button-container">
            <button class="form__button form__button_type_submit number_${[i + 1]}" type="button">Ответить</button>
            <button class="form__button form__button_type_hint number_${[i + 1]}" type="button">Узнать ответ</button>
        </div>
    </form>
    <div class="wrong-answer-board number_${[i + 1]}">
        <p class="wrong-answer-board__text">${arrWrongAnswer}</p>
    </div>
    <div class="correct-answer-board number_${[i + 1]}">
        <p class="correct-answer-board__text number_${[i + 1]}"></p>
    </div>
    <div class="hint-board number_${[i + 1]}">
        <p class="hint-board__text">${hintBoard[i + 1]}</p>
        <p class="hint-board__text"><span class="hint-board__span-accent">Правильный
                ответ:</span>${arrCorrectAnswer[i + 1][0]}.</p>
    </div>
    </section>`);
}

class CreateHelpSection {
  constructor(putTo) {
    this.putTo = putTo;
  }
  createHelp() {
    let newEl = document.createElement("picture");
    newEl.classList.add("puzzle__help");
    newEl.innerHTML = `
      <p class="puzzle__video-description">Подсказка к вопросу ${this.putTo}</p>
      <img class="img_video" src="${img_video_1_mob}" alt="video">
      <iframe class="puzzle__video" width="720" height="405"
          frameborder="0" allowfullscreen></iframe>`;
    document.querySelector(`#section_${this.putTo}`).appendChild(newEl);
  }
}
class CreateImgQuestionSection {
  constructor(putTo) {
    this.putTo = putTo;
  }
  createImgQuaestionSection() {
    let newEl = document.createElement("img");
    newEl.classList.add("puzzle__image");
    newEl.src = `${img_video_1_mob}`;
    newEl.setAttribute("alt", "question img");
    document.querySelector(`.puzzle__text_${this.putTo}`).insertAdjacentElement("afterend", newEl);
  }
}

export default { sectionDescription, newQuestion, CreateHelpSection, CreateImgQuestionSection };
