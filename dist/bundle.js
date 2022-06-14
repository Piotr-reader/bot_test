/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"ul {\\n  list-style-type: none;\\n}\\n\\nbody {\\n  background-color: #fff;\\n  font-family: \\\"Neucha\\\", cursive;\\n  color: #2a2c2f;\\n  padding: 0 20px;\\n}\\n\\n.wrapper {\\n  max-width: 1280px;\\n  margin: 0 auto;\\n  box-sizing: border-box;\\n  box-shadow: 0px 4px 4px 0px rgba(34, 60, 80, 0.2);\\n}\\n\\n.header,\\n.main,\\n.footer {\\n  display: flex;\\n  align-items: center;\\n  background-color: #fff;\\n  box-sizing: border-box;\\n  padding: 0 10px;\\n}\\n\\n.header {\\n  justify-content: space-between;\\n  position: sticky;\\n  top: 0;\\n  border-bottom: 1px solid;\\n  box-shadow: 0px 4px 4px 0px rgba(34, 60, 80, 0.2);\\n}\\n\\n.header__title {\\n  text-align: center;\\n  line-height: 1.4;\\n}\\n\\n.logo {\\n  display: flex;\\n  cursor: pointer;\\n}\\n\\n.header_logo {\\n  width: 1px;\\n  height: 1px;\\n  color: #fff;\\n  font-size: 1px;\\n}\\n\\n.header_logo_img {\\n  max-width: 150px;\\n  object-position: center;\\n  object-fit: cover;\\n}\\n\\n.score {\\n  font-size: 1.4em;\\n  letter-spacing: 0.1em;\\n}\\n\\n.header_btn {\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.form__button {\\n  box-sizing: border-box;\\n  font-size: 1em;\\n  letter-spacing: 0.1em;\\n  text-transform: uppercase;\\n  margin: 5px 0;\\n  background-color: #fff;\\n  color: #2a2c2f;\\n  border: 3px #2a2c2f solid;\\n  border-radius: 4px;\\n  box-shadow: 0px 4px 4px 0px rgba(34, 60, 80, 0.2);\\n  cursor: pointer;\\n}\\n\\n.form__button:hover {\\n  transform: scale(1.1);\\n}\\n\\n.header_burger {\\n  display: block;\\n  position: relative;\\n  z-index: 3;\\n  width: 50px;\\n  height: 50px;\\n  margin-right: 50px;\\n  margin-left: 10px;\\n  transition: 0.3s ease-in;\\n}\\n\\n.header_burger::before,\\n.header_burger::after {\\n  content: \\\"\\\";\\n  height: 4px;\\n  background-color: #2a2c2f;\\n  position: absolute;\\n  width: 100%;\\n  left: 0;\\n}\\n\\n.header_burger::before {\\n  top: 0;\\n  transition: 0.3s;\\n}\\n\\n.header_burger::after {\\n  bottom: 0;\\n  transition: 0.3s;\\n}\\n\\n.header_burger span {\\n  height: 4px;\\n  background-color: #2a2c2f;\\n  position: absolute;\\n  width: 100%;\\n  left: 0;\\n  top: 23px;\\n  transition: 0.3s;\\n}\\n\\n.navbar_container {\\n  display: none;\\n}\\n\\n.main {\\n  flex-direction: column;\\n}\\n\\n.description__text {\\n  padding-left: 20px;\\n}\\n\\nimg {\\n  max-width: 100%;\\n}\\n\\n.questions {\\n  max-width: 100%;\\n}\\n\\n.puzzle__number {\\n  text-align: center;\\n}\\n\\n.form {\\n  max-width: 100%;\\n  margin: 0 0 30px;\\n  padding: 0;\\n}\\n\\n.form__label {\\n  display: block;\\n  font-size: 1em;\\n  font-weight: 700;\\n  margin: 20px 0 10px;\\n}\\n\\n.form__field {\\n  display: block;\\n  width: 100%;\\n  box-sizing: border-box;\\n  font-family: inherit;\\n  margin: 0 0 15px;\\n  padding: 2px 4px;\\n  color: black;\\n}\\n\\n.form__button-container {\\n  display: flex;\\n  justify-content: space-evenly;\\n  margin: 0 0 20px;\\n}\\n\\n.wrong-answer-board,\\n.correct-answer-board,\\n.hint-board {\\n  background-color: #fff;\\n  border-radius: 3px;\\n  padding: 4px 6px;\\n  box-sizing: border-box;\\n  display: none;\\n}\\n\\n.wrong-answer-board {\\n  box-shadow: 0 0 8px rgb(230, 0, 0);\\n}\\n\\n.correct-answer-board {\\n  box-shadow: 0 0 8px rgb(0, 230, 0);\\n}\\n\\n.hint-board {\\n  box-shadow: 0 0 8px rgb(230, 230, 0);\\n}\\n\\n.puzzle__help {\\n  text-align: center;\\n  justify-content: space-around;\\n  flex-wrap: wrap;\\n}\\n\\n.puzzle__video-description {\\n  text-transform: uppercase;\\n  margin: 15px 0 10px;\\n  font-weight: 700;\\n}\\n\\n.img_video,\\n.puzzle__image {\\n  max-height: 202px;\\n  margin: 0 auto;\\n  display: block;\\n}\\n\\n.img_video:hover {\\n  cursor: pointer;\\n  max-height: 202px;\\n}\\n\\n.puzzle__video {\\n  display: none;\\n  max-height: 202px;\\n}\\n\\n.footer {\\n  flex-direction: column;\\n}\\n\\n.footer__link {\\n  color: #2a2c2f;\\n  text-decoration: none;\\n  font-size: 1em;\\n  line-height: 1;\\n  display: flex;\\n}\\n\\n.footer__link {\\n  margin: 0 10px;\\n}\\n\\n.footer__link:hover {\\n  text-decoration: none;\\n  color: rgb(121, 121, 115);\\n}\\n\\n.footer__links-list {\\n  display: flex;\\n  justify-content: space-between;\\n  list-style-type: none;\\n  padding: 0;\\n  margin: 0px 0px 5px 0px;\\n}\\n\\n.footer__social-icon {\\n  width: 16px;\\n  height: 16px;\\n  margin-right: 5px;\\n  align-self: center;\\n}\\n\\n.popup {\\n  display: none;\\n}\\n\\n.visible {\\n  display: block;\\n}\\n\\n.reverse {\\n  transform: rotate(180deg);\\n  font-style: italic;\\n}\\n\\n@media (max-width: 768px) {\\n  .header_logo_img {\\n    max-width: 50px;\\n  }\\n\\n  .score {\\n    font-size: 0.6em;\\n  }\\n\\n  .form__button {\\n    font-size: 0.6em;\\n    border: 1px #2a2c2f solid;\\n  }\\n\\n  .header_burger {\\n    width: 30px;\\n    height: 23px;\\n    margin-right: 10px;\\n  }\\n\\n  .header_burger::before,\\n.header_burger::after {\\n    content: \\\"\\\";\\n    height: 1px;\\n  }\\n\\n  .header_burger span {\\n    height: 1px;\\n    top: 10px;\\n  }\\n\\n  .footer__heading {\\n    font-size: 0.8em;\\n  }\\n\\n  .footer__link {\\n    margin: 0 4px;\\n    font-size: 0.8em;\\n  }\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://telegram_bot/./src/styles/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/normalize.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/normalize.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\\n\\n/* Document\\n   ========================================================================== */\\n\\n/**\\n * 1. Correct the line height in all browsers.\\n * 2. Prevent adjustments of font size after orientation changes in iOS.\\n */\\n\\nhtml {\\n  line-height: 1.15; /* 1 */\\n  -webkit-text-size-adjust: 100%; /* 2 */\\n}\\n\\n/* Sections\\n   ========================================================================== */\\n\\n/**\\n * Remove the margin in all browsers.\\n */\\n\\nbody {\\n  margin: 0;\\n}\\n\\n/**\\n * Render the `main` element consistently in IE.\\n */\\n\\nmain {\\n  display: block;\\n}\\n\\n/**\\n * Correct the font size and margin on `h1` elements within `section` and\\n * `article` contexts in Chrome, Firefox, and Safari.\\n */\\n\\nh1 {\\n  font-size: 2em;\\n  margin: 0.67em 0;\\n}\\n\\n/* Grouping content\\n   ========================================================================== */\\n\\n/**\\n * 1. Add the correct box sizing in Firefox.\\n * 2. Show the overflow in Edge and IE.\\n */\\n\\nhr {\\n  box-sizing: content-box; /* 1 */\\n  height: 0; /* 1 */\\n  overflow: visible; /* 2 */\\n}\\n\\n/**\\n * 1. Correct the inheritance and scaling of font size in all browsers.\\n * 2. Correct the odd `em` font sizing in all browsers.\\n */\\n\\npre {\\n  font-family: monospace, monospace; /* 1 */\\n  font-size: 1em; /* 2 */\\n}\\n\\n/* Text-level semantics\\n   ========================================================================== */\\n\\n/**\\n * Remove the gray background on active links in IE 10.\\n */\\n\\na {\\n  background-color: transparent;\\n}\\n\\n/**\\n * 1. Remove the bottom border in Chrome 57-\\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\\n */\\n\\nabbr[title] {\\n  border-bottom: none; /* 1 */\\n  text-decoration: underline; /* 2 */\\n  text-decoration: underline dotted; /* 2 */\\n}\\n\\n/**\\n * Add the correct font weight in Chrome, Edge, and Safari.\\n */\\n\\nb,\\nstrong {\\n  font-weight: bolder;\\n}\\n\\n/**\\n * 1. Correct the inheritance and scaling of font size in all browsers.\\n * 2. Correct the odd `em` font sizing in all browsers.\\n */\\n\\ncode,\\nkbd,\\nsamp {\\n  font-family: monospace, monospace; /* 1 */\\n  font-size: 1em; /* 2 */\\n}\\n\\n/**\\n * Add the correct font size in all browsers.\\n */\\n\\nsmall {\\n  font-size: 80%;\\n}\\n\\n/**\\n * Prevent `sub` and `sup` elements from affecting the line height in\\n * all browsers.\\n */\\n\\nsub,\\nsup {\\n  font-size: 75%;\\n  line-height: 0;\\n  position: relative;\\n  vertical-align: baseline;\\n}\\n\\nsub {\\n  bottom: -0.25em;\\n}\\n\\nsup {\\n  top: -0.5em;\\n}\\n\\n/* Embedded content\\n   ========================================================================== */\\n\\n/**\\n * Remove the border on images inside links in IE 10.\\n */\\n\\nimg {\\n  border-style: none;\\n}\\n\\n/* Forms\\n   ========================================================================== */\\n\\n/**\\n * 1. Change the font styles in all browsers.\\n * 2. Remove the margin in Firefox and Safari.\\n */\\n\\nbutton,\\ninput,\\noptgroup,\\nselect,\\ntextarea {\\n  font-family: inherit; /* 1 */\\n  font-size: 100%; /* 1 */\\n  line-height: 1.15; /* 1 */\\n  margin: 0; /* 2 */\\n}\\n\\n/**\\n * Show the overflow in IE.\\n * 1. Show the overflow in Edge.\\n */\\n\\nbutton,\\ninput {\\n  /* 1 */\\n  overflow: visible;\\n}\\n\\n/**\\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\\n * 1. Remove the inheritance of text transform in Firefox.\\n */\\n\\nbutton,\\nselect {\\n  /* 1 */\\n  text-transform: none;\\n}\\n\\n/**\\n * Correct the inability to style clickable types in iOS and Safari.\\n */\\n\\nbutton,\\n[type=\\\"button\\\"],\\n[type=\\\"reset\\\"],\\n[type=\\\"submit\\\"] {\\n  -webkit-appearance: button;\\n}\\n\\n/**\\n * Remove the inner border and padding in Firefox.\\n */\\n\\nbutton::-moz-focus-inner,\\n[type=\\\"button\\\"]::-moz-focus-inner,\\n[type=\\\"reset\\\"]::-moz-focus-inner,\\n[type=\\\"submit\\\"]::-moz-focus-inner {\\n  border-style: none;\\n  padding: 0;\\n}\\n\\n/**\\n * Restore the focus styles unset by the previous rule.\\n */\\n\\nbutton:-moz-focusring,\\n[type=\\\"button\\\"]:-moz-focusring,\\n[type=\\\"reset\\\"]:-moz-focusring,\\n[type=\\\"submit\\\"]:-moz-focusring {\\n  outline: 1px dotted ButtonText;\\n}\\n\\n/**\\n * Correct the padding in Firefox.\\n */\\n\\nfieldset {\\n  padding: 0.35em 0.75em 0.625em;\\n}\\n\\n/**\\n * 1. Correct the text wrapping in Edge and IE.\\n * 2. Correct the color inheritance from `fieldset` elements in IE.\\n * 3. Remove the padding so developers are not caught out when they zero out\\n *    `fieldset` elements in all browsers.\\n */\\n\\nlegend {\\n  box-sizing: border-box; /* 1 */\\n  color: inherit; /* 2 */\\n  display: table; /* 1 */\\n  max-width: 100%; /* 1 */\\n  padding: 0; /* 3 */\\n  white-space: normal; /* 1 */\\n}\\n\\n/**\\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\\n */\\n\\nprogress {\\n  vertical-align: baseline;\\n}\\n\\n/**\\n * Remove the default vertical scrollbar in IE 10+.\\n */\\n\\ntextarea {\\n  overflow: auto;\\n}\\n\\n/**\\n * 1. Add the correct box sizing in IE 10.\\n * 2. Remove the padding in IE 10.\\n */\\n\\n[type=\\\"checkbox\\\"],\\n[type=\\\"radio\\\"] {\\n  box-sizing: border-box; /* 1 */\\n  padding: 0; /* 2 */\\n}\\n\\n/**\\n * Correct the cursor style of increment and decrement buttons in Chrome.\\n */\\n\\n[type=\\\"number\\\"]::-webkit-inner-spin-button,\\n[type=\\\"number\\\"]::-webkit-outer-spin-button {\\n  height: auto;\\n}\\n\\n/**\\n * 1. Correct the odd appearance in Chrome and Safari.\\n * 2. Correct the outline style in Safari.\\n */\\n\\n[type=\\\"search\\\"] {\\n  -webkit-appearance: textfield; /* 1 */\\n  outline-offset: -2px; /* 2 */\\n}\\n\\n/**\\n * Remove the inner padding in Chrome and Safari on macOS.\\n */\\n\\n[type=\\\"search\\\"]::-webkit-search-decoration {\\n  -webkit-appearance: none;\\n}\\n\\n/**\\n * 1. Correct the inability to style clickable types in iOS and Safari.\\n * 2. Change font properties to `inherit` in Safari.\\n */\\n\\n::-webkit-file-upload-button {\\n  -webkit-appearance: button; /* 1 */\\n  font: inherit; /* 2 */\\n}\\n\\n/* Interactive\\n   ========================================================================== */\\n\\n/*\\n * Add the correct display in Edge, IE 10+, and Firefox.\\n */\\n\\ndetails {\\n  display: block;\\n}\\n\\n/*\\n * Add the correct display in all browsers.\\n */\\n\\nsummary {\\n  display: list-item;\\n}\\n\\n/* Misc\\n   ========================================================================== */\\n\\n/**\\n * Add the correct display in IE 10+.\\n */\\n\\ntemplate {\\n  display: none;\\n}\\n\\n/**\\n * Add the correct display in IE 10.\\n */\\n\\n[hidden] {\\n  display: none;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://telegram_bot/./src/styles/normalize.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://telegram_bot/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://telegram_bot/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://telegram_bot/./src/styles/style.scss?");

/***/ }),

/***/ "./src/styles/normalize.css":
/*!**********************************!*\
  !*** ./src/styles/normalize.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./normalize.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/normalize.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://telegram_bot/./src/styles/normalize.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://telegram_bot/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://telegram_bot/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://telegram_bot/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://telegram_bot/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://telegram_bot/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://telegram_bot/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/components/data.js":
/*!********************************!*\
  !*** ./src/components/data.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst headerTitle = 'КВЕСТ ПО ВЫСТАВКЕ «ОЧАРОВАНИЯ ДЕЛАКРУА»';\n\nconst arrQuestion = {\n  1: [\n    `Для разминки, как нам кажется, несложное задание.<br>ОН&nbsp;&mdash; это и&nbsp;серия космических кораблей США, и&nbsp;&laquo;хорошо\nсложенный красивый мужчина&raquo;, и&nbsp;кипрский футбольный клуб из&nbsp;города Лимасол.\nОН&nbsp;фигурирует в&nbsp;название многих работ в&nbsp;экспозиции. Ваша задача проста, НАПИШИТЕ,\nпожалуйста, В&nbsp;КАКОМ ГОДУ была создана самая поздняя работа из&nbsp;экспозиции, в&nbsp;названии\nкоторой&nbsp;ОН фигурирует?`,\n  ],\n  2: [\n    `Для разминки, как нам кажется, несложное задание.<br>ОН&nbsp;&mdash; это и&nbsp;серия космических кораблей США, и&nbsp;&laquo;хорошо\nсложенный красивый мужчина&raquo;, и&nbsp;кипрский футбольный клуб из&nbsp;города Лимасол.\nОН&nbsp;фигурирует в&nbsp;название многих работ в&nbsp;экспозиции. Ваша задача проста, НАПИШИТЕ,\nпожалуйста, В&nbsp;КАКОМ ГОДУ была создана самая поздняя работа из&nbsp;экспозиции, в&nbsp;названии\nкоторой&nbsp;ОН фигурирует?`,\n  ],\n  3: [\n    `Для разминки, как нам кажется, несложное задание.<br>ОН&nbsp;&mdash; это и&nbsp;серия космических кораблей США, и&nbsp;&laquo;хорошо\nсложенный красивый мужчина&raquo;, и&nbsp;кипрский футбольный клуб из&nbsp;города Лимасол.\nОН&nbsp;фигурирует в&nbsp;название многих работ в&nbsp;экспозиции. Ваша задача проста, НАПИШИТЕ,\nпожалуйста, В&nbsp;КАКОМ ГОДУ была создана самая поздняя работа из&nbsp;экспозиции, в&nbsp;названии\nкоторой&nbsp;ОН фигурирует?`,\n  ],\n};\nconst arrPlaceholder = {\n  1: [\"Например: 1984\"],\n  2: [\"Например: 1984\"],\n  3: [\"Например: 1984\"],\n};\nconst hintBoard = {\n  1: [\n    `Серия космических кораблей США, &laquo;хорошо сложенный красивый\nмужчина&raquo;, кипрский футбольный клуб из&nbsp;города Лимасол&nbsp;&mdash; Аполлон.\nВ&nbsp;экспозиции есть несколько работ, в&nbsp;названии которых фигурирует &laquo;Аполлон&raquo;.\nСамую позднюю из&nbsp;них создал Владимир Бескровный в&nbsp;2021&nbsp;году.`,\n  ],\n  2: [\n    `Серия космических кораблей США, &laquo;хорошо сложенный красивый\nмужчина&raquo;, кипрский футбольный клуб из&nbsp;города Лимасол&nbsp;&mdash; Аполлон.\nВ&nbsp;экспозиции есть несколько работ, в&nbsp;названии которых фигурирует &laquo;Аполлон&raquo;.\nСамую позднюю из&nbsp;них создал Владимир Бескровный в&nbsp;2021&nbsp;году.`,\n  ],\n  3: [\n    `Серия космических кораблей США, &laquo;хорошо сложенный красивый\nмужчина&raquo;, кипрский футбольный клуб из&nbsp;города Лимасол&nbsp;&mdash; Аполлон.\nВ&nbsp;экспозиции есть несколько работ, в&nbsp;названии которых фигурирует &laquo;Аполлон&raquo;.\nСамую позднюю из&nbsp;них создал Владимир Бескровный в&nbsp;2021&nbsp;году.`,\n  ],\n};\nconst arrCorrectAnswer = {\n  1: [''],\n  2: [`2021`],\n  3: [`2024`],\n};\nconst arrCorrectAnswersText = [`Поздравляем! Начало положено, вы&nbsp;разгадали первое\nиз&nbsp;семи заданий.`, `Отлично! Два задания из&nbsp;семи уже позади.`, `Почти половина квеста уже пройдена! Три задания из&nbsp;семи\nпокорились вам.`, `Ого, вы&nbsp;ответили уже на&nbsp;четыре задания из&nbsp;семи!\nОсталось всего ничего.`, `Пятое задание из&nbsp;семи тоже за&nbsp;вами, осталось всего два!`, `Супер, вы&nbsp;ответили на&nbsp;шесть заданий из&nbsp;семи! Даже\nнемного грустно, что осталось всего одно.`, `Семь из&nbsp;семи, наши поздравления! Теперь можете получить свой\nбонус у&nbsp;администратора. <br>  Надеемся, что вам понравилось! Если квест, действительно, пришёлся вам по&nbsp;душе или есть\nкакие-то пожелания по&nbsp;нему, то&nbsp;будем признательны, если упомянете об&nbsp;этом\nв&nbsp;своих социальных сетях, отметив при этом нас&mdash; нам будет о-о-очень приятно! В&nbsp;любом\nслучае, будем рады если подпишетесь на&nbsp;наши социальные сети, которые найдете внизу страницы\n<span>&#129303</span>`];\nconst wrongAnswersText = `К&nbsp;сожалению, это неправильный ответ. Попробуйте еще раз!\nПомните, что можно воспользоваться видеоподсказками или нажать на&nbsp;кнопку &laquo;Узнать\nответ&raquo;`;\n\n\n// Вписываются номера вопросов строками (\"const arrImgQuestion = [\"1\", \"3\"]\")\nconst arrHelpSection = [];\nconst arrImgQuestion = [];\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ headerTitle, arrQuestion, arrPlaceholder, hintBoard, arrCorrectAnswer, arrHelpSection, arrImgQuestion, arrCorrectAnswersText, wrongAnswersText });\n\n\n//# sourceURL=webpack://telegram_bot/./src/components/data.js?");

/***/ }),

/***/ "./src/components/footer.js":
/*!**********************************!*\
  !*** ./src/components/footer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_facebook_color_white_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/facebook_color_white.svg */ \"./src/images/facebook_color_white.svg\");\n/* harmony import */ var _images_instagram_color_white_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/instagram_color_white.svg */ \"./src/images/instagram_color_white.svg\");\n/* harmony import */ var _images_vk_color_white_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/vk_color_white.svg */ \"./src/images/vk_color_white.svg\");\n\n\n\n\nconst footerCreate = `<h2 class=\"footer__heading\">Наши социальные сети</h2>\n<nav>\n    <ul class=\"footer__links-list\">\n        <li class=\"footer__links-list-item\"><a href=\"https://www.instagram.com/farba.gallery/\" class=\"footer__link\" target=\"_blank\" lang=\"en\"><img\n                    class=\"footer__social-icon\" src=\"${_images_instagram_color_white_svg__WEBPACK_IMPORTED_MODULE_1__}\"\n                    alt=\"Instagram\">Instagram</a>\n        </li>\n        <li class=\"footer__links-list-item\"><a href=\"https://www.facebook.com/%D0%93%D0%B0%D0%BB%D0%B5%D1%80%D0%B5%D1%8F-Farba-102809942450762\" target=\"_blank\" class=\"footer__link\" lang=\"en\"><img\n                    class=\"footer__social-icon\" src=\"${_images_facebook_color_white_svg__WEBPACK_IMPORTED_MODULE_0__}\"\n                    alt=\"Facebook\">Facebook</a>\n        </li>\n        <li class=\"footer__links-list-item\"><a href=\"https://vk.com/farba.gallery\" target=\"_blank\" class=\"footer__link\"><img\n                    class=\"footer__social-icon\" src=\"${_images_vk_color_white_svg__WEBPACK_IMPORTED_MODULE_2__}\"\n                    alt=\"ВКонтакте\">ВКонтакте</a>\n        </li>\n    </ul>\n</nav>`;\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (footerCreate);\n\n\n//# sourceURL=webpack://telegram_bot/./src/components/footer.js?");

/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ \"./src/components/data.js\");\n\nconst { arrQuestion } = _data__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n\nclass CreateElement {\n  constructor(tag, selector = null, text = null) {\n    this.tag = tag;\n    this.selector = selector;\n    this.text = text;\n  }\n  createElem(putTo) {\n    this.putTo = putTo;\n    let newEl = document.createElement(this.tag);\n\n    if (this.selector !== null) {\n      newEl.classList.add(this.selector);\n    }\n    if (this.text !== null) {\n      newEl.innerHTML = this.text;\n    }\n    document.querySelector(`.${this.putTo}`).appendChild(newEl);\n  }\n}\nclass CreateImg {\n  constructor(tag, selector = null, src) {\n    this.tag = tag;\n    this.selector = selector;\n    this.src = src;\n  }\n  createImg(putTo) {\n    this.putTo = putTo;\n    let newEl = document.createElement(this.tag);\n\n    if (this.selector !== null) {\n      newEl.classList.add(this.selector);\n    }\n    newEl.setAttribute(\"src\", this.src);\n    newEl.setAttribute(\"alt\", \"picture\");\n    document.querySelector(`.${this.putTo}`).appendChild(newEl);\n  }\n}\nclass CreateBtn {\n  constructor(tag, selector = null, type, text) {\n    this.tag = tag;\n    this.selector = selector;\n    this.type = type;\n    this.text = text;\n  }\n  createBtn(putTo) {\n    this.putTo = putTo;\n    let newEl = document.createElement(this.tag);\n    newEl.classList.add(\"form__button\");\n    if (this.selector !== null) {\n      newEl.classList.add(this.selector);\n    }\n    newEl.setAttribute(\"type\", this.type);\n    newEl.innerHTML = this.text;\n    document.querySelector(`.${this.putTo}`).appendChild(newEl);\n  }\n}\nconst createLi = [];\nfor (let i = 1; i <= Object.keys(arrQuestion).length; i++) {\n  createLi.push(`<li><span class=\"checked_answer\">&#10004</span><a class=\"navbar_text\" href=\"#section_${i}\">Вопрос ${i}</a></li>`);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ createLi, CreateElement, CreateImg, CreateBtn });\n\n\n//# sourceURL=webpack://telegram_bot/./src/components/header.js?");

/***/ }),

/***/ "./src/components/main.js":
/*!********************************!*\
  !*** ./src/components/main.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ \"./src/components/data.js\");\n/* harmony import */ var _images_farba_logo_social_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/farba_logo_social.jpg */ \"./src/images/farba_logo_social.jpg\");\n/* harmony import */ var _images_img_video_1_mob_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/img_video_1_mob.png */ \"./src/images/img_video_1_mob.png\");\n\nconst {headerTitle, arrQuestion, arrPlaceholder, hintBoard, arrCorrectAnswer } = _data__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n\n\n\nlet newLi = [];\nconst descriptionH2 = \"Несколько рекомендаций по&nbsp;прохождению квеста!\";\nconst arrDescriptionLi = [\n  `Не&nbsp;бросайтесь проходить квест сразу&nbsp;&mdash; для начала\nхотя&nbsp;бы минимально ознакомьтесь с&nbsp;экспозицией.`,\n  `Отвечать на&nbsp;задания можно в&nbsp;любом удобном для вас порядке.`,\n  `Если совсем не&nbsp;удаётся решить какое-то задание, то&nbsp;смело\nпереходите к&nbsp;следующему. Пока будете решать следующее задание, можете натолкнуться\nна&nbsp;ответ\nк&nbsp;предыдущему <span>&#128521;</span>`,\n  `Чтобы пройти квест, обращайте внимание на&nbsp;работы всех авторов.`,\n  `Если вы&nbsp;правильно ответите на&nbsp;все вопросы квеста,\n    то&nbsp;получите приятный бонус от&nbsp;FARBA.`,\n];\nfor (let i = 0; i < arrDescriptionLi.length; i++) {\n  newLi.push(`<li class=\"description__text-item\">${arrDescriptionLi[i]}</li>`);\n}\nconst sectionDescription = `<section class=\"description\">\n<h1 class=\"header__title\">${headerTitle}</h1>\n<img class=\"description__image\" src=\"${_images_farba_logo_social_jpg__WEBPACK_IMPORTED_MODULE_1__}\">\n<h2 class=\"description__title\">${descriptionH2}</h2>\n<ul class=\"description__text\">${newLi.join(\"\").toString()}\n</ul>\n</section>\n<div class=\"questions\"></div>`;\n\nconst arrWrongAnswer = [\n  `К&nbsp;сожалению, это неправильный ответ. Попробуйте еще раз!\nПомните, что можно воспользоваться видеоподсказками или нажать на&nbsp;кнопку &laquo;Узнать\nответ&raquo;.`,\n];\nlet newQuestion = [];\nfor (let i = 0; i < Object.keys(arrQuestion).length; i++) {\n  newQuestion.push(`<section class=\"puzzle number_${[i + 1]}\" id=\"section_${i + 1}\">\n    <h2 class=\"puzzle__number number_${[i + 1]}\">${i + 1}.</h2>\n    <p class=\"puzzle__text_${[i + 1]}\">${arrQuestion[i + 1]}</p>\n    <form class=\"form\">\n        <label class=\"form__label\" for=\"number_${[i + 1]}\">Ваш ответ:</label>\n        <input class=\"form__field\" type=\"number\" min=\"1800\" max=\"2022\" id=\"number_${[i + 1]}\" name=\"number_${[i + 1]}\"\n            placeholder=\"${arrPlaceholder[i + 1]}\" autocomplete=\"off\"\">\n        <div class=\"form__button-container\">\n            <button class=\"form__button form__button_type_submit number_${[i + 1]}\" type=\"button\">Ответить</button>\n            <button class=\"form__button form__button_type_hint number_${[i + 1]}\" type=\"button\">Узнать ответ</button>\n        </div>\n    </form>\n    <div class=\"wrong-answer-board number_${[i + 1]}\">\n        <p class=\"wrong-answer-board__text number_${[i + 1]}\">${arrWrongAnswer}</p>\n    </div>\n    <div class=\"correct-answer-board number_${[i + 1]}\">\n        <p class=\"correct-answer-board__text number_${[i + 1]}\"></p>\n    </div>\n    <div class=\"hint-board number_${[i + 1]}\">\n        <p class=\"hint-board__text\">${hintBoard[i + 1]}</p>\n        <p class=\"hint-board__text reverse\"><span class=\"hint-board__span-accent\">Правильный\n                ответ:</span>${arrCorrectAnswer[i + 1][0]}.</p>\n    </div>\n    </section>`);\n}\n\nclass CreateHelpSection {\n  constructor(putTo) {\n    this.putTo = putTo;\n  }\n  createHelp() {\n    let newEl = document.createElement(\"picture\");\n    newEl.classList.add(\"puzzle__help\");\n    newEl.innerHTML = `\n      <p class=\"puzzle__video-description\">Подсказка к вопросу ${this.putTo}</p>\n      <img class=\"img_video\" src=\"${_images_img_video_1_mob_png__WEBPACK_IMPORTED_MODULE_2__}\" alt=\"video\">\n      <iframe class=\"puzzle__video\" width=\"720\" height=\"405\"\n          frameborder=\"0\" allowfullscreen></iframe>`;\n    document.querySelector(`#section_${this.putTo}`).appendChild(newEl);\n  }\n}\nclass CreateImgQuestionSection {\n  constructor(putTo) {\n    this.putTo = putTo;\n  }\n  createImgQuaestionSection() {\n    let newEl = document.createElement(\"img\");\n    newEl.classList.add(\"puzzle__image\");\n    newEl.src = `${_images_img_video_1_mob_png__WEBPACK_IMPORTED_MODULE_2__}`;\n    newEl.setAttribute(\"alt\", \"question img\");\n    document.querySelector(`.puzzle__text_${this.putTo}`).insertAdjacentElement(\"afterend\", newEl);\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ sectionDescription, newQuestion, CreateHelpSection, CreateImgQuestionSection });\n\n\n//# sourceURL=webpack://telegram_bot/./src/components/main.js?");

/***/ }),

/***/ "./src/components/popup.js":
/*!*********************************!*\
  !*** ./src/components/popup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_close_popup_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/close-popup.svg */ \"./src/images/close-popup.svg\");\n/* harmony import */ var _images_farba_logo_social_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/farba_logo_social.jpg */ \"./src/images/farba_logo_social.jpg\");\n\n\n\nconst popupCreate = `<div class=\"popup_body\">\n<div class=\"popup_content\">\n  <button class=\"popup_close\"><img src=\"${_images_close_popup_svg__WEBPACK_IMPORTED_MODULE_0__}\" alt=\"picture\"></button>\n  <div class=\"popup_title\">\n      <div class=\"popup_text\">\n          <p class=\"popup_description\">Вы уверены что хотите сбросить результат?</p>\n          <div class=\"popup_gift\">\n              <img class=\"popup_img\" src=\"${_images_farba_logo_social_jpg__WEBPACK_IMPORTED_MODULE_1__}\" alt=\"picture\">\n              <div class=\"popup_data\"></div>\n          </div>\n      </div>\n      <div class=\"popup_reset_btn\">\n          <button class=\"form__button btn_reset\" type=\"button\">Сбросить</button>\n          <button class=\"form__button btn_cancel\" type=\"button\">Отмена</button>\n      </div>\n  </div>\n</div>\n</div>`;\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (popupCreate);\n\n\n//# sourceURL=webpack://telegram_bot/./src/components/popup.js?");

/***/ }),

/***/ "./src/components/script.js":
/*!**********************************!*\
  !*** ./src/components/script.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ \"./src/components/data.js\");\n\nconst {arrCorrectAnswer, arrCorrectAnswersText, wrongAnswersText} = _data__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n\nconst correctAnswersValue = [];\nlet correctAnswersId = [];\n\nconst toggleHintBoard = (btnTypeHint, hintBoard) => {\n  [...btnTypeHint].forEach((btn) =>\n    btn.addEventListener(\"click\", (e) => {\n      [...hintBoard].forEach((board) => {\n        if (board.classList.contains(e.target.classList[2])) {\n          board.classList.toggle(\"visible\");\n        }\n      });\n    })\n  );\n};\nconst valueInput = (btnTypeSubmit, inputValue, correctAnswersScore) => {\n  [...btnTypeSubmit].forEach((btn) =>\n    btn.addEventListener(\"click\", (e) => {\n      [...inputValue].forEach((input, index) => {\n        if (input.id === e.target.classList[2]) {\n          const dataAnswer = arrCorrectAnswer[index+1];\n          const inputAnswer = input.value.trim().toLowerCase();\n          if (dataAnswer.includes(inputAnswer)) {\n            input.setAttribute(\"disabled\", \"disabled\");\n            correctAnswersValue.push(input.value);\n            correctAnswersId.push(input.id);\n            correctAnswersId = [...new Set(correctAnswersId)];\n            correctAnswersScore.innerHTML = correctAnswersId.length.toString();\n            document.querySelector(`.wrong-answer-board.${input.id}`).style.display = 'none';\n            document.querySelector(`.correct-answer-board.${input.id}`).style.display = 'block';\n            document.querySelector(`.correct-answer-board__text.${input.id}`).innerHTML = `${arrCorrectAnswersText[correctAnswersId.length-1]}`;\n          } else {\n            document.querySelector(`.wrong-answer-board.${input.id}`).style.display = 'block';\n            document.querySelector(`.wrong-answer-board__text.${input.id}`).innerHTML = wrongAnswersText;\n          }\n        }\n      });\n    })\n  );\n};\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ toggleHintBoard, valueInput });\n\n\n//# sourceURL=webpack://telegram_bot/./src/components/script.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_normalize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/normalize.css */ \"./src/styles/normalize.css\");\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/style.scss */ \"./src/styles/style.scss\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/header */ \"./src/components/header.js\");\n/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/footer */ \"./src/components/footer.js\");\n/* harmony import */ var _components_main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/main */ \"./src/components/main.js\");\n/* harmony import */ var _components_popup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/popup */ \"./src/components/popup.js\");\n/* harmony import */ var _images_farba_logo_social_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/farba_logo_social.jpg */ \"./src/images/farba_logo_social.jpg\");\n/* harmony import */ var _components_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/data */ \"./src/components/data.js\");\n/* harmony import */ var _components_script__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/script */ \"./src/components/script.js\");\n\n\n\n\nconst { createLi, CreateElement, CreateImg, CreateBtn } = _components_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n\n\nconst { sectionDescription, newQuestion, CreateHelpSection, CreateImgQuestionSection } = _components_main__WEBPACK_IMPORTED_MODULE_4__[\"default\"];\n\n\n\nconst { arrHelpSection, arrImgQuestion, arrQuestion } = _components_data__WEBPACK_IMPORTED_MODULE_7__[\"default\"];\n\nconst wrapper = document.createElement(\"div\");\nwrapper.classList.add(\"wrapper\");\ndocument.body.prepend(wrapper);\n\nconst arrayElement = [\"header\", \"main\", \"footer\", \"popup\", \"canvas\"];\nconst innerElement = [\"\", sectionDescription, _components_footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _components_popup__WEBPACK_IMPORTED_MODULE_5__[\"default\"]];\nfor (let i = 0; i < arrayElement.length; i++) {\n  let newEl = arrayElement[i];\n  newEl = document.createElement(\"div\");\n  wrapper.appendChild(newEl);\n  if (arrayElement[i] !== \"canvas\") {\n    newEl.classList.add(arrayElement[i]);\n    newEl.innerHTML = innerElement[i];\n  } else {\n    newEl.classList.add(\"fireworks-canvas\");\n    newEl.setAttribute(\"id\", \"fireworks-canvas\");\n  }\n}\nconst createHeader = [\n  new CreateElement(\"div\", \"logo\").createElem(\"header\"),\n  new CreateElement(\"h1\", \"header_logo\", \"farba\").createElem(\"logo\"),\n  new CreateImg(\"img\", \"header_logo_img\", _images_farba_logo_social_jpg__WEBPACK_IMPORTED_MODULE_6__).createImg(\"logo\"),\n  new CreateElement(\"div\", \"score\").createElem(\"header\"),\n  new CreateElement(\"div\", null, `Всего вопросов: <span class=\"total_questions\"></span>`).createElem(\"score\"),\n  new CreateElement(\"div\", null, `Вы ответили на: <span class=\"correct_answers\">0</span>`).createElem(\"score\"),\n  new CreateElement(\"div\", \"header_btn\").createElem(\"header\"),\n  new CreateBtn(\"button\", \"btn__popup_reset\", \"button\", \"Сбросить\").createBtn(\"header_btn\"),\n  new CreateBtn(\"button\", \"btn_gift\", \"button\", \"Приз\").createBtn(\"header_btn\"),\n  new CreateElement(\"div\", \"header_burger\").createElem(\"header\"),\n  new CreateElement(\"span\").createElem(\"header_burger\"),\n  new CreateElement(\"nav\", \"navbar_container\").createElem(\"header\"),\n  new CreateElement(\"div\", \"navbar\").createElem(\"navbar_container\"),\n  new CreateElement(\"ul\", \"navbar_width\").createElem(\"navbar\"),\n];\ncreateHeader.forEach((newEl) => createHeader[newEl]);\ndocument.querySelector(\".navbar_width\").innerHTML = createLi.join(\"\").toString();\ndocument.querySelector(\".questions\").innerHTML = newQuestion.join(\"\");\n\n// Создать Подсказку\nif (arrHelpSection.length !== 0) {\n  const createHelp = [];\n  arrHelpSection.forEach((help) => {\n    createHelp.push(new CreateHelpSection(help).createHelp());\n  });\n}\n\n// Создать Картинку к вопросу\nif (arrImgQuestion.length !== 0) {\n  const createImg = [];\n  arrImgQuestion.forEach((img) => {\n    createImg.push(new CreateImgQuestionSection(img).createImgQuaestionSection());\n  });\n}\n\ndocument.querySelector(\".total_questions\").innerHTML = `${Object.keys(arrQuestion).length.toString()}`;\nconst correctAnswersScore = document.querySelector(\".correct_answers\");\nconst btnTypeSubmit = document.querySelectorAll(\".form__button_type_submit\");\nconst inputValue = document.querySelectorAll(\".form__field\");\nconst btnTypeHint = document.querySelectorAll(\".form__button_type_hint \");\nconst hintBoard = document.querySelectorAll(\".hint-board\");\n\n_components_script__WEBPACK_IMPORTED_MODULE_8__[\"default\"].toggleHintBoard(btnTypeHint, hintBoard);\n_components_script__WEBPACK_IMPORTED_MODULE_8__[\"default\"].valueInput(btnTypeSubmit, inputValue, correctAnswersScore);\n\n//# sourceURL=webpack://telegram_bot/./src/index.js?");

/***/ }),

/***/ "./src/images/close-popup.svg":
/*!************************************!*\
  !*** ./src/images/close-popup.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/close-popup_e7ec03580e1496053d1d.svg\";\n\n//# sourceURL=webpack://telegram_bot/./src/images/close-popup.svg?");

/***/ }),

/***/ "./src/images/facebook_color_white.svg":
/*!*********************************************!*\
  !*** ./src/images/facebook_color_white.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/facebook_color_white_c59825505b971c9eb641.svg\";\n\n//# sourceURL=webpack://telegram_bot/./src/images/facebook_color_white.svg?");

/***/ }),

/***/ "./src/images/farba_logo_social.jpg":
/*!******************************************!*\
  !*** ./src/images/farba_logo_social.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/farba_logo_social_4dfec4dcb275184ce59e.jpg\";\n\n//# sourceURL=webpack://telegram_bot/./src/images/farba_logo_social.jpg?");

/***/ }),

/***/ "./src/images/img_video_1_mob.png":
/*!****************************************!*\
  !*** ./src/images/img_video_1_mob.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/img_video_1_mob_38b5cc88379b1edca368.png\";\n\n//# sourceURL=webpack://telegram_bot/./src/images/img_video_1_mob.png?");

/***/ }),

/***/ "./src/images/instagram_color_white.svg":
/*!**********************************************!*\
  !*** ./src/images/instagram_color_white.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/instagram_color_white_b2a5b288a33e388ba0d9.svg\";\n\n//# sourceURL=webpack://telegram_bot/./src/images/instagram_color_white.svg?");

/***/ }),

/***/ "./src/images/vk_color_white.svg":
/*!***************************************!*\
  !*** ./src/images/vk_color_white.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/vk_color_white_b98dba430d66a122cb9d.svg\";\n\n//# sourceURL=webpack://telegram_bot/./src/images/vk_color_white.svg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;