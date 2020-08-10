const homeBtn = document.querySelector("#home");
homeBtn.addEventListener('click', () => location.href="/");

function descriptionPageRender(title, category, description) {
    const descriptionPageTitleElement = document.querySelector('.description-page-title');
    const descriptionPageCategoryElement = document.querySelector('.description-page-category');
    const descriptionPageDescriptionElement = document.querySelector('.description-page-description');


    descriptionPageTitleElement.innerHTML = title;
    descriptionPageCategoryElement.innerHTML = category;
    descriptionPageDescriptionElement.innerHTML = description;
   
}


let database = firebase.database().ref()
let PATH = window.location.href;
console.log(PATH);
let pathIndex=PATH.indexOf('?id=') + 4;
let ID = PATH.slice(pathIndex);

database.on('child_added', (data) => {
    if (data.key == ID) {
        console.log(data.val());
    }
})