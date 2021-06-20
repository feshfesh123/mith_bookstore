export class BasketItem {
    productName: string;
    id: number;
    quantity: number;
    pictureUrl: string;
    price: number;
    productId: number;

    constructor(id: number = 0, productId: number, name: string, pictureUrl: string, price: number, quantity: number = 1)
    {
        this.id = id;
        this.productName = name;
        this.productId = productId;
        this.pictureUrl = pictureUrl;
        this.price = price;
        this.quantity = quantity;
    }
}
  