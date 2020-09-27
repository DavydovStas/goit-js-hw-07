const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

let newIngredientsList = document.createElement('ul');
const ingredientsRef = document.querySelector('#ingredients');
ingredients.forEach(item => {
  const newEl = document.createElement('li');
  newEl.textContent = item;
  newIngredientsList.appendChild(newEl);
});
ingredientsRef.replaceWith(newIngredientsList);
