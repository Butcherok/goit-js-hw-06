const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsEl = ingredients.map(ingredient => {
  const makeEl = document.createElement(`li`);
  makeEl.textContent = ingredient;
  makeEl.classList.add(`item`);
  return makeEl;
});
document.querySelector(`#ingredients`).append(...ingredientsEl);