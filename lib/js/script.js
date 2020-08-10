//Create references to form inputs that are inside of the create request modal
const requestTitle = document.getElementById("request-title");
const requestDescription = document.getElementById("request-description");
const requestCategory = document.getElementById("request-category");
const submitRequestButton = document.getElementById("submit-request-button");

//When the submit button in the modal is clicked, add the input values to the data base using updateDB()
submitRequestButton.addEventListener("click",updateDB);

//Set database object here
let db = firebase.database();

let database = db.ref();



function updateDB(event){
    event.preventDefault();

    //Set these values to the values that the user has already input into the form
    const title        = requestTitle.value;
    const category     = requestCategory.value;
    const description  = requestDescription.value;
   
   
   //Create an object that is pushed into the Firebase database
   if (title != '' && description != '' && category != '') {
       value = {
           requestTitle: title,
           requestDescription: description,
           requestCategory: category
       };
       
       console.log(value)
       database.push(value);
       modal.style.opacity = "0"; //Makes the modal invisible
       modal.style["pointer-events"] = "none"; //Make it so that the user cannot interact with the modal in any way when it is invisible
       mask.style.display = "none"; //Remove the mask, make background normal again
       modalButton.style["display"] = "flex"; //Reshow the create modal button.

       //Reset values inside the inputs to nothing after the previous data has already been stored
       requestTitle.value = "";
       requestDescription.value = "";
       requestCategory.value = "";

   } else {
       alert("Please Fill ALL Fields");
   }
    
}

