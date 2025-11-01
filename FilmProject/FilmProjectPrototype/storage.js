function Storage() { }
Storage.prototype.getFilmsFromStorage = function () {
    if (localStorage.getItem("films") === null) {
        return [];
    } else {
        return JSON.parse(localStorage.getItem("films"));
    }
};

Storage.prototype.addFilmToStorage = function (newFilm) {
    const films = this.getFilmsFromStorage();
    films.push(newFilm);
    localStorage.setItem("films", JSON.stringify(films));
};

Storage.prototype.deleteFilmFromStorage = function (filmTitle) {
    const films = this.getFilmsFromStorage();
    const updatedFilms = films.filter(function (film) {
        return film.title !== filmTitle;
    });
    localStorage.setItem("films", JSON.stringify(updatedFilms));
};

Storage.prototype.clearAllFilmsFromStorage = function () {
    localStorage.removeItem("films");
}

