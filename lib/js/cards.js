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
}