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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor_ios_vh_fix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor/ios-vh-fix */ "./js/vendor/ios-vh-fix.js");
/* harmony import */ var _vendor_toggle_info__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vendor/toggle-info */ "./js/vendor/toggle-info.js");
/* harmony import */ var _vendor_popup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vendor/popup */ "./js/vendor/popup.js");
/* harmony import */ var _vendor_sendData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vendor/sendData */ "./js/vendor/sendData.js");



 // ---------------------------------

window.addEventListener('DOMContentLoaded', function () {
  // Utils
  // ---------------------------------
  Object(_vendor_ios_vh_fix__WEBPACK_IMPORTED_MODULE_0__["iosVhFix"])();
  Object(_vendor_toggle_info__WEBPACK_IMPORTED_MODULE_1__["toggle"])();
  Object(_vendor_popup__WEBPACK_IMPORTED_MODULE_2__["popup"])();
  Object(_vendor_sendData__WEBPACK_IMPORTED_MODULE_3__["sendData"])();
}); // ---------------------------------
// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.
// привязывайте js не на классы, а на дата атрибуты (data-validate)
// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅
// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.
// для адаптивного JS используейтся matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();
// используйте .closest(el)

/***/ }),

/***/ "./js/vendor/ios-checker.js":
/*!**********************************!*\
  !*** ./js/vendor/ios-checker.js ***!
  \**********************************/
/*! exports provided: iosChecker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iosChecker", function() { return iosChecker; });
var iosChecker = function iosChecker() {
  return ['iPad Simulator', 'iPhone Simulator', 'iPod Simulator', 'iPad', 'iPhone', 'iPod'].includes(navigator.platform) // iPad on iOS 13 detection
  || navigator.userAgent.includes('Mac') && 'ontouchend' in document;
};

/***/ }),

/***/ "./js/vendor/ios-vh-fix.js":
/*!*********************************!*\
  !*** ./js/vendor/ios-vh-fix.js ***!
  \*********************************/
/*! exports provided: iosVhFix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iosVhFix", function() { return iosVhFix; });
/* harmony import */ var _ios_checker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ios-checker */ "./js/vendor/ios-checker.js");


var iosVhFix = function iosVhFix() {
  if (!(!!window.MSInputMethodContext && !!document.documentMode)) {
    if (Object(_ios_checker__WEBPACK_IMPORTED_MODULE_0__["iosChecker"])()) {
      var vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
      window.addEventListener('resize', function () {
        vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
      });
    }
  }
};



/***/ }),

/***/ "./js/vendor/popup.js":
/*!****************************!*\
  !*** ./js/vendor/popup.js ***!
  \****************************/
/*! exports provided: popup, popupSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "popup", function() { return popup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "popupSuccess", function() { return popupSuccess; });
var body = document.querySelector('body');
var callBtn = document.querySelector('.page__header-call-btn');
var popupContainer = document.querySelector('.popup');
var closeBtn = document.querySelector('.popup__close');

function popup() {
  closeBtn.addEventListener('click', function () {
    popupContainer.classList.add('visually-hidden');
    body.classList.remove('scroll-lock');
  });
  callBtn.addEventListener('click', function () {
    window.scrollTo(0, 0);
    setTimeout(function () {
      popupContainer.classList.remove('visually-hidden');
      body.classList.add('scroll-lock');
    }, 500);
  });
}

function popupSuccess() {
  popupContainer.classList.add('visually-hidden');
  body.classList.remove('scroll-lock');
}




/***/ }),

/***/ "./js/vendor/sendData.js":
/*!*******************************!*\
  !*** ./js/vendor/sendData.js ***!
  \*******************************/
/*! exports provided: sendData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendData", function() { return sendData; });
/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popup */ "./js/vendor/popup.js");


function sendData() {
  var sendBtn = document.querySelector('.popup__send-button');
  var inputName = document.getElementById('popup__name');
  var inputPhone = document.getElementById('popup__phone');
  var inputCheckbox = document.getElementById('checkbox-popup');
  var alertWrapper = document.querySelector('.alert');
  var alertError = document.querySelector('.alert__error');
  var questionButton = document.getElementById('questions__button');
  var questionName = document.getElementById('questions__name');
  var questionPhone = document.getElementById('questions__phone');
  var questionCheckbox = document.getElementById('checkbox-form');
  var questionText = document.getElementById('questions__text');
  var popupText = document.getElementById('popup__text');
  var regex = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
  var newName = '';
  var newPhone = '';

  function send(data) {
    fetch('https://echo.htmlacademy.ru/', {
      method: 'POST',
      body: JSON.stringify(data)
    });
  }

  sendBtn.addEventListener('click', function () {
    if (regex.test(inputPhone.value)) {
      newPhone = inputPhone.value;
    } else {
      newPhone = '';
    }

    if (inputName.value) {
      newName = inputName.value;
    } else {
      newName = '';
    }

    if (newName && newPhone && inputCheckbox.checked) {
      send({
        name: newName,
        phone: newPhone
      });
      Object(_popup__WEBPACK_IMPORTED_MODULE_0__["popupSuccess"])();
      inputPhone.value = '';
      inputName.value = '';
      inputCheckbox.checked = false;
      popupText.value = '';
      alertWrapper.style.display = 'block';
      setTimeout(function () {
        alertWrapper.style.display = 'none';
      }, 1000);
    } else {
      alertError.style.display = 'block';
      setTimeout(function () {
        alertError.style.display = 'none';
      }, 1000);
    }
  });
  questionButton.addEventListener('click', function () {
    if (regex.test(questionPhone.value)) {
      newPhone = questionPhone.value;
    } else {
      newPhone = '';
    }

    if (questionName.value) {
      newName = questionName.value;
    } else {
      newName = '';
    }

    if (newName && newPhone && questionCheckbox.checked) {
      send({
        name: newName,
        phone: newPhone
      });
      Object(_popup__WEBPACK_IMPORTED_MODULE_0__["popupSuccess"])();
      alertWrapper.style.display = 'block';
      questionPhone.value = '';
      questionName.value = '';
      questionText.value = '';
      questionCheckbox.checked = false;
      setTimeout(function () {
        alertWrapper.style.display = 'none';
      }, 1000);
    } else {
      alertError.style.display = 'block';
      setTimeout(function () {
        alertError.style.display = 'none';
      }, 1000);
    }
  });
}



/***/ }),

/***/ "./js/vendor/toggle-info.js":
/*!**********************************!*\
  !*** ./js/vendor/toggle-info.js ***!
  \**********************************/
/*! exports provided: toggle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggle", function() { return toggle; });
function toggle() {
  var companyButton = document.querySelector('.info__company-more-btn');
  var accordion = document.querySelector('.info__company-description--accordion');
  var mobileText = document.querySelector('.info__company-text--mobile');
  var footerButtonSections = document.querySelector('.site__show-more');
  var footer = document.querySelector('.footer');
  var footerContainerSections = document.querySelector('.footer__sections-list');
  var footerButtonPhones = document.querySelector('.phones__show-more');
  var footerContainerPhones = document.querySelector('.footer__contacts-list');
  var adress = document.querySelector('.footer__contacts-adress');
  footerButtonPhones.classList.remove('phones__show-more--opened');
  footerContainerPhones.classList.remove('footer__contacts-list--opened');
  adress.classList.remove('footer__contacts-adress--opened');
  footerButtonSections.classList.remove('site__show-more--opened');
  footerContainerSections.classList.remove('footer__sections-list--opened');
  footer.classList.add('footer--js');
  accordion.classList.remove('info__company-description--opened');
  accordion.classList.add('info__company-description--hidden');
  companyButton.classList.remove('info__company-more-btn--hidden');
  mobileText.classList.remove('info__company-text--mobile--opened');
  companyButton.addEventListener('click', function () {
    mobileText.classList.toggle('info__company-text--mobile--opened');
    accordion.classList.toggle('info__company-description--opened');

    if (companyButton.textContent === 'Подробнее') {
      companyButton.textContent = 'Свернуть';
    } else {
      companyButton.textContent = 'Подробнее';
    }
  });
  footerButtonSections.addEventListener('click', function () {
    if (footerContainerPhones.classList.contains('footer__contacts-list--opened')) {
      footerButtonPhones.classList.remove('phones__show-more--opened');
      footerContainerPhones.classList.remove('footer__contacts-list--opened');
      adress.classList.remove('footer__contacts-adress--opened');
    }

    footerButtonSections.classList.toggle('site__show-more--opened');
    footerContainerSections.classList.toggle('footer__sections-list--opened');
  });
  footerButtonPhones.addEventListener('click', function () {
    if (footerContainerSections.classList.contains('footer__sections-list--opened')) {
      footerButtonSections.classList.remove('site__show-more--opened');
      footerContainerSections.classList.remove('footer__sections-list--opened');
    }

    adress.classList.toggle('footer__contacts-adress--opened');
    footerContainerPhones.classList.toggle('footer__contacts-list--opened');
    footerButtonPhones.classList.toggle('phones__show-more--opened');
  });
}



/***/ })

/******/ });