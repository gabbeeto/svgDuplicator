import { displayLabels } from "../../eventListeners";

export function uploadData() {

  let file = document.querySelector(`#downloadContainer input[type='file']`).files[0];

  let reader = new FileReader();
  reader.readAsText(file);
  reader.onload = (() => {
    // read result
    let result = reader.result;
    // convertResult
    let resultButArray = JSON.parse(result);
    // store result into the current Labels
    window.label = resultButArray[0];
    window.fileNames = resultButArray[1];

    displayLabels();
  })

}
