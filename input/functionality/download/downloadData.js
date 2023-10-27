export function downloadDataFromLabelObject(){
let labelButJson = JSON.stringify(window.label);
let jsonFile = new File([labelButJson], 'labelData.json', {type:"application/json"});
let urlData = URL.createObjectURL(jsonFile)

let anchorTag = document.createElement('a');
anchorTag.href = urlData;
anchorTag.download = 'labelData.json';
document.body.append(anchorTag);
anchorTag.click();

document.body.removeChild(anchorTag);
URL.revokeObjectURL(urlData);

}
