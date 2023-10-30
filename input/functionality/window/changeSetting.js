import { displayLabels } from "../../eventListeners";
import { Label, changeContentInSettingsWindow } from "../../settings";
import { displayContent } from "../display/displayContentInMainElement";
import { closeWindow } from "./main";

export function applyChanges() {
  let articles = document.querySelectorAll(`#containerForLabelContent article`);
  articles.forEach((article, index) => {
    let name = article.querySelector(`input[type='text']`).value
    let vector = article.querySelector(`input[type='checkbox']`).checked

    let currentLabel = label[index];
    currentLabel.name = name;
    currentLabel.vector = vector;
  });

  displayLabels();
closeWindow(document.querySelector('#settingsWindow'));
}



export function addNewLabel() {
  let newLabelContainer = document.querySelector('#newLabelPart');
  let vector = newLabelContainer.querySelector(`input[type='checkbox']`).checked;
  let labelName = document.querySelector(`#newLabelName`).value;
  window.label.push(Label(labelName, vector));
  window.fileNames.push([]);
  changeContentInSettingsWindow();
  displayLabels();
}

