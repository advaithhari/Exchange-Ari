let database = firebase.database().ref()
const signin   = document.querySelector(".g-signin2");
const signout = document.querySelector(".signOut");
signout.style.display = "none"
let profiles;
function onSignIn(googleUser) {
    profiles = googleUser.getBasicProfile();
 
    console.log('User signed in!');
    profile.getName();
    profile.getImageUrl();
    profile.getEmail();    
    
    // database.push({
    //     // Username: profile.getName(),
    //     // Image: profile.getImageUrl(),
    //     // Email: profile.getEmail(),
       
    // });


      
}

database.on('value', (data) => {

   displayComment();   
    //console.log(data.key);

 
});
function displayComment(){
   
   // if(profiles)
   // {
        console.log("wd")
        console.log(profiles.getEmail());
        database.orderByChild("requestEmail").equalTo("advaithhari@gmail.com").on("value", (data) => {
            // console.log(requestEmail)
            displayCard(data.val(), data.key)
        })
    }

//}
