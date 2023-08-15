const Product = require("./Product");

module.exports = class Book extends Product {
  constructor(
    title,
    synopsis,
    genre,
    pages,
    author,
    description,
    price,
    instock
  ) {
    super(`Livro: ${title}`, description, price, instock);
    this.title = title;
    this.synopsis = synopsis;
    this.genre = genre;
    this.pages = pages;
    this.author = author;
  }
};
