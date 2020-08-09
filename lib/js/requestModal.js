//Create references to modal elements in index.html
const modal = document.querySelector('.request-modal'); //Main container for the modal (default opacity is 0, so it is invisible)
const modalButton = document.querySelector('.request-button');  //Button that is visible on index.html
const closeButton = document.querySelector('.close-modal-button'); //Button on the modal that closes the model upon click;
const mask = document.querySelector('#modal-page-mask'); //Fixed element

modalButton.addEventListener('click', () => {
    console.log("LSJDF")
    modal.style.opacity = "1"; //Makes the modal visible
    modal.style["pointer-events"] = "auto"; //Allow the user to click around in the modal
    mask.style.display = "block"; //Make the mask visible. This will darken the background because the mask's background color is black
    modalButton.style["display"] = "none"; //Remove the button to create a modal since there is already a modal created
});

//When the "X" is clicked:
closeButton.addEventListener('click', () => {
    modal.style.opacity = "0"; //Makes the modal invisible
    modal.style["pointer-events"] = "none"; //Make it so that the user cannot interact with the modal in any way when it is invisible
    mask.style.display = "none"; //Remove the mask, make background normal again
    modalButton.style["display"] = "flex"; //Reshow the create modal button.
});