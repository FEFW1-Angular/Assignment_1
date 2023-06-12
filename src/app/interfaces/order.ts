import { ICart } from "./Cart";

export interface IOrder {
    id?: number;
    name:string,
    diachi:string,
    email:string,
    sdt:number,
    ghichu?:string,
    cartbill: ICart[],
    totalPrice: number;
 }
 