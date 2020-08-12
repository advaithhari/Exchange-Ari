//Database reference
//let database = firebase.database().ref()
 
let cardcontainer = document.querySelector('.card-container');
let submits  = document.querySelector("#submit-request-button");
let modalText = document.querySelector(".modal-user-input");
const glideSlides = document.querySelectorAll('.glide__slide');
console.log(glideSlides.length)
// lasjdflajsldkjf
 
database.on('child_added', addCard);
 
 
let reduceDescription = (desc) => {
    let words = desc.split(' ');
    if (words.length > 30) {
        return words.slice(0, 12).join(' ') + " &#8230 "
    } else {
        return words;
    }
}
 
function displayCard(row,key) {
    // console.log(row);
    let title = row.requestTitle;
    let description = row.requestDescription;
    let category = row.requestCategory;
    let imgSrc = row.requestImage;
    
    let card = document.createElement('div');
    card.classList.add('card');
 
    let cardContent = document.createElement('div');
    cardContent.classList.add('cardContent');
 
    let cardTitle = document.createElement('p');
    cardTitle.classList.add('card-title')
    cardTitle.innerHTML = title;
 
    console.log(imgSrc)
    let cardImage = document.createElement('img');
    cardImage.classList.add('card-img');
    cardImage.src = imgSrc;
 
    let cardDescription = document.createElement('p');
    cardDescription.classList.add('card-description');
    cardDescription.innerHTML = reduceDescription(description);
 
    let cardCategory = document.createElement('p');
    cardCategory.innerText = category;
    cardCategory.classList.add('card-category')
 
    let decorationHighlight = document.createElement('div');
    decorationHighlight.classList.add('decoration-highlight');
 
    
 
    // cardContent.appendChild(cardImage);
    cardContent.appendChild(cardTitle);
    cardContent.appendChild(cardCategory);
    cardContent.appendChild(cardDescription);
 
    card.appendChild(decorationHighlight);
    card.appendChild(cardImage);
    card.appendChild(cardContent);
 
    card.addEventListener('click', () => {
        location.href = "page.html?id="+key;
      
    });
    
    // if (cardCounter < 6) {
    //     glideSlides[cardCounter].innerHTML = card;
    //     console.log(glideSlides[cardCounter])
    // } else {
    //     cardcontainer.appendChild(card);
 
    // }
 
    cardcontainer.appendChild(card);
 
    
    // cardCounter += 1;
    // console.log(cardCounter)
}
 
function addCard(data) {
 
    let row = data.val();
    // console.log(data.key);
 
    displayCard(row, data.key);
   
}
