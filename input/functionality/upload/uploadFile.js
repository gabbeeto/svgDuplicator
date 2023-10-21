import { displaySvgData } from "../display/displaySvgContent";

let labelIndex;
let fileInput;
let svgFiles;

export function uploadFiles() {
  labelIndex = this.dataset.index
  fileInput = document.querySelector(`li[data-index='${labelIndex}'] input`);
  svgFiles = fileInput.files;
  loadSvgDataAndImportAppropiateData()
}


async function loadSvgDataAndImportAppropiateData() {
  // Convert the FileList into an array and iterate
  let files = Array.from(svgFiles).map(file => {

    let reader = new FileReader();
    // Create a new promise
    return new Promise(resolve => {
      // Resolve the promise after reading file
      reader.onload = () => resolve(reader.result);
      // Read the file as a text
      reader.readAsText(file);
    });
  });

  let dataResults = await Promise.all(files);
  parseSvgData(dataResults)
}

function parseSvgData(data) {
  let svgValueOfSelect = document.querySelector('#base').value;
  if (svgValueOfSelect == labelIndex) {
    getBaseForLaterUse(data);
  }
  if (label[labelIndex].vector) {
    data.forEach((currentData, index) => { parseVector(currentData, index) })
  }
  else {
    data.forEach((currentData, index) => { parseRaster(currentData, index) })
  }
  displaySvgData();
}
function getBaseForLaterUse(data) {
  let svgRegex = /<svg[A-Za-z0-9 ="\.:\/]+>/;
  window.mainSvgElement = `${data[0].match(svgRegex)}`;
}











function parseVector(data, index) {
  // get the content inside the group element without the group element
  let groupRegex = new RegExp(`(?<=<g id="${label[labelIndex].name}">)[a-zA-Z0-9 \n\t<="-/\.,>]+(?=<\/g>)`, 'g');
  let groupElement = data.match(groupRegex);

  // get the classes for all the elements inside the group
  let classesRegex = /(?<=class=('|"))[a-zA-Z0-9 \n\t=\.\/#%\^&]+(?=("|'))/gm;
  let classesForGroupElements = `${groupElement}`.match(classesRegex);

  // getting the attributes of the classes of the elements and convert them into a style attribute with all the properties of the class
  let styleElementToReplaceClasses = classesForGroupElements.map(currentClass => {
    let attributeRegex = new RegExp(`(?<=\.${currentClass}( |\n|\t){( |\n|\t))[a-zA-z: \t\n#0-9,\.]+(?=})`, 'g');
    return `style='${data.match(attributeRegex)}'`;
  });

  // seperate all the elements of the group
  let seperateGroupsRegex = /<[a-zA-Z0-9 \n\t=\.\/#%\^&"-]+\/>/gm
  let seperateGroupsElements = `${groupElement}`.match(seperateGroupsRegex);

  // replace all the classes of elements of the seperated group with style attributes containing all the properties of the class
  let groupElementsWithStyleElements = seperateGroupsElements.map((currentClass, index) => {
    let classToReplace = classesForGroupElements[index];
    let classAttributeRegex = RegExp(`class=('|")${classToReplace}('|")`, 'gm');
    let groupElementWithStyleElement = `${currentClass}`.replace(classAttributeRegex, styleElementToReplaceClasses[index])
    return `${groupElementWithStyleElement}`
  })

  // merge all the groups and put it inside the g element in a string
  let groupElementWithGroupContent = `<g id="${index}">${groupElementsWithStyleElements.join(" \n")}</g>`;

  // push to the main label array
  label[labelIndex].content.push({ groupElement: groupElementWithGroupContent })
}












function parseRaster(data, index) {
  let newIdOrHref = `index${index}`;
  // find the 'use' element with regex
  let useRegex = new RegExp(`<use( |\n)id=("|')${label[labelIndex].name}("|')[a-za-z0-9=" #,().]+\/>`, 'g');
  let useElement = data.match(useRegex);

  // extract the 'href' attribute from 'use' element to get the corresponding to get image element id
  let hrefRegex = /(?<=(href|Href|HREF)="#)[ \n,\.#%^&*\(\)a-zA-Z0-9]+(?=")/gm
  let hrefAttribute = `${useElement}`.match(hrefRegex);

  let imageRegex = new RegExp(`<image( |\n|\t)+(width|Width)="[0-9]+"( |\n|\t)+(height|Height)="[0-9]+"( |\n|\t)+id="${hrefAttribute}"[ a-zA-Z=":\/;0-9,+]+\/>`, 'gm');
  let imageElement = data.match(imageRegex);
  //get image element

  // replace id's and href's so we don't mix them up in the future
  const idRemover = /(?<=id=")[a-zA-Z0-9 +%\$\^&*\.\n\t.]+(?=")/gm
  let newImageElement = `${imageElement}`.replace(idRemover, newIdOrHref);
  let newUseElement = `${useElement}`.replace(hrefRegex, newIdOrHref);

  // push to the main label array
  label[labelIndex].content.push({ image: newImageElement, use: newUseElement })
}

