const url = "http://www.omdbapi.com/?t=Casablanca&apikey=82153485";
const p = document.querySelector(".fav-Pokemon");

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    p.innerHTML = `My favorite movie is ${data.Title}!<br> <img src="${data.Poster}" alt="${data.Title}">`
    console.log(data);
  });
