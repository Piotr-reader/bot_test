import questionNumber from "./data";
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

const arrQuestion = [
  `Для разминки, как нам кажется, несложное задание.<br>ОН&nbsp;&mdash; это и&nbsp;серия космических кораблей США, и&nbsp;&laquo;хорошо
сложенный красивый мужчина&raquo;, и&nbsp;кипрский футбольный клуб из&nbsp;города Лимасол.
ОН&nbsp;фигурирует в&nbsp;название многих работ в&nbsp;экспозиции. Ваша задача проста, НАПИШИТЕ,
пожалуйста, В&nbsp;КАКОМ ГОДУ была создана самая поздняя работа из&nbsp;экспозиции, в&nbsp;названии
которой&nbsp;ОН фигурирует?`,
];
const arrWrongAnswer = [
  `К&nbsp;сожалению, это неправильный ответ. Попробуйте еще раз!
Помните, что можно воспользоваться видеоподсказками или нажать на&nbsp;кнопку &laquo;Узнать
ответ&raquo;.`,
];
const arrCorrectAnswer = [`2021`];
const hintBoard = [
  `Серия космических кораблей США, &laquo;хорошо сложенный красивый
мужчина&raquo;, кипрский футбольный клуб из&nbsp;города Лимасол&nbsp;&mdash; Аполлон.
В&nbsp;экспозиции есть несколько работ, в&nbsp;названии которых фигурирует &laquo;Аполлон&raquo;.
Самую позднюю из&nbsp;них создал Владимир Бескровный в&nbsp;2021&nbsp;году.`,
];
let newQuestion = [];

for (let i = 0; i < questionNumber.length; i++) {
  newQuestion.push(`<section class="puzzle ${questionNumber[i]}" id="section_${i + 1}">
    <h2 class="puzzle__number ${questionNumber[i]}">${i + 1}.</h2>
    <p class="puzzle__text ${questionNumber[i]}">${arrQuestion[i]}</p>
    <form class="form">
        <label class="form__label" for="${questionNumber[i]}">Ваш ответ:</label>
        <input class="form__field" type="number" min="1800" max="2022" id="${questionNumber[i]}" name="${questionNumber[i]}"
            placeholder="Например: 1984" autocomplete="off" data-answer="${arrCorrectAnswer[i]}">
        <div class="form__button-container">
            <button class="form__button form__button_type_submit ${questionNumber[i]}" type="button">Ответить</button>
            <button class="form__button form__button_type_hint ${questionNumber[i]}" type="button">Узнать ответ</button>
        </div>
    </form>
    <div class="wrong-answer-board ${questionNumber[i]}">
        <p class="wrong-answer-board__text">${arrWrongAnswer}</p>
    </div>
    <div class="correct-answer-board ${questionNumber[i]}">
        <p class="correct-answer-board__text ${questionNumber[i]}"></p>
    </div>
    <div class="hint-board ${questionNumber[i]}">
        <p class="hint-board__text">${hintBoard[i]}</p>
        <p class="hint-board__text"><span class="hint-board__span-accent">Правильный
                ответ:</span>${arrCorrectAnswer[i]}.</p>
    </div>
    <div class="main_help">

    </div>
    </section>`);
}

class CreateHelpSection {
  constructor(putTo) {
    this.putTo = putTo;
  }
  createHelp() {
    let newEl = document.createElement("picture");
    newEl.classList.add("picture");
    newEl.innerHTML = ` <p class="puzzle__video-description">Подсказка</p>
    <img class="img_video" src="${img_video_1_mob}" alt="video">
    <iframe class="puzzle__video" width="720" height="405"
        frameborder="0" allowfullscreen></iframe>`;
    document.querySelector(`#section_${this.putTo}`).appendChild(newEl);
  }
}
export default { sectionDescription, newQuestion, CreateHelpSection };