/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./src/js/helpers.js\");\n// Imports //\n// =========================== //\n\n\nwindow.addEventListener('load', function() {\n  if (Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"getTubbies\"])() === null ) {\n    Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"setDefaults\"])();\n  }\n\n  const path = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"getPagePath\"])();\n  if (path === \"/\" || path === \"/index.html\" ) {\n    // index page do form\n    // setup form to save json\n\n    // change event //\n    // ================================================ //\n    const changeTubbie = (e) => {\n      Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"enableButton\"])(true);\n    }\n\n    const radios = document.getElementsByName('poll');\n    radios.forEach((radio, i) => {\n      radio.addEventListener('change', changeTubbie);\n    });\n    Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"enableButton\"])(false);\n\n    // click /submit event //\n    // ================================================ //\n    const submitForm = (e) => {\n      e.preventDefault();\n      Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"updateStorage\"])(Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"getCheckedRadio\"])());\n      window.location.href = '/results.html';\n    }\n\n    const button = document.querySelector('.footer .button');\n    button.addEventListener('click', submitForm);\n  }\n\n  if (path === \"/results.html\") {\n    // results page do form\n    // load json and  display values\n\n    let tubbies = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"getTubbies\"])();\n    Object.keys(tubbies).forEach((name) =>{\n      document.querySelector(`[data-tubbie='${name}'] .poll__result__amount`).innerHTML = tubbies[name];\n    });\n  }\n})\n\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/helpers.js":
/*!***************************!*\
  !*** ./src/js/helpers.js ***!
  \***************************/
/*! exports provided: updateStorage, setDefaults, getTubbies, setTubbies, getPagePath, enableButton, getCheckedRadio */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateStorage\", function() { return updateStorage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setDefaults\", function() { return setDefaults; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getTubbies\", function() { return getTubbies; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setTubbies\", function() { return setTubbies; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPagePath\", function() { return getPagePath; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"enableButton\", function() { return enableButton; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCheckedRadio\", function() { return getCheckedRadio; });\nconst defaultTubbies = {\n  \"tinky-winky\": 0,\n  \"dipsy\": 0,\n  \"laa-laa\": 0,\n  \"po\": 0\n}\n\n// state functions //\n// ===================== //\nconst updateStorage = tubbieName => {\n  let tubbies = getTubbies();\n  tubbies[tubbieName] += 1;\n  setTubbies(tubbies);\n};\n\nconst setDefaults = () => {\n  setTubbies(defaultTubbies);\n};\n\n// window functions //\n// ===================== //\nconst getTubbies = () => {\n  return JSON.parse(window.localStorage.getItem(`teletubbies`));\n};\n\nconst setTubbies = (tubbies) => {\n  window.localStorage.setItem(`teletubbies`, JSON.stringify(tubbies));\n};\n\nconst getPagePath = () => {\n  return window.location.pathname;\n};\n\n// helper functions //\n// ===================== //\nconst enableButton = (isOff) => {\n  const button = document.querySelector(`.footer .button`);\n  const disabled = `disabled`;\n  if (isOff) {\n    button.classList.remove(`button--${disabled}`);\n    button.removeAttribute(disabled);\n  } else {\n    button.classList.add(`button--${disabled}`);\n    button.setAttribute(disabled, true);\n  }\n};\n\nconst getCheckedRadio = () => {\n  const radios = [...document.getElementsByName(`poll`)];\n  let foundRadio = radios.filter((radio, i) => radio.checked);\n  if(foundRadio[0]) {\n    return foundRadio[0].value.toLowerCase().replace(\" \", \"-\");\n  } else {\n    throw \"No Selected item found! Something went wrong.\";\n  }\n};\n\n\n//# sourceURL=webpack:///./src/js/helpers.js?");

/***/ })

/******/ });