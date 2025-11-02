class Storage {
    static getFilmsFromStorage = function () {
        if (localStorage.getItem("films") === null) {
            return [];
        } else {
            return JSON.parse(localStorage.getItem("films"));
        }
    };

    static addFilmToStorage = function (newFilm) {
        const films = this.getFilmsFromStorage();
        films.push(newFilm);
        localStorage.setItem("films", JSON.stringify(films));
    };

    static deleteFilmFromStorage = function (filmTitle) {
        const films = this.getFilmsFromStorage();
        const updatedFilms = films.filter(function (film) {
            return film.title !== filmTitle;
        });
        localStorage.setItem("films", JSON.stringify(updatedFilms));
    };

    static clearAllFilmsFromStorage = function () {
        localStorage.removeItem("films");
    }
}
