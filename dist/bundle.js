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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://telegram_bot/./src/styles/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst questionNumber = [\"one\", \"two\", \"three\", \"four\", \"five\", \"six\", \"seven\"];\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (questionNumber);\n\n\n\n//# sourceURL=webpack://telegram_bot/./src/components/data.js?");

/***/ }),

/***/ "./src/components/footer.js":
/*!**********************************!*\
  !*** ./src/components/footer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_facebook_color_white_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/facebook_color_white.svg */ \"./src/images/facebook_color_white.svg\");\n/* harmony import */ var _images_instagram_color_white_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/instagram_color_white.svg */ \"./src/images/instagram_color_white.svg\");\n/* harmony import */ var _images_vk_color_white_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/vk_color_white.svg */ \"./src/images/vk_color_white.svg\");\n\n\n\n\nconst footerCreate = `<h2 class=\"footer__heading\">Наши социальные сети</h2>\n<nav>\n    <ul class=\"footer__links-list\">\n        <li class=\"footer__links-list-item\"><a href=\"https://www.instagram.com/farba.gallery/\" class=\"footer__link\" target=\"_blank\" lang=\"en\"><img\n                    class=\"footer__social-icon\" src=\"./images/instagram_color_white.svg\"\n                    alt=\"Instagram\">Instagram</a>\n        </li>\n        <li class=\"footer__links-list-item\"><a href=\"https://www.facebook.com/%D0%93%D0%B0%D0%BB%D0%B5%D1%80%D0%B5%D1%8F-Farba-102809942450762\" target=\"_blank\" class=\"footer__link\" lang=\"en\"><img\n                    class=\"footer__social-icon\" src=\"./images/facebook_color_white.svg\"\n                    alt=\"Facebook\">Facebook</a>\n        </li>\n        <li class=\"footer__links-list-item\"><a href=\"https://vk.com/farba.gallery\" target=\"_blank\" class=\"footer__link\"><img\n                    class=\"footer__social-icon\" src=\"./images/vk_color_white.svg\"\n                    alt=\"ВКонтакте\">ВКонтакте</a>\n        </li>\n    </ul>\n</nav>`;\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (footerCreate);\n\n//# sourceURL=webpack://telegram_bot/./src/components/footer.js?");

/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_farba_logo_social_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/farba_logo_social.jpg */ \"./src/images/farba_logo_social.jpg\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ \"./src/components/data.js\");\n\n\n\nconst headerCreate =\n`<div class=\"logo\">\n    <h1 class=\"header_logo\">farba</h1>\n    <img class=\"header_logo_img\" src=\"${_images_farba_logo_social_jpg__WEBPACK_IMPORTED_MODULE_0__}\" alt=\"logo\">\n</div>\n<div class=\"score\">\n    <div>Всего вопросов: <span class=\"total_questions\"></span></div>\n    <div>Вы ответили на: <span class=\"correct_answers\">0</span></div>\n</div>\n<div class=\"header_btn\">\n    <button class=\"form__button btn__popup_reset\" type=\"button\">Сбросить</button>\n    <button class=\"form__button btn_gift\" type=\"button\">Приз</button>\n</div>\n<div class=\"header_burger\">\n    <span></span>\n</div>\n<nav class=\"navbar_container\">\n    <div class=\"navbar\">\n      <ul class=\"navbar_width\"></ul>\n    </div>\n</nav>`;\n\nconst createLi = [];\nfor (let i = 1; i <= _data__WEBPACK_IMPORTED_MODULE_1__[\"default\"].length; i++) {\n    createLi.push(`<li><span class=\"checked_answer\">&#10004</span><a class=\"navbar_text\" href=\"#section_${i}\">Вопрос ${i}</a></li>`);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({headerCreate, createLi});\n\n//# sourceURL=webpack://telegram_bot/./src/components/header.js?");

/***/ }),

/***/ "./src/components/main.js":
/*!********************************!*\
  !*** ./src/components/main.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst descriptionH2 = 'Несколько рекомендаций по&nbsp;прохождению квеста!'\nconst arrDescriptionLi = [\n    `Не&nbsp;бросайтесь проходить квест сразу&nbsp;&mdash; для начала\nхотя&nbsp;бы минимально ознакомьтесь с&nbsp;экспозицией.`,\n    `Отвечать на&nbsp;задания можно в&nbsp;любом удобном для вас порядке.`,\n    `Если совсем не&nbsp;удаётся решить какое-то задание, то&nbsp;смело\nпереходите к&nbsp;следующему. Пока будете решать следующее задание, можете натолкнуться\nна&nbsp;ответ\nк&nbsp;предыдущему <span>&#128521;</span>`,\n    `Чтобы пройти квест, обращайте внимание на&nbsp;работы всех авторов.`,\n    `Если вы&nbsp;правильно ответите на&nbsp;все вопросы квеста,\n    то&nbsp;получите приятный бонус от&nbsp;FARBA.`];\n\nconst mainCreate =\n`  <section class=\"description\">\n<img class=\"description__image\" src=\"./images/farba_logo_social.jpg\">\n<h2 class=\"description__title\">${descriptionH2}</h2>\n<ul class=\"description__text\">\n    <li class=\"description__text-item\">${arrDescriptionLi[1]}</li>\n    <li class=\"description__text-item\">${arrDescriptionLi[2]}\n    </li>\n    <li class=\"description__text-item\">${arrDescriptionLi[3]}</li>\n    <li class=\"description__text-item\">${arrDescriptionLi[4]}\n    </li>\n    <li class=\"description__text-item\">${arrDescriptionLi[5]}</li>\n</ul>\n</section>\n\n<section class=\"puzzle\" id=\"section_1\">\n<h2 class=\"puzzle__number\">1.</h2>\n<p class=\"puzzle__text\">Для разминки, как нам кажется, несложное задание.<br>ОН&nbsp;&mdash; это и&nbsp;серия космических кораблей США, и&nbsp;&laquo;хорошо\n    сложенный красивый мужчина&raquo;, и&nbsp;кипрский футбольный клуб из&nbsp;города Лимасол.\n    ОН&nbsp;фигурирует в&nbsp;название многих работ в&nbsp;экспозиции. Ваша задача проста, НАПИШИТЕ,\n    пожалуйста, В&nbsp;КАКОМ ГОДУ была создана самая поздняя работа из&nbsp;экспозиции, в&nbsp;названии\n    которой&nbsp;ОН фигурирует?</p>\n<form class=\"form\">\n    <label class=\"form__label\" for=\"first-puzzle\">Ваш ответ:</label>\n    <input class=\"form__field\" type=\"number\" min=\"1800\" max=\"2022\" id=\"first-puzzle\" name=\"fisrt-puzzle\"\n        placeholder=\"Например: 1984\" autocomplete=\"off\" data-answer=\"2021\">\n    <div class=\"form__button-container\">\n        <button class=\"form__button form__button_type_submit first-puzzle\" type=\"button\">Ответить</button>\n        <button class=\"form__button form__button_type_hint first-puzzle\" type=\"button\">Узнать ответ</button>\n    </div>\n</form>\n<div class=\"wrong-answer-board first-puzzle\">\n    <p class=\"wrong-answer-board__text\">К&nbsp;сожалению, это неправильный ответ. Попробуйте еще раз!\n        Помните, что можно воспользоваться видеоподсказками или нажать на&nbsp;кнопку &laquo;Узнать\n        ответ&raquo;.</p>\n</div>\n<div class=\"correct-answer-board first-puzzle\">\n    <p class=\"correct-answer-board__text first-puzzle\"></p>\n</div>\n<div class=\"hint-board first-puzzle\">\n    <p class=\"hint-board__text\">Серия космических кораблей США, &laquo;хорошо сложенный красивый\n        мужчина&raquo;, кипрский футбольный клуб из&nbsp;города Лимасол&nbsp;&mdash; Аполлон.\n        В&nbsp;экспозиции есть несколько работ, в&nbsp;названии которых фигурирует &laquo;Аполлон&raquo;.\n        Самую позднюю из&nbsp;них создал Владимир Бескровный в&nbsp;2021&nbsp;году.</p>\n    <p class=\"hint-board__text\"><span class=\"hint-board__span-accent\">Правильный\n            ответ:</span> 2021.</p>\n</div>\n<p class=\"puzzle__video-description\">Подсказка №1</p>\n<picture class=\"picture\">\n    <source srcset=\"./images/img_video_1-min.png\" type=\"image/jpeg\" media=\"(min-width:769px)\">\n    <source srcset=\"./images/img_video_1_mob.png\" type=\"image/jpeg\" media=\"(max-width:768px)\">\n    <!-- <img class=\"img_video\" src=\"./images/img_video_1-min.png\" alt=\"video\"> -->\n    <iframe class=\"puzzle__video\" width=\"720\" height=\"405\"\n         frameborder=\"0\" allowfullscreen></iframe>\n</picture>\n<p class=\"puzzle__video-description\">Подсказка №2</p>\n<picture class=\"picture\">\n    <!-- <source srcset=\"./images/img_video_1-min.png\" type=\"image/jpeg\" media=\"(min-width:769px)\">\n    <source srcset=\"./images/img_video_1_mob.png\" type=\"image/jpeg\" media=\"(max-width:768px)\">\n    <img class=\"img_video\" src=\"./images/img_video_1-min.png\" alt=\"video\"> -->\n    <iframe class=\"puzzle__video\" width=\"720\" height=\"405\"\n         frameborder=\"0\" allowfullscreen></iframe>\n</picture>\n</section>`;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mainCreate);\n\n//# sourceURL=webpack://telegram_bot/./src/components/main.js?");

/***/ }),

/***/ "./src/components/popup.js":
/*!*********************************!*\
  !*** ./src/components/popup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_close_popup_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/close-popup.svg */ \"./src/images/close-popup.svg\");\n\n\nconst popupCreate =\n`<div class=\"popup_body\">\n<div class=\"popup_content\">\n  <button class=\"popup_close\"><img src=\"./images/close-popup.svg\" alt=\"picture\"></button>\n  <div class=\"popup_title\">\n      <div class=\"popup_text\">\n          <p class=\"popup_description\">Вы уверены что хотите сбросить результат?</p>\n          <div class=\"popup_gift\">\n              <img class=\"popup_img\" src=\"./images/farba_logo_social.jpg\" alt=\"picture\">\n              <div class=\"popup_data\"></div>\n          </div>\n      </div>\n      <div class=\"popup_reset_btn\">\n          <button class=\"form__button btn_reset\" type=\"button\">Сбросить</button>\n          <button class=\"form__button btn_cancel\" type=\"button\">Отмена</button>\n      </div>\n  </div>\n</div>\n</div>`;\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (popupCreate);\n\n//# sourceURL=webpack://telegram_bot/./src/components/popup.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.scss */ \"./src/styles/style.scss\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header */ \"./src/components/header.js\");\n/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/footer */ \"./src/components/footer.js\");\n/* harmony import */ var _components_main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/main */ \"./src/components/main.js\");\n/* harmony import */ var _components_popup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/popup */ \"./src/components/popup.js\");\n\n\n\nconst {headerCreate, createLi} = _components_header__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n\n\n\n\nconst headerPage = __webpack_require__(/*! ./components/header */ \"./src/components/header.js\");\nconst mainPage = __webpack_require__(/*! ./components/main */ \"./src/components/main.js\");\nconst footerPage = __webpack_require__(/*! ./components/footer */ \"./src/components/footer.js\");\nconst popupPage = __webpack_require__(/*! ./components/popup */ \"./src/components/popup.js\");\nconst wrapper = document.createElement(\"div\");\nwrapper.classList.add('wrapper');\ndocument.body.prepend(wrapper);\n\nconst arrayElement = [\"header\", \"main\", \"footer\", \"popup\", \"canvas\"]\nconst innerElement = [headerCreate, _components_main__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _components_footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _components_popup__WEBPACK_IMPORTED_MODULE_4__[\"default\"]]\nfor (let i = 0; i < arrayElement.length; i++) {\n    let newEl = arrayElement[i];\n    newEl = document.createElement(\"div\");\n    wrapper.appendChild(newEl);\n    if (arrayElement[i] !== \"canvas\") {\n        newEl.classList.add(arrayElement[i]);\n        newEl.innerHTML = innerElement[i];\n    } else {\n        newEl.classList.add('fireworks-canvas');\n        newEl.setAttribute( \"id\", \"fireworks-canvas\" );\n    }\n}\n\ndocument.querySelector('.navbar_width').innerHTML = createLi.join(\"\").toString();\n\n\n\n\n\n//# sourceURL=webpack://telegram_bot/./src/index.js?");

/***/ }),

/***/ "./src/images/close-popup.svg":
/*!************************************!*\
  !*** ./src/images/close-popup.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/close-popup.svg\";\n\n//# sourceURL=webpack://telegram_bot/./src/images/close-popup.svg?");

/***/ }),

/***/ "./src/images/facebook_color_white.svg":
/*!*********************************************!*\
  !*** ./src/images/facebook_color_white.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/facebook_color_white.svg\";\n\n//# sourceURL=webpack://telegram_bot/./src/images/facebook_color_white.svg?");

/***/ }),

/***/ "./src/images/farba_logo_social.jpg":
/*!******************************************!*\
  !*** ./src/images/farba_logo_social.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/farba_logo_social.jpg\";\n\n//# sourceURL=webpack://telegram_bot/./src/images/farba_logo_social.jpg?");

/***/ }),

/***/ "./src/images/instagram_color_white.svg":
/*!**********************************************!*\
  !*** ./src/images/instagram_color_white.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/instagram_color_white.svg\";\n\n//# sourceURL=webpack://telegram_bot/./src/images/instagram_color_white.svg?");

/***/ }),

/***/ "./src/images/vk_color_white.svg":
/*!***************************************!*\
  !*** ./src/images/vk_color_white.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/vk_color_white.svg\";\n\n//# sourceURL=webpack://telegram_bot/./src/images/vk_color_white.svg?");

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