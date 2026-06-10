// Numer indeksu: 75729 | Furkan Akgun

const bookForm = document.getElementById("book-form");
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const yearInput = document.getElementById("year");
const genreInput = document.getElementById("genre");
const descriptionInput = document.getElementById("description");
const searchInput = document.getElementById("search");
const bookList = document.getElementById("book-list");
const bookDetails = document.getElementById("book-details");
const formMessage = document.getElementById("form-message");

const books = [];

bookForm.addEventListener("submit", function (event) {
    event.preventDefault();

    formMessage.textContent = "Dodawanie ksiazek zostanie uruchomione w kolejnym etapie.";
});

searchInput.addEventListener("input", function () {
    bookList.innerHTML = "<p>Wyszukiwanie zostanie dodane w kolejnym etapie.</p>";
});
