const textInput = document.querySelector(`input`);
const correctLenghtInputText = Number(textInput.dataset.length);

console.log(correctLenghtInputText);
textInput.addEventListener("blur", (event) => {
    if (event.currentTarget.value.length === correctLenghtInputText) {
        textInput.classList.add('valid')
        textInput.classList.remove('invalid')
    } else {
        textInput.classList.add('invalid')
    }
});
