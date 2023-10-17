/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./input/eventListeners.js":
/*!*********************************!*\
  !*** ./input/eventListeners.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   modeWindow: () => (/* binding */ modeWindow)
/* harmony export */ });
/* harmony import */ var _startingValues_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startingValues.js */ "./input/startingValues.js");
/* harmony import */ var _startingValues_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_startingValues_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _functionality_display_customMode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functionality/display/customMode */ "./input/functionality/display/customMode.js");
/* harmony import */ var _functionality_display_defaultMode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functionality/display/defaultMode */ "./input/functionality/display/defaultMode.js");






const modeWindow = document.querySelector('#modePopUp');
modeWindow.addEventListener('cancel', preventFromGettingOut);

function preventFromGettingOut(event){
event.preventDefault();
}

modeWindow.showModal();

const defaultModeButton = modeWindow.querySelector('button');
defaultModeButton.addEventListener('click', _functionality_display_defaultMode__WEBPACK_IMPORTED_MODULE_2__.displayContentForDefaultMode);

const customModeButton = modeWindow.querySelector('button:last-of-type');
customModeButton.addEventListener('click', _functionality_display_customMode__WEBPACK_IMPORTED_MODULE_1__.openWindowForLabelsAndDisplayContentForCustomMode);


/***/ }),

/***/ "./input/functionality/display/customMode.js":
/*!***************************************************!*\
  !*** ./input/functionality/display/customMode.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   openWindowForLabelsAndDisplayContentForCustomMode: () => (/* binding */ openWindowForLabelsAndDisplayContentForCustomMode)
/* harmony export */ });
/* harmony import */ var _eventListeners__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../eventListeners */ "./input/eventListeners.js");
/* harmony import */ var _window_labelWindow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../window/labelWindow */ "./input/functionality/window/labelWindow.js");
/* harmony import */ var _window_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../window/main */ "./input/functionality/window/main.js");






function openWindowForLabelsAndDisplayContentForCustomMode(){
(0,_window_labelWindow__WEBPACK_IMPORTED_MODULE_1__.openLabelWindow)()
;(0,_window_main__WEBPACK_IMPORTED_MODULE_2__.closeWindow)(_eventListeners__WEBPACK_IMPORTED_MODULE_0__.modeWindow)

}


/***/ }),

/***/ "./input/functionality/display/defaultMode.js":
/*!****************************************************!*\
  !*** ./input/functionality/display/defaultMode.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayContentForDefaultMode: () => (/* binding */ displayContentForDefaultMode)
/* harmony export */ });
function displayContentForDefaultMode(){
alert('default mode is not yet available');
}


/***/ }),

/***/ "./input/functionality/window/labelWindow.js":
/*!***************************************************!*\
  !*** ./input/functionality/window/labelWindow.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   openLabelWindow: () => (/* binding */ openLabelWindow)
/* harmony export */ });
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ "./input/functionality/window/main.js");


const labelWindow = document.getElementById('labelPopUp');

function openLabelWindow() {
  (0,_main__WEBPACK_IMPORTED_MODULE_0__.openWindow)(labelWindow);

}

const labelContainer = document.getElementById('labelContainer');
const amountOfLabelInput = document.getElementById('amountOfLabels');
amountOfLabelInput.addEventListener('change', displayTheLabels)

function displayTheLabels() {
  let amountOfLabels = Number(this.value);
  resetTheLabelContainer()
  iterateToCreateAndAppendLabels(amountOfLabels)
}

function resetTheLabelContainer() {
  labelContainer.innerHTML = '';
}

function iterateToCreateAndAppendLabels(numberOfLabels) {
  for (let index = 0; index < numberOfLabels; index++) {
    let li = document.createElement('li')

    let text = document.createElement('p');
    text.innerText = 'label name:';

    let userInput = document.createElement('input');
    userInput.dataset.index = index;
    labelContainer.appendChild(li)
    li.append(text, userInput);
  }
}


/***/ }),

/***/ "./input/functionality/window/main.js":
/*!********************************************!*\
  !*** ./input/functionality/window/main.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   closeWindow: () => (/* binding */ closeWindow),
/* harmony export */   openWindow: () => (/* binding */ openWindow)
/* harmony export */ });
function openWindow(windowToShow){

windowToShow.showModal();

}

function closeWindow(windowToClose){
windowToClose.close();

}


/***/ }),

/***/ "./input/startingValues.js":
/*!*********************************!*\
  !*** ./input/startingValues.js ***!
  \*********************************/
/***/ (() => {

// I want this input to always have the value of 2 so it can match the html file
let labelInput = document.getElementById('amountOfLabels');
labelInput.value = '2';


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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./input/eventListeners.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1mZTc2ODBkMTg0NDk2MTJhOWI3Yi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNkI7OztBQUcyRTtBQUNyQjs7QUFFNUU7QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSw0Q0FBNEMsNEZBQTRCOztBQUV4RTtBQUNBLDJDQUEyQyxnSEFBaUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQjFDO0FBQ007QUFDWDs7OztBQUl0QztBQUNQLG9FQUFlO0FBQ2YsMERBQVcsQ0FBQyx1REFBVTs7QUFFdEI7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWTztBQUNQO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRm9DOztBQUVwQzs7QUFFTztBQUNQLEVBQUUsaURBQVU7O0FBRVo7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLHdCQUF3QjtBQUM5Qzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQ087O0FBRVA7O0FBRUE7O0FBRU87QUFDUDs7QUFFQTs7Ozs7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7Ozs7Ozs7VUNGQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2lucHV0L2V2ZW50TGlzdGVuZXJzLmpzIiwid2VicGFjazovLy8uL2lucHV0L2Z1bmN0aW9uYWxpdHkvZGlzcGxheS9jdXN0b21Nb2RlLmpzIiwid2VicGFjazovLy8uL2lucHV0L2Z1bmN0aW9uYWxpdHkvZGlzcGxheS9kZWZhdWx0TW9kZS5qcyIsIndlYnBhY2s6Ly8vLi9pbnB1dC9mdW5jdGlvbmFsaXR5L3dpbmRvdy9sYWJlbFdpbmRvdy5qcyIsIndlYnBhY2s6Ly8vLi9pbnB1dC9mdW5jdGlvbmFsaXR5L3dpbmRvdy9tYWluLmpzIiwid2VicGFjazovLy8uL2lucHV0L3N0YXJ0aW5nVmFsdWVzLmpzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly8vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovLy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL3N0YXJ0aW5nVmFsdWVzLmpzJztcblxuXG5pbXBvcnQgeyAgb3BlbldpbmRvd0ZvckxhYmVsc0FuZERpc3BsYXlDb250ZW50Rm9yQ3VzdG9tTW9kZSB9IGZyb20gXCIuL2Z1bmN0aW9uYWxpdHkvZGlzcGxheS9jdXN0b21Nb2RlXCI7XG5pbXBvcnQgeyBkaXNwbGF5Q29udGVudEZvckRlZmF1bHRNb2RlIH0gZnJvbSBcIi4vZnVuY3Rpb25hbGl0eS9kaXNwbGF5L2RlZmF1bHRNb2RlXCI7XG5cbmV4cG9ydCBjb25zdCBtb2RlV2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGVQb3BVcCcpO1xubW9kZVdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjYW5jZWwnLCBwcmV2ZW50RnJvbUdldHRpbmdPdXQpO1xuXG5mdW5jdGlvbiBwcmV2ZW50RnJvbUdldHRpbmdPdXQoZXZlbnQpe1xuZXZlbnQucHJldmVudERlZmF1bHQoKTtcbn1cblxubW9kZVdpbmRvdy5zaG93TW9kYWwoKTtcblxuY29uc3QgZGVmYXVsdE1vZGVCdXR0b24gPSBtb2RlV2luZG93LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpO1xuZGVmYXVsdE1vZGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5Q29udGVudEZvckRlZmF1bHRNb2RlKTtcblxuY29uc3QgY3VzdG9tTW9kZUJ1dHRvbiA9IG1vZGVXaW5kb3cucXVlcnlTZWxlY3RvcignYnV0dG9uOmxhc3Qtb2YtdHlwZScpO1xuY3VzdG9tTW9kZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5XaW5kb3dGb3JMYWJlbHNBbmREaXNwbGF5Q29udGVudEZvckN1c3RvbU1vZGUpO1xuIiwiaW1wb3J0IHsgbW9kZVdpbmRvdyB9IGZyb20gXCIuLi8uLi9ldmVudExpc3RlbmVyc1wiO1xuaW1wb3J0IHsgb3BlbkxhYmVsV2luZG93IH0gZnJvbSBcIi4uL3dpbmRvdy9sYWJlbFdpbmRvd1wiO1xuaW1wb3J0IHsgY2xvc2VXaW5kb3cgfSBmcm9tIFwiLi4vd2luZG93L21haW5cIjtcblxuXG5cbmV4cG9ydCBmdW5jdGlvbiBvcGVuV2luZG93Rm9yTGFiZWxzQW5kRGlzcGxheUNvbnRlbnRGb3JDdXN0b21Nb2RlKCl7XG5vcGVuTGFiZWxXaW5kb3coKVxuY2xvc2VXaW5kb3cobW9kZVdpbmRvdylcblxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlDb250ZW50Rm9yRGVmYXVsdE1vZGUoKXtcbmFsZXJ0KCdkZWZhdWx0IG1vZGUgaXMgbm90IHlldCBhdmFpbGFibGUnKTtcbn1cbiIsImltcG9ydCB7IG9wZW5XaW5kb3cgfSBmcm9tIFwiLi9tYWluXCI7XG5cbmNvbnN0IGxhYmVsV2luZG93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xhYmVsUG9wVXAnKTtcblxuZXhwb3J0IGZ1bmN0aW9uIG9wZW5MYWJlbFdpbmRvdygpIHtcbiAgb3BlbldpbmRvdyhsYWJlbFdpbmRvdyk7XG5cbn1cblxuY29uc3QgbGFiZWxDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGFiZWxDb250YWluZXInKTtcbmNvbnN0IGFtb3VudE9mTGFiZWxJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbW91bnRPZkxhYmVscycpO1xuYW1vdW50T2ZMYWJlbElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGRpc3BsYXlUaGVMYWJlbHMpXG5cbmZ1bmN0aW9uIGRpc3BsYXlUaGVMYWJlbHMoKSB7XG4gIGxldCBhbW91bnRPZkxhYmVscyA9IE51bWJlcih0aGlzLnZhbHVlKTtcbiAgcmVzZXRUaGVMYWJlbENvbnRhaW5lcigpXG4gIGl0ZXJhdGVUb0NyZWF0ZUFuZEFwcGVuZExhYmVscyhhbW91bnRPZkxhYmVscylcbn1cblxuZnVuY3Rpb24gcmVzZXRUaGVMYWJlbENvbnRhaW5lcigpIHtcbiAgbGFiZWxDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG59XG5cbmZ1bmN0aW9uIGl0ZXJhdGVUb0NyZWF0ZUFuZEFwcGVuZExhYmVscyhudW1iZXJPZkxhYmVscykge1xuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbnVtYmVyT2ZMYWJlbHM7IGluZGV4KyspIHtcbiAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG5cbiAgICBsZXQgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0ZXh0LmlubmVyVGV4dCA9ICdsYWJlbCBuYW1lOic7XG5cbiAgICBsZXQgdXNlcklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB1c2VySW5wdXQuZGF0YXNldC5pbmRleCA9IGluZGV4O1xuICAgIGxhYmVsQ29udGFpbmVyLmFwcGVuZENoaWxkKGxpKVxuICAgIGxpLmFwcGVuZCh0ZXh0LCB1c2VySW5wdXQpO1xuICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gb3BlbldpbmRvdyh3aW5kb3dUb1Nob3cpe1xuXG53aW5kb3dUb1Nob3cuc2hvd01vZGFsKCk7XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb3NlV2luZG93KHdpbmRvd1RvQ2xvc2Upe1xud2luZG93VG9DbG9zZS5jbG9zZSgpO1xuXG59XG4iLCIvLyBJIHdhbnQgdGhpcyBpbnB1dCB0byBhbHdheXMgaGF2ZSB0aGUgdmFsdWUgb2YgMiBzbyBpdCBjYW4gbWF0Y2ggdGhlIGh0bWwgZmlsZVxubGV0IGxhYmVsSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYW1vdW50T2ZMYWJlbHMnKTtcbmxhYmVsSW5wdXQudmFsdWUgPSAnMic7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9pbnB1dC9ldmVudExpc3RlbmVycy5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==