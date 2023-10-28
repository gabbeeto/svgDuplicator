import { modeWindow } from "../../eventListeners";
import { openSettingsWindow } from "../../settings";
import { closeWindow } from "../window/main";

export function displayContentForDefaultRasterMode(){
displayButton()
closeWindow(modeWindow)
}


export function displayContentForDefaultMode(){
displayButton()
closeWindow(modeWindow)
}


export function displayButton(){
let buttonFromTheRightCorner = document.querySelector('body > button');
  buttonFromTheRightCorner.style.display = 'flex';
  buttonFromTheRightCorner.addEventListener('click', openSettingsWindow)


}
