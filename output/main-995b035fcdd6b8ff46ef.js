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
/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.js */ "./input/settings.js");
/* harmony import */ var _functionality_display_customMode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functionality/display/customMode */ "./input/functionality/display/customMode.js");
/* harmony import */ var _functionality_display_defaultMode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./functionality/display/defaultMode */ "./input/functionality/display/defaultMode.js");
/* harmony import */ var _functionality_window_labelWindow_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./functionality/window/labelWindow.js */ "./input/functionality/window/labelWindow.js");








const modeWindow = document.querySelector('#modePopUp');
modeWindow.addEventListener('cancel', preventFromGettingOut);

function preventFromGettingOut(event){
event.preventDefault();
}

modeWindow.showModal();

const defaultModeButton = modeWindow.querySelector('button');
defaultModeButton.addEventListener('click', _functionality_display_defaultMode__WEBPACK_IMPORTED_MODULE_3__.displayContentForDefaultMode);

const customModeButton = modeWindow.querySelector('button:last-of-type');
customModeButton.addEventListener('click', _functionality_display_customMode__WEBPACK_IMPORTED_MODULE_2__.openWindowForLabelsAndDisplayContentForCustomMode);

const applyLabelChanges = document.getElementById('applyLabelChangesButton');
applyLabelChanges.addEventListener('click',_functionality_window_labelWindow_js__WEBPACK_IMPORTED_MODULE_4__.storeLabelChangesInSettings)


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

/***/ "./input/functionality/display/displayContentInMainElement.js":
/*!********************************************************************!*\
  !*** ./input/functionality/display/displayContentInMainElement.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayContent: () => (/* binding */ displayContent)
/* harmony export */ });
/* harmony import */ var _download_downloadFile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../download/downloadFile */ "./input/functionality/download/downloadFile.js");
/* harmony import */ var _upload_uploadFile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../upload/uploadFile */ "./input/functionality/upload/uploadFile.js");



let uploadContainer = document.getElementById('uploadContent');
let displayContainer = document.getElementById('displayContent');
let downloadContainer = document.getElementById('downloadContent');

function displayContent() {
  uploadContainer.innerHTML = label.map(({ name, vector }, index) => {
    return `
  <li data-index='${index}'>
  <p>upload ${name}</p>
  <input type="file" data-vector='${vector}' multiple >
  <button data-index='${index}' data-vector='${vector}'>add ${name}</button>
  </li>`}).join('')

  let allTheButtonsInUploadContainer = uploadContainer.querySelectorAll('button');
  for(let button of allTheButtonsInUploadContainer){
  button.addEventListener('click', _upload_uploadFile__WEBPACK_IMPORTED_MODULE_1__.uploadFiles);
  }

  displayContainer.innerHTML = label.map(({ name, vector }, index) => {
    return `
  <li data-index='${index}'>
    <p>available ${name}</p>
    <select data-index='${index}'></select>
  </li>`}).join('')



  downloadContainer.innerHTML = label.map(({ name, vector }, index) => {
    return `
  <li data-index='${index}'>
    <p>download ${name}</p>
    <button>download ${name}</button>
  </li>`}).join('')

  let allTheButtonsInDownloadContainer = downloadContainer.querySelectorAll('button');

  for(let button of allTheButtonsInDownloadContainer){
  button.addEventListener('click', _download_downloadFile__WEBPACK_IMPORTED_MODULE_0__.downloadFile);
  }

}



/***/ }),

/***/ "./input/functionality/download/downloadFile.js":
/*!******************************************************!*\
  !*** ./input/functionality/download/downloadFile.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   downloadFile: () => (/* binding */ downloadFile)
/* harmony export */ });
function downloadFile(){

alert('download file works');


}


/***/ }),

/***/ "./input/functionality/upload/uploadFile.js":
/*!**************************************************!*\
  !*** ./input/functionality/upload/uploadFile.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   uploadFiles: () => (/* binding */ uploadFiles)
/* harmony export */ });
let labelIndex;
let fileInput;
let svgFiles;
let fileReader;

function uploadFiles() {
  labelIndex = this.dataset.index
  fileInput = document.querySelector(`li[data-index='${labelIndex}'] input`);
  svgFiles = fileInput.files;
  loadSvgDataAndImportAppropiateData()
}


async function loadSvgDataAndImportAppropiateData() {
  // Convert the FileList into an array and iterate
  let files = Array.from(svgFiles).map(file => {

    let reader = new FileReader();
    // Create a new promise
    return new Promise(resolve => {
      // Resolve the promise after reading file
      reader.onload = () => resolve(reader.result);
      // Read the file as a text
      reader.readAsText(file);
    });
  });

  let dataResults = await Promise.all(files);
  parseSvgData(dataResults)
}

function parseSvgData(data) {
  let svgValueOfSelect = document.querySelector('#base').value;
  if (svgValueOfSelect == labelIndex) {
    getBaseForLaterUse(data);
  }
  if (label[labelIndex].vector) {
    data.forEach((currentData, index) => { parseVector(currentData, index) })
  }
  else {
    data.forEach((currentData, index) => { parseRaster(currentData, index) })
  }
}
function getBaseForLaterUse(data) {
  let svgRegex = /<svg[A-Za-z0-9 ="\.:\/]+>/;
  window.mainSvgElement = `${data[0].match(svgRegex)}`;
}











function parseVector(data, index) {
  // get the content inside the group element without the group element
  let groupRegex = new RegExp(`(?<=<g id="${label[labelIndex].name}">)[a-zA-Z0-9 \n\t<="-/\.,>]+(?=<\/g>)`, 'g');
  let groupElement = data.match(groupRegex);

  // get the classes for all the elements inside the group
  let classesRegex = /(?<=class=('|"))[a-zA-Z0-9 \n\t=\.\/#%\^&]+(?=("|'))/gm;
  let classesForGroupElements = `${groupElement}`.match(classesRegex);

  // getting the attributes of the classes of the elements and convert them into a style attribute with all the properties of the class
  let styleElementToReplaceClasses = classesForGroupElements.map(currentClass => {
    let attributeRegex = new RegExp(`(?<=\.${currentClass}( |\n|\t){( |\n|\t))[a-zA-z: \t\n#0-9,\.]+(?=})`, 'g');
    return `style='${data.match(attributeRegex)}'`;
  });

  // seperate all the elements of the group
  let seperateGroupsRegex = /<[a-zA-Z0-9 \n\t=\.\/#%\^&"-]+\/>/gm
  let seperateGroupsElements = `${groupElement}`.match(seperateGroupsRegex);

  // replace all the classes of elements of the seperated group with style attributes containing all the properties of the class
  let groupElementsWithStyleElements = seperateGroupsElements.map((currentClass, index) => {
    let classToReplace = classesForGroupElements[index];
    let classAttributeRegex = RegExp(`class=('|")${classToReplace}('|")`, 'gm');
    let groupElementWithStyleElement = `${currentClass}`.replace(classAttributeRegex, styleElementToReplaceClasses[index])
    return `${groupElementWithStyleElement}`
  })

  // merge all the groups and put it inside the g element in a string
  let groupElementWithGroupContent = `<g id="${index}">${groupElementsWithStyleElements.join(" \n")}</g>`;

  // push to the main label array
  label[labelIndex].content.push({ groupElement: groupElementWithGroupContent })
}












function parseRaster(data, index) {
  let newIdOrHref = `index${index}`;
  // find the 'use' element with regex
  let useRegex = new RegExp(`<use( |\n)id=("|')${label[labelIndex].name}("|')[a-za-z0-9=" #,().]+\/>`, 'g');
  let useElement = data.match(useRegex);

  // extract the 'href' attribute from 'use' element to get the corresponding to get image element id
  let hrefRegex = /(?<=(href|Href|HREF)="#)[ \n,\.#%^&*\(\)a-zA-Z0-9]+(?=")/gm
  let hrefAttribute = `${useElement}`.match(hrefRegex);

  let imageRegex = new RegExp(`<image( |\n|\t)+(width|Width)="[0-9]+"( |\n|\t)+(height|Height)="[0-9]+"( |\n|\t)+id="${hrefAttribute}"[ a-zA-Z=":\/;0-9,+]+\/>`, 'gm');
  let imageElement = data.match(imageRegex);
  //get image element

  // replace id's and href's so we don't mix them up in the future
  const idRemover = /(?<=id=")[a-zA-Z0-9 +%\$\^&*\.\n\t.]+(?=")/gm
  let newImageElement = `${imageElement}`.replace(idRemover, newIdOrHref);
  let newUseElement = `${useElement}`.replace(hrefRegex, newIdOrHref);

  // push to the main label array
  label[labelIndex].content.push({ image: newImageElement, use: newUseElement })
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
/* harmony export */   openLabelWindow: () => (/* binding */ openLabelWindow),
/* harmony export */   storeLabelChangesInSettings: () => (/* binding */ storeLabelChangesInSettings)
/* harmony export */ });
/* harmony import */ var _eventListeners__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../eventListeners */ "./input/eventListeners.js");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../settings */ "./input/settings.js");
/* harmony import */ var _display_displayContentInMainElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../display/displayContentInMainElement */ "./input/functionality/display/displayContentInMainElement.js");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main */ "./input/functionality/window/main.js");
/* harmony import */ var _updateBaseSelectElement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./updateBaseSelectElement */ "./input/functionality/window/updateBaseSelectElement.js");






const labelWindow = document.getElementById('labelPopUp');

function openLabelWindow() {
  (0,_main__WEBPACK_IMPORTED_MODULE_3__.openWindow)(labelWindow);

}

const labelContainer = document.getElementById('labelContainer');
const amountOfLabelInput = document.getElementById('amountOfLabels');
amountOfLabelInput.addEventListener('change', displayTheLabels)

function displayTheLabels() {
  let amountOfLabels = Number(this.value);
  resetTheLabelContainer();
  iterateToCreateAndAppendLabels(amountOfLabels);
  (0,_updateBaseSelectElement__WEBPACK_IMPORTED_MODULE_4__.updateBaseSelect)();
}

function resetTheLabelContainer() {
  labelContainer.innerHTML = '';
}

function iterateToCreateAndAppendLabels(numberOfLabels) {
  for (let index = 0; index < numberOfLabels; index++) {
    let li = document.createElement('li')
    li.dataset.Index = index;

    let labelNameText = document.createElement('p');
    labelNameText.innerText = 'label name:';


    let labelNameInput = document.createElement('input');
    labelNameInput.type = 'text';
    labelNameInput.addEventListener('change', _updateBaseSelectElement__WEBPACK_IMPORTED_MODULE_4__.updateBaseSelect)


    let vectorText = document.createElement('p');
    vectorText.innerText = 'vector:'

    let vectorInput = document.createElement('input');
    vectorInput.type = 'checkbox';

    labelContainer.appendChild(li)
    li.append(labelNameText, labelNameInput, vectorText, vectorInput);
  }
}







// done button function

function storeLabelChangesInSettings() {
  emptyLabel()
  iterateAndPushNewLabels();
  (0,_display_displayContentInMainElement__WEBPACK_IMPORTED_MODULE_2__.displayContent)()
  ;(0,_main__WEBPACK_IMPORTED_MODULE_3__.closeWindow)(labelWindow)
}

function emptyLabel() {
  label = [];
}

function iterateAndPushNewLabels() {
  let labelLists = labelContainer.querySelectorAll('li');

  labelLists.forEach((labelList, index) => {
    let inputValue = labelList.querySelector('input').value
    let isLabelVector = labelList.querySelector(`input[type='checkbox']`).checked;
    let mainSvgIndex = Number(document.querySelector('#base').value);
    if (mainSvgIndex == index) {
      label.push((0,_settings__WEBPACK_IMPORTED_MODULE_1__.Label)(inputValue, isLabelVector, true))
    }
    else {
      label.push((0,_settings__WEBPACK_IMPORTED_MODULE_1__.Label)(inputValue, isLabelVector))
    }
  })
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

/***/ "./input/functionality/window/updateBaseSelectElement.js":
/*!***************************************************************!*\
  !*** ./input/functionality/window/updateBaseSelectElement.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   updateBaseSelect: () => (/* binding */ updateBaseSelect)
/* harmony export */ });
let inputs = document.querySelectorAll(`#labelPopUp input[type='text']`);
let select = document.getElementById('base');
for (let input of inputs) {
  input.addEventListener('change', updateBaseSelect);
}


function updateBaseSelect() {

  inputs = document.querySelectorAll(`#labelPopUp input[type='text']`);
  let options = [];
  inputs.forEach((input, index) => {
    options.push(`<option value="${index}">${input.value}</option>`)
  });
  select.innerHTML = options.join('');
}


/***/ }),

/***/ "./input/settings.js":
/*!***************************!*\
  !*** ./input/settings.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Label: () => (/* binding */ Label)
/* harmony export */ });



function Label(name, vector = true, baseSvg = false, content = []) {
  return { name, vector, content, baseSvg };
}


window.label = [Label('face', false), Label('body')];
window.mainSvgElement = '<svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1300 1300" width="1300" height="1300">';


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aXN0ZW5lcnMuanMiLCJ3ZWJwYWNrOi8vLy4vaW5wdXQvZnVuY3Rpb25hbGl0eS9kaXNwbGF5L2N1c3RvbU1vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vaW5wdXQvZnVuY3Rpb25hbGl0eS9kaXNwbGF5L2RlZmF1bHRNb2RlLmpzIiwid2VicGFjazovLy8uL2lucHV0L2Z1bmN0aW9uYWxpdHkvZGlzcGxheS9kaXNwbGF5Q29udGVudEluTWFpbkVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vaW5wdXQvZnVuY3Rpb25hbGl0eS9kb3dubG9hZC9kb3dubG9hZEZpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vaW5wdXQvZnVuY3Rpb25hbGl0eS91cGxvYWQvdXBsb2FkRmlsZS5qcyIsIndlYnBhY2s6Ly8vLi9pbnB1dC9mdW5jdGlvbmFsaXR5L3dpbmRvdy9sYWJlbFdpbmRvdy5qcyIsIndlYnBhY2s6Ly8vLi9pbnB1dC9mdW5jdGlvbmFsaXR5L3dpbmRvdy9tYWluLmpzIiwid2VicGFjazovLy8uL2lucHV0L2Z1bmN0aW9uYWxpdHkvd2luZG93L3VwZGF0ZUJhc2VTZWxlY3RFbGVtZW50LmpzIiwid2VicGFjazovLy8uL2lucHV0L3NldHRpbmdzLmpzIiwid2VicGFjazovLy8uL2lucHV0L3N0YXJ0aW5nVmFsdWVzLmpzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly8vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovLy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL3N0YXJ0aW5nVmFsdWVzLmpzJztcbmltcG9ydCAnLi9zZXR0aW5ncy5qcyc7XG5cblxuaW1wb3J0IHsgIG9wZW5XaW5kb3dGb3JMYWJlbHNBbmREaXNwbGF5Q29udGVudEZvckN1c3RvbU1vZGUgfSBmcm9tIFwiLi9mdW5jdGlvbmFsaXR5L2Rpc3BsYXkvY3VzdG9tTW9kZVwiO1xuaW1wb3J0IHsgZGlzcGxheUNvbnRlbnRGb3JEZWZhdWx0TW9kZSB9IGZyb20gXCIuL2Z1bmN0aW9uYWxpdHkvZGlzcGxheS9kZWZhdWx0TW9kZVwiO1xuaW1wb3J0IHsgc3RvcmVMYWJlbENoYW5nZXNJblNldHRpbmdzIH0gZnJvbSAnLi9mdW5jdGlvbmFsaXR5L3dpbmRvdy9sYWJlbFdpbmRvdy5qcyc7XG5cbmV4cG9ydCBjb25zdCBtb2RlV2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGVQb3BVcCcpO1xubW9kZVdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjYW5jZWwnLCBwcmV2ZW50RnJvbUdldHRpbmdPdXQpO1xuXG5mdW5jdGlvbiBwcmV2ZW50RnJvbUdldHRpbmdPdXQoZXZlbnQpe1xuZXZlbnQucHJldmVudERlZmF1bHQoKTtcbn1cblxubW9kZVdpbmRvdy5zaG93TW9kYWwoKTtcblxuY29uc3QgZGVmYXVsdE1vZGVCdXR0b24gPSBtb2RlV2luZG93LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpO1xuZGVmYXVsdE1vZGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5Q29udGVudEZvckRlZmF1bHRNb2RlKTtcblxuY29uc3QgY3VzdG9tTW9kZUJ1dHRvbiA9IG1vZGVXaW5kb3cucXVlcnlTZWxlY3RvcignYnV0dG9uOmxhc3Qtb2YtdHlwZScpO1xuY3VzdG9tTW9kZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5XaW5kb3dGb3JMYWJlbHNBbmREaXNwbGF5Q29udGVudEZvckN1c3RvbU1vZGUpO1xuXG5jb25zdCBhcHBseUxhYmVsQ2hhbmdlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHBseUxhYmVsQ2hhbmdlc0J1dHRvbicpO1xuYXBwbHlMYWJlbENoYW5nZXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLHN0b3JlTGFiZWxDaGFuZ2VzSW5TZXR0aW5ncylcbiIsImltcG9ydCB7IG1vZGVXaW5kb3cgfSBmcm9tIFwiLi4vLi4vZXZlbnRMaXN0ZW5lcnNcIjtcbmltcG9ydCB7IG9wZW5MYWJlbFdpbmRvdyB9IGZyb20gXCIuLi93aW5kb3cvbGFiZWxXaW5kb3dcIjtcbmltcG9ydCB7IGNsb3NlV2luZG93IH0gZnJvbSBcIi4uL3dpbmRvdy9tYWluXCI7XG5cblxuXG5leHBvcnQgZnVuY3Rpb24gb3BlbldpbmRvd0ZvckxhYmVsc0FuZERpc3BsYXlDb250ZW50Rm9yQ3VzdG9tTW9kZSgpe1xub3BlbkxhYmVsV2luZG93KClcbmNsb3NlV2luZG93KG1vZGVXaW5kb3cpXG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZGlzcGxheUNvbnRlbnRGb3JEZWZhdWx0TW9kZSgpe1xuYWxlcnQoJ2RlZmF1bHQgbW9kZSBpcyBub3QgeWV0IGF2YWlsYWJsZScpO1xufVxuIiwiaW1wb3J0IHsgZG93bmxvYWRGaWxlIH0gZnJvbSBcIi4uL2Rvd25sb2FkL2Rvd25sb2FkRmlsZVwiO1xuaW1wb3J0IHsgdXBsb2FkRmlsZXMgfSBmcm9tIFwiLi4vdXBsb2FkL3VwbG9hZEZpbGVcIjtcblxubGV0IHVwbG9hZENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1cGxvYWRDb250ZW50Jyk7XG5sZXQgZGlzcGxheUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXNwbGF5Q29udGVudCcpO1xubGV0IGRvd25sb2FkQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rvd25sb2FkQ29udGVudCcpO1xuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheUNvbnRlbnQoKSB7XG4gIHVwbG9hZENvbnRhaW5lci5pbm5lckhUTUwgPSBsYWJlbC5tYXAoKHsgbmFtZSwgdmVjdG9yIH0sIGluZGV4KSA9PiB7XG4gICAgcmV0dXJuIGBcbiAgPGxpIGRhdGEtaW5kZXg9JyR7aW5kZXh9Jz5cbiAgPHA+dXBsb2FkICR7bmFtZX08L3A+XG4gIDxpbnB1dCB0eXBlPVwiZmlsZVwiIGRhdGEtdmVjdG9yPScke3ZlY3Rvcn0nIG11bHRpcGxlID5cbiAgPGJ1dHRvbiBkYXRhLWluZGV4PScke2luZGV4fScgZGF0YS12ZWN0b3I9JyR7dmVjdG9yfSc+YWRkICR7bmFtZX08L2J1dHRvbj5cbiAgPC9saT5gfSkuam9pbignJylcblxuICBsZXQgYWxsVGhlQnV0dG9uc0luVXBsb2FkQ29udGFpbmVyID0gdXBsb2FkQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpO1xuICBmb3IobGV0IGJ1dHRvbiBvZiBhbGxUaGVCdXR0b25zSW5VcGxvYWRDb250YWluZXIpe1xuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB1cGxvYWRGaWxlcyk7XG4gIH1cblxuICBkaXNwbGF5Q29udGFpbmVyLmlubmVySFRNTCA9IGxhYmVsLm1hcCgoeyBuYW1lLCB2ZWN0b3IgfSwgaW5kZXgpID0+IHtcbiAgICByZXR1cm4gYFxuICA8bGkgZGF0YS1pbmRleD0nJHtpbmRleH0nPlxuICAgIDxwPmF2YWlsYWJsZSAke25hbWV9PC9wPlxuICAgIDxzZWxlY3QgZGF0YS1pbmRleD0nJHtpbmRleH0nPjwvc2VsZWN0PlxuICA8L2xpPmB9KS5qb2luKCcnKVxuXG5cblxuICBkb3dubG9hZENvbnRhaW5lci5pbm5lckhUTUwgPSBsYWJlbC5tYXAoKHsgbmFtZSwgdmVjdG9yIH0sIGluZGV4KSA9PiB7XG4gICAgcmV0dXJuIGBcbiAgPGxpIGRhdGEtaW5kZXg9JyR7aW5kZXh9Jz5cbiAgICA8cD5kb3dubG9hZCAke25hbWV9PC9wPlxuICAgIDxidXR0b24+ZG93bmxvYWQgJHtuYW1lfTwvYnV0dG9uPlxuICA8L2xpPmB9KS5qb2luKCcnKVxuXG4gIGxldCBhbGxUaGVCdXR0b25zSW5Eb3dubG9hZENvbnRhaW5lciA9IGRvd25sb2FkQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpO1xuXG4gIGZvcihsZXQgYnV0dG9uIG9mIGFsbFRoZUJ1dHRvbnNJbkRvd25sb2FkQ29udGFpbmVyKXtcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZG93bmxvYWRGaWxlKTtcbiAgfVxuXG59XG5cbiIsImV4cG9ydCBmdW5jdGlvbiBkb3dubG9hZEZpbGUoKXtcblxuYWxlcnQoJ2Rvd25sb2FkIGZpbGUgd29ya3MnKTtcblxuXG59XG4iLCJsZXQgbGFiZWxJbmRleDtcbmxldCBmaWxlSW5wdXQ7XG5sZXQgc3ZnRmlsZXM7XG5sZXQgZmlsZVJlYWRlcjtcblxuZXhwb3J0IGZ1bmN0aW9uIHVwbG9hZEZpbGVzKCkge1xuICBsYWJlbEluZGV4ID0gdGhpcy5kYXRhc2V0LmluZGV4XG4gIGZpbGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxpW2RhdGEtaW5kZXg9JyR7bGFiZWxJbmRleH0nXSBpbnB1dGApO1xuICBzdmdGaWxlcyA9IGZpbGVJbnB1dC5maWxlcztcbiAgbG9hZFN2Z0RhdGFBbmRJbXBvcnRBcHByb3BpYXRlRGF0YSgpXG59XG5cblxuYXN5bmMgZnVuY3Rpb24gbG9hZFN2Z0RhdGFBbmRJbXBvcnRBcHByb3BpYXRlRGF0YSgpIHtcbiAgLy8gQ29udmVydCB0aGUgRmlsZUxpc3QgaW50byBhbiBhcnJheSBhbmQgaXRlcmF0ZVxuICBsZXQgZmlsZXMgPSBBcnJheS5mcm9tKHN2Z0ZpbGVzKS5tYXAoZmlsZSA9PiB7XG5cbiAgICBsZXQgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAvLyBDcmVhdGUgYSBuZXcgcHJvbWlzZVxuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIC8vIFJlc29sdmUgdGhlIHByb21pc2UgYWZ0ZXIgcmVhZGluZyBmaWxlXG4gICAgICByZWFkZXIub25sb2FkID0gKCkgPT4gcmVzb2x2ZShyZWFkZXIucmVzdWx0KTtcbiAgICAgIC8vIFJlYWQgdGhlIGZpbGUgYXMgYSB0ZXh0XG4gICAgICByZWFkZXIucmVhZEFzVGV4dChmaWxlKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgbGV0IGRhdGFSZXN1bHRzID0gYXdhaXQgUHJvbWlzZS5hbGwoZmlsZXMpO1xuICBwYXJzZVN2Z0RhdGEoZGF0YVJlc3VsdHMpXG59XG5cbmZ1bmN0aW9uIHBhcnNlU3ZnRGF0YShkYXRhKSB7XG4gIGxldCBzdmdWYWx1ZU9mU2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Jhc2UnKS52YWx1ZTtcbiAgaWYgKHN2Z1ZhbHVlT2ZTZWxlY3QgPT0gbGFiZWxJbmRleCkge1xuICAgIGdldEJhc2VGb3JMYXRlclVzZShkYXRhKTtcbiAgfVxuICBpZiAobGFiZWxbbGFiZWxJbmRleF0udmVjdG9yKSB7XG4gICAgZGF0YS5mb3JFYWNoKChjdXJyZW50RGF0YSwgaW5kZXgpID0+IHsgcGFyc2VWZWN0b3IoY3VycmVudERhdGEsIGluZGV4KSB9KVxuICB9XG4gIGVsc2Uge1xuICAgIGRhdGEuZm9yRWFjaCgoY3VycmVudERhdGEsIGluZGV4KSA9PiB7IHBhcnNlUmFzdGVyKGN1cnJlbnREYXRhLCBpbmRleCkgfSlcbiAgfVxufVxuZnVuY3Rpb24gZ2V0QmFzZUZvckxhdGVyVXNlKGRhdGEpIHtcbiAgbGV0IHN2Z1JlZ2V4ID0gLzxzdmdbQS1aYS16MC05ID1cIlxcLjpcXC9dKz4vO1xuICB3aW5kb3cubWFpblN2Z0VsZW1lbnQgPSBgJHtkYXRhWzBdLm1hdGNoKHN2Z1JlZ2V4KX1gO1xufVxuXG5cblxuXG5cblxuXG5cblxuXG5cbmZ1bmN0aW9uIHBhcnNlVmVjdG9yKGRhdGEsIGluZGV4KSB7XG4gIC8vIGdldCB0aGUgY29udGVudCBpbnNpZGUgdGhlIGdyb3VwIGVsZW1lbnQgd2l0aG91dCB0aGUgZ3JvdXAgZWxlbWVudFxuICBsZXQgZ3JvdXBSZWdleCA9IG5ldyBSZWdFeHAoYCg/PD08ZyBpZD1cIiR7bGFiZWxbbGFiZWxJbmRleF0ubmFtZX1cIj4pW2EtekEtWjAtOSBcXG5cXHQ8PVwiLS9cXC4sPl0rKD89PFxcL2c+KWAsICdnJyk7XG4gIGxldCBncm91cEVsZW1lbnQgPSBkYXRhLm1hdGNoKGdyb3VwUmVnZXgpO1xuXG4gIC8vIGdldCB0aGUgY2xhc3NlcyBmb3IgYWxsIHRoZSBlbGVtZW50cyBpbnNpZGUgdGhlIGdyb3VwXG4gIGxldCBjbGFzc2VzUmVnZXggPSAvKD88PWNsYXNzPSgnfFwiKSlbYS16QS1aMC05IFxcblxcdD1cXC5cXC8jJVxcXiZdKyg/PShcInwnKSkvZ207XG4gIGxldCBjbGFzc2VzRm9yR3JvdXBFbGVtZW50cyA9IGAke2dyb3VwRWxlbWVudH1gLm1hdGNoKGNsYXNzZXNSZWdleCk7XG5cbiAgLy8gZ2V0dGluZyB0aGUgYXR0cmlidXRlcyBvZiB0aGUgY2xhc3NlcyBvZiB0aGUgZWxlbWVudHMgYW5kIGNvbnZlcnQgdGhlbSBpbnRvIGEgc3R5bGUgYXR0cmlidXRlIHdpdGggYWxsIHRoZSBwcm9wZXJ0aWVzIG9mIHRoZSBjbGFzc1xuICBsZXQgc3R5bGVFbGVtZW50VG9SZXBsYWNlQ2xhc3NlcyA9IGNsYXNzZXNGb3JHcm91cEVsZW1lbnRzLm1hcChjdXJyZW50Q2xhc3MgPT4ge1xuICAgIGxldCBhdHRyaWJ1dGVSZWdleCA9IG5ldyBSZWdFeHAoYCg/PD1cXC4ke2N1cnJlbnRDbGFzc30oIHxcXG58XFx0KXsoIHxcXG58XFx0KSlbYS16QS16OiBcXHRcXG4jMC05LFxcLl0rKD89fSlgLCAnZycpO1xuICAgIHJldHVybiBgc3R5bGU9JyR7ZGF0YS5tYXRjaChhdHRyaWJ1dGVSZWdleCl9J2A7XG4gIH0pO1xuXG4gIC8vIHNlcGVyYXRlIGFsbCB0aGUgZWxlbWVudHMgb2YgdGhlIGdyb3VwXG4gIGxldCBzZXBlcmF0ZUdyb3Vwc1JlZ2V4ID0gLzxbYS16QS1aMC05IFxcblxcdD1cXC5cXC8jJVxcXiZcIi1dK1xcLz4vZ21cbiAgbGV0IHNlcGVyYXRlR3JvdXBzRWxlbWVudHMgPSBgJHtncm91cEVsZW1lbnR9YC5tYXRjaChzZXBlcmF0ZUdyb3Vwc1JlZ2V4KTtcblxuICAvLyByZXBsYWNlIGFsbCB0aGUgY2xhc3NlcyBvZiBlbGVtZW50cyBvZiB0aGUgc2VwZXJhdGVkIGdyb3VwIHdpdGggc3R5bGUgYXR0cmlidXRlcyBjb250YWluaW5nIGFsbCB0aGUgcHJvcGVydGllcyBvZiB0aGUgY2xhc3NcbiAgbGV0IGdyb3VwRWxlbWVudHNXaXRoU3R5bGVFbGVtZW50cyA9IHNlcGVyYXRlR3JvdXBzRWxlbWVudHMubWFwKChjdXJyZW50Q2xhc3MsIGluZGV4KSA9PiB7XG4gICAgbGV0IGNsYXNzVG9SZXBsYWNlID0gY2xhc3Nlc0Zvckdyb3VwRWxlbWVudHNbaW5kZXhdO1xuICAgIGxldCBjbGFzc0F0dHJpYnV0ZVJlZ2V4ID0gUmVnRXhwKGBjbGFzcz0oJ3xcIikke2NsYXNzVG9SZXBsYWNlfSgnfFwiKWAsICdnbScpO1xuICAgIGxldCBncm91cEVsZW1lbnRXaXRoU3R5bGVFbGVtZW50ID0gYCR7Y3VycmVudENsYXNzfWAucmVwbGFjZShjbGFzc0F0dHJpYnV0ZVJlZ2V4LCBzdHlsZUVsZW1lbnRUb1JlcGxhY2VDbGFzc2VzW2luZGV4XSlcbiAgICByZXR1cm4gYCR7Z3JvdXBFbGVtZW50V2l0aFN0eWxlRWxlbWVudH1gXG4gIH0pXG5cbiAgLy8gbWVyZ2UgYWxsIHRoZSBncm91cHMgYW5kIHB1dCBpdCBpbnNpZGUgdGhlIGcgZWxlbWVudCBpbiBhIHN0cmluZ1xuICBsZXQgZ3JvdXBFbGVtZW50V2l0aEdyb3VwQ29udGVudCA9IGA8ZyBpZD1cIiR7aW5kZXh9XCI+JHtncm91cEVsZW1lbnRzV2l0aFN0eWxlRWxlbWVudHMuam9pbihcIiBcXG5cIil9PC9nPmA7XG5cbiAgLy8gcHVzaCB0byB0aGUgbWFpbiBsYWJlbCBhcnJheVxuICBsYWJlbFtsYWJlbEluZGV4XS5jb250ZW50LnB1c2goeyBncm91cEVsZW1lbnQ6IGdyb3VwRWxlbWVudFdpdGhHcm91cENvbnRlbnQgfSlcbn1cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbmZ1bmN0aW9uIHBhcnNlUmFzdGVyKGRhdGEsIGluZGV4KSB7XG4gIGxldCBuZXdJZE9ySHJlZiA9IGBpbmRleCR7aW5kZXh9YDtcbiAgLy8gZmluZCB0aGUgJ3VzZScgZWxlbWVudCB3aXRoIHJlZ2V4XG4gIGxldCB1c2VSZWdleCA9IG5ldyBSZWdFeHAoYDx1c2UoIHxcXG4paWQ9KFwifCcpJHtsYWJlbFtsYWJlbEluZGV4XS5uYW1lfShcInwnKVthLXphLXowLTk9XCIgIywoKS5dK1xcLz5gLCAnZycpO1xuICBsZXQgdXNlRWxlbWVudCA9IGRhdGEubWF0Y2godXNlUmVnZXgpO1xuXG4gIC8vIGV4dHJhY3QgdGhlICdocmVmJyBhdHRyaWJ1dGUgZnJvbSAndXNlJyBlbGVtZW50IHRvIGdldCB0aGUgY29ycmVzcG9uZGluZyB0byBnZXQgaW1hZ2UgZWxlbWVudCBpZFxuICBsZXQgaHJlZlJlZ2V4ID0gLyg/PD0oaHJlZnxIcmVmfEhSRUYpPVwiIylbIFxcbixcXC4jJV4mKlxcKFxcKWEtekEtWjAtOV0rKD89XCIpL2dtXG4gIGxldCBocmVmQXR0cmlidXRlID0gYCR7dXNlRWxlbWVudH1gLm1hdGNoKGhyZWZSZWdleCk7XG5cbiAgbGV0IGltYWdlUmVnZXggPSBuZXcgUmVnRXhwKGA8aW1hZ2UoIHxcXG58XFx0KSsod2lkdGh8V2lkdGgpPVwiWzAtOV0rXCIoIHxcXG58XFx0KSsoaGVpZ2h0fEhlaWdodCk9XCJbMC05XStcIiggfFxcbnxcXHQpK2lkPVwiJHtocmVmQXR0cmlidXRlfVwiWyBhLXpBLVo9XCI6XFwvOzAtOSwrXStcXC8+YCwgJ2dtJyk7XG4gIGxldCBpbWFnZUVsZW1lbnQgPSBkYXRhLm1hdGNoKGltYWdlUmVnZXgpO1xuICAvL2dldCBpbWFnZSBlbGVtZW50XG5cbiAgLy8gcmVwbGFjZSBpZCdzIGFuZCBocmVmJ3Mgc28gd2UgZG9uJ3QgbWl4IHRoZW0gdXAgaW4gdGhlIGZ1dHVyZVxuICBjb25zdCBpZFJlbW92ZXIgPSAvKD88PWlkPVwiKVthLXpBLVowLTkgKyVcXCRcXF4mKlxcLlxcblxcdC5dKyg/PVwiKS9nbVxuICBsZXQgbmV3SW1hZ2VFbGVtZW50ID0gYCR7aW1hZ2VFbGVtZW50fWAucmVwbGFjZShpZFJlbW92ZXIsIG5ld0lkT3JIcmVmKTtcbiAgbGV0IG5ld1VzZUVsZW1lbnQgPSBgJHt1c2VFbGVtZW50fWAucmVwbGFjZShocmVmUmVnZXgsIG5ld0lkT3JIcmVmKTtcblxuICAvLyBwdXNoIHRvIHRoZSBtYWluIGxhYmVsIGFycmF5XG4gIGxhYmVsW2xhYmVsSW5kZXhdLmNvbnRlbnQucHVzaCh7IGltYWdlOiBuZXdJbWFnZUVsZW1lbnQsIHVzZTogbmV3VXNlRWxlbWVudCB9KVxufVxuXG4iLCJpbXBvcnQgeyBhcHBseUxhYmVsQ2hhbmdlcyB9IGZyb20gXCIuLi8uLi9ldmVudExpc3RlbmVyc1wiO1xuaW1wb3J0IHsgTGFiZWwgfSBmcm9tIFwiLi4vLi4vc2V0dGluZ3NcIjtcbmltcG9ydCB7IGRpc3BsYXlDb250ZW50IH0gZnJvbSBcIi4uL2Rpc3BsYXkvZGlzcGxheUNvbnRlbnRJbk1haW5FbGVtZW50XCI7XG5pbXBvcnQgeyBjbG9zZVdpbmRvdywgb3BlbldpbmRvdyB9IGZyb20gXCIuL21haW5cIjtcbmltcG9ydCB7IHVwZGF0ZUJhc2VTZWxlY3QgfSBmcm9tIFwiLi91cGRhdGVCYXNlU2VsZWN0RWxlbWVudFwiO1xuXG5jb25zdCBsYWJlbFdpbmRvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsYWJlbFBvcFVwJyk7XG5cbmV4cG9ydCBmdW5jdGlvbiBvcGVuTGFiZWxXaW5kb3coKSB7XG4gIG9wZW5XaW5kb3cobGFiZWxXaW5kb3cpO1xuXG59XG5cbmNvbnN0IGxhYmVsQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xhYmVsQ29udGFpbmVyJyk7XG5jb25zdCBhbW91bnRPZkxhYmVsSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYW1vdW50T2ZMYWJlbHMnKTtcbmFtb3VudE9mTGFiZWxJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBkaXNwbGF5VGhlTGFiZWxzKVxuXG5mdW5jdGlvbiBkaXNwbGF5VGhlTGFiZWxzKCkge1xuICBsZXQgYW1vdW50T2ZMYWJlbHMgPSBOdW1iZXIodGhpcy52YWx1ZSk7XG4gIHJlc2V0VGhlTGFiZWxDb250YWluZXIoKTtcbiAgaXRlcmF0ZVRvQ3JlYXRlQW5kQXBwZW5kTGFiZWxzKGFtb3VudE9mTGFiZWxzKTtcbiAgdXBkYXRlQmFzZVNlbGVjdCgpO1xufVxuXG5mdW5jdGlvbiByZXNldFRoZUxhYmVsQ29udGFpbmVyKCkge1xuICBsYWJlbENvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbn1cblxuZnVuY3Rpb24gaXRlcmF0ZVRvQ3JlYXRlQW5kQXBwZW5kTGFiZWxzKG51bWJlck9mTGFiZWxzKSB7XG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBudW1iZXJPZkxhYmVsczsgaW5kZXgrKykge1xuICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICBsaS5kYXRhc2V0LkluZGV4ID0gaW5kZXg7XG5cbiAgICBsZXQgbGFiZWxOYW1lVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBsYWJlbE5hbWVUZXh0LmlubmVyVGV4dCA9ICdsYWJlbCBuYW1lOic7XG5cblxuICAgIGxldCBsYWJlbE5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgbGFiZWxOYW1lSW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgICBsYWJlbE5hbWVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB1cGRhdGVCYXNlU2VsZWN0KVxuXG5cbiAgICBsZXQgdmVjdG9yVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB2ZWN0b3JUZXh0LmlubmVyVGV4dCA9ICd2ZWN0b3I6J1xuXG4gICAgbGV0IHZlY3RvcklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB2ZWN0b3JJbnB1dC50eXBlID0gJ2NoZWNrYm94JztcblxuICAgIGxhYmVsQ29udGFpbmVyLmFwcGVuZENoaWxkKGxpKVxuICAgIGxpLmFwcGVuZChsYWJlbE5hbWVUZXh0LCBsYWJlbE5hbWVJbnB1dCwgdmVjdG9yVGV4dCwgdmVjdG9ySW5wdXQpO1xuICB9XG59XG5cblxuXG5cblxuXG5cbi8vIGRvbmUgYnV0dG9uIGZ1bmN0aW9uXG5cbmV4cG9ydCBmdW5jdGlvbiBzdG9yZUxhYmVsQ2hhbmdlc0luU2V0dGluZ3MoKSB7XG4gIGVtcHR5TGFiZWwoKVxuICBpdGVyYXRlQW5kUHVzaE5ld0xhYmVscygpO1xuICBkaXNwbGF5Q29udGVudCgpXG4gIGNsb3NlV2luZG93KGxhYmVsV2luZG93KVxufVxuXG5mdW5jdGlvbiBlbXB0eUxhYmVsKCkge1xuICBsYWJlbCA9IFtdO1xufVxuXG5mdW5jdGlvbiBpdGVyYXRlQW5kUHVzaE5ld0xhYmVscygpIHtcbiAgbGV0IGxhYmVsTGlzdHMgPSBsYWJlbENvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdsaScpO1xuXG4gIGxhYmVsTGlzdHMuZm9yRWFjaCgobGFiZWxMaXN0LCBpbmRleCkgPT4ge1xuICAgIGxldCBpbnB1dFZhbHVlID0gbGFiZWxMaXN0LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykudmFsdWVcbiAgICBsZXQgaXNMYWJlbFZlY3RvciA9IGxhYmVsTGlzdC5xdWVyeVNlbGVjdG9yKGBpbnB1dFt0eXBlPSdjaGVja2JveCddYCkuY2hlY2tlZDtcbiAgICBsZXQgbWFpblN2Z0luZGV4ID0gTnVtYmVyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNiYXNlJykudmFsdWUpO1xuICAgIGlmIChtYWluU3ZnSW5kZXggPT0gaW5kZXgpIHtcbiAgICAgIGxhYmVsLnB1c2goTGFiZWwoaW5wdXRWYWx1ZSwgaXNMYWJlbFZlY3RvciwgdHJ1ZSkpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgbGFiZWwucHVzaChMYWJlbChpbnB1dFZhbHVlLCBpc0xhYmVsVmVjdG9yKSlcbiAgICB9XG4gIH0pXG59XG4iLCJleHBvcnQgZnVuY3Rpb24gb3BlbldpbmRvdyh3aW5kb3dUb1Nob3cpe1xuXG53aW5kb3dUb1Nob3cuc2hvd01vZGFsKCk7XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb3NlV2luZG93KHdpbmRvd1RvQ2xvc2Upe1xud2luZG93VG9DbG9zZS5jbG9zZSgpO1xuXG59XG4iLCJsZXQgaW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgI2xhYmVsUG9wVXAgaW5wdXRbdHlwZT0ndGV4dCddYCk7XG5sZXQgc2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jhc2UnKTtcbmZvciAobGV0IGlucHV0IG9mIGlucHV0cykge1xuICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB1cGRhdGVCYXNlU2VsZWN0KTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlQmFzZVNlbGVjdCgpIHtcblxuICBpbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAjbGFiZWxQb3BVcCBpbnB1dFt0eXBlPSd0ZXh0J11gKTtcbiAgbGV0IG9wdGlvbnMgPSBbXTtcbiAgaW5wdXRzLmZvckVhY2goKGlucHV0LCBpbmRleCkgPT4ge1xuICAgIG9wdGlvbnMucHVzaChgPG9wdGlvbiB2YWx1ZT1cIiR7aW5kZXh9XCI+JHtpbnB1dC52YWx1ZX08L29wdGlvbj5gKVxuICB9KTtcbiAgc2VsZWN0LmlubmVySFRNTCA9IG9wdGlvbnMuam9pbignJyk7XG59XG4iLCJcblxuXG5leHBvcnQgZnVuY3Rpb24gTGFiZWwobmFtZSwgdmVjdG9yID0gdHJ1ZSwgYmFzZVN2ZyA9IGZhbHNlLCBjb250ZW50ID0gW10pIHtcbiAgcmV0dXJuIHsgbmFtZSwgdmVjdG9yLCBjb250ZW50LCBiYXNlU3ZnIH07XG59XG5cblxud2luZG93LmxhYmVsID0gW0xhYmVsKCdmYWNlJywgZmFsc2UpLCBMYWJlbCgnYm9keScpXTtcbndpbmRvdy5tYWluU3ZnRWxlbWVudCA9ICc8c3ZnIHZlcnNpb249XCIxLjJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAxMzAwIDEzMDBcIiB3aWR0aD1cIjEzMDBcIiBoZWlnaHQ9XCIxMzAwXCI+JztcbiIsIi8vIEkgd2FudCB0aGlzIGlucHV0IHRvIGFsd2F5cyBoYXZlIHRoZSB2YWx1ZSBvZiAyIHNvIGl0IGNhbiBtYXRjaCB0aGUgaHRtbCBmaWxlXG5sZXQgbGFiZWxJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbW91bnRPZkxhYmVscycpO1xubGFiZWxJbnB1dC52YWx1ZSA9ICcyJztcblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vaW5wdXQvZXZlbnRMaXN0ZW5lcnMuanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=