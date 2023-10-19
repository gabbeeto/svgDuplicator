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
  if (labelSetting[labelIndex].vector) {
    for (let currentData of data) {
      parseVector(currentData)
    }
  }
  else {
    for (let currentData of data) {
      parseRaster(currentData)
    }
  }
}

function parseVector(data) {
  console.log(data);
  let groupRegex = new RegExp(`(?<=<g id="${labelSetting[labelIndex].name}">)[a-zA-Z0-9 \n\t<="-/\.,>]+(?=<\/g>)`, 'g');
  let groupElement = data.match(groupRegex);
  console.log(groupElement);
}

function parseRaster(data) {
  console.log(data);
  console.log(labelSetting[labelIndex].name);
  let useRegex = new RegExp(`<use( |\n)id=("|')${labelSetting[labelIndex].name}("|')[a-za-z0-9=" #,().]+\/>`, 'g');
  let hrefRegex = /(?<=(href|Href|HREF)="#)[ \n,\.#%^&*\(\)a-zA-Z0-9]+(?=")/gm
  let useElement = data.match(useRegex);
  let hrefAttribute = `${useElement}`.match(hrefRegex)
  console.log(useElement);
  console.log(hrefAttribute);
}
