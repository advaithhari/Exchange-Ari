//Database reference
let database= firebase.database().ref()
database.on('child_added', addCard);


let cardcontainer = document.querySelector('.card-container');

function addCard(data) {
    let row = data.val();
    let username = row.name;
    let message = row.msg;
    let category = row.category;

    
    // console.log(username, message);
    let card = document.createElement('div');
    card.classList.add('.card-test');
    card.style.width = "20%";
    card.style.height = "66%";
    card.style.background = "linear-gradient(209.22deg, #C568FF -1.93%, #927D55 101.64%)";
    card.style["box-shadow"] = "10px 10px 4px 3px rgba(196, 123, 208, 0.25)";
    card.style["border-radius"] = "10px";

    let author = document.createElement('p');
    author.classList.add('author')
    author.innerHTML = username + ": ";

    let cat = document.createElement('p');
    cat.classList.add('.card-text');
    cat.innerHTML = category; 

    let post = document.createElement('p');
    post.innerText = message;
    post.classList.add('.card-text')

    card.appendChild(author);
    card.appendChild(cat);
    card.appendChild(post);

    cardcontainer.appendChild(card);
}
let searchbutton = document.querySelector(".searchbutton");
let databases= firebase.database().ref()


searchbutton.addEventListener("click", search)
let cards = document.querySelector(".card-container");

let card = document.querySelectorAll(".card");
for (let i = 0; i < card.length; i++) {
    card[i].style.display = "none";

}

function search(event) {
    event.preventDefault();
    let searchbar = document.querySelector("#searchbar");
    let cardtext = document.querySelectorAll(".cardtext");

    for (let i = 0; i < card.length; i++) {
        console.log(searchbar.value, cardtext[i].innerHTML);
        if (searchbar.value == cardtext[i].innerHTML) {
            card[i].style.display = "block";
            console.log("bruhhssssh");
        } else {
            card[i].style.display = "none";
        }
    }
