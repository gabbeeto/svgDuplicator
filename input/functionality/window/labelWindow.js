import { openWindow } from "./main";

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

    let text = document.createElement('p');
    text.innerText = 'label name:';

    let userInput = document.createElement('input');
    userInput.dataset.index = index;
    labelContainer.appendChild(li)
    li.append(text, userInput);
  }
}
