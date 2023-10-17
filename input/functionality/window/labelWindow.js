import { applyLabelChanges } from "../../eventListeners";
import { Label } from "../../settings";
import { displayContent } from "../display/displayContentInMainElement";
import { closeWindow, openWindow } from "./main";

const labelWindow = document.getElementById('labelPopUp');

export function openLabelWindow() {
  openWindow(labelWindow);

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
    li.dataset.Index = index;

    let labelNameText = document.createElement('p');
    labelNameText.innerText = 'label name:';


    let labelNameInput = document.createElement('input');


    let vectorText = document.createElement('p');
    vectorText.innerText = 'vector:'

    let vectorInput = document.createElement('input');
    vectorInput.type = 'checkbox';

    labelContainer.appendChild(li)
    li.append(labelNameText, labelNameInput, vectorText, vectorInput);
  }
}







// done button function

export function storeLabelChangesInSettings() {
  emptyLabel()
  iterateAndPushNewLabels();
  displayContent()
  closeWindow(labelWindow)
}

function emptyLabel() {
  labelSetting = [];
}

function iterateAndPushNewLabels() {
  let labelLists = labelContainer.querySelectorAll('li');

  for (let labelList of labelLists) {
    let inputValue = labelList.querySelector('input').value
    let isLabelVector = labelList.querySelector(`input[type='checkbox']`).checked;

    labelSetting.push(Label(inputValue, isLabelVector))
  }
}
