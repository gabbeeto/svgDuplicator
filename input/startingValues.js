// I want this input to always have the value of 2 so it can match the html file
let labelInput = document.getElementById('amountOfLabels');
labelInput.value = '2';

let rangeInput = document.querySelector(`input[type='range']`);
rangeInput.value = 95;

let face = document.querySelector('#displayContent select');
face.value =0;


let body = document.querySelector('#displayContent select:nth-of-type(2)');
face.value =0;

