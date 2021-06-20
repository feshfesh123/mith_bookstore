import { OrderItem } from "./orderItem";

export class Order{
    public id: number;
    public buyerEmail: string;
    public shipToAddress: string;
    public subTotal: number;
    public total: number;
    public status: string;
    public orderDate: Date;
    public orderItems: OrderItem[];
}