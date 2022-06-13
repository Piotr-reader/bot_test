import data from "./data";
const { arrQuestion } = data;

class CreateElement {
  constructor(tag, selector = null, text = null) {
    this.tag = tag;
    this.selector = selector;
    this.text = text;
  }
  createElem(putTo) {
    this.putTo = putTo;
    let newEl = document.createElement(this.tag);

    if (this.selector !== null) {
      newEl.classList.add(this.selector);
    }
    if (this.text !== null) {
      newEl.innerHTML = this.text;
    }
    document.querySelector(`.${this.putTo}`).appendChild(newEl);
  }
}
class CreateImg {
  constructor(tag, selector = null, src) {
    this.tag = tag;
    this.selector = selector;
    this.src = src;
  }
  createImg(putTo) {
    this.putTo = putTo;
    let newEl = document.createElement(this.tag);

    if (this.selector !== null) {
      newEl.classList.add(this.selector);
    }
    newEl.setAttribute("src", this.src);
    newEl.setAttribute("alt", "picture");
    document.querySelector(`.${this.putTo}`).appendChild(newEl);
  }
}
class CreateBtn {
  constructor(tag, selector = null, type, text) {
    this.tag = tag;
    this.selector = selector;
    this.type = type;
    this.text = text;
  }
  createBtn(putTo) {
    this.putTo = putTo;
    let newEl = document.createElement(this.tag);
    newEl.classList.add("form__button");
    if (this.selector !== null) {
      newEl.classList.add(this.selector);
    }
    newEl.setAttribute("type", this.type);
    newEl.innerHTML = this.text;
    document.querySelector(`.${this.putTo}`).appendChild(newEl);
  }
}
const createLi = [];
for (let i = 1; i <= Object.keys(arrQuestion).length; i++) {
  createLi.push(`<li><span class="checked_answer">&#10004</span><a class="navbar_text" href="#section_${i}">Вопрос ${i}</a></li>`);
}

export default { createLi, CreateElement, CreateImg, CreateBtn };
