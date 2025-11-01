const cardBody = document.querySelectorAll(".card-body")[1]
const form = document.getElementById("film-form");
const titleElement = document.getElementById("title");
const directorElement = document.getElementById("director");
const urlElement = document.getElementById("url");
const clear = document.getElementById("clear-films");

const ui = new UI();
const storage = new Storage();


eventListeners();
function eventListeners() {
    cardBody.addEventListener("click", deleteFilm);
    form.addEventListener("submit", addFilm);
    document.addEventListener("DOMContentLoaded", loadAllFilms);
    clear.addEventListener("click", clearAllFilms);
}

function clearAllFilms() {
    ui.clearAllFilmsFromUI();
    ui.displayMessages("All movies deleted!", "warning");
}

function deleteFilm(e) {
    if (e.target.id === "delete-film") {
        const filmTitle = e.target.parentElement.previousElementSibling.previousElementSibling.textContent;
        ui.deleteFilmFromUI(e.target);
        storage.deleteFilmFromStorage(filmTitle);
        ui.displayMessages("Movie deleted successfully!", "info")
    }
}

function addFilm(e) {
    e.preventDefault();
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if (title === "" || director === "" || url === "") {
        ui.displayMessages("Fill all the gaps!", "danger");
    } else {
        const newFilm = new Film(title, director, url);

        ui.addFilmToUI(newFilm);
        storage.addFilmToStorage(newFilm);
        ui.clearInputs(titleElement, directorElement, urlElement);
        ui.displayMessages("Movies added successfully...", "success");
    }

}

function loadAllFilms() {
    const films = storage.getFilmsFromStorage();
    ui.loadAllFilms(films);
}   