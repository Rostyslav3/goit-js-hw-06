const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



for (const ingredient of ingredients) {
  

const ingredientItem = document.createElement(`li`);
ingredientItem.classList.add(`item`);
ingredientItem.textContent = [ingredient];

const ingredientList = document.querySelector('#ingredients');
ingredientList.appendChild(ingredientItem);
  console.log(ingredientList);
  
};
