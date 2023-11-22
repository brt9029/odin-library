const myLibrary = [];

function Book(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

function addBookToLibrary () {
    let bookName = document.getElementById('book-name');
    let bookAuthor = document.getElementById('book-author');
    let bookPages = document.getElementById('book-pages');
    let bookStatus = document.getElementById('book-status');
    let newBook = new Book(bookName.value, bookAuthor.value, bookPages.value, bookStatus.value);
    myLibrary.push(newBook);
    displayBook(newBook);
};

const bookList = document.getElementsByClassName('book-list');

function displayBook (newBook) {
    const book = document.createElement('div');
    const bookTitle = document.createElement('span');
    const bookInfo = document.createElement('div');
    const bookAuthor = document.createElement('span');
    const bookPage = document.createElement('span');
    const bookRead = document.createElement('span');

    book.classList.add('book');
    bookInfo.classList.add('book-info');

    bookTitle.textContent = newBook.name;
    bookTitle.classList.add('book-title');

    bookAuthor.textContent = newBook.author;
    bookPage.textContent = newBook.pages;
    bookRead.textContent = newBook.read;

    book.appendChild(bookTitle);
    book.appendChild(bookInfo);

    bookInfo.appendChild(bookAuthor);
    bookInfo.appendChild(bookPage);
    bookInfo.appendChild(bookRead);

    bookList[0].appendChild(book);
};

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
    addBookToLibrary();
    dialog.close();
});
