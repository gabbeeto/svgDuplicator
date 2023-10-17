import './startingValues.js';
import './settings.js';


import {  openWindowForLabelsAndDisplayContentForCustomMode } from "./functionality/display/customMode";
import { displayContentForDefaultMode } from "./functionality/display/defaultMode";
import { storeLabelChangesInSettings } from './functionality/window/labelWindow.js';

export const modeWindow = document.querySelector('#modePopUp');
modeWindow.addEventListener('cancel', preventFromGettingOut);

function preventFromGettingOut(event){
event.preventDefault();
}

modeWindow.showModal();

const defaultModeButton = modeWindow.querySelector('button');
defaultModeButton.addEventListener('click', displayContentForDefaultMode);

const customModeButton = modeWindow.querySelector('button:last-of-type');
customModeButton.addEventListener('click', openWindowForLabelsAndDisplayContentForCustomMode);

const applyLabelChanges = document.getElementById('applyLabelChangesButton');
applyLabelChanges.addEventListener('click',storeLabelChangesInSettings)
