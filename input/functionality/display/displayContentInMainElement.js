import { downloadFile } from "../download/downloadFile";
import { uploadFiles } from "../upload/uploadFile";
import { updateOnDisplayer } from "./svgDisplayer";

let uploadContainer = document.getElementById('uploadContent');
let displayContainer = document.getElementById('displayContent');
let downloadContainer = document.getElementById('downloadContent');

export function displayContent() {
  // add content to upload container
  uploadContainer.innerHTML = label.map(({ name, vector }, index) => {
    return `
  <li data-index='${index}'>
  <p>upload ${name}</p>
  <input type="file" data-vector='${vector}' multiple >
  <button data-index='${index}' data-vector='${vector}'>add ${name}</button>
  </li>`}).join('')


  // add events to all buttons in upload container
  let allTheButtonsInUploadContainer = uploadContainer.querySelectorAll('button');
  for (let button of allTheButtonsInUploadContainer) {
    button.addEventListener('click', uploadFiles);
  }

  // add content to display container
  displayContainer.innerHTML = label.map(({ name, vector }, index) => {
    return `
  <li data-index='${index}'>
    <p>available ${name}</p>
    <select data-index='${index}'></select>
  </li>`}).join('')


  // add events to all select elements in display container
  let allTheSelectElementsInDisplayContainer = displayContainer.querySelectorAll('select');
  for (let selectElement of allTheSelectElementsInDisplayContainer) {
    selectElement.addEventListener('change', updateOnDisplayer);
  }


  // add content to download container
  downloadContainer.innerHTML = label.map(({ name, vector }, index) => {
    return `
  <li data-index='${index}'>
    <p>download ${name}</p>
    <button data-index='${index}'>download ${name}</button>
  </li>`}).join('')

  // add events to all buttons in download container
  let allTheButtonsInDownloadContainer = downloadContainer.querySelectorAll('button');

  for (let button of allTheButtonsInDownloadContainer) {
    button.addEventListener('click', downloadFile);
  }

}

