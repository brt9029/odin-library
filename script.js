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

    if (bookName.value == '' || bookAuthor.value == '' || bookPages.value == '') {
        alert('Please fill out all fields');
    } else {
        let newBook = new Book(bookName.value, bookAuthor.value, bookPages.value, bookStatus.checked);
        myLibrary.push(newBook);
        displayBook(newBook);
    }
};

const bookList = document.getElementsByClassName('book-list');

function displayBook (newBook) {
    const removeBook = document.createElement('button');
    const book = document.createElement('div');
    const bookTitle = document.createElement('span');
    const bookImage = document.createElement('img');
    const bookInfo = document.createElement('div');
    const bookAuthor = document.createElement('span');
    const bookPage = document.createElement('span');
    const bookRead = document.createElement('span');
    const bookToggle = document.createElement('input');

    removeBook.classList.add('remove-book');
    removeBook.textContent = "⛌";

    book.classList.add('book');
    bookInfo.classList.add('book-info');

    bookTitle.textContent = newBook.name;
    bookTitle.classList.add('book-title');

    bookImage.classList.add('book-image');
    bookImage.src = "./assets/book.png";

    bookAuthor.textContent = "By: " + newBook.author;
    bookPage.textContent = "Pages: " + newBook.pages;
    bookRead.textContent = "Read status"

    bookToggle.classList.add('read-status');
    bookToggle.type = "checkbox";

    bookToggle.addEventListener('change', () => {
        if (bookToggle.checked) {
            book.style.backgroundColor = "#01796F";
        } else {
            book.style.backgroundColor = "#4161cc66";
        }
    });

    if (newBook.read) {
        bookToggle.checked = true;
        book.style.backgroundColor = "#01796F";
    } else {
        bookToggle.checked = false;
        book.style.backgroundColor = "#4161cc66";
    }

    book.appendChild(removeBook);
    book.appendChild(bookTitle);
    book.appendChild(bookImage);
    book.appendChild(bookInfo);

    bookInfo.appendChild(bookAuthor);
    bookInfo.appendChild(bookPage);
    bookInfo.appendChild(bookRead);
    bookInfo.appendChild(bookToggle);

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

function updateStatus(bookStatus) {
    if (bookStatus) {

    }
}