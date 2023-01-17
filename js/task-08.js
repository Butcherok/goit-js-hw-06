const form = document.querySelector('form.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
        if (event.currentTarget.elements.email.value === ''
        ||  event.currentTarget.elements.password.value === ''
        ) {
            alert(`You must fill in all fields!!!`)
        } else {
            console.log({email: event.currentTarget.elements.email.value, name: event.currentTarget.elements.password.value})
    }
    event.currentTarget.reset();
}