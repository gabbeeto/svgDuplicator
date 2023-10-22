
// import JSZip from 'jszip';
// import FileSaver from 'file-saver';

// let downloaderr = new JSZip();
// downloaderr.file('hello.txt', 'this is a text');
// downloaderr.file('hello2.txt', 'this is a text2');

// console.log(downloaderr);
// downloaderr.generateAsync({ type: "blob" }).then(
//   (myContent) => {
//     FileSaver.saveAs(myContent, 'newFile.zip');
//   }

// )


export function downloadFile() {
  let labelIndex = this.dataset.index;
  let allTheSelects = document.querySelectorAll('#displayContainer select');

  // prevent getting information from the current index for the label with filter
  // because we're going to iterate through that label
  let AllTheSelectsButArray = Array.from(allTheSelects);
  AllTheSelectsButArray.filter((select,index) => {return Number(labelIndex) == index;})
    .forEach(gettingRemainingInformationOfOtherSelects)
}

function gettingRemainingInformationOfOtherSelects(select, index){
      let selectIndexForTypeOfLabel = select.dataset.index
      let selectIndexForSpecificContent = select.value;
      let svgContent = label[selectIndexForTypeOfLabel].content[selectIndexForSpecificContent];
      console.log(svgContent)


}
