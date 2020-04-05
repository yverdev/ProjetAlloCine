var resume = $('.resume');

function getMovie() {
 var id = window.location.href.split('=')[1];
 var movie = movies.find(function (film) { return film.id == id });
 console.log(movie);
 return movie;
}

var movie = getMovie();

title.text(movie.title);
resume.text(movie.resume);
