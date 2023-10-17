import { modeWindow } from "../../eventListeners";
import { openLabelWindow } from "../window/labelWindow";
import { closeWindow } from "../window/main";



export function openWindowForLabelsAndDisplayContentForCustomMode(){
openLabelWindow()
closeWindow(modeWindow)

}
