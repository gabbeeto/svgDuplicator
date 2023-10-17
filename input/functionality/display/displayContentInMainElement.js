let uploadContainer = document.getElementById('uploadContent');
let displayContainer = document.getElementById('displayContent');
let downloadContainer = document.getElementById('downloadContent');

export function displayContent() {
  uploadContainer.innerHTML = labelSetting.map(({ name, vector }, index) => {
    return `
  <li data-index='${index}'>
  <p>upload ${name}</p>
  <input type="file" multiple data-vector='${vector}'>
  <button>generate ${name}</button>
  </li>`}).join('')

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
}

