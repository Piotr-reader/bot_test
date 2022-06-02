import logo from '../images/farba_logo_social.jpg';
import questionNumber from "./data";

const headerCreate =
`<div class="logo">
    <h1 class="header_logo">farba</h1>
    <img class="header_logo_img" src="${logo}" alt="logo">
</div>
<div class="score">
    <div>Всего вопросов: <span class="total_questions"></span></div>
    <div>Вы ответили на: <span class="correct_answers">0</span></div>
</div>
<div class="header_btn">
    <button class="form__button btn__popup_reset" type="button">Сбросить</button>
    <button class="form__button btn_gift" type="button">Приз</button>
</div>
<div class="header_burger">
    <span></span>
</div>
<nav class="navbar_container">
    <div class="navbar">
      <ul class="navbar_width"></ul>
    </div>
</nav>`;

const createLi = [];
for (let i = 1; i <= questionNumber.length; i++) {
    createLi.push(`<li><span class="checked_answer">&#10004</span><a class="navbar_text" href="#section_${i}">Вопрос ${i}</a></li>`);
}

export default {headerCreate, createLi};