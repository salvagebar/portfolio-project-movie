const faveUrl = "http://www.omdbapi.com/?t=Casablanca&apikey=82153485"; // url of Casablanca, the best movie
const favoriteMovie = document.querySelector(".fav-movie"); // where the Casablanca info & poster go
const searchedMovieInfo = document.getElementById("movie-info"); // where the user's movie info goes
const searchedMoviePoster = document.getElementById("movie-poster"); // where the user's movie poster goes
const movieSearch = document.getElementById("movie-input"); // the search form
const warningLine = document.getElementById("warning"); // the warning line

let warned = false;

fetch(faveUrl)
  .then((response) => response.json())
  .then((data) => {
    favoriteMovie.innerHTML = `<p>My favorite movie is ${data.Title}!</p> <img src="${data.Poster}" title="${data.Title}" alt="${data.Title}">`;
  });

movieSearch.addEventListener("submit", (event) => {
  // submitting the weather search form
  event.preventDefault(); // preventing the form from reloading the page
  if (warned) {
    warningLine.innerText = "";
    warned = false;
  }

  let searchText = document.getElementById("movie").value; // what the user inputs
  document.getElementById("movie").value = ""; // clearing the search box
  if (searchText) {
    let baseURL = `http://www.omdbapi.com/?t=` + searchText + `&apikey=82153485`; // forming a proper URL

    fetch(baseURL)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log(json);
      });
  } else {
    // if there's no search text submitted, add a warning line
    warningLine.innerText = "Enter some text. This field cannot be left blank.";
    warned = true;
  }
});
