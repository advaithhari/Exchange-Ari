function descriptionPageRender(title, category, description) {
    const descriptionPageTitleElement = document.querySelector('.description-page-title');
    const descriptionPageCategoryElement = document.querySelector('.description-page-category');
    const descriptionPageDescriptionElement = document.querySelector('.description-page-description');

    console.log("HELLO");

    descriptionPageTitleElement.innerHTML = title;
    descriptionPageCategoryElement.innerHTML = category;
    descriptionPageDescriptionElement.innerHTML = description;
   
}

let PATH = window.location.href;
console.log(PATH);
let pathIndex=PATH.indexOf('?id=') + 4;
let ID = PATH.slice(pathIndex);

console.log(database)

// descriptionPageRender(title, category, description)

