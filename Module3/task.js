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

let products = [
  {
    id: 1,
    title: "mouse",
    price: 500,
    category: "accessories",
    instock: true,
  },
  {
    id: 2,
    title: "keyboard",
    price: 250,
    category: "accessories",
    instock: true,
  },
  {
    id: 3,
    title: "monitor",
    price: 1500,
    category: "accessories",
    instock: false,
  },
  {
    id: 4,
    title: "laptop",
    price: 250,
    category: "accessories",
    instock: true,
  },
  {
    id: 5,
    title: "headpone",
    price: 1200,
    category: "accessories",
    instock: false,
  },
];

let instockProducts = products
  .filter((p) => p.instock == true)
  .sort((a, b) => a.price - b.price)
  .reduce((total, p) => total + p.price, 0);

console.log(instockProducts);
