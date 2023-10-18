let index;
let fileInput;
let svgFiles;
let fileReader;

export function uploadFiles() {
  index = this.dataset.index
  fileInput = document.querySelector(`li[data-index='${index}'] input`);
  svgFiles = fileInput.files;
  fileReader = new FileReader();
  loadSvgData(svgFiles.length);

}

function loadSvgData(length) {
  console.log(length)
  // base case
  if (length < 1) {
    return 'finished';
  }
  // recursive case
  else {
    fileReader.readAsText(svgFiles[length - 1]);

    fileReader.onload = () => {
      console.log(fileReader.result);


      loadSvgData(length - 1);
    }
  }
}

