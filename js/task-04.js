const buttonDown = document.querySelector(`button[data-action="decrement"]`);
const indexValue = document.querySelector(`#value`);
const buttonUp = document.querySelector(`button[data-action="increment"]`);

const counter = {
    value: 0,
    increment() {
        this.value += 1;
    },
    decrement() {
        this.value -= 1;
    },
};

buttonUp.addEventListener(`click`, function() {
    counter.increment();
    indexValue.textContent = counter.value;
});
buttonDown.addEventListener(`click`, function() {
    counter.decrement();
    indexValue.textContent = counter.value;
});

