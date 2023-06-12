import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IOrder } from '../interfaces/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  getOrders(): Observable<IOrder[]> {
    return this.http.get<IOrder[]>(`http://localhost:3000/order`);
  }
  deleteOrder(id: any): Observable<IOrder> {
    return this.http.delete<IOrder>(`http://localhost:3000/order/${id}`);
  }
  getOrderById(id: number): Observable<IOrder> {
    return this.http.get<IOrder>(`http://localhost:3000/order/${id}`);
  }
  addOrder(data: IOrder): Observable<IOrder> {
    return this.http.post<IOrder>(`http://localhost:3000/order`, data);
  }
  updateOrder(data: IOrder): Observable<IOrder> {
    return this.http.patch<IOrder>(`http://localhost:3000/order/${data.id}`, data);
  }
}
