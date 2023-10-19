let inputs = document.querySelectorAll(`#labelPopUp input[type='text']`);
let select = document.getElementById('base');
for (let input of inputs) {
  input.addEventListener('change', updateBaseSelect);
}


export function updateBaseSelect() {

  inputs = document.querySelectorAll(`#labelPopUp input[type='text']`);
  let options = [];
  inputs.forEach((input, index) => {
    options.push(`<option value="${index}">${input.value}</option>`)
  });
  select.innerHTML = options.join('');
}
