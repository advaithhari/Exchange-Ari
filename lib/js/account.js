let db = firebase.database();
let profile;
let database = db.ref();
let person; 

const descriptionPageTitleElement = document.querySelector('.description-page-title');
const descriptionPageCategoryElement = document.querySelector('.description-page-category');
const descriptionPageDescriptionElement = document.querySelector('.description-page-description');
const descriptionPageImageElement = document.querySelector('.description-page-image');
const descriptionPagePriceElement = document.querySelector('.description-page-price');


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
    if(data.val().requestName == profile.getName()){
      descriptionPageTitleElement.innerHTML = data.val().requestTitle;
            descriptionPageCategoryElement.innerHTML = data.val().requestCategory;
            descriptionPageDescriptionElement.innerHTML = data.val().requestDescription;
            descriptionPagePriceElement.innerHTML = `Desired Price: $${data.val().requestPrice}`;
            descriptionPageImageElement.src = data.val().requestImage;
    }
    });
    
        signin.style.display = "none";
        signout.style.display = "block"
}
//called when "sign osut" button clicked
function onSignOut() {
    let auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.');
        signin.style.display = "block";
        signout.style.display = "none"
    });
}





