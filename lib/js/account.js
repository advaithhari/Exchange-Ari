let db = firebase.database();
let profile;
let database = db.ref();
let person; 

const descriptionPageTitleElement = document.createElement('P');
const descriptionPageCategoryElement = document.createElement('P');
const descriptionPageDescriptionElement = document.createElement('P');
const descriptionPageImageElement = document.createElement('img');
const descriptionPagePriceElement = document.createElement('P');

let cardcontainer = document.querySelector('.card-container');


const signin   = document.querySelector(".g-signin2");
const signout = document.querySelector(".signOut");

signout.style.display = "none"
function onSignIn(googleUser) {
    profile = googleUser.getBasicProfile();
 
    console.log('User signed in!');
    profile.getName();
    profile.getImageUrl();
    profile.getEmail();

    
database.on("child_added", (data) => {
    if(data.val().requestEmail == profile.getEmail()){
      addCard(data);
    }
  
    
        signin.style.display = "none";
        signout.style.display = "block"
});

let reduceDescription = (desc) => {
    let words = desc.split(' ');
    let limit = 12;
    if (words.length > limit) {
        // console.log(words.slice(0, 12).join(' ') + " &#8230 ");
        return words.slice(0, limit).join(' ') + " &#8230 "
    } else {
        return words.join(' ');
    }
}
 

function displayCard(row,key) {
    // console.log(row);
    let title = row.requestTitle;
    let description = row.requestDescription;
    let category = row.requestCategory;
    let imgSrc = row.requestImage;
    let price = row.requestPrice;
    let card = document.createElement('div');
    card.classList.add('card');
 
    let cardContent = document.createElement('div');
    cardContent.classList.add('cardContent');
 
    let cardTitle = document.createElement('p');
    cardTitle.classList.add('card-title')
    cardTitle.innerHTML = title;

    let cardPrice = document.createElement('p');
    cardPrice.classList.add('card-price')
    cardPrice.innerHTML = `Desired Price: $${price}`;
 
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
    cardContent.appendChild(cardPrice)
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
    
//called when "sign osut" button clicked





}


function onSignOut() {
    let auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.');
        signin.style.display = "block";
        signout.style.display = "none"

        location.reload();
    });
}
