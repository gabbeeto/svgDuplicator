import './startingValues.js';
import './settings.js';


import { openWindowForLabelsAndDisplayContentForCustomMode } from "./functionality/display/customMode";
import { displayContentForDefaultMode, displayContentForDefaultRasterMode } from "./functionality/display/defaultMode";
import { storeLabelChangesInSettings } from './functionality/window/labelWindow.js';

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
