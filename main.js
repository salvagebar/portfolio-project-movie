const faveUrl = "http://www.omdbapi.com/?t=Casablanca&apikey=82153485"; // url of Casablanca, the best movie
const favoriteMovie = document.querySelector(".fav-movie"); // where the Casablanca info & poster go
const searchedMovieInfo = document.getElementById("movie-info"); // where the user's movie info goes
const searchedMoviePoster = document.getElementById("movie-poster"); // where the user's movie poster goes
const movieSearch = document.getElementById("movie-input"); // the search form

fetch(faveUrl)
  .then((response) => response.json())
  .then((data) => {
    favoriteMovie.innerHTML = `<p>My favorite movie is ${data.Title}!</p> <img src="${data.Poster}" alt="${data.Title}">`;
    console.log(data);
  });
