import './startingValues.js';
import './settings.js';
import './functionality/appendSvgBody.js'
import './functionality/display/svgSize.js'


import { openWindowForLabelsAndDisplayContentForCustomMode } from "./functionality/display/customMode";
import { displayButton, displayContentForDefaultMode, displayContentForDefaultRasterMode } from "./functionality/display/defaultMode";
import { storeLabelChangesInSettings } from './functionality/window/labelWindow.js';
import { updateOnDisplayer } from './functionality/display/svgDisplayer.js';
import { uploadFiles } from './functionality/upload/uploadFile.js';
import { downloadFile } from './functionality/download/downloadFile.js';
import { displaySvgData } from './functionality/display/displaySvgContent.js';
import { downloadDataFromLabelObject } from './functionality/download/downloadData.js';
import { uploadData } from './functionality/upload/uploadData.js';
import { displayContent } from './functionality/display/displayContentInMainElement.js';

let fileInput;
export const modeWindow = document.querySelector('#modePopUp');
modeWindow.addEventListener('cancel', preventFromGettingOut);

function preventFromGettingOut(event) {
  event.preventDefault();
}

// if data is stored in the local Storage, update the Label Variable
if (localStorage.labelAndFileNames) {

  let localStorageLabel = JSON.parse(localStorage.labelAndFileNames);
  console.log(localStorageLabel);
  window.label = localStorageLabel[0];
  window.fileNames = localStorageLabel[1];


  displayContent();
  for (let index = 0;index < label.length;index++) {
    window.labelIndex = index;
    console.log(labelIndex);
    displaySvgData();
  }
  displayButton();
}
else {
  modeWindow.showModal();
}



const defaultRasterModeButton = modeWindow.querySelector('button');
defaultRasterModeButton.addEventListener('click', displayContentForDefaultRasterMode);


const defaultModeButton = modeWindow.querySelector('button:nth-of-type(2)');
defaultModeButton.addEventListener('click', displayContentForDefaultMode);

const customModeButton = modeWindow.querySelector('button:last-of-type');
customModeButton.addEventListener('click', openWindowForLabelsAndDisplayContentForCustomMode);

const applyLabelChanges = document.getElementById('applyLabelChangesButton');
applyLabelChanges.addEventListener('click', storeLabelChangesInSettings)


const downloadDataButton = document.querySelector('#downloadContainer > button');
downloadDataButton.addEventListener('click',downloadDataFromLabelObject);

const uploadDataInput = document.querySelector(`#downloadContainer > input[type='file']`);
uploadDataInput.addEventListener('change', uploadData)

// html content event listener section
let uploadFaceButton = document.querySelector('#uploadContent button');
let uploadBodyButton = document.querySelector(`#uploadContent  button[data-index="1"]`);
uploadFaceButton.addEventListener('click', uploadFiles)
uploadBodyButton.addEventListener('click', uploadFiles)


let faceSelect = document.querySelector('#displayContent select');
let bodySelect = document.querySelector('#displayContent select[data-index="1"]');
faceSelect.addEventListener('change', updateOnDisplayer);
bodySelect.addEventListener('change', updateOnDisplayer);


let downloadFaceButton = document.querySelector('#downloadContent button');
let downloadBodyButton = document.querySelector('#downloadContent button[data-index="1"]');
downloadFaceButton.addEventListener('click', downloadFile);
downloadBodyButton.addEventListener('click', downloadFile);

