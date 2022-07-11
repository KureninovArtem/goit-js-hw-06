const list = document.querySelector('#categories');

const listItems = list.children;
console.log(`Number of categories: ${listItems.length}`);

const firstListItem = list.firstElementChild;
console.log(`Category: ${firstListItem.firstElementChild.textContent}`);

const animalsElements = firstListItem.querySelectorAll('li');
console.log(`Elements: ${animalsElements.length}`);

const secondListItem = list.firstElementChild.nextElementSibling;
console.log(`Category: ${secondListItem.firstElementChild.textContent}`);

const productsElements = secondListItem.querySelectorAll('li');
console.log(`Elements: ${productsElements.length}`);

const lastListItem = list.lastElementChild;
console.log(`Category: ${lastListItem.firstElementChild.textContent}`);

const technologiesElements = lastListItem.querySelectorAll('li');
console.log(`Elements: ${technologiesElements.length}`);