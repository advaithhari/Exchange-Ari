const homeBtn = document.querySelector("#home");
homeBtn.addEventListener('click', () => location.href = "");
 
const descriptionPageTitleElement = document.querySelector('.description-page-title');
const descriptionPageCategoryElement = document.querySelector('.description-page-category');
const descriptionPageDescriptionElement = document.querySelector('.description-page-description');
const descriptionPageImageElement = document.querySelector('.description-page-image');
const cSubmit = document.querySelector("#comment-submit");
 


$('.popover-dismiss').popover({
    trigger: 'focus'
  })


 
let profile;
 
function onSignIn(googleUser) {
    profile = googleUser.getBasicProfile();
 
    console.log('User signed in!');
    profile.getName();
    profile.getImageUrl();
    profile.getEmail();
 
 
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
let dataval;
 
// database.on('child_added',(data)=> {
 
//    dataval = data.val();
// });
 
 
cSubmit.addEventListener("click", () => {
  
    event.preventDefault();
   
    getComment();
});
 
 
database.on('child_added', (data) => {
 
    if (data.key == ID) {
 
        descriptionPageTitleElement.innerHTML = data.val().requestTitle;
        descriptionPageCategoryElement.innerHTML = data.val().requestCategory;
        descriptionPageDescriptionElement.innerHTML = data.val().requestDescription;
        descriptionPageImageElement.src = data.val().requestImage;
        displayComment(data.val());
        
    }
 
});


database.on('child_changed', data => {
    if (data.key == ID) {
        displayComment(data.val());
    }
}) 

function displayComment(row) {      

 
    let allComments = document.querySelector(".all-comments");
    allComments.innerHTML = "";
    
    Object.keys(row.comments).forEach(key => {
        console.log(row.comments[key]);
        let commentContent = row.comments[key].Comment;
        let commentUser = row.comments[key].Username;
        let commentImage = row.comments[key].Image;
        let comment = document.createElement("li");
        let profileImg = document.createElement("img");
        profileImg.classList.add('profile-img');
        profileImg.src = commentImage;
        comment.classList.add("comment");
        
        comment.appendChild(profileImg);      

        let emailA = document.createElement('a');
        emailA.classList.add("email-link");
        emailA.href = `mailto:${row.comments[key].Email}`
        emailA.innerHTML = "Contact";
        
        let commentRight = document.createElement('div');
        commentRight.classList.add('comment-right');

        let commentHead = document.createElement('div');
        commentHead.classList.add('comment-head');
        commentHead.innerHTML += "<b>" + commentUser + "</b>" + ":";
        commentHead.appendChild(emailA);
        commentRight.appendChild(commentHead);

        

        let content = document.createElement('div');
        content.classList.add('comment-content');
        content.innerHTML = commentContent;
        commentRight.appendChild(content);

        

        comment.appendChild(commentRight)
        // comment.appendChild(emailA);
        allComments.appendChild(comment);
       
    })
}
 
function getComment() {
 
    
    // console.log("getComment is Running");
    let commentInput = document.querySelector('#comment-input');
    let stuffing = commentInput.value;
    // console.log(stuffing);
    if (profile) {
        database.child(ID+ "/comments").push({
            Username: profile.getName(),
            Image: profile.getImageUrl(),
            Email: profile.getEmail(),
            Comment: stuffing
        });
    } else {
        alert("Please Log In")
    }
    
 
    console.log("Pushed Data")
    console.log(stuffing)
    commentInput.value = "";
}
