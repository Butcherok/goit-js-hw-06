const objBody = document.querySelector('body');
const objButton = document.querySelector('button.change-color');
const textColor = document.querySelector('span.color');

objButton.addEventListener('click', onChangeColor);

function onChangeColor (event) {
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  objBody.style.backgroundColor = `${getRandomHexColor()}`;
  textColor.textContent = `${getRandomHexColor()}`;
};
