import { ProductType } from "./productType";

export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    pictureUrl: string;
    rating: number;
    productType: ProductType;
    productTypeId: number;
    author: string;
    publisher: string;

    constructor(id, 
      name, 
      description = '', 
      price = 0, 
      pictureUrl = 'https://www.bookopolis.com/img/no_book_cover.jpg',
      rating = 5,
      productType,
      publisher,
      author) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.price = price;
      this.pictureUrl = pictureUrl
      this.rating = rating;
      this.productType = productType;
      this.author = author;
      this.publisher = publisher;
    }
}
  