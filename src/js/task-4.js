const movie = {
  title: "The Dark Knight",
  director: "Christopher Jonathan James Nolan",
  year: "2008",
  rating: 10,

  checkRating() {
    return movie.rating > 8;
  },
};
console.log(movie.checkRating());
