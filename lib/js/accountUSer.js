
let db = firebase.database();

const signin   = document.querySelector(".g-signin2");
const signout = document.querySelector(".signOut");
signout.style.display = "none"

function onSignIn(googleUser) {
    profile = googleUser.getBasicProfile();
 
    console.log('User signed in!');
    profile.getName();
    profile.getImageUrl();
    profile.getEmail();    
  
    db.push({
        Username: profile.getName(),
        Image: profile.getImageUrl(),
        Email: profile.getEmail(),
       
    });


      
}
