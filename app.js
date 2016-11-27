
var movie = require("./movie.js");
var threeFavouriteMovies = ['paul', 'Dawn of the Dead', 'Terminator'];
threeFavouriteMovies.forEach(function(film){
  console.log(movie);
  movie.get(film);
});
