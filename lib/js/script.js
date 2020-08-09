 //Create references to form inputs that are inside of the create request modal
 const requestTitle = document.getElementById("request-title");
 const requestDescription = document.getElementById("request-description");
 const requestCategory = document.getElementById("request-category");
 const submitRequestButton = document.getElementById("submit-request-button");

 //When the submit button in the modal is clicked, add the input values to the data base using updateDB()
 submitRequestButton.addEventListener("click",updateDB);
 
 //Set database object here
 let database = firebase.database().ref();
 

 function updateDB(event){
     event.preventDefault();

     //Set these values to the values that the user has already input into the form
     const title        = requestTitle.value;
     const category     = requestCategory.value;
     const description  = requestDescription.value;
    
     //Reset values inside the inputs to nothing after the previous data has already been stored
     requestTitle.value = "";
     requestDescription.value  = "";
     requestCategory.value   = "";
    
    //Create an object that is pushed into the Firebase database
     value = {
         requestTitle: title,
         requestDescription: description,
         requestCategory: category
     };
 
     database.push(value);
 }
