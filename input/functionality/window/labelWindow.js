import { applyLabelChanges } from "../../eventListeners";
import { Label } from "../../settings";
import { displayContent } from "../display/displayContentInMainElement";
import { closeWindow, openWindow } from "./main";
import { updateBaseSelect } from "./updateBaseSelectElement";

const labelWindow = document.getElementById('labelPopUp');

export function openLabelWindow() {
  openWindow(labelWindow);

}

const labelContainer = document.getElementById('labelContainer');
const amountOfLabelInput = document.getElementById('amountOfLabels');
amountOfLabelInput.addEventListener('change', displayTheLabels)

function displayTheLabels() {
  let amountOfLabels = Number(this.value);
  resetTheLabelContainer();
  iterateToCreateAndAppendLabels(amountOfLabels);
  updateBaseSelect();
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
    labelNameInput.addEventListener('change', updateBaseSelect)


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
  label = [];
}

function iterateAndPushNewLabels() {
  let labelLists = labelContainer.querySelectorAll('li');

  labelLists.forEach((labelList, index) => {
    let inputValue = labelList.querySelector('input').value
    let isLabelVector = labelList.querySelector(`input[type='checkbox']`).checked;
    let mainSvgIndex = Number(document.querySelector('#base').value);
    if (mainSvgIndex == index) {
      label.push(Label(inputValue, isLabelVector, true))
    }
    else {
      label.push(Label(inputValue, isLabelVector))
    }
  })
}
