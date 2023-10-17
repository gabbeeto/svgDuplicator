import { downloadFile } from "../download/downloadFile";
import { uploadFiles } from "../upload/uploadFile";

let uploadContainer = document.getElementById('uploadContent');
let displayContainer = document.getElementById('displayContent');
let downloadContainer = document.getElementById('downloadContent');

export function displayContent() {
  uploadContainer.innerHTML = labelSetting.map(({ name, vector }, index) => {
    return `
  <li data-index='${index}'>
  <p>upload ${name}</p>
  <input type="file" data-vector='${vector}' multiple >
  <button data-index='${index}' data-vector='${vector}'>add ${name}</button>
  </li>`}).join('')

  let allTheButtonsInUploadContainer = uploadContainer.querySelectorAll('button');
  for(let button of allTheButtonsInUploadContainer){
  button.addEventListener('click', uploadFiles);
  }

  displayContainer.innerHTML = labelSetting.map(({ name, vector }, index) => {
    return `
  <li data-index='${index}'>
    <p>available ${name}</p>
    <select data-index='${index}'></select>
  </li>`}).join('')



  downloadContainer.innerHTML = labelSetting.map(({ name, vector }, index) => {
    return `
  <li data-index='${index}'>
    <p>download ${name}</p>
    <button>download ${name}</button>
  </li>`}).join('')

  let allTheButtonsInDownloadContainer = downloadContainer.querySelectorAll('button');

  for(let button of allTheButtonsInDownloadContainer){
  button.addEventListener('click', downloadFile);
  }

}

