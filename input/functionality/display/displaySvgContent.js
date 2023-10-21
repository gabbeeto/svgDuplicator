export async function displaySvgData() {
  let currentSelectElement = document.querySelector(`#displayContainer select[data-index="${labelIndex}"]`);

  currentSelectElement.innerHTML = fileNames[Number(labelIndex)].map((currentName, index) => {
    let currentNameForOptionElement = currentName;
    return `<option value="${index}">${currentNameForOptionElement}</option>`;
  }).join('');

}
