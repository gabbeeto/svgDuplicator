let modeWindow = document.querySelector('#modePopUp');
modeWindow.addEventListener('cancel', preventFromGettingOut);

function preventFromGettingOut(event){
event.preventDefault();
}

modeWindow.showModal();
