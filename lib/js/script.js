
 const usernameElement = document.getElementById("username");
 const messageElement = document.getElementById("message");
 const selectElement = document.getElementById("categories");
 const categories = ["Instruments", "Furniture", "Auto"];
 
 for (category of categories) {
     let opt = document.createElement('option');
     opt.value = category;
     opt.innerHTML = category;
     console.log(opt)
    selectElement.appendChild(opt)
 }
 const button = document.getElementById("submitButton");
 button.addEventListener("click",updateDB);
 
 //Set database object here
 let database = firebase.database().ref();
 
 /**
  * Updates the database with the username and message.
  */
 function updateDB(event){
     event.preventDefault();
     const username        = usernameElement.value;
     const message         = messageElement.value;
     const category        = selectElement.value;
 
     usernameElement.value = "";
     messageElement.value  = "";
     selectElement.value   = "";
 
     // console.log(username + " : " + message);
 
     //Update database here
 
     value = {
         name: username,
         msg: message,
         category: category
     };
 
     database.push(value);
     location.href = "/page.html";
 }
 
 // Set database "child_added" event listener here
//  const messages = document.querySelector('.allMessages');
 
//  database.on('child_added', (data) => {
//      let row = data.val();
//      let username = row.name;
//      let message = row.msg;
 
//      let p = document.createElement('p');
//      p.innerHTML = `${username}: ${message}`;
//      messages.appendChild(p);
 
 
//  });
 // Use Firebase Authentication to request the underlying token
