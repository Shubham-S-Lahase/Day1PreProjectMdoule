const result = document.getElementById("result"); 
const title = document.getElementById("movietitle");
const yearofrelease = document.getElementById("yor");
const rating = document.getElementById("rating");
const cast = document.getElementById("cast");

function SearchMovie() {
  let inputvalue = document.getElementById("searchbar").value;
  fetch(`http://www.omdbapi.com/?apikey=8113e3a2&t=${inputvalue}`)
  .then((response) => response.json())
  .then((res) => {
    result.style.width = "300px";
    result.style.border = "1px solid black"
    result.style.textAlign = "center";
    const moviedata = res;
    let posterImage = `https://img.omdbapi.com/?apikey=8113e3a2&i=${moviedata.imdbID}`
    let image = `<img src="${posterImage}">`;
    document.getElementById("image").innerHTML = image;
    title.style.textAlign = "center";
    title.innerHTML = moviedata.Title;
    yearofrelease.innerHTML = `Released year: ${moviedata.Year}`;
    rating.innerHTML = `IMDB rating: ${moviedata.imdbRating}`;
    cast.innerHTML = `Cast: ${moviedata.Actors}`;
  })
}
