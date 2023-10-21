export function updateOnDisplayer() {
  let indexForLabel = this.dataset.index;
  let indexForSvgContent = this.value;

  let currentLabel = window.label[indexForLabel];
  let svgContent = currentLabel.content[indexForSvgContent];

  if (svgContent && currentLabel.vector) {
    let {groupElement} = svgContent;
    console.log(groupElement)
  }
  else if (svgContent && currentLabel.vector == false) {
    let {use:useElement} = svgContent;
    let imageElement = `${svgContent.image}`;
    console.log(imageElement)
    console.log(useElement)
  }
}
