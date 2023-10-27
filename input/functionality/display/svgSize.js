export function addEventToRangeInput() {

  let rangeInput = document.querySelector(`input[type='range']`);

  let span = document.querySelector(`#svgSize span`);

  rangeInput.addEventListener('change', updateSvgSize)


  function updateSvgSize() {
    let svg = document.querySelector(`#display > *`);
    span.innerText = `${rangeInput.value}%`;
    svg.style.height = `${rangeInput.value}%`;
    svg.style.width = `${rangeInput.value}%`;
  }

}
addEventToRangeInput();


