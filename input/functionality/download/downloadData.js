export function downloadDataFromLabelObject() {
  // get label data and convert that into a url
  let labelButJson = JSON.stringify(window.label);
  let jsonFile = new File([labelButJson], 'labelData.json', { type: "application/json" });
  let urlData = URL.createObjectURL(jsonFile)

  // create anchor tag with url of the label object and make the user click the button so the file generates
  let anchorTag = document.createElement('a');
  anchorTag.href = urlData;
  anchorTag.download = 'labelData.json';
  document.body.append(anchorTag);
  anchorTag.click();

  // remove anchor tag and url
  document.body.removeChild(anchorTag);
  URL.revokeObjectURL(urlData);

}
