import { displayLabels } from "../../eventListeners";
import { Label, changeContentInSettingsWindow } from "../../settings";
import { displayContent } from "../display/displayContentInMainElement";

export function applyChanges(){
alert('this works');
}



export function addNewLabel(){
let newLabelContainer = document.querySelector('#newLabelPart');
let vector = newLabelContainer.querySelector(`input[type='checkbox']`).checked;
let labelName =  document.querySelector(`#newLabelName`).value;
window.label.push(Label(labelName,vector));
window.fileNames.push([]);
changeContentInSettingsWindow();
displayLabels();
}

