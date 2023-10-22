
import JSZip from 'jszip';
import FileSaver from 'file-saver';

let groupElements = [];
let useElements = [];
let imageElements = [];




export function downloadFile() {
  alert('this works motherfuckers');
  // reset all the arrays
  
  groupElements = [];
  useElements = [];
  imageElements = [];

  let labelIndex = this.dataset.index;
  let allTheSelects = document.querySelectorAll('#displayContainer select');

  let AllTheSelectsButArray = Array.from(allTheSelects);

  AllTheSelectsButArray
    // prevent getting information from the current index for the label with filter
    // because we're going to iterate through that label
    .filter((select, index) => { return Number(labelIndex) != index; })
    //we get the information from other labels without iterating
    .forEach(gettingRemainingInformationOfOtherSelects);


  // once we get the information from the other parts we start itetating the current array
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
    // push depending on parameter
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
  // library to download zip files
  let zip = new JSZip();

  let AllTheContentFromLabelIndex = label[labelIndex].content

  AllTheContentFromLabelIndex.forEach((svgContent, index) => {

    pushSvgContentDependingOnFormat(svgContent, true);

    // this adds the content of the svg to download later on
    let contentOfFile = `${window.mainSvgElement} <defs>${imageElements.join('\n')} </defs> ${groupElements.join('\n')} ${useElements.join('\n')} </svg> `
    let NameOfFile = fileNames[labelIndex][index];
    zip.file(`${NameOfFile}.svg`, contentOfFile);

    removeFirstItem(svgContent);
    // because we want to add the other label when we iterate without mixing the content that we added in this label
  })


  // this generates the zip file
  zip.generateAsync({ type: "blob" }).then(
    (myContent) => {

      // this downloads the zip file
      FileSaver.saveAs(myContent, `${label[labelIndex].name}.zip`);
    })

}




function removeFirstItem(svgContent) {
  // check whether the svg content is a raster or a vector. all raster labels have images
  if (svgContent.image) {
    useElements.shift()
    imageElements.shift()
  }
  else {
    groupElements.shift();
  }
}
