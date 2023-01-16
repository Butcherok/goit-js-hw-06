const categories = document.querySelector('#categories');
const items = [...categories.children];
console.log(`Number of categories: ${categories.childElementCount}`);
const subCategory = items.forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.childElementCount}`);
});