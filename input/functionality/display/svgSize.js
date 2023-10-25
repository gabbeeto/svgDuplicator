let rangeInput = document.querySelector(`input[type='range']`);

let span =  document.querySelector(`#svgSize span`);
rangeInput.addEventListener('change', updateSvgSize)

let svg = document.querySelector(`#display > *`);

function updateSvgSize(){

span.innerText = `${rangeInput.value}%`;
svg.style.height = `${rangeInput.value}%`;
svg.style.width = `${rangeInput.value}%`;
}
