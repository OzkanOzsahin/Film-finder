const movieDatabase = movies;

const list = document.getElementById("fs--main__ul");

const addMoviesToDom = function (films) {
    const filmList = document.getElementById("fs--main__ul");
    const arr = films.map(function (movie) {
        const moviePage = "https://www.imdb.com/title/" + movie.imdbID
        return "<li class='fs--main__li'><a href=" + moviePage + "  target='_blank' ><img src=" + movie.poster + "alt='" + movie.title + "'></a></li>"
    })
    arr.forEach(function (movie) {
        list.innerHTML += movie
    })
}

addMoviesToDom(movies);

function addEventListeners() {
    const radioButtons = document.querySelectorAll("input[name='fs-filter']");

    radioButtons.forEach(function (radioButton) {
        radioButton.addEventListener("change", function (e) {
            handleOnChangeEvent(e.target.value)
        });
    });
}
addEventListeners()

const handleOnChangeEvent = (movieName) => {
    switch (movieName) {
        case "latest-movies":
            filterLatestMovies();
            break;
        case "avenger":
            filterMovies("Avenger");
            break;
        case "x-men":
            filterMovies("X-Men");
            break;
        case "princess":
            filterMovies("Princess");
            break;
        case "batman":
            filterMovies("Batman");
            break;
        default:
            console.log("Geen resultaat");
            break;
    }
}

const filterMovies = (movieItem) => {
    const result = movieDatabase.filter(function (movie) {
        return movie.title.includes(movieItem)
    })
    removeLi();
    addMoviesToDom(result)
}

const filterLatestMovies = () => {
    const resultFilteredMovies = movieDatabase.filter(function (movie) {
        return parseInt(movie.year) >= 2014
    })
    removeLi();
    addMoviesToDom(resultFilteredMovies)
}
const removeLi = () => {
    const liItems = document.querySelectorAll(".fs--main__li")
    liItems.forEach(item => item.remove())
}





