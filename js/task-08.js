// Напиши скрипт управління формою логіна.

// Обробка відправлення форми form.login-form
// повинна відбуватися відповідно до події submit.

// Під час відправлення форми сторінка
// не повинна перезавантажуватися.

// Якщо у формі є незаповнені поля,
// виводь alert з попередженням про те,
// що всі поля повинні бути заповнені.

// Якщо користувач заповнив усі поля і відправив форму,
// збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості,
// а значення поля - значенням властивості.
// Для доступу до елементів форми використовуй властивість elements.

// Виведи об'єкт із введеними даними в консоль
// і очисти значення полів форми методом reset.

const form = document.querySelector('form.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault()
    const outputInfo = {};
    const formData = new FormData(event.currentTarget)
        if (event.currentTarget.elements.email.value === ''
        ||  event.currentTarget.elements.password.value === ''
        ) {
            console.log(`You must fill in all fields!!!`)
        } else {
            console.log(`{${event.currentTarget.elements.email.name}: ${event.currentTarget.elements.email.value}, ${event.currentTarget.elements.password.name}: ${event.currentTarget.elements.password.value}}`)
        }
    event.currentTarget.reset();
}