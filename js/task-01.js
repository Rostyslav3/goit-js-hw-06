
// const countCategory = document.querySelectorAll(".item");
// console.log(`Number of categories: ${countCategory.length}`);

// for (const item of countCategory) {
//     console.log(`Category: ${item.firstElementChild.textContent}`);
//     const countItems = item.querySelectorAll("li");
//     console.log(`Elements: ${countItems.length}`);

// }



const countCategory = document.querySelectorAll(".item");
console.log(`Number of categories: ${countCategory.length}`);

countCategory.forEach(function (item) {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    const countItems = item.querySelectorAll("li");
    console.log(`Elements: ${countItems.length}`);

});

