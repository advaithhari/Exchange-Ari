let database = firebase.database().ref()
let profiles
const signin   = document.querySelector(".g-signin2");
const signout = document.querySelector(".signOut");
signout.style.display = "none"

function onSignIn(googleUser) {
    profile = googleUser.getBasicProfile();
 
    console.log('User signed in!');
    profile.getName();
    profile.getImageUrl();
    profiles = profile.getEmail();    
  
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
    console.log("wd")
    if(profiles)
    {
       
        database.orderByChild("requestEmail").equalTo(profiles).on("value", (data) => {
            //console.log(searchCategory)
            displayCard(data.val(), data.key)
        })
    }

}
