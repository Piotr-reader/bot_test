"use strict";
import './styles/style.scss';
import headerContent from "./components/header";
const {headerCreate, createLi} = headerContent;
import footerCreate from "./components/footer";
import mainCreate from "./components/main";
import popupCreate from "./components/popup";

const headerPage = require('./components/header');
const mainPage = require('./components/main');
const footerPage = require('./components/footer');
const popupPage = require('./components/popup');
const wrapper = document.createElement("div");
wrapper.classList.add('wrapper');
document.body.prepend(wrapper);

const arrayElement = ["header", "main", "footer", "popup", "canvas"]
const innerElement = [headerCreate, mainCreate, footerCreate, popupCreate]
for (let i = 0; i < arrayElement.length; i++) {
    let newEl = arrayElement[i];
    newEl = document.createElement("div");
    wrapper.appendChild(newEl);
    if (arrayElement[i] !== "canvas") {
        newEl.classList.add(arrayElement[i]);
        newEl.innerHTML = innerElement[i];
    } else {
        newEl.classList.add('fireworks-canvas');
        newEl.setAttribute( "id", "fireworks-canvas" );
    }
}

document.querySelector('.navbar_width').innerHTML = createLi.join("").toString();



