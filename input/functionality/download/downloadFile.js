
import JSZip from 'jszip';
import FileSaver from 'file-saver';

let groupElements = [];
let useElements = [];
let imageElements = [];


// console.log(downloaderr);
// downloaderr.generateAsync({ type: "blob" }).then(
//   (myContent) => {
//     FileSaver.saveAs(myContent, 'newFile.zip');
//   }

// )


export function downloadFile() {
  // reset all the arrays
  groupElements = [];
  useElements = [];
  imageElements = [];

  let labelIndex = this.dataset.index;
  let allTheSelects = document.querySelectorAll('#displayContainer select');

  // prevent getting information from the current index for the label with filter
  // because we're going to iterate through that label
  let AllTheSelectsButArray = Array.from(allTheSelects);
  AllTheSelectsButArray.filter((select, index) => { return Number(labelIndex) == index; })
    .forEach(gettingRemainingInformationOfOtherSelects);

  getInformationFromCurrentIndex(labelIndex)
}

function gettingRemainingInformationOfOtherSelects(select, index) {
  let selectIndexForTypeOfLabel = select.dataset.index
  let selectIndexForSpecificContent = select.value;
  let svgContent = label[selectIndexForTypeOfLabel].content[selectIndexForSpecificContent];
  pushSvgContentDependingOnFormat(svgContent);
}

function pushSvgContentDependingOnFormat(svgContent, pushAtTheBeginning = false) {
  // check whether the svg content is a raster or a vector. all raster labels have images
  if (svgContent.image) {
    if (pushAtTheBeginning) {
      useElements.unshift(svgContent.use)
      imageElements.unshift(svgContent.image)
    }
    else {
      useElements.push(svgContent.use)
      imageElements.push(svgContent.image)
    }
  }
  else {
    if (pushAtTheBeginning) {
      groupElements.unshift(svgContent.groupElement);
    }
    else {
      groupElements.push(svgContent.groupElement);
    }
  }

}

function getInformationFromCurrentIndex(labelIndex) {
  let zip = new JSZip();


  let AllTheContentFromLabelIndex = label[labelIndex].content
  for (let svgContent of AllTheContentFromLabelIndex) {
    pushSvgContentDependingOnFormat(svgContent, true);

    let content = `${window.mainSvgElement} <defs>${imageElements.join('\n')} </defs> ${groupElements.join('\n')} ${useElements.join('\n')} </svg> `

    zip.file('hello.txt', content);

  }
}
