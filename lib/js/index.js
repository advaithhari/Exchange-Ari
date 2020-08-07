//for page.js
let database = firebase.database().ref()

database.on('child_added', addMessage);



let messages = document.querySelector('.allMessages');

function addMessage(data) {
    let row = data.val();
    let username = row.name;
    let message = row.msg;
    let category = row.category;

    
    // console.log(username, message);
    let blogCard = document.createElement('div');
    blogCard.classList.add('blogCard');

    let author = document.createElement('p');
    author.classList.add('author')
    author.innerHTML = username + ": ";

    let cat = document.createElement('p');
    cat.classList.add('category');
    cat.innerHTML = category; 

    let post = document.createElement('p');
    post.innerText = message;
    post.classList.add('post')

    blogCard.appendChild(author);
    blogCard.appendChild(cat);
    blogCard.appendChild(post);

    messages.appendChild(blogCard);
}