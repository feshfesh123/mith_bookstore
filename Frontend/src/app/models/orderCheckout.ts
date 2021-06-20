export class OrderCheckout{
    public basketId : string;
    public shipToAddress : string;

    constructor(basketId: string, shipToAddress: string){
        this.basketId = basketId;
        this.shipToAddress = shipToAddress;
    }
}