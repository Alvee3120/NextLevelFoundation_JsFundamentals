let movies = [
  { title: "inception", year: 2010, rating: 8.8, genre: "sci-fi" },
  { title: "titanic", year: 1997, rating: 87.9, genre: "Romance" },
  { title: "the matrix", year: 1999, rating: 8.7, genre: "sci-fi" },
  { title: "avatar", year: 2009, rating: 7.8, genre: "sci-fi" },
  { title: "notebook", year: 2004, rating: 7.8, genre: "romance" },
];

let topSciFi = movies
  .filter((m) => m.genre === "sci-fi")
  .sort((a, b) => b.rating - a.rating)
  .map((m) => `${m.title}, ${m.rating}`);

console.log(topSciFi);
