let database = firebase.database().ref()
let profile
const signin   = document.querySelector(".g-signin2");
const signout = document.querySelector(".signOut");
signout.style.display = "none"

function onSignIn(googleUser) {
    profile = googleUser.getBasicProfile();
 
    console.log('User signed in!');
    profile.getName();
    profile.getImageUrl();
    profile = profile.getEmail();    
  
    database.push({
        Username: profile.getName(),
        Image: profile.getImageUrl(),
        Email: profile.getEmail(),
       
    });


      
}

database.on('value', (data) => {

   displayComment();   
    //console.log(data.key);

 
});
function displayComment(){
    if(profile)
    {
        cardcontainer.innerHTML = "";
        database.orderByChild("requestEmail").equalTo(profile).on("value", (data) => {
            console.log(searchCategory)
            displayCard(data.val(), data.key)
        })
    }

}
