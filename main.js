const url = "http://www.omdbapi.com/?t=Casablanca&apikey=82153485";
const favoriteMovie = document.querySelector(".fav-movie");

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    favoriteMovie.innerHTML = `<p>My favorite movie is ${data.Title}!</p> <img src="${data.Poster}" alt="${data.Title}">`;
    console.log(data);
  });
