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
    let bookName = document.getElementById('book-name');
    let bookAuthor = document.getElementById('book-author');
    let bookPages = document.getElementById('book-author');
    let bookStatus = document.getElementById('book-status');
    let newBook = new Book(bookName.value, bookAuthor.value, bookPages.value, bookStatus.value);
    myLibrary.push(newBook);
    console.log(myLibrary);
});