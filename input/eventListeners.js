import './startingValues.js';
import './settings.js';
import './functionality/appendSvgBody.js'
import './functionality/display/svgSize.js'


import { openWindowForLabelsAndDisplayContentForCustomMode } from "./functionality/display/customMode";
import { displayContentForDefaultMode, displayContentForDefaultRasterMode } from "./functionality/display/defaultMode";
import { storeLabelChangesInSettings } from './functionality/window/labelWindow.js';
import { updateOnDisplayer } from './functionality/display/svgDisplayer.js';
import { uploadFiles } from './functionality/upload/uploadFile.js';
import { downloadFile } from './functionality/download/downloadFile.js';

export const modeWindow = document.querySelector('#modePopUp');
modeWindow.addEventListener('cancel', preventFromGettingOut);

function preventFromGettingOut(event) {
  event.preventDefault();
}

modeWindow.showModal();

const defaultRasterModeButton = modeWindow.querySelector('button');
defaultRasterModeButton.addEventListener('click', displayContentForDefaultRasterMode);


const defaultModeButton = modeWindow.querySelector('button:nth-of-type(2)');
defaultModeButton.addEventListener('click', displayContentForDefaultMode);

const customModeButton = modeWindow.querySelector('button:last-of-type');
customModeButton.addEventListener('click', openWindowForLabelsAndDisplayContentForCustomMode);

const applyLabelChanges = document.getElementById('applyLabelChangesButton');
applyLabelChanges.addEventListener('click', storeLabelChangesInSettings)



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

