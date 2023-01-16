const statusRange = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

statusRange.addEventListener('input', onChangeRange);

function onChangeRange (event) {
    statusRange.range = event.currentTarget.value;
    text.style.fontSize = `${event.currentTarget.value}px`;
};
