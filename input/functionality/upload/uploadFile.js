let labelIndex;
let fileInput;
let svgFiles;
let fileReader;

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
  if (label[labelIndex].vector) {
    data.forEach((currentData, index) => { parseVector(currentData, index) })
  }
  else {
    data.forEach((currentData, index) => { parseRaster(currentData, index) })
  }
}

function parseVector(data, index) {
  console.log(data);
  let groupRegex = new RegExp(`(?<=<g id="${label[labelIndex].name}">)[a-zA-Z0-9 \n\t<="-/\.,>]+(?=<\/g>)`, 'g');
  let groupElement = data.match(groupRegex);
  console.log(groupElement);
}

function parseRaster(data, index) {

  let newIdOrHref = `index${index}`;
  // find the 'use' element with regex
  let useRegex = new RegExp(`<use( |\n)id=("|')${label[labelIndex].name}("|')[a-za-z0-9=" #,().]+\/>`, 'g');
  let useElement = data.match(useRegex);

  // extract the 'href' attribute from 'use' element to get the corresponding to get image element id
  let hrefRegex = /(?<=(href|Href|HREF)="#)[ \n,\.#%^&*\(\)a-zA-Z0-9]+(?=")/gm
  let hrefAttribute = `${useElement}`.match(hrefRegex);

  //get image element
  let imageRegex = new RegExp(`<image( |\n|\t)+(width|Width)="[0-9]+"( |\n|\t)+(height|Height)="[0-9]+"( |\n|\t)+id="${hrefAttribute}"[ a-zA-Z=":\/;0-9,+]+\/>`, 'gm');
  let imageElement = data.match(imageRegex);

  // replace id's and href's so we don't mix them up in the future
  const idRemover = /(?<=id=")[a-zA-Z0-9 +%\$\^&*\.\n\t.]+(?=")/gm
  let newImageElement = `${imageElement}`.replace(idRemover, newIdOrHref);
  let newUseElement = `${useElement}`.replace(hrefRegex, newIdOrHref);

  // push to the main label array
  label[labelIndex].content.push({ image: newImageElement, use: newUseElement })
}
