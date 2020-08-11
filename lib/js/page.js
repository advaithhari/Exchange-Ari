const homeBtn = document.querySelector("#home");
homeBtn.addEventListener('click', () => location.href = "");

const descriptionPageTitleElement = document.querySelector('.description-page-title');
const descriptionPageCategoryElement = document.querySelector('.description-page-category');
const descriptionPageDescriptionElement = document.querySelector('.description-page-description');
const descriptionPageImageElement = document.querySelector('.description-page-image');
const cSubmit = document.querySelector("#comment-submit");



let profile;

function onSignIn(googleUser) {
    profile = googleUser.getBasicProfile();

    console.log('User signed in!');
    console.log(profile.getName());
    console.log(profile.getImageUrl());
    console.log(profile.getEmail());


}


//called when "sign out" button clicked
function onSignOut() {
    let auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.');
    });
}


let database = firebase.database().ref()
let PATH = window.location.href;

let pathIndex = PATH.indexOf('?id=') + 4;
let ID = PATH.slice(pathIndex);


database.on('child_added', (data) => {
    if (data.key == ID) {
        console.log(data.val());

        descriptionPageTitleElement.innerHTML = data.val().requestTitle;
        descriptionPageCategoryElement.innerHTML = data.val().requestCategory;
        descriptionPageDescriptionElement.innerHTML = data.val().requestDescription;
        descriptionPageImageElement.src = data.val().requestImage;


        cSubmit.addEventListener("click", () => {
            event.preventDefault();
            displayComment(data.val())
        });


    }
});

// function addComment() {

//     database.child(ID+"/comments").push({
//        Username: profile.getName(),
//        Image: profile.getImageUrl(),
//        Email: profile.getEmail(),


//     });

// }
// }

function displayComment(row) {
    getComment();


    let username = row.comments.Username;
    let Image = row.comments.Image;
    let Email = row.comments.Email;
    let Commentts = row.comments.Comment;
    let comcontainer = document.querySelector(".comments-container");
    let comment = document.querySelector(".comments");

    console.log(username, Email);
}

function getComment(event) {
    // event.preventDefault();
    let commentInput = document.querySelector('#comment-input');
    let stuffing = commentInput.value;
    database.child(ID + "/comments").push({
        Username: profile.getName(),
        Username: profile.getName(),
        Image: profile.getImageUrl(),
        Email: profile.getEmail(),
        Comment: stuffing
    });

    console.log("Pushed Data")
    commentInput.value = "";
}


