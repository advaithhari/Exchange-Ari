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
console.log(ID)
database.on('child_added', (data) => {
    if (data.key == ID) {
        console.log(data.val());


        const descriptionPageTitleElement = document.querySelector('.description-page-title');
    const descriptionPageCategoryElement = document.querySelector('.description-page-category');
    const descriptionPageDescriptionElement = document.querySelector('.description-page-description');


    descriptionPageTitleElement.innerHTML = data.val().requestTitle;
    descriptionPageCategoryElement.innerHTML = data.val().requestCategory;
    descriptionPageDescriptionElement.innerHTML = data.val().requestDescription;
        console.log(descriptionPageTitleElement,descriptionPageCategoryElement,descriptionPageDescriptionElement);


    }
})