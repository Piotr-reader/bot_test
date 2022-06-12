"use strict";
import "./styles/normalize.css";
import "./styles/style.scss";
import headerContent from "./components/header";
const { createLi, CreateElement, CreateImg, CreateBtn } = headerContent;
import footerCreate from "./components/footer";
import main from "./components/main";
const { sectionDescription, newQuestion, CreateHelpSection, CreateImgQuestionSection } = main;
import popupCreate from "./components/popup";
import logoFarba from "./images/farba_logo_social.jpg";

const wrapper = document.createElement("div");
wrapper.classList.add("wrapper");
document.body.prepend(wrapper);

const arrayElement = ["header", "main", "footer", "popup", "canvas"];
const innerElement = ["", sectionDescription, footerCreate, popupCreate];
for (let i = 0; i < arrayElement.length; i++) {
  let newEl = arrayElement[i];
  newEl = document.createElement("div");
  wrapper.appendChild(newEl);
  if (arrayElement[i] !== "canvas") {
    newEl.classList.add(arrayElement[i]);
    newEl.innerHTML = innerElement[i];
  } else {
    newEl.classList.add("fireworks-canvas");
    newEl.setAttribute("id", "fireworks-canvas");
  }
}
const createHeader = [
  new CreateElement("div", "logo").createElem("header"),
  new CreateElement("h1", "header_logo", "farba").createElem("logo"),
  new CreateImg("img", "header_logo_img", logoFarba).createImg("logo"),
  new CreateElement("div", "score").createElem("header"),
  new CreateElement("div", null, `Всего вопросов: <span class="total_questions"></span>`).createElem("score"),
  new CreateElement("div", null, `Вы ответили на: <span class="correct_answers">0</span>`).createElem("score"),
  new CreateElement("div", "header_btn").createElem("header"),
  new CreateBtn("button", "btn__popup_reset", "button", "Сбросить").createBtn("header_btn"),
  new CreateBtn("button", "btn_gift", "button", "Приз").createBtn("header_btn"),
  new CreateElement("div", "header_burger").createElem("header"),
  new CreateElement("span").createElem("header_burger"),
  new CreateElement("nav", "navbar_container").createElem("header"),
  new CreateElement("div", "navbar").createElem("navbar_container"),
  new CreateElement("ul", "navbar_width").createElem("navbar"),
];
createHeader.forEach((newEl) => createHeader[newEl]);
document.querySelector(".navbar_width").innerHTML = createLi.join("").toString();
document.querySelector(".questions").innerHTML = newQuestion;

// Создать Подсказку
// const createHelp = new CreateHelpSection("1").createHelp();
// const createHelp2 = new CreateHelpSection("3").createHelp();

// Создать Картинку к вопросу
// const createImgQuestion = new CreateImgQuestionSection("2").createImgQuaestionSection();
