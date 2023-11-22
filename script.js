const myLibrary = [];

function Book(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary () {

}

const dialog = document.querySelector('dialog');
const dialogBtn = document.getElementsByClassName('add-book-btn');

dialogBtn[0].addEventListener('click', () => {
    dialog.showModal();
});

const closeDialog = document.getElementsByClassName('close-dialog');

closeDialog[0].addEventListener('click', () => {
    dialog.close();
});

const submitForm = document.getElementById('submit');

submitForm.addEventListener('click', (e) => {
    e.preventDefault();
    console.log();
})