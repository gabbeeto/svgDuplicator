export function updateOnDisplayer() {
  let indexForLabel = this.dataset.index;
  let indexForSvgContent = this.value;

  let currentLabel = window.label[indexForLabel];
  let svgContent = currentLabel.content[indexForSvgContent];

  if (svgContent) {
    window.displayer[indexForLabel] = svgContent;
    displayOnDisplayer()
  }

}

function displayOnDisplayer() {
  let groupElements = [];
  let useElements = [];
  let imageElements = [];

  window.displayer.forEach((displayItem, index) => {
    // check if it's a vector or not
    if (displayItem.image) {
      // push use and image elements to respective arrays
      useElements.push(displayItem.use);
      imageElements.push(displayItem.image);
    }
    else {
      // push group elements 
      groupElements.push(displayItem.groupElement);
    }
  })
  let svgDisplayer = document.getElementById('display');
  svgDisplayer.innerHTML = `${window.mainSvgElement} <defs>${imageElements.join('\n')} </defs> ${groupElements.join('\n')} ${useElements.join('\n')} </svg> `
}
