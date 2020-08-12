//Database reference
//let database = firebase.database().ref()
 
let cardcontainer = document.querySelector('.card-container');
let submits  = document.querySelector("#submit-request-button");
let modalText = document.querySelector(".modal-user-input");
const glideSlides = document.querySelectorAll('.glide__slide');
const categorySearchBar = document.querySelector('#search-category-input');
let searchCategory = categorySearchBar.value;
const searchButton = document.querySelector("#category-search-button");

searchButton.addEventListener('click', event => {
    event.preventDefault();
    searchCategory = categorySearchBar.value.toLowerCase();
    categorySearchBar.value = "";
    if (searchCategory == "") return;
    else {

        cardcontainer.innerHTML = "";

        if (searchCategory == "all") {
            database.on('child_added', addCard);
        } else {
            database.orderByChild("requestCategory").startAt(searchCategory).on("child_added", (data) => {
                console.log(searchCategory)
                displayCard(data.val(), data.key)
            })
        }
    }
});
 
// console.log(searchCategory)
if (searchCategory == "") {
    database.on('child_added', addCard);
}
 
 
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
    
    
 
 
//         const modal = document.querySelector('.request-modal'); //Main container for the modal (default opacity is 0, so it is invisible)
//         const modalButton = document.querySelector('.request-button');  //Button that is visible on index.html
//         const closeButton = document.querySelector('.close-modal-button'); //Button on the modal that closes the model upon click;
//         const mask = document.querySelector('#modal-page-mask'); //Fixed element
//         function validateForm() {
//             let form = document.getElementById('request-modal-form');
 
//          if(form== "", )
            
          
                
//             modal.style.opacity = "0"; //Makes the modal invisible
//             modal.style["pointer-events"] = "none"; //Make it so that the user cannot interact with the modal in any way when it is invisible
//             mask.style.display = "none"; //Remove the mask, make background normal again
//             modalButton.style["display"] = "flex"; //Reshow the create modal button.
//              //   x.submit();
//                 // x.close();
//                 // modal.style.opacity = "0"; //Makes the modal invisible
//                 // modal.style["pointer-events"] = "none"; //Make it so that the user cannot interact with the modal in any way when it is invisible
//                 // mask.style.display = "none"; //Remove the mask, make background normal again
//                 // modalButton.style["display"] = "flex"; //Reshow the create modal button.
        
//             // }
//         }
//         validateForm();
//    } 
 
    // console.log(username, message);
    
 
 
// let searchbutton = document.querySelector(".searchbutton");
// let databases = firebase.database().ref()
 
 
// let cards = document.querySelector(".card-container");
 
// let card = document.querySelectorAll(".card");
// for (let i = 0; i < card.length; i++) {
//     card[i].style.display = "none";
 
// }
 
// function search(event) {
//     event.preventDefault();
//     let searchbar = document.querySelector("#searchbar");
//     let cardtext = document.querySelectorAll(".cardtext");
 
//     for (let i = 0; i < card.length; i++) {
//         console.log(searchbar.value, cardtext[i].innerHTML);
//         if (searchbar.value == cardtext[i].innerHTML) {
//             card[i].style.display = "block";
//             console.log("bruhhssssh");
//         } else {
//             card[i].style.display = "none";
//         }
//     }
// }
 
 

