//Database reference
//let database = firebase.database().ref()
 
let cardcontainer = document.querySelector('.card-container');
let submits  = document.querySelector("#submit-request-button");
let modalText = document.querySelector(".modal-user-input");
// console.log(cardcontainer);

//Display all data on site load
//if (window.location.pathname == "/index.html") {
   // database.on('value', addCard);
    database.on('child_added', addCard);
//} 



function displayCard(row,key) {
    // console.log(row);
    let title = row.requestTitle;
    let description = row.requestDescription;
    let category = row.requestCategory;
    
    let card = document.createElement('div');
    card.classList.add('card');

    let cardContent = document.createElement('div');
    cardContent.classList.add('cardContent');

    let cardTitle = document.createElement('p');
    cardTitle.classList.add('card-title')
    cardTitle.innerHTML = title;

    let cardDescription = document.createElement('p');
    cardDescription.classList.add('card-description');
    cardDescription.innerHTML = description;

    let cardCategory = document.createElement('p');
    cardCategory.innerText = category;
    cardCategory.classList.add('card-category')

    cardContent.appendChild(cardTitle);
    cardContent.appendChild(cardCategory);
    cardContent.appendChild(cardDescription);

    card.appendChild(cardContent);

   

    card.addEventListener('click', () => {

        // console.log(key);
        location.href = "/page.html?id="+key;
      
    });
    
    cardcontainer.appendChild(card);
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
 
