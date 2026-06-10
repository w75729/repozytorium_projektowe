// Numer indeksu: 75729 | Furkan Akgun

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase, ref, onValue, push } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyAPTHZ4fE4H88Pjt7ZiAv_IVk0WeHhc4gs",
    authDomain: "antykwariat-akgun.firebaseapp.com",
    databaseURL: "https://antykwariat-akgun-default-rtdb.firebaseio.com",
    projectId: "antykwariat-akgun",
    storageBucket: "antykwariat-akgun.firebasestorage.app",
    messagingSenderId: "117410764064",
    appId: "1:117410764064:web:d0ca9599bcb011750b7345"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const connectedRef = ref(database, ".info/connected");
const booksRef = ref(database, "books");

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

onValue(connectedRef, function (snapshot) {
    if (snapshot.val() === true) {
        console.log("Polaczono z Firebase Realtime Database.");
    } else {
        console.log("Brak polaczenia z Firebase Realtime Database.");
    }
});

bookForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const title = titleInput.value.trim();
    const author = authorInput.value.trim();
    const year = yearInput.value.trim();
    const genre = genreInput.value.trim();
    const description = descriptionInput.value.trim();

    if (title === "" || author === "") {
        formMessage.textContent = "Uzupelnij tytul i autora ksiazki.";
        return;
    }

    const book = {
        title: title,
        author: author,
        year: year,
        genre: genre,
        description: description
    };

    try {
        await push(booksRef, book);
        formMessage.textContent = "Ksiazka zostala zapisana w Firebase.";
        bookForm.reset();
    } catch (error) {
        formMessage.textContent = "Nie udalo sie zapisac ksiazki.";
        console.error(error);
    }
});

searchInput.addEventListener("input", function () {
    bookList.innerHTML = "<p>Wyszukiwanie zostanie dodane w kolejnym etapie.</p>";
});
